<#
.SYNOPSIS
  Clone/update AeroFlow Platform and add its DSH plugin to the desktop profile.
.DESCRIPTION
  The DSH Plugins page still needs to select/enable the bundle if the profile
  does not auto-select it. This script does not edit profile configuration by
  hand.
#>
param(
  [string]$InstallDir = (Join-Path $HOME 'AeroFlow\aeroflow-platform'),
  [string]$Profile = 'desktop',
  [switch]$SkipPull
)

$ErrorActionPreference = 'Stop'
$repo = 'https://github.com/YChoux-Pan/aeroflow-platform.git'

if (-not (Test-Path -LiteralPath (Join-Path $InstallDir '.git'))) {
  $parent = Split-Path -Parent $InstallDir
  if ($parent) { New-Item -ItemType Directory -Force -Path $parent | Out-Null }
  git clone $repo $InstallDir
} elseif (-not $SkipPull) {
  git -C $InstallDir pull --ff-only
}

$plugin = Join-Path $InstallDir 'plugin'
if (-not (Test-Path -LiteralPath (Join-Path $plugin 'client.js'))) {
  throw "Plugin runtime not found: $plugin/client.js"
}

$dshCommand = Get-Command dsh -ErrorAction SilentlyContinue
$dshPath = if ($dshCommand) { $dshCommand.Source } else { $null }
if (-not $dshPath) {
  $candidates = @(
    (Join-Path $env:LOCALAPPDATA 'Programs\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd'),
    (Join-Path $env:ProgramFiles 'DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd'),
    (Join-Path ${env:ProgramFiles(x86)} 'DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd')
  )
  foreach ($candidate in $candidates) {
    if ($candidate -and (Test-Path -LiteralPath $candidate)) { $dshPath = $candidate; break }
  }
}
if (-not $dshPath) {
  throw "The 'dsh' CLI was not found. Open DSH -> Plugins and add the local bundle at: $plugin"
}

& $dshPath plugin --profile $Profile add $plugin
if ($LASTEXITCODE -ne 0) { throw "DSH plugin install failed with exit code $LASTEXITCODE" }

Write-Host ''
Write-Host 'AeroFlow plugin package added.' -ForegroundColor Cyan
Write-Host "If it is not selected yet, open DSH -> Plugins and enable 'AeroFlow Lab' (aeroflow-dsh-plugin), then refresh or restart DSH." -ForegroundColor Yellow
Write-Host "Plugin path: $plugin"

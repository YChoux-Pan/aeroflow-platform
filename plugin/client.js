(()=>{var pu={meta:{title:"AeroFlow Lab",description:"Interactive 3D wind-tunnel lab: choose or import any vehicle, steer the wind, and watch live streamlines, drag and telemetry. Imports OBJ, GLB and GLTF."},"launcher.kicker":"AERODYNAMICS LAB","launcher.title":"AeroFlow wind tunnel","launcher.desc":"Any vehicle \xB7 live streamlines \xB7 drag telemetry","launcher.open":"Enter the tunnel","launcher.live":"READY","launcher.wind":"WIND","launcher.article":"ARTICLE","lab.title":"AEROFLOW LAB","lab.subtitle":"DIGITAL WIND TUNNEL","lab.badge":"MODULE 07 / FLOW FIELD","lab.online":"SIMULATION ONLINE","lab.paused":"SIMULATION PAUSED","lab.close":"Close wind tunnel","lab.esc":"ESC","lab.note":"Parametric aerodynamic proxy \xB7 not a CFD solver","lab.reset":"Reset","lab.booting":"CALIBRATING FLOW FIELD","lab.bootHint":"Loading the test section and particle solver\u2026","lab.webglError":"WebGL could not start in this window. The wind tunnel needs hardware graphics.","lab.tryAgain":"Try again","lab.noWebgl":"No WebGL","section.object":"SPECIMEN","section.objectCn":"\u6D4B\u8BD5\u5BF9\u8C61","section.presets":"PRESET LIBRARY","section.import":"CUSTOM MESH","section.geometry":"GEOMETRY","section.geometryCn":"\u51E0\u4F55\u53C2\u6570","section.wind":"WIND CONTROL","section.windCn":"\u98CE\u573A\u63A7\u5236","section.telemetry":"LIVE TELEMETRY","section.telemetryCn":"\u5B9E\u65F6\u9065\u6D4B","section.flow":"FLOW COLOUR","section.flowCn":"\u7A7A\u6C14\u914D\u8272","preset.coupe":"GT Coupe","preset.coupe.kind":"ROAD / LOW DRAG","preset.truck":"Cargo Rig","preset.truck.kind":"HAUL / HIGH DRAG","preset.drone":"Quadrotor","preset.drone.kind":"ROTOR / BLUFF","preset.aircraft":"Wing Pod","preset.aircraft.kind":"AERO / LIFTING","preset.custom":"Bluff Pod","preset.custom.kind":"GENERIC / TEST","preset.imported":"Imported mesh","panel.import":"Import vehicle mesh","panel.importHint":"OBJ, GLB, or self-contained glTF with embedded resources. Drag-and-drop works.","panel.importBusy":"PARSING MESH\u2026","panel.imported":"IMPORTED","panel.importError":"Could not read that model. Choose a valid OBJ/GLB, or a self-contained glTF, under 16 MB.","panel.importInvalid":"That file is not a valid 3D model.","panel.importExternal":"This glTF points to external .bin or texture files. Use a GLB or a glTF with embedded resources.","panel.importCompressed":"This model needs Draco, Meshopt, or KTX2 decoding, which is not bundled. Export an uncompressed GLB.","panel.importNoMeshes":"The file contains no renderable triangle meshes.","panel.importedNote":"Visual mesh \xB7 aerodynamic values remain editable","panel.clearImport":"Remove imported mesh","panel.area":"Frontal area A","panel.areaHint":"Estimated from W \xD7 H","panel.paramsHint":"Dimensions feed the aerodynamic model and flow deflection.","panel.mass":"Mass","dim.length":"Length","dim.width":"Width","dim.height":"Height","dim.cd":"Drag coefficient","dim.meters":"m","wind.speed":"Wind speed","wind.unit":"m/s","wind.speedHint":"Uniform flow \xB7 sea-level air","wind.direction":"Wind direction","wind.directionHint":"0\xB0 flows left \u2192 right. Changes the vector, not the camera.","wind.headwind":"HEADWIND","wind.tailwind":"TAILWIND","wind.cross":"CROSSWIND","wind.preset0":"L \u2192 R","wind.preset90":"CROSS A","wind.preset180":"R \u2192 L","wind.preset270":"CROSS B","wind.air":"AIR 1.225 kg/m\xB3","telemetry.drag":"Drag force","telemetry.q":"Dynamic pressure","telemetry.power":"Drag power","telemetry.re":"Reynolds","telemetry.cda":"CdA","telemetry.speed":"FLOW SPEED","telemetry.trend":"DRAG LOAD / LAST 8 S","telemetry.drift":"Balance drift","telemetry.fps":"RENDER","telemetry.particles":"STREAKS","flow.auto":"AUTO PALETTE","flow.autoHint":"Tuned from specimen and load","flow.manual":"MANUAL","flow.velocity":"FLOW VELOCITY","flow.low":"SLOW","flow.high":"FAST","flow.resolved":"AUTO","palette.ion":"Ion","palette.aurora":"Aurora","palette.plasma":"Plasma","palette.ghost":"Ghost","hud.windVector":"WIND VECTOR","hud.force":"DRAG VECTOR","hud.forceBalance":"FORCE BALANCE","hud.testSection":"TEST SECTION 01","hud.article":"ARTICLE","hud.flowField":"FLOW FIELD","hud.live":"LIVE","hud.hold":"HOLD","hud.view":"VIEW","hud.iso":"ISO","hud.side":"SIDE","hud.top":"TOP","hud.autoOrbit":"Orbit","hud.streams":"Streams","hud.forceArrow":"Force","hud.play":"Run flow","hud.pause":"Pause flow","hud.reset":"Reset simulation","hud.elapsed":"RUN TIME","hud.drag":"DRAG","hud.drift":"DRIFT","hud.specimen":"SPECIMEN","hud.cameraHint":"Drag to orbit \xB7 scroll to zoom","hud.palette":"PALETTE","hud.auto":"AUTO","hud.ready":"READY","hud.running":"RUNNING","hud.stopped":"STOPPED","hud.restart":"Restart",unknown:"\u2014"};var mu={meta:{title:"AeroFlow \u7A7A\u6C14\u52A8\u529B\u5B9E\u9A8C\u5BA4",description:"\u4EA4\u4E92\u5F0F 3D \u98CE\u6D1E\uFF1A\u9009\u62E9\u6216\u5BFC\u5165\u4EFB\u610F\u8F7D\u5177\uFF0C\u8C03\u8282\u98CE\u5411\u4E0E\u98CE\u901F\uFF0C\u5B9E\u65F6\u67E5\u770B\u6D41\u7EBF\u3001\u963B\u529B\u4E0E\u9065\u6D4B\u6570\u636E\u3002\u652F\u6301 OBJ\u3001GLB\u3001GLTF\u3002"},"launcher.kicker":"\u7A7A\u6C14\u52A8\u529B\u5B9E\u9A8C\u5BA4","launcher.title":"AeroFlow \u98CE\u6D1E","launcher.desc":"\u4EFB\u610F\u8F7D\u5177 \xB7 \u5B9E\u65F6\u6D41\u7EBF \xB7 \u963B\u529B\u9065\u6D4B","launcher.open":"\u8FDB\u5165\u98CE\u6D1E","launcher.live":"\u5C31\u7EEA","launcher.wind":"\u98CE\u901F","launcher.article":"\u6D4B\u8BD5\u4EF6","lab.title":"AEROFLOW LAB","lab.subtitle":"\u6570\u5B57\u98CE\u6D1E\u5B9E\u9A8C\u5E73\u53F0","lab.badge":"\u6A21\u5757 07 / \u6D41\u573A","lab.online":"\u6A21\u62DF\u5728\u7EBF","lab.paused":"\u6A21\u62DF\u6682\u505C","lab.close":"\u5173\u95ED\u98CE\u6D1E","lab.esc":"ESC","lab.note":"\u53C2\u6570\u5316\u6C14\u52A8\u4EE3\u7406\u6A21\u578B \xB7 \u975E CFD \u6C42\u89E3","lab.reset":"\u91CD\u7F6E","lab.booting":"\u6B63\u5728\u6821\u51C6\u6D41\u573A","lab.bootHint":"\u8F7D\u5165\u8BD5\u9A8C\u6BB5\u4E0E\u7C92\u5B50\u6C42\u89E3\u5668\u2026","lab.webglError":"\u6B64\u7A97\u53E3\u65E0\u6CD5\u542F\u52A8 WebGL\uFF0C\u98CE\u6D1E\u9700\u8981\u786C\u4EF6\u56FE\u5F62\u652F\u6301\u3002","lab.tryAgain":"\u91CD\u8BD5","lab.noWebgl":"WebGL \u4E0D\u53EF\u7528","section.object":"SPECIMEN","section.objectCn":"\u6D4B\u8BD5\u5BF9\u8C61","section.presets":"\u8F7D\u5177\u9884\u8BBE","section.import":"\u81EA\u5B9A\u4E49\u6A21\u578B","section.geometry":"GEOMETRY","section.geometryCn":"\u51E0\u4F55\u53C2\u6570","section.wind":"WIND CONTROL","section.windCn":"\u98CE\u573A\u63A7\u5236","section.telemetry":"LIVE TELEMETRY","section.telemetryCn":"\u5B9E\u65F6\u9065\u6D4B","section.flow":"FLOW COLOUR","section.flowCn":"\u7A7A\u6C14\u914D\u8272","preset.coupe":"GT \u8DD1\u8F66","preset.coupe.kind":"\u516C\u8DEF / \u4F4E\u963B","preset.truck":"\u53A2\u5F0F\u8D27\u8F66","preset.truck.kind":"\u8D27\u8FD0 / \u9AD8\u963B","preset.drone":"\u56DB\u65CB\u7FFC","preset.drone.kind":"\u65CB\u7FFC / \u949D\u4F53","preset.aircraft":"\u7FFC\u8EAB\u8231","preset.aircraft.kind":"\u6C14\u52A8 / \u5347\u529B\u4F53","preset.custom":"\u949D\u4F53\u8231","preset.custom.kind":"\u901A\u7528 / \u8BD5\u9A8C","preset.imported":"\u5BFC\u5165\u7F51\u683C","panel.import":"\u5BFC\u5165\u8F7D\u5177\u7F51\u683C","panel.importHint":"\u652F\u6301 OBJ\u3001GLB\uFF0C\u6216\u8D44\u6E90\u5185\u5D4C\u7684 glTF\uFF0C\u53EF\u76F4\u63A5\u62D6\u653E\u3002","panel.importBusy":"\u6B63\u5728\u89E3\u6790\u7F51\u683C\u2026","panel.imported":"\u5DF2\u5BFC\u5165","panel.importError":"\u65E0\u6CD5\u8BFB\u53D6\u8BE5\u6A21\u578B\uFF0C\u8BF7\u9009\u62E9 16 MB \u4EE5\u5185\u7684 OBJ/GLB\uFF0C\u6216\u8D44\u6E90\u5185\u5D4C\u7684 glTF\u3002","panel.importInvalid":"\u8BE5\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 3D \u6A21\u578B\u3002","panel.importExternal":"\u8BE5 glTF \u5F15\u7528\u4E86\u5916\u90E8 .bin \u6216\u8D34\u56FE\u6587\u4EF6\uFF1B\u8BF7\u4F7F\u7528 GLB \u6216\u8D44\u6E90\u5185\u5D4C\u7684 glTF\u3002","panel.importCompressed":"\u8BE5\u6A21\u578B\u9700\u8981 Draco\u3001Meshopt \u6216 KTX2 \u89E3\u7801\u5668\uFF08\u5F53\u524D\u672A\u5185\u7F6E\uFF09\uFF1B\u8BF7\u5BFC\u51FA\u672A\u538B\u7F29\u7684 GLB\u3002","panel.importNoMeshes":"\u6587\u4EF6\u4E2D\u6CA1\u6709\u53EF\u6E32\u67D3\u7684\u4E09\u89D2\u7F51\u683C\u3002","panel.importedNote":"\u89C6\u89C9\u7F51\u683C \xB7 \u6C14\u52A8\u53C2\u6570\u4ECD\u53EF\u7F16\u8F91","panel.clearImport":"\u79FB\u9664\u5BFC\u5165\u7F51\u683C","panel.area":"\u8FCE\u98CE\u9762\u79EF A","panel.areaHint":"\u7531\u5BBD \xD7 \u9AD8\u4F30\u7B97","panel.paramsHint":"\u5C3A\u5BF8\u4F1A\u5F71\u54CD\u6C14\u52A8\u8BA1\u7B97\u4E0E\u6D41\u573A\u7ED5\u6D41\u5F62\u6001\u3002","panel.mass":"\u8D28\u91CF","dim.length":"\u8F66\u957F","dim.width":"\u8F66\u5BBD","dim.height":"\u8F66\u9AD8","dim.cd":"\u98CE\u963B\u7CFB\u6570","dim.meters":"m","wind.speed":"\u98CE\u901F","wind.unit":"m/s","wind.speedHint":"\u5747\u5300\u6765\u6D41 \xB7 \u6D77\u5E73\u9762\u7A7A\u6C14","wind.direction":"\u98CE\u5411","wind.directionHint":"0\xB0 \u8868\u793A\u4ECE\u5DE6\u5230\u53F3\uFF0C\u4EC5\u6539\u53D8\u6765\u6D41\u77E2\u91CF\uFF0C\u4E0D\u79FB\u52A8\u955C\u5934\u3002","wind.headwind":"\u9006\u98CE","wind.tailwind":"\u987A\u98CE","wind.cross":"\u4FA7\u98CE","wind.preset0":"\u5DE6 \u2192 \u53F3","wind.preset90":"\u4FA7\u98CE A","wind.preset180":"\u53F3 \u2192 \u5DE6","wind.preset270":"\u4FA7\u98CE B","wind.air":"\u7A7A\u6C14 1.225 kg/m\xB3","telemetry.drag":"\u963B\u529B","telemetry.q":"\u52A8\u538B","telemetry.power":"\u963B\u529B\u529F\u7387","telemetry.re":"\u96F7\u8BFA\u6570","telemetry.cda":"CdA","telemetry.speed":"\u6765\u6D41\u901F\u5EA6","telemetry.trend":"\u963B\u529B\u8F7D\u8377 / \u6700\u8FD1 8 \u79D2","telemetry.drift":"\u5E73\u8861\u6F02\u79FB","telemetry.fps":"\u6E32\u67D3","telemetry.particles":"\u6D41\u7EBF","flow.auto":"\u81EA\u52A8\u914D\u8272","flow.autoHint":"\u6839\u636E\u8F7D\u5177\u4E0E\u8F7D\u8377\u81EA\u52A8\u5339\u914D","flow.manual":"\u624B\u52A8","flow.velocity":"\u6D41\u901F\u573A","flow.low":"\u6162","flow.high":"\u5FEB","flow.resolved":"\u81EA\u52A8","palette.ion":"\u79BB\u5B50\u9752","palette.aurora":"\u6781\u5149","palette.plasma":"\u7B49\u79BB\u5B50","palette.ghost":"\u5E7D\u7075\u767D","hud.windVector":"\u98CE\u5411\u77E2\u91CF","hud.force":"\u963B\u529B\u77E2\u91CF","hud.forceBalance":"\u529B\u5E73\u8861","hud.testSection":"\u8BD5\u9A8C\u6BB5 01","hud.article":"\u6D4B\u8BD5\u4EF6","hud.flowField":"\u6D41\u573A","hud.live":"\u5B9E\u65F6","hud.hold":"\u6682\u505C","hud.view":"\u89C6\u89D2","hud.iso":"\u7B49\u8F74","hud.side":"\u4FA7\u89C6","hud.top":"\u4FEF\u89C6","hud.autoOrbit":"\u73AF\u7ED5","hud.streams":"\u6D41\u7EBF","hud.forceArrow":"\u963B\u529B","hud.play":"\u542F\u52A8\u6D41\u573A","hud.pause":"\u6682\u505C\u6D41\u573A","hud.reset":"\u91CD\u7F6E\u6A21\u62DF","hud.elapsed":"\u8FD0\u884C\u65F6\u95F4","hud.drag":"\u963B\u529B","hud.drift":"\u6F02\u79FB","hud.specimen":"\u6D4B\u8BD5\u4EF6","hud.cameraHint":"\u62D6\u52A8\u73AF\u7ED5 \xB7 \u6EDA\u8F6E\u7F29\u653E","hud.palette":"\u914D\u8272","hud.auto":"\u81EA\u52A8","hud.ready":"\u5C31\u7EEA","hud.running":"\u8FD0\u884C\u4E2D","hud.stopped":"\u5DF2\u505C\u6B62","hud.restart":"\u91CD\u542F",unknown:"\u2014"};var Fo="180",Bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rd=0,Bc=1,ad=2;var kc=1,od=2,$n=3,On=0,en=1,zt=2,pi=0,Ji=1,mn=2,zc=3,Hc=4,ld=5,Ti=100,cd=101,hd=102,ud=103,dd=104,fd=200,pd=201,md=202,gd=203,ho=204,uo=205,xd=206,_d=207,yd=208,vd=209,bd=210,Md=211,Sd=212,Ed=213,wd=214,Oo=0,Bo=1,ko=2,Qi=3,zo=4,Ho=5,Vo=6,Go=7,Wo=0,Td=1,Ad=2,mi=0,Rd=1,Cd=2,Id=3,Xo=4,Pd=5,Ld=6,Dd=7,Sc="attached",Nd="detached",Vc=300,os=301,ls=302,tr=303,qo=304,ga=306,Ai=1e3,Hn=1001,zs=1002,Ht=1003,Yo=1004;var cs=1005;var Jt=1006,nr=1007;var Bn=1008;var kn=1009,Gc=1010,Wc=1011,ir=1012,Ko=1013,zi=1014,Tn=1015,sr=1016,Zo=1017,$o=1018,rr=1020,Xc=35902,qc=35899,Yc=1021,Kc=1022,gn=1023,Hs=1026,ar=1027,jo=1028,Jo=1029,Zc=1030,Qo=1031;var el=1033,xa=33776,_a=33777,ya=33778,va=33779,tl=35840,nl=35841,il=35842,sl=35843,rl=36196,al=37492,ol=37496,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,xl=37817,_l=37818,yl=37819,vl=37820,bl=37821,Ml=36492,Sl=36494,El=36495,wl=36283,Tl=36284,Al=36285,Rl=36286;var es=2300,ts=2301,co=2302,Ec=2400,wc=2401,Tc=2402,Ud=2500;var $c=0,ba=1,or=2,Fd=3200,Od=3201;var Cl=0,Bd=1,gi="",xt="srgb",Vt="srgb-linear",Ur="linear",dt="srgb";var $i=7680;var Ac=519,kd=512,zd=513,Hd=514,jc=515,Vd=516,Gd=517,Wd=518,Xd=519,fo=35044,lr=35048;var Jc="300 es",Fn=2e3,Fr=2001;var Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=1234567,Bs=Math.PI/180,ns=180/Math.PI;function Mn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Je(s,e,t){return Math.max(e,Math.min(t,s))}function Qc(s,e){return(s%e+e)%e}function pp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mp(s,e,t){return s!==e?(t-s)/(e-s):0}function Lr(s,e,t){return(1-t)*s+t*e}function gp(s,e,t,n){return Lr(s,e,1-Math.exp(-t*n))}function xp(s,e=1){return e-Math.abs(Qc(s,e*2)-e)}function _p(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function yp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function vp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function bp(s,e){return s+Math.random()*(e-s)}function Mp(s){return s*(.5-Math.random())}function Sp(s){s!==void 0&&(gu=s);let e=gu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ep(s){return s*Bs}function wp(s){return s*ns}function Tp(s){return(s&s-1)===0&&s!==0}function Ap(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cp(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ma={DEG2RAD:Bs,RAD2DEG:ns,generateUUID:Mn,clamp:Je,euclideanModulo:Qc,mapLinear:pp,inverseLerp:mp,lerp:Lr,damp:gp,pingpong:xp,smoothstep:_p,smootherstep:yp,randInt:vp,randFloat:bp,randFloatSpread:Mp,seededRandom:Sp,degToRad:Ep,radToDeg:wp,isPowerOfTwo:Tp,ceilPowerOfTwo:Ap,floorPowerOfTwo:Rp,setQuaternionFromProperEuler:Cp,normalize:ut,denormalize:Un},ae=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=1-o,p=c*d+l*f+u*g+h*x,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let R=Math.sqrt(b),A=Math.atan2(R,p*E);m=Math.sin(m*A)/R,o=Math.sin(o*A)/R}let y=o*E;if(c=c*m+d*y,l=l*m+f*y,u=u*m+g*y,h=h*m+x*y,m===1-o){let R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new C,xu=new Qt,$e=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],E=i[1],b=i[4],y=i[7],R=i[2],A=i[5],I=i[8];return r[0]=a*x+o*E+c*R,r[3]=a*m+o*b+c*A,r[6]=a*p+o*y+c*I,r[1]=l*x+u*E+h*R,r[4]=l*m+u*b+h*A,r[7]=l*p+u*y+h*I,r[2]=d*x+f*E+g*R,r[5]=d*m+f*b+g*A,r[8]=d*p+f*y+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Xl=new $e;function eh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qd(){let s=Vs("canvas");return s.style.display="block",s}var _u={};function Gs(s){s in _u||(_u[s]=!0,console.warn(s))}function Yd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var yu=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ip(){let s={enabled:!0,workingColorSpace:Vt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Ur:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Vt]:{primaries:e,whitePoint:n,transfer:Ur,toXYZ:yu,fromXYZ:vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:yu,fromXYZ:vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),s}var it=Ip();function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var vs,po=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Vs("canvas")),vs.width=e.width,vs.height=e.height;let i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pp=0,Ws=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ql(i[a].image)):r.push(ql(i[a]))}else r=ql(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ql(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?po.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lp=0,Yl=new C,It=class s extends Gn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Hn,i=Hn,r=Jt,a=Bn,o=gn,c=kn,l=s.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=Mn(),this.name="",this.source=new Ws(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case zs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case zs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Vc;It.DEFAULT_ANISOTROPY=1;var lt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,y=(f+1)/2,R=(p+1)/2,A=(u+d)/4,I=(h+x)/4,D=(g+m)/4;return b>y&&b>R?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=I/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=D/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=I/r,i=D/r),this.set(n,i,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-x)/E,this.z=(d-u)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mo=class extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new It(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ws(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends mo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Or=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var go=class extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),Ia.subVectors(this.max,vr),bs.subVectors(e.a,vr),Ms.subVectors(e.b,vr),Ss.subVectors(e.c,vr),vi.subVectors(Ms,bs),bi.subVectors(Ss,Ms),qi.subVectors(bs,Ss);let t=[0,-vi.z,vi.y,0,-bi.z,bi.y,0,-qi.z,qi.y,vi.z,0,-vi.x,bi.z,0,-bi.x,qi.z,0,-qi.x,-vi.y,vi.x,0,-bi.y,bi.x,0,-qi.y,qi.x,0];return!Kl(t,bs,Ms,Ss,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,bs,Ms,Ss,Ia))?!1:(Pa.crossVectors(vi,bi),t=[Pa.x,Pa.y,Pa.z],Kl(t,bs,Ms,Ss,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ei=[new C,new C,new C,new C,new C,new C,new C,new C],Ln=new C,Ca=new Pt,bs=new C,Ms=new C,Ss=new C,vi=new C,bi=new C,qi=new C,vr=new C,Ia=new C,Pa=new C,Yi=new C;function Kl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Yi.fromArray(s,r);let o=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),c=e.dot(Yi),l=t.dot(Yi),u=n.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Dp=new Pt,br=new C,Zl=new C,sn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(br,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Zl)),this.expandByPoint(br.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ti=new C,$l=new C,La=new C,Mi=new C,jl=new C,Da=new C,Jl=new C,oi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$l.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub($l);let r=e.distanceTo(t)*.5,a=-this.direction.dot(La),o=Mi.dot(this.direction),c=-Mi.dot(La),l=Mi.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy($l).addScaledVector(La,d),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),i=ti.dot(ti)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,r){jl.subVectors(t,e),Da.subVectors(n,e),Jl.crossVectors(jl,Da);let a=this.direction.dot(Jl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);let c=o*this.direction.dot(Da.crossVectors(Mi,Da));if(c<0)return null;let l=o*this.direction.dot(jl.cross(Mi));if(l<0||c+l>a)return null;let u=-o*Mi.dot(Jl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class s{constructor(e,t,n,i,r,a,o,c,l,u,h,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,d,f,g,x,m)}set(e,t,n,i,r,a,o,c,l,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Np,e,Up)}lookAt(e,t,n){let i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),Si.crossVectors(n,un),Si.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Si.crossVectors(n,un)),Si.normalize(),Na.crossVectors(un,Si),i[0]=Si.x,i[4]=Na.x,i[8]=un.x,i[1]=Si.y,i[5]=Na.y,i[9]=un.y,i[2]=Si.z,i[6]=Na.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],E=n[3],b=n[7],y=n[11],R=n[15],A=i[0],I=i[4],D=i[8],M=i[12],S=i[1],L=i[5],B=i[9],k=i[13],X=i[2],q=i[6],Y=i[10],te=i[14],V=i[3],le=i[7],me=i[11],he=i[15];return r[0]=a*A+o*S+c*X+l*V,r[4]=a*I+o*L+c*q+l*le,r[8]=a*D+o*B+c*Y+l*me,r[12]=a*M+o*k+c*te+l*he,r[1]=u*A+h*S+d*X+f*V,r[5]=u*I+h*L+d*q+f*le,r[9]=u*D+h*B+d*Y+f*me,r[13]=u*M+h*k+d*te+f*he,r[2]=g*A+x*S+m*X+p*V,r[6]=g*I+x*L+m*q+p*le,r[10]=g*D+x*B+m*Y+p*me,r[14]=g*M+x*k+m*te+p*he,r[3]=E*A+b*S+y*X+R*V,r[7]=E*I+b*L+y*q+R*le,r[11]=E*D+b*B+y*Y+R*me,r[15]=E*M+b*k+y*te+R*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*f-n*c*f)+x*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*u-r*c*u)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],E=h*m*l-x*d*l+x*c*f-o*m*f-h*c*p+o*d*p,b=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,y=u*x*l-g*h*l+g*o*f-a*x*f-u*o*p+a*h*p,R=g*h*c-u*x*c-g*o*d+a*x*d+u*o*m-a*h*m,A=t*E+n*b+i*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/A;return e[0]=E*I,e[1]=(x*d*r-h*m*r-x*i*f+n*m*f+h*i*p-n*d*p)*I,e[2]=(o*m*r-x*c*r+x*i*l-n*m*l-o*i*p+n*c*p)*I,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*f-n*c*f)*I,e[4]=b*I,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*I,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*I,e[7]=(a*d*r-u*c*r+u*i*l-t*d*l-a*i*f+t*c*f)*I,e[8]=y*I,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*I,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*I,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*I,e[12]=R*I,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*m+t*h*m)*I,e[14]=(g*o*i-a*x*i-g*n*c+t*x*c+a*n*m-t*o*m)*I,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*I,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,x=a*u,m=a*h,p=o*h,E=c*l,b=c*u,y=c*h,R=n.x,A=n.y,I=n.z;return i[0]=(1-(x+p))*R,i[1]=(f+y)*R,i[2]=(g-b)*R,i[3]=0,i[4]=(f-y)*A,i[5]=(1-(d+p))*A,i[6]=(m+E)*A,i[7]=0,i[8]=(g+b)*I,i[9]=(m-E)*I,i[10]=(1-(d+x))*I,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Es.set(i[0],i[1],i[2]).length(),a=Es.set(i[4],i[5],i[6]).length(),o=Es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Dn.copy(this);let l=1/r,u=1/a,h=1/o;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Fn,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Fr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Fn,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Fn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Fr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Es=new C,Dn=new Ke,Np=new C(0,0,0),Up=new C(1,1,1),Si=new C,Na=new C,un=new C,bu=new Ke,Mu=new Qt,Sn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mu.setFromEuler(this),this.setFromQuaternion(Mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fp=0,Su=new C,ws=new Qt,ni=new Ke,Ua=new C,Mr=new C,Op=new C,Bp=new Qt,Eu=new C(1,0,0),wu=new C(0,1,0),Tu=new C(0,0,1),Au={type:"added"},kp={type:"removed"},Ts={type:"childadded",child:null},Ql={type:"childremoved",child:null},vt=class s extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fp++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new C,t=new Sn,n=new Qt,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new $e}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Eu,e)}rotateY(e){return this.rotateOnAxis(wu,e)}rotateZ(e){return this.rotateOnAxis(Tu,e)}translateOnAxis(e,t){return Su.copy(e).applyQuaternion(this.quaternion),this.position.add(Su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eu,e)}translateY(e){return this.translateOnAxis(wu,e)}translateZ(e){return this.translateOnAxis(Tu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Mr,Ua,this.up):ni.lookAt(Ua,Mr,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(ni),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,e,Op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,Bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};vt.DEFAULT_UP=new C(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new C,ii=new C,ec=new C,si=new C,As=new C,Rs=new C,Ru=new C,tc=new C,nc=new C,ic=new C,sc=new lt,rc=new lt,ac=new lt,zn=class s{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),ii.subVectors(n,t),ec.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(ii),c=Nn.dot(ec),l=ii.dot(ii),u=ii.dot(ec),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return sc.setScalar(0),rc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(e,t),rc.fromBufferAttribute(e,n),ac.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(sc,r.x),a.addScaledVector(rc,r.y),a.addScaledVector(ac,r.z),a}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),ii.subVectors(e,t),Nn.cross(ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Nn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;As.subVectors(i,n),Rs.subVectors(r,n),tc.subVectors(e,n);let c=As.dot(tc),l=Rs.dot(tc);if(c<=0&&l<=0)return t.copy(n);nc.subVectors(e,i);let u=As.dot(nc),h=Rs.dot(nc);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(As,a);ic.subVectors(e,r);let f=As.dot(ic),g=Rs.dot(ic);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Rs,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Ru.subVectors(r,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Ru,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(As,a).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function oc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Qc(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oc(a,r,e+1/3),this.g=oc(a,r,e),this.b=oc(a,r,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=Kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return it.workingToColorSpace(Kt.copy(this),e),Math.round(Je(Kt.r*255,0,255))*65536+Math.round(Je(Kt.g*255,0,255))*256+Math.round(Je(Kt.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Kt.copy(this),t);let n=Kt.r,i=Kt.g,r=Kt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=xt){it.workingToColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,i=Kt.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Fa);let n=Lr(Ei.h,Fa.h,t),i=Lr(Ei.s,Fa.s,t),r=Lr(Ei.l,Fa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Ce;Ce.NAMES=Kd;var zp=0,Lt=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Ji,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gt=class extends Lt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Rt=new C,Oa=new ae,Hp=0,_t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fo,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fo&&(e.usage=this.usage),e}};var kr=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zr=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ye=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vp=0,vn=new Ke,lc=new vt,Cs=new C,dn=new Pt,Sr=new Pt,Ot=new C,rt=class s extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eh(e)?zr:kr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Sr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(dn.min,Sr.min),dn.expandByPoint(Ot),Ot.addVectors(dn.max,Sr.max),dn.expandByPoint(Ot)):(dn.expandByPoint(Sr.min),dn.expandByPoint(Sr.max))}dn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ot.fromBufferAttribute(o,l),c&&(Cs.fromBufferAttribute(e,l),Ot.add(Cs)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new C,c[D]=new C;let l=new C,u=new C,h=new C,d=new ae,f=new ae,g=new ae,x=new C,m=new C;function p(D,M,S){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,S),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[D].add(x),o[M].add(x),o[S].add(x),c[D].add(m),c[M].add(m),c[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,M=E.length;D<M;++D){let S=E[D],L=S.start,B=S.count;for(let k=L,X=L+B;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let b=new C,y=new C,R=new C,A=new C;function I(D){R.fromBufferAttribute(i,D),A.copy(R);let M=o[D];b.copy(M),b.sub(R.multiplyScalar(R.dot(M))).normalize(),y.crossVectors(A,M);let L=y.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,L)}for(let D=0,M=E.length;D<M;++D){let S=E[D],L=S.start,B=S.count;for(let k=L,X=L+B;k<X;k+=3)I(e.getX(k+0)),I(e.getX(k+1)),I(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new C,r=new C,a=new C,o=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new _t(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=new Ke,Ki=new oi,Ba=new sn,Iu=new C,ka=new C,za=new C,Ha=new C,cc=new C,Va=new C,Pu=new C,Ga=new C,Se=class extends vt{constructor(e=new rt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Va.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(cc.fromBufferAttribute(h,e),a?Va.addScaledVector(cc,u):Va.addScaledVector(cc.sub(t),u))}t.add(Va)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(Ba.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Ba,Iu)===null||Ki.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(Cu.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ki)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,R=b;y<R;y+=3){let A=o.getX(y),I=o.getX(y+1),D=o.getX(y+2);i=Wa(this,p,e,n,l,u,h,A,I,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);i=Wa(this,a,e,n,l,u,h,E,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,R=b;y<R;y+=3){let A=y,I=y+1,D=y+2;i=Wa(this,p,e,n,l,u,h,A,I,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=m,b=m+1,y=m+2;i=Wa(this,a,e,n,l,u,h,E,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Gp(s,e,t,n,i,r,a,o){let c;if(e.side===en?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===On,o),c===null)return null;Ga.copy(o),Ga.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ga);return l<t.near||l>t.far?null:{distance:l,point:Ga.clone(),object:s}}function Wa(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ka),s.getVertexPosition(c,za),s.getVertexPosition(l,Ha);let u=Gp(s,e,t,n,ka,za,Ha,Pu);if(u){let h=new C;zn.getBarycoord(Pu,ka,za,Ha,h),i&&(u.uv=zn.getInterpolatedAttribute(i,o,c,l,h,new ae)),r&&(u.uv1=zn.getInterpolatedAttribute(r,o,c,l,h,new ae)),a&&(u.normal=zn.getInterpolatedAttribute(a,o,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new C,materialIndex:0};zn.getNormal(ka,za,Ha,d.normal),u.face=d,u.barycoord=h}return u}var et=class s extends rt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(h,2));function g(x,m,p,E,b,y,R,A,I,D,M){let S=y/I,L=R/D,B=y/2,k=R/2,X=A/2,q=I+1,Y=D+1,te=0,V=0,le=new C;for(let me=0;me<Y;me++){let he=me*L-k;for(let ye=0;ye<q;ye++){let Oe=ye*S-B;le[x]=Oe*E,le[m]=he*b,le[p]=X,l.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[p]=A>0?1:-1,u.push(le.x,le.y,le.z),h.push(ye/I),h.push(1-me/D),te+=1}}for(let me=0;me<D;me++)for(let he=0;he<I;he++){let ye=d+he+q*me,Oe=d+he+q*(me+1),je=d+(he+1)+q*(me+1),Ge=d+(he+1)+q*me;c.push(ye,Oe,Ge),c.push(Oe,je,Ge),V+=6}o.addGroup(f,V,M),f+=V,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(s){let e={};for(let t=0;t<s.length;t++){let n=hs(s[t]);for(let i in n)e[i]=n[i]}return e}function Wp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function th(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}var Zd={clone:hs,merge:Zt},Xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Lt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xp,this.fragmentShader=qp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Hr=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new C,Lu=new ae,Du=new ae,Ct=class extends Hr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Lu,Du),t.subVectors(Du,Lu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ps=1,xo=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ct(Is,Ps,e,t);i.layers=this.layers,this.add(i);let r=new Ct(Is,Ps,e,t);r.layers=this.layers,this.add(r);let a=new Ct(Is,Ps,e,t);a.layers=this.layers,this.add(a);let o=new Ct(Is,Ps,e,t);o.layers=this.layers,this.add(o);let c=new Ct(Is,Ps,e,t);c.layers=this.layers,this.add(c);let l=new Ct(Is,Ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Vr=class extends It{constructor(e=[],t=os,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_o=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new et(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:pi});r.uniforms.tEquirect.value=t;let a=new Se(i,r),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=Jt),new xo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},yt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yp={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Gr=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Wr=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},is=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fo,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new C,Ri=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qs=class extends Lt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ls,Er=new C,Ds=new C,Ns=new C,Us=new ae,wr=new ae,$d=new Ke,Xa=new C,Tr=new C,qa=new C,Nu=new ae,hc=new ae,Uu=new ae,Xr=class extends vt{constructor(e=new qs){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new is(t,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new Ri(n,3,0,!1)),Ls.setAttribute("uv",new Ri(n,2,3,!1))}this.geometry=Ls,this.material=e,this.center=new ae(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),$d.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Ns.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ya(Xa.set(-.5,-.5,0),Ns,a,Ds,i,r),Ya(Tr.set(.5,-.5,0),Ns,a,Ds,i,r),Ya(qa.set(.5,.5,0),Ns,a,Ds,i,r),Nu.set(0,0),hc.set(1,0),Uu.set(1,1);let o=e.ray.intersectTriangle(Xa,Tr,qa,!1,Er);if(o===null&&(Ya(Tr.set(-.5,.5,0),Ns,a,Ds,i,r),hc.set(0,1),o=e.ray.intersectTriangle(Xa,qa,Tr,!1,Er),o===null))return;let c=e.ray.origin.distanceTo(Er);c<e.near||c>e.far||t.push({distance:c,point:Er.clone(),uv:zn.getInterpolation(Er,Xa,Tr,qa,Nu,hc,Uu,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ya(s,e,t,n,i,r){Us.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(wr.x=r*Us.x-i*Us.y,wr.y=i*Us.x+r*Us.y):wr.copy(Us),s.copy(e),s.x+=wr.x,s.y+=wr.y,s.applyMatrix4($d)}var Fu=new C,Ou=new lt,Bu=new lt,Kp=new C,ku=new Ke,Ka=new C,uc=new sn,zu=new Ke,dc=new oi,qr=class extends Se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sc,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingBox.expandByPoint(Ka)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ka),this.boundingSphere.expandByPoint(Ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uc.copy(this.boundingSphere),uc.applyMatrix4(i),e.ray.intersectsSphere(uc)!==!1&&(zu.copy(i).invert(),dc.copy(e.ray).applyMatrix4(zu),!(this.boundingBox!==null&&dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ou.fromBufferAttribute(i.attributes.skinIndex,e),Bu.fromBufferAttribute(i.attributes.skinWeight,e),Fu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Bu.getComponent(r);if(a!==0){let o=Ou.getComponent(r);ku.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Kp.copy(Fu).applyMatrix4(ku),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ys=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Yr=class extends It{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Ht,u=Ht,h,d){super(null,a,o,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hu=new Ke,Zp=new Ke,Kr=class s{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Zp;Hu.multiplyMatrices(o,t[r]),Hu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Yr(t,e,e,gn,Tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Ys),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ci=class extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fs=new Ke,Vu=new Ke,Za=[],Gu=new Pt,$p=new Ke,Ar=new Se,Rr=new sn,Zr=class extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$p)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Gu.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Gu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Rr.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),e.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fs),Vu.multiplyMatrices(n,Fs),Ar.matrixWorld=Vu,Ar.raycast(e,Za);for(let a=0,o=Za.length;a<o;a++){let c=Za[a];c.instanceId=r,c.object=this,t.push(c)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yr(new Float32Array(i*this.count),i,this.count,jo,Tn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fc=new C,jp=new C,Jp=new $e,bn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=fc.subVectors(n,t).cross(jp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Jp.getNormalMatrix(e),i=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new sn,Qp=new ae(.5,.5),$a=new C,Ks=class{constructor(e=new bn,t=new bn,n=new bn,i=new bn,r=new bn,a=new bn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],E=r[12],b=r[13],y=r[14],R=r[15];if(i[0].setComponents(l-a,f-u,p-g,R-E).normalize(),i[1].setComponents(l+a,f+u,p+g,R+E).normalize(),i[2].setComponents(l+o,f+h,p+x,R+b).normalize(),i[3].setComponents(l-o,f-h,p-x,R-b).normalize(),n)i[4].setComponents(c,d,m,y).normalize(),i[5].setComponents(l-c,f-d,p-m,R-y).normalize();else if(i[4].setComponents(l-c,f-d,p-m,R-y).normalize(),t===Fn)i[5].setComponents(l+c,f+d,p+m,R+y).normalize();else if(t===Fr)i[5].setComponents(c,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);let t=Qp.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if($a.x=i.normal.x>0?e.max.x:e.min.x,$a.y=i.normal.y>0?e.max.y:e.min.y,$a.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bt=class extends Lt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yo=new C,vo=new C,Wu=new Ke,Cr=new oi,ja=new sn,pc=new C,Xu=new C,Ii=class extends vt{constructor(e=new rt,t=new Bt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)yo.fromBufferAttribute(t,i-1),vo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yo.distanceTo(vo);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;Wu.copy(i).invert(),Cr.copy(e.ray).applyMatrix4(Wu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=u.getX(x),E=u.getX(x+1),b=Ja(this,e,Cr,c,p,E,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Ja(this,e,Cr,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Ja(this,e,Cr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Ja(this,e,Cr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ja(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(yo.fromBufferAttribute(o,i),vo.fromBufferAttribute(o,r),t.distanceSqToSegment(yo,vo,pc,Xu)>n)return;pc.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(pc);if(!(l<e.near||l>e.far))return{distance:l,point:Xu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var qu=new C,Yu=new C,Wt=class extends Ii{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)qu.fromBufferAttribute(t,i),Yu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qu.distanceTo(Yu);e.setAttribute("lineDistance",new Ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$r=class extends Ii{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},rn=class extends Lt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ku=new Ke,Rc=new oi,Qa=new sn,eo=new C,En=class extends vt{constructor(e=new rt,t=new rn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(i),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;Ku.copy(i).invert(),Rc.copy(e.ray).applyMatrix4(Ku);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);eo.fromBufferAttribute(h,m),Zu(eo,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,x=f;g<x;g++)eo.fromBufferAttribute(h,g),Zu(eo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zu(s,e,t,n,i,r,a){let o=Rc.distanceSqToPoint(s);if(o<t){let c=new C;Rc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pi=class extends It{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},jr=class extends It{constructor(e,t,n=zi,i,r,a,o=Ht,c=Ht,l,u=Hs,h=1){if(u!==Hs&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ws(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jr=class extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Li=class s extends rt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,x=i+1,m=new C,p=new C;for(let E=0;E<=g;E++){let b=0,y=0,R=0,A=0;if(E<=n){let M=E/n,S=M*Math.PI/2;y=-u-e*Math.cos(S),R=e*Math.sin(S),A=-e*Math.cos(S),b=M*h}else if(E<=n+r){let M=(E-n)/r;y=-u+M*t,R=e,A=0,b=h+M*d}else{let M=(E-n-r)/n,S=M*Math.PI/2;y=u+e*Math.sin(S),R=e*Math.cos(S),A=e*Math.sin(S),b=h+d+M*h}let I=Math.max(0,Math.min(1,b/f)),D=0;E===0?D=.5/i:E===g&&(D=-.5/i);for(let M=0;M<=i;M++){let S=M/i,L=S*Math.PI*2,B=Math.sin(L),k=Math.cos(L);p.x=-R*k,p.y=y,p.z=R*B,o.push(p.x,p.y,p.z),m.set(-R*k,A,R*B),m.normalize(),c.push(m.x,m.y,m.z),l.push(S+D,I)}if(E>0){let M=(E-1)*x;for(let S=0;S<i;S++){let L=M+S,B=M+S+1,k=E*x+S,X=E*x+S+1;a.push(L,B,k),a.push(B,X,k)}}}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Xt=class s extends rt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;E(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ye(h,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(f,2));function E(){let y=new C,R=new C,A=0,I=(t-e)/n;for(let D=0;D<=r;D++){let M=[],S=D/r,L=S*(t-e)+e;for(let B=0;B<=i;B++){let k=B/i,X=k*c+o,q=Math.sin(X),Y=Math.cos(X);R.x=L*q,R.y=-S*n+m,R.z=L*Y,h.push(R.x,R.y,R.z),y.set(q,I,Y).normalize(),d.push(y.x,y.y,y.z),f.push(k,1-S),M.push(g++)}x.push(M)}for(let D=0;D<i;D++)for(let M=0;M<r;M++){let S=x[M][D],L=x[M+1][D],B=x[M+1][D+1],k=x[M][D+1];(e>0||M!==0)&&(u.push(S,L,k),A+=3),(t>0||M!==r-1)&&(u.push(L,B,k),A+=3)}l.addGroup(p,A,0),p+=A}function b(y){let R=g,A=new ae,I=new C,D=0,M=y===!0?e:t,S=y===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let L=g;for(let B=0;B<=i;B++){let X=B/i*c+o,q=Math.cos(X),Y=Math.sin(X);I.x=M*Y,I.y=m*S,I.z=M*q,h.push(I.x,I.y,I.z),d.push(0,S,0),A.x=q*.5+.5,A.y=Y*.5*S+.5,f.push(A.x,A.y),g++}for(let B=0;B<i;B++){let k=R+B,X=L+B;y===!0?u.push(X,X+1,k):u.push(X+1,X,k),D+=3}l.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Di=class s extends Xt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var to=new C,no=new C,mc=new C,io=new zn,Zs=class extends rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Bs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:p}=io;if(x.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),io.getNormal(mc),h[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let E=0;E<3;E++){let b=(E+1)%3,y=h[E],R=h[b],A=io[u[E]],I=io[u[b]],D=`${y}_${R}`,M=`${R}_${y}`;M in d&&d[M]?(mc.dot(d[M].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(I.x,I.y,I.z)),d[M]=null):D in d||(d[D]={index0:l[E],index1:l[b],normal:mc.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];to.fromBufferAttribute(o,x),no.fromBufferAttribute(o,m),f.push(to.x,to.y,to.z),f.push(no.x,no.y,no.z)}this.setAttribute("position",new Ye(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ae:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,i=[],r=[],a=[],o=new C,c=new Ke;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Je(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Je(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$s=class extends pn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ae){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bo=class extends $s{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var so=new C,gc=new nh,xc=new nh,_c=new nh,Mo=class extends pn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(so.subVectors(i[0],i[1]).add(i[0]),l=so);let h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(so.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=so),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),gc.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),xc.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),_c.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),xc.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),_c.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(gc.calc(c),xc.calc(c),_c.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function $u(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function em(s,e){let t=1-s;return t*t*e}function tm(s,e){return 2*(1-s)*s*e}function nm(s,e){return s*s*e}function Dr(s,e,t,n){return em(s,e)+tm(s,t)+nm(s,n)}function im(s,e){let t=1-s;return t*t*t*e}function sm(s,e){let t=1-s;return 3*t*t*s*e}function rm(s,e){return 3*(1-s)*s*s*e}function am(s,e){return s*s*s*e}function Nr(s,e,t,n,i){return im(s,e)+sm(s,t)+rm(s,n)+am(s,i)}var Qr=class extends pn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(e,i.x,r.x,a.x,o.x),Nr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},So=class extends pn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Nr(e,i.x,r.x,a.x,o.x),Nr(e,i.y,r.y,a.y,o.y),Nr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ea=class extends pn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends pn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends pn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Dr(e,i.x,r.x,a.x),Dr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends pn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Dr(e,i.x,r.x,a.x),Dr(e,i.y,r.y,a.y),Dr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set($u(o,c.x,l.x,u.x,h.x),$u(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ae().fromArray(i))}return this}},Cc=Object.freeze({__proto__:null,ArcCurve:bo,CatmullRomCurve3:Mo,CubicBezierCurve:Qr,CubicBezierCurve3:So,EllipseCurve:$s,LineCurve:ea,LineCurve3:Eo,QuadraticBezierCurve:ta,QuadraticBezierCurve3:wo,SplineCurve:na}),To=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Cc[i.type]().fromJSON(i))}return this}},ia=class extends To{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ea(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ta(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Qr(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new na(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new $s(e,t,n,i,r,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xn=class extends ia{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ia().fromJSON(i))}return this}};function om(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=jd(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=dm(s,e,r,t)),s.length>80*t){o=1/0,c=1/0;let u=-1/0,h=-1/0;for(let d=t;d<i;d+=t){let f=s[d],g=s[d+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return sa(r,a,t,o,c,l,0),a}function jd(s,e,t,n,i){let r;if(i===Sm(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=ju(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ju(a/n|0,s[a],s[a+1],r);return r&&js(r,r.next)&&(aa(r),r=r.next),r}function ss(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(js(t,t.next)||Et(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sa(s,e,t,n,i,r,a){if(!s)return;!a&&r&&xm(s,n,i,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?cm(s,n,i,r):lm(s)){e.push(c.i,s.i,l.i),aa(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=hm(ss(s),e),sa(s,e,t,n,i,r,2)):a===2&&um(s,e,t,n,i,r):sa(ss(s),e,t,n,i,r,1);break}}}function lm(s){let e=s.prev,t=s,n=s.next;if(Et(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(i,r,a),h=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Pr(i,o,r,c,a,l,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cm(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Et(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,u=i.y,h=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(u,h,d),x=Math.max(o,c,l),m=Math.max(u,h,d),p=Ic(f,g,e,t,n),E=Ic(x,m,e,t,n),b=s.prevZ,y=s.nextZ;for(;b&&b.z>=p&&y&&y.z<=E;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&Pr(o,u,c,h,l,d,b.x,b.y)&&Et(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Pr(o,u,c,h,l,d,y.x,y.y)&&Et(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&Pr(o,u,c,h,l,d,b.x,b.y)&&Et(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=E;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&Pr(o,u,c,h,l,d,y.x,y.y)&&Et(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function hm(s,e){let t=s;do{let n=t.prev,i=t.next.next;!js(n,i)&&Qd(n,t,t.next,i)&&ra(n,i)&&ra(i,n)&&(e.push(n.i,t.i,i.i),aa(t),aa(t.next),t=s=i),t=t.next}while(t!==s);return ss(t)}function um(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vm(a,o)){let c=ef(a,o);a=ss(a,a.next),c=ss(c,c.next),sa(a,e,t,n,i,r,0),sa(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function dm(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=jd(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(ym(l))}i.sort(fm);for(let r=0;r<i.length;r++)t=pm(i[r],t);return t}function fm(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function pm(s,e){let t=mm(s,e);if(!t)return e;let n=ef(t,s);return ss(n,n.next),ss(t,t.next)}function mm(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(js(s,t))return t;do{if(js(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Jd(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);ra(t,s)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&gm(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function gm(s,e){return Et(s.prev,s,e.prev)<0&&Et(e.next,s,s.next)<0}function xm(s,e,t,n){let i=s;do i.z===0&&(i.z=Ic(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,_m(i)}function _m(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Ic(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ym(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Jd(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Pr(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Jd(s,e,t,n,i,r,a,o)}function vm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!bm(s,e)&&(ra(s,e)&&ra(e,s)&&Mm(s,e)&&(Et(s.prev,s,e.prev)||Et(s,e.prev,e))||js(s,e)&&Et(s.prev,s,s.next)>0&&Et(e.prev,e,e.next)>0)}function Et(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function js(s,e){return s.x===e.x&&s.y===e.y}function Qd(s,e,t,n){let i=ao(Et(s,e,t)),r=ao(Et(s,e,n)),a=ao(Et(t,n,s)),o=ao(Et(t,n,e));return!!(i!==r&&a!==o||i===0&&ro(s,t,e)||r===0&&ro(s,n,e)||a===0&&ro(t,s,n)||o===0&&ro(t,e,n))}function ro(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ao(s){return s>0?1:s<0?-1:0}function bm(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Qd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ra(s,e){return Et(s.prev,s,s.next)<0?Et(s,e,s.next)>=0&&Et(s,s.prev,e)>=0:Et(s,e,s.prev)<0||Et(s,s.next,e)<0}function Mm(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ef(s,e){let t=Pc(s.i,s.x,s.y),n=Pc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ju(s,e,t,n){let i=Pc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function aa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Pc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sm(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Lc=class{static triangulate(e,t,n=2){return om(e,t,n)}},ji=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Ju(e),Qu(n,e);let a=e.length;t.forEach(Ju);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,Qu(n,t[c]);let o=Lc.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Ju(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Qu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var li=class s extends rt{constructor(e=new Xn([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Ye(i,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:Em,b,y=!1,R,A,I,D;p&&(b=p.getSpacedPoints(u),y=!0,d=!1,R=p.computeFrenetFrames(u,!1),A=new C,I=new C,D=new C),d||(m=0,f=0,g=0,x=0);let M=o.extractPoints(l),S=M.shape,L=M.holes;if(!ji.isClockWise(S)){S=S.reverse();for(let ee=0,K=L.length;ee<K;ee++){let J=L[ee];ji.isClockWise(J)&&(L[ee]=J.reverse())}}function k(ee){let J=10000000000000001e-36,$=ee[0];for(let ge=1;ge<=ee.length;ge++){let se=ge%ee.length,xe=ee[se],He=xe.x-$.x,Z=xe.y-$.y,w=He*He+Z*Z,_=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs($.x),Math.abs($.y)),U=J*_*_;if(w<=U){ee.splice(se,1),ge--;continue}$=xe}}k(S),L.forEach(k);let X=L.length,q=S;for(let ee=0;ee<X;ee++){let K=L[ee];S=S.concat(K)}function Y(ee,K,J){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(K,J)}let te=S.length;function V(ee,K,J){let $,ge,se,xe=ee.x-K.x,He=ee.y-K.y,Z=J.x-ee.x,w=J.y-ee.y,_=xe*xe+He*He,U=xe*w-He*Z;if(Math.abs(U)>Number.EPSILON){let z=Math.sqrt(_),Q=Math.sqrt(Z*Z+w*w),H=K.x-He/z,Me=K.y+xe/z,ue=J.x-w/Q,Re=J.y+Z/Q,De=((ue-H)*w-(Re-Me)*Z)/(xe*w-He*Z);$=H+xe*De-ee.x,ge=Me+He*De-ee.y;let oe=$*$+ge*ge;if(oe<=2)return new ae($,ge);se=Math.sqrt(oe/2)}else{let z=!1;xe>Number.EPSILON?Z>Number.EPSILON&&(z=!0):xe<-Number.EPSILON?Z<-Number.EPSILON&&(z=!0):Math.sign(He)===Math.sign(w)&&(z=!0),z?($=-He,ge=xe,se=Math.sqrt(_)):($=xe,ge=He,se=Math.sqrt(_/2))}return new ae($/se,ge/se)}let le=[];for(let ee=0,K=q.length,J=K-1,$=ee+1;ee<K;ee++,J++,$++)J===K&&(J=0),$===K&&($=0),le[ee]=V(q[ee],q[J],q[$]);let me=[],he,ye=le.concat();for(let ee=0,K=X;ee<K;ee++){let J=L[ee];he=[];for(let $=0,ge=J.length,se=ge-1,xe=$+1;$<ge;$++,se++,xe++)se===ge&&(se=0),xe===ge&&(xe=0),he[$]=V(J[$],J[se],J[xe]);me.push(he),ye=ye.concat(he)}let Oe;if(m===0)Oe=ji.triangulateShape(q,L);else{let ee=[],K=[];for(let J=0;J<m;J++){let $=J/m,ge=f*Math.cos($*Math.PI/2),se=g*Math.sin($*Math.PI/2)+x;for(let xe=0,He=q.length;xe<He;xe++){let Z=Y(q[xe],le[xe],se);Le(Z.x,Z.y,-ge),$===0&&ee.push(Z)}for(let xe=0,He=X;xe<He;xe++){let Z=L[xe];he=me[xe];let w=[];for(let _=0,U=Z.length;_<U;_++){let z=Y(Z[_],he[_],se);Le(z.x,z.y,-ge),$===0&&w.push(z)}$===0&&K.push(w)}}Oe=ji.triangulateShape(ee,K)}let je=Oe.length,Ge=g+x;for(let ee=0;ee<te;ee++){let K=d?Y(S[ee],ye[ee],Ge):S[ee];y?(I.copy(R.normals[0]).multiplyScalar(K.x),A.copy(R.binormals[0]).multiplyScalar(K.y),D.copy(b[0]).add(I).add(A),Le(D.x,D.y,D.z)):Le(K.x,K.y,0)}for(let ee=1;ee<=u;ee++)for(let K=0;K<te;K++){let J=d?Y(S[K],ye[K],Ge):S[K];y?(I.copy(R.normals[ee]).multiplyScalar(J.x),A.copy(R.binormals[ee]).multiplyScalar(J.y),D.copy(b[ee]).add(I).add(A),Le(D.x,D.y,D.z)):Le(J.x,J.y,h/u*ee)}for(let ee=m-1;ee>=0;ee--){let K=ee/m,J=f*Math.cos(K*Math.PI/2),$=g*Math.sin(K*Math.PI/2)+x;for(let ge=0,se=q.length;ge<se;ge++){let xe=Y(q[ge],le[ge],$);Le(xe.x,xe.y,h+J)}for(let ge=0,se=L.length;ge<se;ge++){let xe=L[ge];he=me[ge];for(let He=0,Z=xe.length;He<Z;He++){let w=Y(xe[He],he[He],$);y?Le(w.x,w.y+b[u-1].y,b[u-1].x+J):Le(w.x,w.y,h+J)}}}j(),ie();function j(){let ee=i.length/3;if(d){let K=0,J=te*K;for(let $=0;$<je;$++){let ge=Oe[$];we(ge[2]+J,ge[1]+J,ge[0]+J)}K=u+m*2,J=te*K;for(let $=0;$<je;$++){let ge=Oe[$];we(ge[0]+J,ge[1]+J,ge[2]+J)}}else{for(let K=0;K<je;K++){let J=Oe[K];we(J[2],J[1],J[0])}for(let K=0;K<je;K++){let J=Oe[K];we(J[0]+te*u,J[1]+te*u,J[2]+te*u)}}n.addGroup(ee,i.length/3-ee,0)}function ie(){let ee=i.length/3,K=0;Ee(q,K),K+=q.length;for(let J=0,$=L.length;J<$;J++){let ge=L[J];Ee(ge,K),K+=ge.length}n.addGroup(ee,i.length/3-ee,1)}function Ee(ee,K){let J=ee.length;for(;--J>=0;){let $=J,ge=J-1;ge<0&&(ge=ee.length-1);for(let se=0,xe=u+m*2;se<xe;se++){let He=te*se,Z=te*(se+1),w=K+$+He,_=K+ge+He,U=K+ge+Z,z=K+$+Z;Ae(w,_,U,z)}}}function Le(ee,K,J){c.push(ee),c.push(K),c.push(J)}function we(ee,K,J){Xe(ee),Xe(K),Xe(J);let $=i.length/3,ge=E.generateTopUV(n,i,$-3,$-2,$-1);P(ge[0]),P(ge[1]),P(ge[2])}function Ae(ee,K,J,$){Xe(ee),Xe(K),Xe($),Xe(K),Xe(J),Xe($);let ge=i.length/3,se=E.generateSideWallUV(n,i,ge-6,ge-3,ge-2,ge-1);P(se[0]),P(se[1]),P(se[3]),P(se[1]),P(se[2]),P(se[3])}function Xe(ee){i.push(c[ee*3+0]),i.push(c[ee*3+1]),i.push(c[ee*3+2])}function P(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Cc[i.type]().fromJSON(i)),new s(n,e.options)}},Em={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ae(r,a),new ae(o,c),new ae(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ae(a,1-c),new ae(l,1-h),new ae(d,1-g),new ae(x,1-p)]:[new ae(o,1-c),new ae(u,1-h),new ae(f,1-g),new ae(m,1-p)]}};function wm(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ni=class s extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let E=p*d-a;for(let b=0;b<l;b++){let y=b*h-r;g.push(y,-E,0),x.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){let b=E+l*p,y=E+l*(p+1),R=E+1+l*(p+1),A=E+1+l*p;f.push(b,y,A),f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Js=class s extends rt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/i,f=new C,g=new ae;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let E=p+m,b=E,y=E+n+1,R=E+n+2,A=E+1;o.push(b,y,A),o.push(y,R,A)}}this.setIndex(o),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ui=class s extends rt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new C,d=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let E=[],b=p/n,y=0;p===0&&a===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let A=R/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(i+A*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+y,1-b),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){let b=u[p][E+1],y=u[p][E],R=u[p+1][E],A=u[p+1][E+1];(p!==0||a>0)&&f.push(b,y,A),(p!==n-1||c<Math.PI)&&f.push(y,R,A)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(x,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qn=class s extends rt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],u=new C,h=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,E=(i+1)*f+g;a.push(x,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var kt=class extends Lt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},At=class extends kt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},oa=class extends Lt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Wo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ao=class extends Lt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ro=class extends Lt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function oo(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Tm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Am(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ed(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function tf(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var ci=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Co=class extends ci{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wc:r=e,o=2*t-n;break;case Tc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case wc:a=e,c=2*n-t;break;case Tc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,E=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let R=0;R!==o;++R)r[R]=p*a[u+R]+E*a[l+R]+b*a[c+R]+y*a[h+R];return r}},Io=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},Po=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oo(t,this.TimeBufferType),this.values=oo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oo(e.times,Array),values:oo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Co(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case es:t=this.InterpolantFactoryMethodDiscrete;break;case ts:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return es;case this.InterpolantFactoryMethodLinear:return ts;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Tm(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===co,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=ts;var hi=class extends an{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=es;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};la.prototype.ValueTypeName="color";var Yn=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};Yn.prototype.ValueTypeName="number";var Lo=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)Qt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Kn=class extends an{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};Kn.prototype.ValueTypeName="quaternion";Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends an{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=es;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Zn=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};Zn.prototype.ValueTypeName="vector";var ca=class{constructor(e="",t=-1,n=[],i=Ud){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Cm(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(an.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Am(c);c=ed(c,1,u),l=ed(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Yn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];tf(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let E=0;E!==d[g].morphTargets.length;++E){let b=d[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}i.push(new Yn(".morphTargetInfluence["+x+"]",m,p))}c=f.length*a}else{let f=".bones["+t[h].name+"]";n(Zn,f+".position",d,"pos",i),n(Kn,f+".quaternion",d,"rot",i),n(Zn,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Rm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Yn;case"vector":case"vector2":case"vector3":case"vector4":return Zn;case"color":return la;case"quaternion":return Kn;case"bool":case"boolean":return hi;case"string":return ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Cm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Rm(s.type);if(s.times===void 0){let t=[],n=[];tf(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Vn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Do=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},nf=new Do,wn=class{constructor(e){this.manager=e!==void 0?e:nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ri={},Dc=class extends Error{constructor(e,t){super(e),this.response=t}},Fi=class extends wn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Vn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:i});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=ri[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){E();function E(){h.read().then(({done:b,value:y})=>{if(b)p.close();else{x+=y.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,I=u.length;A<I;A++){let D=u[A];D.onProgress&&D.onProgress(R)}p.enqueue(y),E()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Dc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Vn.add(`file:${e}`,l);let u=ri[e];delete ri[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=ri[e];if(u===void 0)throw this.manager.itemError(e),l;delete ri[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Os=new WeakMap,No=class extends wn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Os.get(a);h===void 0&&(h=[],Os.set(a,h)),h.push({onLoad:t,onError:i})}return a}let o=Vs("img");function c(){u(),t&&t(this);let h=Os.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Os.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),Vn.remove(`image:${e}`);let d=Os.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}Os.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Vn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ha=class extends wn{constructor(e){super(e)}load(e,t,n,i){let r=new It,a=new No(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},rs=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ua=class extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yc=new Ke,td=new C,nd=new C,da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;td.setFromMatrixPosition(e.matrixWorld),t.position.copy(td),nd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nd),t.updateMatrixWorld(),yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nc=class extends da{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},fa=class extends rs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Nc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},id=new Ke,Ir=new C,vc=new C,Uc=class extends da{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ir),vc.copy(n.position),vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vc),n.updateMatrixWorld(),i.makeTranslation(-Ir.x,-Ir.y,-Ir.z),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id,n.coordinateSystem,n.reversedDepth)}},di=class extends rs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Uc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},as=class extends Hr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fc=class extends da{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oi=class extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Fc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var fi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var bc=new WeakMap,pa=class extends wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Vn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(bc.has(a)===!0)i&&i(bc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Vn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),bc.set(c,l),Vn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Vn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Uo=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ih="\\[\\]\\.:\\/",Im=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",Pm="[^"+ih.replace("\\.","")+"]",Lm=/((?:WC+[\/:])*)/.source.replace("WC",sh),Dm=/(WCOD+)?/.source.replace("WCOD",Pm),Nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),Um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),Fm=new RegExp("^"+Lm+Dm+Nm+Um+"$"),Om=["material","materials","bones","map"],Oc=class{constructor(e,t,n){let i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Im,"")}static parseTrackName(e){let t=Fm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Om.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=Oc;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tv=new Float32Array(1);var Qs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var sd=new C,lo,Mc,er=class extends vt{constructor(e=new C(0,0,1),t=new C(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",lo===void 0&&(lo=new rt,lo.setAttribute("position",new Ye([0,0,0,0,1,0],3)),Mc=new Di(.5,1,5,1),Mc.translate(0,-.5,0)),this.position.copy(t),this.line=new Ii(lo,new Bt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Se(Mc,new Gt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{sd.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(sd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var ma=class extends Gn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function rh(s,e,t,n){let i=Bm(n);switch(t){case Yc:return s*e;case jo:return s*e/i.components*i.byteLength;case Jo:return s*e/i.components*i.byteLength;case Zc:return s*e*2/i.components*i.byteLength;case Qo:return s*e*2/i.components*i.byteLength;case Kc:return s*e*3/i.components*i.byteLength;case gn:return s*e*4/i.components*i.byteLength;case el:return s*e*4/i.components*i.byteLength;case xa:case _a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ya:case va:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nl:case sl:return Math.max(s,16)*Math.max(e,8)/4;case tl:case il:return Math.max(s,8)*Math.max(e,8)/2;case rl:case al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _l:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ml:case Sl:case El:return Math.ceil(s/4)*Math.ceil(e/4)*16;case wl:case Tl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Al:case Rl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bm(s){switch(s){case kn:case Gc:return{byteLength:1,components:1};case ir:case Wc:case sr:return{byteLength:2,components:1};case Zo:case $o:return{byteLength:2,components:4};case zi:case Ko:case Tn:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);function Af(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function km(s){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,eg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ng=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ex=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ax=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_x=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:zm,alphahash_pars_fragment:Hm,alphamap_fragment:Vm,alphamap_pars_fragment:Gm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:Ym,batching_pars_vertex:Km,batching_vertex:Zm,begin_vertex:$m,beginnormal_vertex:jm,bsdfs:Jm,iridescence_fragment:Qm,bumpmap_pars_fragment:eg,clipping_planes_fragment:tg,clipping_planes_pars_fragment:ng,clipping_planes_pars_vertex:ig,clipping_planes_vertex:sg,color_fragment:rg,color_pars_fragment:ag,color_pars_vertex:og,color_vertex:lg,common:cg,cube_uv_reflection_fragment:hg,defaultnormal_vertex:ug,displacementmap_pars_vertex:dg,displacementmap_vertex:fg,emissivemap_fragment:pg,emissivemap_pars_fragment:mg,colorspace_fragment:gg,colorspace_pars_fragment:xg,envmap_fragment:_g,envmap_common_pars_fragment:yg,envmap_pars_fragment:vg,envmap_pars_vertex:bg,envmap_physical_pars_fragment:Lg,envmap_vertex:Mg,fog_vertex:Sg,fog_pars_vertex:Eg,fog_fragment:wg,fog_pars_fragment:Tg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Rg,lights_lambert_fragment:Cg,lights_lambert_pars_fragment:Ig,lights_pars_begin:Pg,lights_toon_fragment:Dg,lights_toon_pars_fragment:Ng,lights_phong_fragment:Ug,lights_phong_pars_fragment:Fg,lights_physical_fragment:Og,lights_physical_pars_fragment:Bg,lights_fragment_begin:kg,lights_fragment_maps:zg,lights_fragment_end:Hg,logdepthbuf_fragment:Vg,logdepthbuf_pars_fragment:Gg,logdepthbuf_pars_vertex:Wg,logdepthbuf_vertex:Xg,map_fragment:qg,map_pars_fragment:Yg,map_particle_fragment:Kg,map_particle_pars_fragment:Zg,metalnessmap_fragment:$g,metalnessmap_pars_fragment:jg,morphinstance_vertex:Jg,morphcolor_vertex:Qg,morphnormal_vertex:e0,morphtarget_pars_vertex:t0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:a0,normal_vertex:o0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:d0,opaque_fragment:f0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:x0,dithering_pars_fragment:_0,roughnessmap_fragment:y0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:M0,shadowmap_vertex:S0,shadowmask_pars_fragment:E0,skinbase_vertex:w0,skinning_pars_vertex:T0,skinning_vertex:A0,skinnormal_vertex:R0,specularmap_fragment:C0,specularmap_pars_fragment:I0,tonemapping_fragment:P0,tonemapping_pars_fragment:L0,transmission_fragment:D0,transmission_pars_fragment:N0,uv_pars_fragment:U0,uv_pars_vertex:F0,uv_vertex:O0,worldpos_vertex:B0,background_vert:k0,background_frag:z0,backgroundCube_vert:H0,backgroundCube_frag:V0,cube_vert:G0,cube_frag:W0,depth_vert:X0,depth_frag:q0,distanceRGBA_vert:Y0,distanceRGBA_frag:K0,equirect_vert:Z0,equirect_frag:$0,linedashed_vert:j0,linedashed_frag:J0,meshbasic_vert:Q0,meshbasic_frag:ex,meshlambert_vert:tx,meshlambert_frag:nx,meshmatcap_vert:ix,meshmatcap_frag:sx,meshnormal_vert:rx,meshnormal_frag:ax,meshphong_vert:ox,meshphong_frag:lx,meshphysical_vert:cx,meshphysical_frag:hx,meshtoon_vert:ux,meshtoon_frag:dx,points_vert:fx,points_frag:px,shadow_vert:mx,shadow_frag:gx,sprite_vert:xx,sprite_frag:_x},be={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},jn={basic:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Zt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Zt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Zt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Zt([be.points,be.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Zt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Zt([be.common,be.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Zt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Zt([be.sprite,be.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Zt([be.common,be.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Zt([be.lights,be.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};jn.physical={uniforms:Zt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Il={r:0,b:0,g:0},us=new Sn,yx=new Ke;function vx(s,e,t,n,i,r,a){let o=new Ce(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function x(b){let y=!1,R=g(b);R===null?p(o,c):R&&R.isColor&&(p(R,1),y=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,y){let R=g(y);R&&(R.isCubeTexture||R.mapping===ga)?(u===void 0&&(u=new Se(new et(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:hs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),us.copy(y.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yx.makeRotationFromEuler(us)),u.material.toneMapped=it.getTransfer(R.colorSpace)!==dt,(h!==R||d!==R.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,f=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Se(new Ni(2,2),new fn({name:"BackgroundMaterial",uniforms:hs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=it.getTransfer(R.colorSpace)!==dt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=R,d=R.version,f=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,y){b.getRGB(Il,th(s)),n.buffers.color.setClear(Il.r,Il.g,Il.b,y,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:x,addToRenderList:m,dispose:E}}function bx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(S,L,B,k,X){let q=!1,Y=h(k,B,L);r!==Y&&(r=Y,l(r.object)),q=f(S,k,B,X),q&&g(S,k,B,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(S,L,B,k),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function h(S,L,B){let k=B.wireframe===!0,X=n[S.id];X===void 0&&(X={},n[S.id]=X);let q=X[L.id];q===void 0&&(q={},X[L.id]=q);let Y=q[k];return Y===void 0&&(Y=d(c()),q[k]=Y),Y}function d(S){let L=[],B=[],k=[];for(let X=0;X<t;X++)L[X]=0,B[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:k,object:S,attributes:{},index:null}}function f(S,L,B,k){let X=r.attributes,q=L.attributes,Y=0,te=B.getAttributes();for(let V in te)if(te[V].location>=0){let me=X[V],he=q[V];if(he===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),me===void 0||me.attribute!==he||he&&me.data!==he.data)return!0;Y++}return r.attributesNum!==Y||r.index!==k}function g(S,L,B,k){let X={},q=L.attributes,Y=0,te=B.getAttributes();for(let V in te)if(te[V].location>=0){let me=q[V];me===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));let he={};he.attribute=me,me&&me.data&&(he.data=me.data),X[V]=he,Y++}r.attributes=X,r.attributesNum=Y,r.index=k}function x(){let S=r.newAttributes;for(let L=0,B=S.length;L<B;L++)S[L]=0}function m(S){p(S,0)}function p(S,L){let B=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;B[S]=1,k[S]===0&&(s.enableVertexAttribArray(S),k[S]=1),X[S]!==L&&(s.vertexAttribDivisor(S,L),X[S]=L)}function E(){let S=r.newAttributes,L=r.enabledAttributes;for(let B=0,k=L.length;B<k;B++)L[B]!==S[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function b(S,L,B,k,X,q,Y){Y===!0?s.vertexAttribIPointer(S,L,B,X,q):s.vertexAttribPointer(S,L,B,k,X,q)}function y(S,L,B,k){x();let X=k.attributes,q=B.getAttributes(),Y=L.defaultAttributeValues;for(let te in q){let V=q[te];if(V.location>=0){let le=X[te];if(le===void 0&&(te==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),te==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){let me=le.normalized,he=le.itemSize,ye=e.get(le);if(ye===void 0)continue;let Oe=ye.buffer,je=ye.type,Ge=ye.bytesPerElement,j=je===s.INT||je===s.UNSIGNED_INT||le.gpuType===Ko;if(le.isInterleavedBufferAttribute){let ie=le.data,Ee=ie.stride,Le=le.offset;if(ie.isInstancedInterleavedBuffer){for(let we=0;we<V.locationSize;we++)p(V.location+we,ie.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let we=0;we<V.locationSize;we++)m(V.location+we);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let we=0;we<V.locationSize;we++)b(V.location+we,he/V.locationSize,je,me,Ee*Ge,(Le+he/V.locationSize*we)*Ge,j)}else{if(le.isInstancedBufferAttribute){for(let ie=0;ie<V.locationSize;ie++)p(V.location+ie,le.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<V.locationSize;ie++)m(V.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let ie=0;ie<V.locationSize;ie++)b(V.location+ie,he/V.locationSize,je,me,he*Ge,he/V.locationSize*ie*Ge,j)}}else if(Y!==void 0){let me=Y[te];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(V.location,me);break;case 3:s.vertexAttrib3fv(V.location,me);break;case 4:s.vertexAttrib4fv(V.location,me);break;default:s.vertexAttrib1fv(V.location,me)}}}}E()}function R(){D();for(let S in n){let L=n[S];for(let B in L){let k=L[B];for(let X in k)u(k[X].object),delete k[X];delete L[B]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let B in L){let k=L[B];for(let X in k)u(k[X].object),delete k[X];delete L[B]}delete n[S.id]}function I(S){for(let L in n){let B=n[L];if(B[S.id]===void 0)continue;let k=B[S.id];for(let X in k)u(k[X].object),delete k[X];delete B[S.id]}}function D(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Mx(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Sx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(I){return!(I!==gn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let D=I===sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==kn&&n.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Tn&&!D)}function c(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:R,maxSamples:A}}function Ex(s){let e=this,t=null,n=0,i=!1,r=!1,a=new bn,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let E=r?0:n,b=E*4,y=p.clippingState||null;c.value=y,y=u(g,d,b,f);for(let R=0;R!==b;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=f;b!==x;++b,y+=4)a.copy(h[b]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function wx(s){let e=new WeakMap;function t(a,o){return o===tr?a.mapping=os:o===qo&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===tr||o===qo)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new _o(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var hr=4,sf=[.125,.215,.35,.446,.526,.582],ps=20,ah=new as,rf=new Ce,oh=null,lh=0,ch=0,hh=!1,fs=(1+Math.sqrt(5))/2,cr=1/fs,af=[new C(-fs,cr,0),new C(fs,cr,0),new C(-cr,0,fs),new C(cr,0,fs),new C(0,fs,-cr),new C(0,fs,cr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Tx=new C,Dl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Tx}=r;oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oh,lh,ch),this._renderer.xr.enabled=hh,e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:sr,format:gn,colorSpace:Vt,depthBuffer:!1},i=of(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ax(r)),this._blurMaterial=Rx(r,e,t)}return i}_compileMaterial(e){let t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,ah)}_sceneToCubeUV(e,t,n,i,r){let c=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(rf),h.toneMapping=mi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));let x=new Gt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new Se(new et,x),p=!1,E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,p=!0):(x.color.copy(rf),p=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):y===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));let R=this._cubeSize;Pl(i,y*R,b>2?R:0,R,R),h.setRenderTarget(i),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===os||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Pl(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ah)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=af[(i-r-1)%af.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Se(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ps-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):ps;m>ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);let p=[],E=0;for(let I=0;I<ps;++I){let D=I/x,M=Math.exp(-D*D/2);p.push(M),I===0?E+=M:I<m&&(E+=2*M)}for(let I=0;I<p.length;I++)p[I]=p[I]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let y=this._sizeLods[i],R=3*y*(i>b-hr?i-b+hr:0),A=4*(this._cubeSize-y);Pl(t,R,A,3*y,2*y),c.setRenderTarget(t),c.render(h,ah)}};function Ax(s){let e=[],t=[],n=[],i=s,r=s-hr+1+sf.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-hr?c=sf[a-s+hr-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,E=new Float32Array(x*g*f),b=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){let I=A%3*2/3-1,D=A>2?0:-1,M=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];E.set(M,x*g*A),b.set(d,m*g*A);let S=[A,A,A,A,A,A];y.set(S,p*g*A)}let R=new rt;R.setAttribute("position",new _t(E,x)),R.setAttribute("uv",new _t(b,m)),R.setAttribute("faceIndex",new _t(y,p)),e.push(R),i>hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function of(s,e,t){let n=new Wn(s,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Rx(s,e,t){let n=new Float32Array(ps),i=new C(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function lf(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function cf(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function vh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cx(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===tr||c===qo,u=c===os||c===ls;if(l||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Dl(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Dl(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ix(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Px(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let E=f.array;x=f.version;for(let b=0,y=E.length;b<y;b+=3){let R=E[b+0],A=E[b+1],I=E[b+2];d.push(R,A,A,I,I,R)}}else if(g!==void 0){let E=g.array;x=g.version;for(let b=0,y=E.length/3-1;b<y;b+=3){let R=b+0,A=b+1,I=b+2;d.push(R,A,A,I,I,R)}}else return;let m=new(eh(d)?zr:kr)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Lx(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*x[E];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Dx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Nx(s,e,t){let n=new WeakMap,i=new lt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*R*4*h),I=new Or(A,y,R,h);I.type=Tn,I.needsUpdate=!0;let D=b*4;for(let S=0;S<h;S++){let L=m[S],B=p[S],k=E[S],X=y*R*4*S;for(let q=0;q<L.count;q++){let Y=q*D;f===!0&&(i.fromBufferAttribute(L,q),A[X+Y+0]=i.x,A[X+Y+1]=i.y,A[X+Y+2]=i.z,A[X+Y+3]=0),g===!0&&(i.fromBufferAttribute(B,q),A[X+Y+4]=i.x,A[X+Y+5]=i.y,A[X+Y+6]=i.z,A[X+Y+7]=0),x===!0&&(i.fromBufferAttribute(k,q),A[X+Y+8]=i.x,A[X+Y+9]=i.y,A[X+Y+10]=i.z,A[X+Y+11]=k.itemSize===4?i.w:1)}}d={count:h,texture:I,size:new ae(y,R)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ux(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Rf=new It,hf=new jr(1,1),Cf=new Or,If=new go,Pf=new Vr,uf=[],df=[],ff=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function dr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=uf[i];if(r===void 0&&(r=new Float32Array(i),uf[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ul(s,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Fx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function Bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function zx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;mf.set(n),s.uniformMatrix2fv(this.addr,!1,mf),Nt(t,n)}}function Hx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;pf.set(n),s.uniformMatrix3fv(this.addr,!1,pf),Nt(t,n)}}function Vx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;ff.set(n),s.uniformMatrix4fv(this.addr,!1,ff),Nt(t,n)}}function Gx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function Yx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Kx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function Zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function $x(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hf.compareFunction=jc,r=hf):r=Rf,t.setTexture2D(e||r,i)}function Jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||If,i)}function Qx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Pf,i)}function e_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cf,i)}function t_(s){switch(s){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return kx;case 35674:return zx;case 35675:return Hx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return Kx;case 36295:return Zx;case 36296:return $x;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return e_}}function n_(s,e){s.uniform1fv(this.addr,e)}function i_(s,e){let t=dr(e,this.size,2);s.uniform2fv(this.addr,t)}function s_(s,e){let t=dr(e,this.size,3);s.uniform3fv(this.addr,t)}function r_(s,e){let t=dr(e,this.size,4);s.uniform4fv(this.addr,t)}function a_(s,e){let t=dr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function o_(s,e){let t=dr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function l_(s,e){let t=dr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function c_(s,e){s.uniform1iv(this.addr,e)}function h_(s,e){s.uniform2iv(this.addr,e)}function u_(s,e){s.uniform3iv(this.addr,e)}function d_(s,e){s.uniform4iv(this.addr,e)}function f_(s,e){s.uniform1uiv(this.addr,e)}function p_(s,e){s.uniform2uiv(this.addr,e)}function m_(s,e){s.uniform3uiv(this.addr,e)}function g_(s,e){s.uniform4uiv(this.addr,e)}function x_(s,e,t){let n=this.cache,i=e.length,r=Ul(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Rf,r[a])}function __(s,e,t){let n=this.cache,i=e.length,r=Ul(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||If,r[a])}function y_(s,e,t){let n=this.cache,i=e.length,r=Ul(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Pf,r[a])}function v_(s,e,t){let n=this.cache,i=e.length,r=Ul(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cf,r[a])}function b_(s){switch(s){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return __;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return v_}}var dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t_(t.type)}},fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b_(t.type)}},ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function gf(s,e){s.seq.push(e),s.map[e.id]=e}function M_(s,e,t){let n=s.name,i=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),a=uh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){gf(t,l===void 0?new dh(o,s,e):new fh(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new ph(o),gf(t,h)),t=h}}}var ur=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);M_(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function xf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var S_=37297,E_=0;function w_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var _f=new $e;function T_(s){it._getMatrix(_f,it.workingColorSpace,s);let e=`mat3( ${_f.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case Ur:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+w_(s.getShaderSource(e),o)}else return r}function A_(s,e){let t=T_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function R_(s,e){let t;switch(e){case Rd:t="Linear";break;case Cd:t="Reinhard";break;case Id:t="Cineon";break;case Xo:t="ACESFilmic";break;case Ld:t="AgX";break;case Dd:t="Neutral";break;case Pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ll=new C;function C_(){it.getLuminanceCoefficients(Ll);let s=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function P_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Sa(s){return s!==""}function vf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(s){return s.replace(D_,U_)}var N_=new Map;function U_(s,e){let t=Qe[e];if(t===void 0){let n=N_.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mh(t)}var F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(s){return s.replace(F_,O_)}function O_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===od?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function k_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case os:case ls:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function H_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wo:e="ENVMAP_BLENDING_MULTIPLY";break;case Td:e="ENVMAP_BLENDING_MIX";break;case Ad:e="ENVMAP_BLENDING_ADD";break}return e}function V_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function G_(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=B_(t),l=k_(t),u=z_(t),h=H_(t),d=V_(t),f=I_(t),g=P_(r),x=i.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),p.length>0&&(p+=`
`)):(m=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),p=[Sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==mi?R_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,A_("linearToOutputTexel",t.outputColorSpace),C_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),a=mh(a),a=vf(a,t),a=bf(a,t),o=mh(o),o=vf(o,t),o=bf(o,t),a=Mf(a),o=Mf(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=E+m+a,y=E+p+o,R=xf(i,i.VERTEX_SHADER,b),A=xf(i,i.FRAGMENT_SHADER,y);i.attachShader(x,R),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function I(L){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(x)||"",k=i.getShaderInfoLog(R)||"",X=i.getShaderInfoLog(A)||"",q=B.trim(),Y=k.trim(),te=X.trim(),V=!0,le=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,A);else{let me=yf(i,R,"vertex"),he=yf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+me+`
`+he)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||te==="")&&(le=!1);le&&(L.diagnostics={runnable:V,programLog:q,vertexShader:{log:Y,prefix:m},fragmentShader:{log:te,prefix:p}})}i.deleteShader(R),i.deleteShader(A),D=new ur(i,x),M=L_(i,x)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let M;this.getAttributes=function(){return M===void 0&&I(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,S_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}var W_=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xh(e),t.set(e,n)),n}},xh=class{constructor(e){this.id=W_++,this.code=e,this.usedTimes=0}};function X_(s,e,t,n,i,r,a){let o=new Br,c=new gh,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,B,k){let X=B.fog,q=k.geometry,Y=M.isMeshStandardMaterial?B.environment:null,te=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),V=te&&te.mapping===ga?te.image.height:null,le=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=me!==void 0?me.length:0,ye=0;q.morphAttributes.position!==void 0&&(ye=1),q.morphAttributes.normal!==void 0&&(ye=2),q.morphAttributes.color!==void 0&&(ye=3);let Oe,je,Ge,j;if(le){let at=jn[le];Oe=at.vertexShader,je=at.fragmentShader}else Oe=M.vertexShader,je=M.fragmentShader,c.update(M),Ge=c.getVertexShaderID(M),j=c.getFragmentShaderID(M);let ie=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Le=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,Ae=!!M.map,Xe=!!M.matcap,P=!!te,ee=!!M.aoMap,K=!!M.lightMap,J=!!M.bumpMap,$=!!M.normalMap,ge=!!M.displacementMap,se=!!M.emissiveMap,xe=!!M.metalnessMap,He=!!M.roughnessMap,Z=M.anisotropy>0,w=M.clearcoat>0,_=M.dispersion>0,U=M.iridescence>0,z=M.sheen>0,Q=M.transmission>0,H=Z&&!!M.anisotropyMap,Me=w&&!!M.clearcoatMap,ue=w&&!!M.clearcoatNormalMap,Re=w&&!!M.clearcoatRoughnessMap,De=U&&!!M.iridescenceMap,oe=U&&!!M.iridescenceThicknessMap,ve=z&&!!M.sheenColorMap,Be=z&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,pe=!!M.specularColorMap,Ze=!!M.specularIntensityMap,N=Q&&!!M.transmissionMap,ce=Q&&!!M.thicknessMap,_e=!!M.gradientMap,Ie=!!M.alphaMap,de=M.alphaTest>0,ne=!!M.alphaHash,Ue=!!M.extensions,qe=mi;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(qe=s.toneMapping);let ct={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:je,defines:M.defines,customVertexShaderID:Ge,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:Le,instancingColor:Le&&k.instanceColor!==null,instancingMorph:Le&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Vt,alphaToCoverage:!!M.alphaToCoverage,map:Ae,matcap:Xe,envMap:P,envMapMode:P&&te.mapping,envMapCubeUVHeight:V,aoMap:ee,lightMap:K,bumpMap:J,normalMap:$,displacementMap:d&&ge,emissiveMap:se,normalMapObjectSpace:$&&M.normalMapType===Bd,normalMapTangentSpace:$&&M.normalMapType===Cl,metalnessMap:xe,roughnessMap:He,anisotropy:Z,anisotropyMap:H,clearcoat:w,clearcoatMap:Me,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,dispersion:_,iridescence:U,iridescenceMap:De,iridescenceThicknessMap:oe,sheen:z,sheenColorMap:ve,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:pe,specularIntensityMap:Ze,transmission:Q,transmissionMap:N,thicknessMap:ce,gradientMap:_e,opaque:M.transparent===!1&&M.blending===Ji&&M.alphaToCoverage===!1,alphaMap:Ie,alphaTest:de,alphaHash:ne,combine:M.combine,mapUv:Ae&&x(M.map.channel),aoMapUv:ee&&x(M.aoMap.channel),lightMapUv:K&&x(M.lightMap.channel),bumpMapUv:J&&x(M.bumpMap.channel),normalMapUv:$&&x(M.normalMap.channel),displacementMapUv:ge&&x(M.displacementMap.channel),emissiveMapUv:se&&x(M.emissiveMap.channel),metalnessMapUv:xe&&x(M.metalnessMap.channel),roughnessMapUv:He&&x(M.roughnessMap.channel),anisotropyMapUv:H&&x(M.anisotropyMap.channel),clearcoatMapUv:Me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(M.sheenRoughnessMap.channel),specularMapUv:Ne&&x(M.specularMap.channel),specularColorMapUv:pe&&x(M.specularColorMap.channel),specularIntensityMapUv:Ze&&x(M.specularIntensityMap.channel),transmissionMapUv:N&&x(M.transmissionMap.channel),thicknessMapUv:ce&&x(M.thicknessMap.channel),alphaMapUv:Ie&&x(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($||Z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ae||Ie),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&it.getTransfer(M.map.colorSpace)===dt,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&it.getTransfer(M.emissiveMap.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(E(S,M),b(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function E(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function b(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){let S=g[M.type],L;if(S){let B=jn[S];L=Zd.clone(B.uniforms)}else L=M.uniforms;return L}function R(M,S){let L;for(let B=0,k=u.length;B<k;B++){let X=u[B];if(X.cacheKey===S){L=X,++L.usedTimes;break}}return L===void 0&&(L=new G_(s,S,M,r),u.push(L)),L}function A(M){if(--M.usedTimes===0){let S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function I(M){c.remove(M)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:D}}function q_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Y_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ef(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Y_),n.length>1&&n.sort(d||Ef),i.length>1&&i.sort(d||Ef)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function K_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new wf,s.set(n,[a])):i>=r.length?(a=new wf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Z_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ce};break;case"SpotLight":t={position:new C,direction:new C,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function $_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var j_=0;function J_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Q_(s){let e=new Z_,t=$_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let i=new C,r=new Ke,a=new Ke;function o(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,E=0,b=0,y=0,R=0,A=0,I=0;l.sort(J_);for(let M=0,S=l.length;M<S;M++){let L=l[M],B=L.color,k=L.intensity,X=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*k,h+=B.g*k,d+=B.b*k;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],k);I++}else if(L.isDirectionalLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=L.shadow.matrix,E++}n.directional[f]=Y,f++}else if(L.isSpotLight){let Y=e.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(B).multiplyScalar(k),Y.distance=X,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[x]=Y;let te=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,te.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=te.matrix,L.castShadow){let V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=q,y++}x++}else if(L.isRectAreaLight){let Y=e.get(L);Y.color.copy(B).multiplyScalar(k),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=Y,m++}else if(L.isPointLight){let Y=e.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){let te=L.shadow,V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=Y,g++}else if(L.isHemisphereLight){let Y=e.get(L);Y.skyColor.copy(L.color).multiplyScalar(k),Y.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=Y,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==E||D.numPointShadows!==b||D.numSpotShadows!==y||D.numSpotMaps!==R||D.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=E,D.numPointShadows=b,D.numSpotShadows=y,D.numSpotMaps=R,D.numLightProbes=I,n.version=j_++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let b=l[p];if(b.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(b.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Tf(s){let e=new Q_(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ey(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Tf(s),e.set(i,[o])):r>=a.length?(o=new Tf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iy(s,e,t){let n=new Ks,i=new ae,r=new ae,a=new lt,o=new Ao({depthPacking:Od}),c=new Ro,l={},u=t.maxTextureSize,h={[On]:en,[en]:On,[zt]:zt},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:ty,fragmentShader:ny}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new rt;g.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Se(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kc;let p=this.type;this.render=function(A,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=s.getRenderTarget(),S=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),B=s.state;B.setBlending(pi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=p!==$n&&this.type===$n,X=p===$n&&this.type!==$n;for(let q=0,Y=A.length;q<Y;q++){let te=A[q],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let le=V.getFrameExtents();if(i.multiply(le),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/le.x),i.x=r.x*le.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/le.y),i.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||k===!0||X===!0){let he=this.type!==$n?{minFilter:Ht,magFilter:Ht}:{};V.map!==null&&V.map.dispose(),V.map=new Wn(i.x,i.y,he),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let me=V.getViewportCount();for(let he=0;he<me;he++){let ye=V.getViewport(he);a.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),B.viewport(a),V.updateMatrices(te,he),n=V.getFrustum(),y(I,D,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===$n&&E(V,D),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,S,L)};function E(A,I){let D=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Wn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(I,null,D,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(I,null,D,f,x,null)}function b(A,I,D,M){let S=null,L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=D.isPointLight===!0?c:o,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let B=S.uuid,k=I.uuid,X=l[B];X===void 0&&(X={},l[B]=X);let q=X[k];q===void 0&&(q=S.clone(),X[k]=q,I.addEventListener("dispose",R)),S=q}if(S.visible=I.visible,S.wireframe=I.wireframe,M===$n?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:h[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=s.properties.get(S);B.light=D}return S}function y(A,I,D,M,S){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===$n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let k=e.update(A),X=A.material;if(Array.isArray(X)){let q=k.groups;for(let Y=0,te=q.length;Y<te;Y++){let V=q[Y],le=X[V.materialIndex];if(le&&le.visible){let me=b(A,le,M,S);A.onBeforeShadow(s,A,I,D,k,me,V),s.renderBufferDirect(D,null,k,me,A,V),A.onAfterShadow(s,A,I,D,k,me,V)}}}else if(X.visible){let q=b(A,X,M,S);A.onBeforeShadow(s,A,I,D,k,q,null),s.renderBufferDirect(D,null,k,q,A,null),A.onAfterShadow(s,A,I,D,k,q,null)}}let B=A.children;for(let k=0,X=B.length;k<X;k++)y(B[k],I,D,M,S)}function R(A){A.target.removeEventListener("dispose",R);for(let D in l){let M=l[D],S=A.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var sy={[Oo]:Bo,[ko]:Vo,[zo]:Go,[Qi]:Ho,[Bo]:Oo,[Vo]:ko,[Go]:zo,[Ho]:Qi};function ry(s,e){function t(){let N=!1,ce=new lt,_e=null,Ie=new lt(0,0,0,0);return{setMask:function(de){_e!==de&&!N&&(s.colorMask(de,de,de,de),_e=de)},setLocked:function(de){N=de},setClear:function(de,ne,Ue,qe,ct){ct===!0&&(de*=qe,ne*=qe,Ue*=qe),ce.set(de,ne,Ue,qe),Ie.equals(ce)===!1&&(s.clearColor(de,ne,Ue,qe),Ie.copy(ce))},reset:function(){N=!1,_e=null,Ie.set(-1,0,0,0)}}}function n(){let N=!1,ce=!1,_e=null,Ie=null,de=null;return{setReversed:function(ne){if(ce!==ne){let Ue=e.get("EXT_clip_control");ne?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;let qe=de;de=null,this.setClear(qe)}},getReversed:function(){return ce},setTest:function(ne){ne?ie(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(ne){_e!==ne&&!N&&(s.depthMask(ne),_e=ne)},setFunc:function(ne){if(ce&&(ne=sy[ne]),Ie!==ne){switch(ne){case Oo:s.depthFunc(s.NEVER);break;case Bo:s.depthFunc(s.ALWAYS);break;case ko:s.depthFunc(s.LESS);break;case Qi:s.depthFunc(s.LEQUAL);break;case zo:s.depthFunc(s.EQUAL);break;case Ho:s.depthFunc(s.GEQUAL);break;case Vo:s.depthFunc(s.GREATER);break;case Go:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ne}},setLocked:function(ne){N=ne},setClear:function(ne){de!==ne&&(ce&&(ne=1-ne),s.clearDepth(ne),de=ne)},reset:function(){N=!1,_e=null,Ie=null,de=null,ce=!1}}}function i(){let N=!1,ce=null,_e=null,Ie=null,de=null,ne=null,Ue=null,qe=null,ct=null;return{setTest:function(at){N||(at?ie(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(at){ce!==at&&!N&&(s.stencilMask(at),ce=at)},setFunc:function(at,Pn,ln){(_e!==at||Ie!==Pn||de!==ln)&&(s.stencilFunc(at,Pn,ln),_e=at,Ie=Pn,de=ln)},setOp:function(at,Pn,ln){(ne!==at||Ue!==Pn||qe!==ln)&&(s.stencilOp(at,Pn,ln),ne=at,Ue=Pn,qe=ln)},setLocked:function(at){N=at},setClear:function(at){ct!==at&&(s.clearStencil(at),ct=at)},reset:function(){N=!1,ce=null,_e=null,Ie=null,de=null,ne=null,Ue=null,qe=null,ct=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,b=null,y=null,R=null,A=null,I=new Ce(0,0,0),D=0,M=!1,S=null,L=null,B=null,k=null,X=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,te=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=te>=2);let le=null,me={},he=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Oe=new lt().fromArray(he),je=new lt().fromArray(ye);function Ge(N,ce,_e,Ie){let de=new Uint8Array(4),ne=s.createTexture();s.bindTexture(N,ne),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<_e;Ue++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(ce+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return ne}let j={};j[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(s.DEPTH_TEST),a.setFunc(Qi),J(!1),$(Bc),ie(s.CULL_FACE),ee(pi);function ie(N){u[N]!==!0&&(s.enable(N),u[N]=!0)}function Ee(N){u[N]!==!1&&(s.disable(N),u[N]=!1)}function Le(N,ce){return h[N]!==ce?(s.bindFramebuffer(N,ce),h[N]=ce,N===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ce),N===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function we(N,ce){let _e=f,Ie=!1;if(N){_e=d.get(ce),_e===void 0&&(_e=[],d.set(ce,_e));let de=N.textures;if(_e.length!==de.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,Ue=de.length;ne<Ue;ne++)_e[ne]=s.COLOR_ATTACHMENT0+ne;_e.length=de.length,Ie=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(_e)}function Ae(N){return g!==N?(s.useProgram(N),g=N,!0):!1}let Xe={[Ti]:s.FUNC_ADD,[cd]:s.FUNC_SUBTRACT,[hd]:s.FUNC_REVERSE_SUBTRACT};Xe[ud]=s.MIN,Xe[dd]=s.MAX;let P={[fd]:s.ZERO,[pd]:s.ONE,[md]:s.SRC_COLOR,[ho]:s.SRC_ALPHA,[bd]:s.SRC_ALPHA_SATURATE,[yd]:s.DST_COLOR,[xd]:s.DST_ALPHA,[gd]:s.ONE_MINUS_SRC_COLOR,[uo]:s.ONE_MINUS_SRC_ALPHA,[vd]:s.ONE_MINUS_DST_COLOR,[_d]:s.ONE_MINUS_DST_ALPHA,[Md]:s.CONSTANT_COLOR,[Sd]:s.ONE_MINUS_CONSTANT_COLOR,[Ed]:s.CONSTANT_ALPHA,[wd]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(N,ce,_e,Ie,de,ne,Ue,qe,ct,at){if(N===pi){x===!0&&(Ee(s.BLEND),x=!1);return}if(x===!1&&(ie(s.BLEND),x=!0),N!==ld){if(N!==m||at!==M){if((p!==Ti||y!==Ti)&&(s.blendEquation(s.FUNC_ADD),p=Ti,y=Ti),at)switch(N){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mn:s.blendFunc(s.ONE,s.ONE);break;case zc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,b=null,R=null,A=null,I.set(0,0,0),D=0,m=N,M=at}return}de=de||ce,ne=ne||_e,Ue=Ue||Ie,(ce!==p||de!==y)&&(s.blendEquationSeparate(Xe[ce],Xe[de]),p=ce,y=de),(_e!==E||Ie!==b||ne!==R||Ue!==A)&&(s.blendFuncSeparate(P[_e],P[Ie],P[ne],P[Ue]),E=_e,b=Ie,R=ne,A=Ue),(qe.equals(I)===!1||ct!==D)&&(s.blendColor(qe.r,qe.g,qe.b,ct),I.copy(qe),D=ct),m=N,M=!1}function K(N,ce){N.side===zt?Ee(s.CULL_FACE):ie(s.CULL_FACE);let _e=N.side===en;ce&&(_e=!_e),J(_e),N.blending===Ji&&N.transparent===!1?ee(pi):ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Ie=N.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){S!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),S=N)}function $(N){N!==rd?(ie(s.CULL_FACE),N!==L&&(N===Bc?s.cullFace(s.BACK):N===ad?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),L=N}function ge(N){N!==B&&(Y&&s.lineWidth(N),B=N)}function se(N,ce,_e){N?(ie(s.POLYGON_OFFSET_FILL),(k!==ce||X!==_e)&&(s.polygonOffset(ce,_e),k=ce,X=_e)):Ee(s.POLYGON_OFFSET_FILL)}function xe(N){N?ie(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function He(N){N===void 0&&(N=s.TEXTURE0+q-1),le!==N&&(s.activeTexture(N),le=N)}function Z(N,ce,_e){_e===void 0&&(le===null?_e=s.TEXTURE0+q-1:_e=le);let Ie=me[_e];Ie===void 0&&(Ie={type:void 0,texture:void 0},me[_e]=Ie),(Ie.type!==N||Ie.texture!==ce)&&(le!==_e&&(s.activeTexture(_e),le=_e),s.bindTexture(N,ce||j[N]),Ie.type=N,Ie.texture=ce)}function w(){let N=me[le];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function z(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(N){Oe.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Oe.copy(N))}function Be(N){je.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),je.copy(N))}function Ne(N,ce){let _e=l.get(ce);_e===void 0&&(_e=new WeakMap,l.set(ce,_e));let Ie=_e.get(N);Ie===void 0&&(Ie=s.getUniformBlockIndex(ce,N.name),_e.set(N,Ie))}function pe(N,ce){let Ie=l.get(ce).get(N);c.get(ce)!==Ie&&(s.uniformBlockBinding(ce,Ie,N.__bindingPointIndex),c.set(ce,Ie))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},le=null,me={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,E=null,b=null,y=null,R=null,A=null,I=new Ce(0,0,0),D=0,M=!1,S=null,L=null,B=null,k=null,X=null,Oe.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Ee,bindFramebuffer:Le,drawBuffers:we,useProgram:Ae,setBlending:ee,setMaterial:K,setFlipSided:J,setCullFace:$,setLineWidth:ge,setPolygonOffset:se,setScissorTest:xe,activeTexture:He,bindTexture:Z,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:De,texImage3D:oe,updateUBOMapping:Ne,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:Re,texSubImage2D:z,texSubImage3D:Q,compressedTexSubImage2D:H,compressedTexSubImage3D:Me,scissor:ve,viewport:Be,reset:Ze}}function ay(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return f?new OffscreenCanvas(w,_):Vs("canvas")}function x(w,_,U){let z=1,Q=Z(w);if((Q.width>U||Q.height>U)&&(z=U/Math.max(Q.width,Q.height)),z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let H=Math.floor(z*Q.width),Me=Math.floor(z*Q.height);h===void 0&&(h=g(H,Me));let ue=_?g(H,Me):h;return ue.width=H,ue.height=Me,ue.getContext("2d").drawImage(w,0,0,H,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+H+"x"+Me+")."),ue}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,_,U,z,Q=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let H=_;if(_===s.RED&&(U===s.FLOAT&&(H=s.R32F),U===s.HALF_FLOAT&&(H=s.R16F),U===s.UNSIGNED_BYTE&&(H=s.R8)),_===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(H=s.R8UI),U===s.UNSIGNED_SHORT&&(H=s.R16UI),U===s.UNSIGNED_INT&&(H=s.R32UI),U===s.BYTE&&(H=s.R8I),U===s.SHORT&&(H=s.R16I),U===s.INT&&(H=s.R32I)),_===s.RG&&(U===s.FLOAT&&(H=s.RG32F),U===s.HALF_FLOAT&&(H=s.RG16F),U===s.UNSIGNED_BYTE&&(H=s.RG8)),_===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(H=s.RG8UI),U===s.UNSIGNED_SHORT&&(H=s.RG16UI),U===s.UNSIGNED_INT&&(H=s.RG32UI),U===s.BYTE&&(H=s.RG8I),U===s.SHORT&&(H=s.RG16I),U===s.INT&&(H=s.RG32I)),_===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(H=s.RGB8UI),U===s.UNSIGNED_SHORT&&(H=s.RGB16UI),U===s.UNSIGNED_INT&&(H=s.RGB32UI),U===s.BYTE&&(H=s.RGB8I),U===s.SHORT&&(H=s.RGB16I),U===s.INT&&(H=s.RGB32I)),_===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(H=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(H=s.RGBA16UI),U===s.UNSIGNED_INT&&(H=s.RGBA32UI),U===s.BYTE&&(H=s.RGBA8I),U===s.SHORT&&(H=s.RGBA16I),U===s.INT&&(H=s.RGBA32I)),_===s.RGB&&(U===s.UNSIGNED_INT_5_9_9_9_REV&&(H=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(H=s.R11F_G11F_B10F)),_===s.RGBA){let Me=Q?Ur:it.getTransfer(z);U===s.FLOAT&&(H=s.RGBA32F),U===s.HALF_FLOAT&&(H=s.RGBA16F),U===s.UNSIGNED_BYTE&&(H=Me===dt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(H=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(H=s.RGB5_A1)}return(H===s.R16F||H===s.R32F||H===s.RG16F||H===s.RG32F||H===s.RGBA16F||H===s.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(w,_){let U;return w?_===null||_===zi||_===rr?U=s.DEPTH24_STENCIL8:_===Tn?U=s.DEPTH32F_STENCIL8:_===ir&&(U=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zi||_===rr?U=s.DEPTH_COMPONENT24:_===Tn?U=s.DEPTH_COMPONENT32F:_===ir&&(U=s.DEPTH_COMPONENT16),U}function R(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ht&&w.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function A(w){let _=w.target;_.removeEventListener("dispose",A),D(_),_.isVideoTexture&&u.delete(_)}function I(w){let _=w.target;_.removeEventListener("dispose",I),S(_)}function D(w){let _=n.get(w);if(_.__webglInit===void 0)return;let U=w.source,z=d.get(U);if(z){let Q=z[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(w),Object.keys(z).length===0&&d.delete(U)}n.remove(w)}function M(w){let _=n.get(w);s.deleteTexture(_.__webglTexture);let U=w.source,z=d.get(U);delete z[_.__cacheKey],a.memory.textures--}function S(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let Q=0;Q<_.__webglFramebuffer[z].length;Q++)s.deleteFramebuffer(_.__webglFramebuffer[z][Q]);else s.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)s.deleteFramebuffer(_.__webglFramebuffer[z]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let U=w.textures;for(let z=0,Q=U.length;z<Q;z++){let H=n.get(U[z]);H.__webglTexture&&(s.deleteTexture(H.__webglTexture),a.memory.textures--),n.remove(U[z])}n.remove(w)}let L=0;function B(){L=0}function k(){let w=L;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),L+=1,w}function X(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function q(w,_){let U=n.get(w);if(w.isVideoTexture&&xe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){let z=w.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,w,_);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+_)}function Y(w,_){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){j(U,w,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+_)}function te(w,_){let U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){j(U,w,_);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+_)}function V(w,_){let U=n.get(w);if(w.version>0&&U.__version!==w.version){ie(U,w,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+_)}let le={[Ai]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[zs]:s.MIRRORED_REPEAT},me={[Ht]:s.NEAREST,[Yo]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[Jt]:s.LINEAR,[nr]:s.LINEAR_MIPMAP_NEAREST,[Bn]:s.LINEAR_MIPMAP_LINEAR},he={[kd]:s.NEVER,[Xd]:s.ALWAYS,[zd]:s.LESS,[jc]:s.LEQUAL,[Hd]:s.EQUAL,[Wd]:s.GEQUAL,[Vd]:s.GREATER,[Gd]:s.NOTEQUAL};function ye(w,_){if(_.type===Tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===nr||_.magFilter===cs||_.magFilter===Bn||_.minFilter===Jt||_.minFilter===nr||_.minFilter===cs||_.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,le[_.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,le[_.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,le[_.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,me[_.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ht||_.minFilter!==cs&&_.minFilter!==Bn||_.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Oe(w,_){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",A));let z=_.source,Q=d.get(z);Q===void 0&&(Q={},d.set(z,Q));let H=X(_);if(H!==w.__cacheKey){Q[H]===void 0&&(Q[H]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Q[H].usedTimes++;let Me=Q[w.__cacheKey];Me!==void 0&&(Q[w.__cacheKey].usedTimes--,Me.usedTimes===0&&M(_)),w.__cacheKey=H,w.__webglTexture=Q[H].texture}return U}function je(w,_,U){return Math.floor(Math.floor(w/U)/_)}function Ge(w,_,U,z){let H=w.updateRanges;if(H.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,U,z,_.data);else{H.sort((oe,ve)=>oe.start-ve.start);let Me=0;for(let oe=1;oe<H.length;oe++){let ve=H[Me],Be=H[oe],Ne=ve.start+ve.count,pe=je(Be.start,_.width,4),Ze=je(ve.start,_.width,4);Be.start<=Ne+1&&pe===Ze&&je(Be.start+Be.count-1,_.width,4)===pe?ve.count=Math.max(ve.count,Be.start+Be.count-ve.start):(++Me,H[Me]=Be)}H.length=Me+1;let ue=s.getParameter(s.UNPACK_ROW_LENGTH),Re=s.getParameter(s.UNPACK_SKIP_PIXELS),De=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let oe=0,ve=H.length;oe<ve;oe++){let Be=H[oe],Ne=Math.floor(Be.start/4),pe=Math.ceil(Be.count/4),Ze=Ne%_.width,N=Math.floor(Ne/_.width),ce=pe,_e=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Ze,N,ce,_e,U,z,_.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Re),s.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function j(w,_,U){let z=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=s.TEXTURE_3D);let Q=Oe(w,_),H=_.source;t.bindTexture(z,w.__webglTexture,s.TEXTURE0+U);let Me=n.get(H);if(H.version!==Me.__version||Q===!0){t.activeTexture(s.TEXTURE0+U);let ue=it.getPrimaries(it.workingColorSpace),Re=_.colorSpace===gi?null:it.getPrimaries(_.colorSpace),De=_.colorSpace===gi||ue===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let oe=x(_.image,!1,i.maxTextureSize);oe=He(_,oe);let ve=r.convert(_.format,_.colorSpace),Be=r.convert(_.type),Ne=b(_.internalFormat,ve,Be,_.colorSpace,_.isVideoTexture);ye(z,_);let pe,Ze=_.mipmaps,N=_.isVideoTexture!==!0,ce=Me.__version===void 0||Q===!0,_e=H.dataReady,Ie=R(_,oe);if(_.isDepthTexture)Ne=y(_.format===ar,_.type),ce&&(N?t.texStorage2D(s.TEXTURE_2D,1,Ne,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Ne,oe.width,oe.height,0,ve,Be,null));else if(_.isDataTexture)if(Ze.length>0){N&&ce&&t.texStorage2D(s.TEXTURE_2D,Ie,Ne,Ze[0].width,Ze[0].height);for(let de=0,ne=Ze.length;de<ne;de++)pe=Ze[de],N?_e&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,pe.width,pe.height,ve,Be,pe.data):t.texImage2D(s.TEXTURE_2D,de,Ne,pe.width,pe.height,0,ve,Be,pe.data);_.generateMipmaps=!1}else N?(ce&&t.texStorage2D(s.TEXTURE_2D,Ie,Ne,oe.width,oe.height),_e&&Ge(_,oe,ve,Be)):t.texImage2D(s.TEXTURE_2D,0,Ne,oe.width,oe.height,0,ve,Be,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ne,Ze[0].width,Ze[0].height,oe.depth);for(let de=0,ne=Ze.length;de<ne;de++)if(pe=Ze[de],_.format!==gn)if(ve!==null)if(N){if(_e)if(_.layerUpdates.size>0){let Ue=rh(pe.width,pe.height,_.format,_.type);for(let qe of _.layerUpdates){let ct=pe.data.subarray(qe*Ue/pe.data.BYTES_PER_ELEMENT,(qe+1)*Ue/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,qe,pe.width,pe.height,1,ve,ct)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,pe.width,pe.height,oe.depth,ve,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Ne,pe.width,pe.height,oe.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?_e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,pe.width,pe.height,oe.depth,ve,Be,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Ne,pe.width,pe.height,oe.depth,0,ve,Be,pe.data)}else{N&&ce&&t.texStorage2D(s.TEXTURE_2D,Ie,Ne,Ze[0].width,Ze[0].height);for(let de=0,ne=Ze.length;de<ne;de++)pe=Ze[de],_.format!==gn?ve!==null?N?_e&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,pe.width,pe.height,ve,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Ne,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?_e&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,pe.width,pe.height,ve,Be,pe.data):t.texImage2D(s.TEXTURE_2D,de,Ne,pe.width,pe.height,0,ve,Be,pe.data)}else if(_.isDataArrayTexture)if(N){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ne,oe.width,oe.height,oe.depth),_e)if(_.layerUpdates.size>0){let de=rh(oe.width,oe.height,_.format,_.type);for(let ne of _.layerUpdates){let Ue=oe.data.subarray(ne*de/oe.data.BYTES_PER_ELEMENT,(ne+1)*de/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,ve,Be,Ue)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ve,Be,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,oe.width,oe.height,oe.depth,0,ve,Be,oe.data);else if(_.isData3DTexture)N?(ce&&t.texStorage3D(s.TEXTURE_3D,Ie,Ne,oe.width,oe.height,oe.depth),_e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ve,Be,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,oe.width,oe.height,oe.depth,0,ve,Be,oe.data);else if(_.isFramebufferTexture){if(ce)if(N)t.texStorage2D(s.TEXTURE_2D,Ie,Ne,oe.width,oe.height);else{let de=oe.width,ne=oe.height;for(let Ue=0;Ue<Ie;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,Ne,de,ne,0,ve,Be,null),de>>=1,ne>>=1}}else if(Ze.length>0){if(N&&ce){let de=Z(Ze[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Ne,de.width,de.height)}for(let de=0,ne=Ze.length;de<ne;de++)pe=Ze[de],N?_e&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ve,Be,pe):t.texImage2D(s.TEXTURE_2D,de,Ne,ve,Be,pe);_.generateMipmaps=!1}else if(N){if(ce){let de=Z(oe);t.texStorage2D(s.TEXTURE_2D,Ie,Ne,de.width,de.height)}_e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Be,oe)}else t.texImage2D(s.TEXTURE_2D,0,Ne,ve,Be,oe);m(_)&&p(z),Me.__version=H.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ie(w,_,U){if(_.image.length!==6)return;let z=Oe(w,_),Q=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+U);let H=n.get(Q);if(Q.version!==H.__version||z===!0){t.activeTexture(s.TEXTURE0+U);let Me=it.getPrimaries(it.workingColorSpace),ue=_.colorSpace===gi?null:it.getPrimaries(_.colorSpace),Re=_.colorSpace===gi||Me===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let De=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let ne=0;ne<6;ne++)!De&&!oe?ve[ne]=x(_.image[ne],!0,i.maxCubemapSize):ve[ne]=oe?_.image[ne].image:_.image[ne],ve[ne]=He(_,ve[ne]);let Be=ve[0],Ne=r.convert(_.format,_.colorSpace),pe=r.convert(_.type),Ze=b(_.internalFormat,Ne,pe,_.colorSpace),N=_.isVideoTexture!==!0,ce=H.__version===void 0||z===!0,_e=Q.dataReady,Ie=R(_,Be);ye(s.TEXTURE_CUBE_MAP,_);let de;if(De){N&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Ze,Be.width,Be.height);for(let ne=0;ne<6;ne++){de=ve[ne].mipmaps;for(let Ue=0;Ue<de.length;Ue++){let qe=de[Ue];_.format!==gn?Ne!==null?N?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,0,0,qe.width,qe.height,Ne,qe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,Ze,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,0,0,qe.width,qe.height,Ne,pe,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue,Ze,qe.width,qe.height,0,Ne,pe,qe.data)}}}else{if(de=_.mipmaps,N&&ce){de.length>0&&Ie++;let ne=Z(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,Ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){N?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ve[ne].width,ve[ne].height,Ne,pe,ve[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ze,ve[ne].width,ve[ne].height,0,Ne,pe,ve[ne].data);for(let Ue=0;Ue<de.length;Ue++){let ct=de[Ue].image[ne].image;N?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,0,0,ct.width,ct.height,Ne,pe,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,Ze,ct.width,ct.height,0,Ne,pe,ct.data)}}else{N?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,pe,ve[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ze,Ne,pe,ve[ne]);for(let Ue=0;Ue<de.length;Ue++){let qe=de[Ue];N?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,0,0,Ne,pe,qe.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ue+1,Ze,Ne,pe,qe.image[ne])}}}m(_)&&p(s.TEXTURE_CUBE_MAP),H.__version=Q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ee(w,_,U,z,Q,H){let Me=r.convert(U.format,U.colorSpace),ue=r.convert(U.type),Re=b(U.internalFormat,Me,ue,U.colorSpace),De=n.get(_),oe=n.get(U);if(oe.__renderTarget=_,!De.__hasExternalTextures){let ve=Math.max(1,_.width>>H),Be=Math.max(1,_.height>>H);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,H,Re,ve,Be,_.depth,0,Me,ue,null):t.texImage2D(Q,H,Re,ve,Be,0,Me,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),se(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,z,Q,oe.__webglTexture,0,ge(_)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,z,Q,oe.__webglTexture,H),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(w,_,U){if(s.bindRenderbuffer(s.RENDERBUFFER,w),_.depthBuffer){let z=_.depthTexture,Q=z&&z.isDepthTexture?z.type:null,H=y(_.stencilBuffer,Q),Me=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=ge(_);se(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,H,_.width,_.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,H,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,H,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,w)}else{let z=_.textures;for(let Q=0;Q<z.length;Q++){let H=z[Q],Me=r.convert(H.format,H.colorSpace),ue=r.convert(H.type),Re=b(H.internalFormat,Me,ue,H.colorSpace),De=ge(_);U&&se(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Re,_.width,_.height):se(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,Re,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Re,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let Q=z.__webglTexture,H=ge(_);if(_.depthTexture.format===Hs)se(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(_.depthTexture.format===ar)se(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ae(w){let _=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let z=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",Q)};z.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=z}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let z=w.texture.mipmaps;z&&z.length>0?we(_.__webglFramebuffer[0],w):we(_.__webglFramebuffer,w)}else if(U){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=s.createRenderbuffer(),Le(_.__webglDepthbuffer[z],w,!1);else{let Q=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer[z];s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,H)}}else{let z=w.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Le(_.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,H=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,H),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,H)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(w,_,U){let z=n.get(w);_!==void 0&&Ee(z.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Ae(w)}function P(w){let _=w.texture,U=n.get(w),z=n.get(_);w.addEventListener("dispose",I);let Q=w.textures,H=w.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(z.__webglTexture===void 0&&(z.__webglTexture=s.createTexture()),z.__version=_.version,a.memory.textures++),H){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let Re=0;Re<_.mipmaps.length;Re++)U.__webglFramebuffer[ue][Re]=s.createFramebuffer()}else U.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)U.__webglFramebuffer[ue]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(Me)for(let ue=0,Re=Q.length;ue<Re;ue++){let De=n.get(Q[ue]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&se(w)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){let Re=Q[ue];U.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);let De=r.convert(Re.format,Re.colorSpace),oe=r.convert(Re.type),ve=b(Re.internalFormat,De,oe,Re.colorSpace,w.isXRRenderTarget===!0),Be=ge(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,ve,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture),ye(s.TEXTURE_CUBE_MAP,_);for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)Ee(U.__webglFramebuffer[ue][Re],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Re);else Ee(U.__webglFramebuffer[ue],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(_)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ue=0,Re=Q.length;ue<Re;ue++){let De=Q[ue],oe=n.get(De),ve=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,oe.__webglTexture),ye(ve,De),Ee(U.__webglFramebuffer,w,De,s.COLOR_ATTACHMENT0+ue,ve,0),m(De)&&p(ve)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ue=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,z.__webglTexture),ye(ue,_),_.mipmaps&&_.mipmaps.length>0)for(let Re=0;Re<_.mipmaps.length;Re++)Ee(U.__webglFramebuffer[Re],w,_,s.COLOR_ATTACHMENT0,ue,Re);else Ee(U.__webglFramebuffer,w,_,s.COLOR_ATTACHMENT0,ue,0);m(_)&&p(ue),t.unbindTexture()}w.depthBuffer&&Ae(w)}function ee(w){let _=w.textures;for(let U=0,z=_.length;U<z;U++){let Q=_[U];if(m(Q)){let H=E(w),Me=n.get(Q).__webglTexture;t.bindTexture(H,Me),p(H),t.unbindTexture()}}}let K=[],J=[];function $(w){if(w.samples>0){if(se(w)===!1){let _=w.textures,U=w.width,z=w.height,Q=s.COLOR_BUFFER_BIT,H=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(w),ue=_.length>1;if(ue)for(let De=0;De<_.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Re=w.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let De=0;De<_.length;De++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);let oe=n.get(_[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,U,z,0,0,U,z,Q,s.NEAREST),c===!0&&(K.length=0,J.length=0,K.push(s.COLOR_ATTACHMENT0+De),w.depthBuffer&&w.resolveDepthBuffer===!1&&(K.push(H),J.push(H),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,J)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let De=0;De<_.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);let oe=n.get(_[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let _=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function ge(w){return Math.min(i.maxSamples,w.samples)}function se(w){let _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xe(w){let _=a.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function He(w,_){let U=w.colorSpace,z=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==Vt&&U!==gi&&(it.getTransfer(U)===dt?(z!==gn||Q!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function Z(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=Xe,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=se}function oy(s,e){function t(n,i=gi){let r,a=it.getTransfer(i);if(n===kn)return s.UNSIGNED_BYTE;if(n===Zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return s.BYTE;if(n===Wc)return s.SHORT;if(n===ir)return s.UNSIGNED_SHORT;if(n===Ko)return s.INT;if(n===zi)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===sr)return s.HALF_FLOAT;if(n===Yc)return s.ALPHA;if(n===Kc)return s.RGB;if(n===gn)return s.RGBA;if(n===Hs)return s.DEPTH_COMPONENT;if(n===ar)return s.DEPTH_STENCIL;if(n===jo)return s.RED;if(n===Jo)return s.RED_INTEGER;if(n===Zc)return s.RG;if(n===Qo)return s.RG_INTEGER;if(n===el)return s.RGBA_INTEGER;if(n===xa||n===_a||n===ya||n===va)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tl||n===nl||n===il||n===sl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===al)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ol)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ll)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ml||n===Sl||n===El)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ml)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wl||n===Tl||n===Al||n===Rl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new Ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends Gn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new _h,p={},E=t.getContextAttributes(),b=null,y=null,R=[],A=[],I=new ae,D=null,M=new Ct;M.viewport=new lt;let S=new Ct;S.viewport=new lt;let L=[M,S],B=new Uo,k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=R[j];return ie===void 0&&(ie=new Xs,R[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=R[j];return ie===void 0&&(ie=new Xs,R[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=R[j];return ie===void 0&&(ie=new Xs,R[j]=ie),ie.getHandSpace()};function q(j){let ie=A.indexOf(j.inputSource);if(ie===-1)return;let Ee=R[ie];Ee!==void 0&&(Ee.update(j.inputSource,j.frame,l||a),Ee.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",te);for(let j=0;j<R.length;j++){let ie=A[j];ie!==null&&(A[j]=null,R[j].disconnect(ie))}k=null,X=null,m.reset();for(let j in p)delete p[j];e.setRenderTarget(b),f=null,d=null,h=null,i=null,y=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",te),E.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Le=null,we=null;E.depth&&(we=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=E.stencil?ar:Hs,Le=E.stencil?rr:zi);let Ae={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ae),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Wn(d.textureWidth,d.textureHeight,{format:gn,type:kn,depthTexture:new jr(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wn(f.framebufferWidth,f.framebufferHeight,{format:gn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(j){for(let ie=0;ie<j.removed.length;ie++){let Ee=j.removed[ie],Le=A.indexOf(Ee);Le>=0&&(A[Le]=null,R[Le].disconnect(Ee))}for(let ie=0;ie<j.added.length;ie++){let Ee=j.added[ie],Le=A.indexOf(Ee);if(Le===-1){for(let Ae=0;Ae<R.length;Ae++)if(Ae>=A.length){A.push(Ee),Le=Ae;break}else if(A[Ae]===null){A[Ae]=Ee,Le=Ae;break}if(Le===-1)break}let we=R[Le];we&&we.connect(Ee)}}let V=new C,le=new C;function me(j,ie,Ee){V.setFromMatrixPosition(ie.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);let Le=V.distanceTo(le),we=ie.projectionMatrix.elements,Ae=Ee.projectionMatrix.elements,Xe=we[14]/(we[10]-1),P=we[14]/(we[10]+1),ee=(we[9]+1)/we[5],K=(we[9]-1)/we[5],J=(we[8]-1)/we[0],$=(Ae[8]+1)/Ae[0],ge=Xe*J,se=Xe*$,xe=Le/(-J+$),He=xe*-J;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(He),j.translateZ(xe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let Z=Xe+xe,w=P+xe,_=ge-He,U=se+(Le-He),z=ee*P/w*Z,Q=K*P/w*Z;j.projectionMatrix.makePerspective(_,U,z,Q,Z,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function he(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ie=j.near,Ee=j.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),B.near=S.near=M.near=ie,B.far=S.far=M.far=Ee,(k!==B.near||X!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),k=B.near,X=B.far),B.layers.mask=j.layers.mask|6,M.layers.mask=B.layers.mask&3,S.layers.mask=B.layers.mask&5;let Le=j.parent,we=B.cameras;he(B,Le);for(let Ae=0;Ae<we.length;Ae++)he(we[Ae],Le);we.length===2?me(B,M,S):B.projectionMatrix.copy(M.projectionMatrix),ye(j,B,Le)};function ye(j,ie,Ee){Ee===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(Ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ns*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return p[j]};let Oe=null;function je(j,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){let Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Le=!1;Ee.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let P=0;P<Ee.length;P++){let ee=Ee[P],K=null;if(f!==null)K=f.getViewport(ee);else{let $=h.getViewSubImage(d,ee);K=$.viewport,P===0&&(e.setRenderTargetTextures(y,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(y))}let J=L[P];J===void 0&&(J=new Ct,J.layers.enable(P),J.viewport=new lt,L[P]=J),J.matrix.fromArray(ee.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ee.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(K.x,K.y,K.width,K.height),P===0&&(B.matrix.copy(J.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(J)}let we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let P=h.getDepthInformation(Ee[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(we&&we.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let P=0;P<Ee.length;P++){let ee=Ee[P].camera;if(ee){let K=p[ee];K||(K=new Jr,p[ee]=K);let J=h.getCameraImage(ee);K.sourceTexture=J}}}}for(let Ee=0;Ee<R.length;Ee++){let Le=A[Ee],we=R[Ee];Le!==null&&we!==void 0&&we.update(Le,ie,l||a)}Oe&&Oe(j,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Ge=new Af;Ge.setAnimationLoop(je),this.setAnimationLoop=function(j){Oe=j},this.dispose=function(){}}},ds=new Sn,hy=new Ke;function uy(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,th(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),b=E.envMap,y=E.envMapRotation;b&&(m.envMap.value=b,ds.copy(y),ds.x*=-1,ds.y*=-1,ds.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(hy.makeRotationFromEuler(ds)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dy(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){let y=b.program;n.uniformBlockBinding(E,y)}function l(E,b){let y=i[E.id];y===void 0&&(g(E),y=u(E),i[E.id]=y,E.addEventListener("dispose",m));let R=b.program;n.updateUBOMapping(E,R);let A=e.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function u(E){let b=h();E.__bindingPointIndex=b;let y=s.createBuffer(),R=E.__size,A=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,y),y}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){let b=i[E.id],y=E.uniforms,R=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,I=y.length;A<I;A++){let D=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,S=D.length;M<S;M++){let L=D[M];if(f(L,A,M,R)===!0){let B=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],X=0;for(let q=0;q<k.length;q++){let Y=k[q],te=x(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,B+X,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,X),X+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,b,y,R){let A=E.value,I=b+"_"+y;if(R[I]===void 0)return typeof A=="number"||typeof A=="boolean"?R[I]=A:R[I]=A.clone(),!0;{let D=R[I];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[I]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(E){let b=E.uniforms,y=0,R=16;for(let I=0,D=b.length;I<D;I++){let M=Array.isArray(b[I])?b[I]:[b[I]];for(let S=0,L=M.length;S<L;S++){let B=M[S],k=Array.isArray(B.value)?B.value:[B.value];for(let X=0,q=k.length;X<q;X++){let Y=k[X],te=x(Y),V=y%R,le=V%te.boundary,me=V+le;y+=le,me!==0&&R-me<te.storage&&(y+=R-me),B.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=te.storage}}}let A=y%R;return A>0&&(y+=R-A),E.__size=y,E.__cache={},this}function x(E){let b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){let b=E.target;b.removeEventListener("dispose",m);let y=a.indexOf(b.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Nl=class{constructor(e={}){let{canvas:t=qd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=xt;let A=0,I=0,D=null,M=-1,S=null,L=new lt,B=new lt,k=null,X=new Ce(0),q=0,Y=t.width,te=t.height,V=1,le=null,me=null,he=new lt(0,0,Y,te),ye=new lt(0,0,Y,te),Oe=!1,je=new Ks,Ge=!1,j=!1,ie=new Ke,Ee=new C,Le=new lt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Xe(){return D===null?V:1}let P=n;function ee(T,F){return t.getContext(T,F)}try{let T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fo}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",de,!1),P===null){let F="webgl2";if(P=ee(F,T),P===null)throw ee(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let K,J,$,ge,se,xe,He,Z,w,_,U,z,Q,H,Me,ue,Re,De,oe,ve,Be,Ne,pe,Ze;function N(){K=new Ix(P),K.init(),Ne=new oy(P,K),J=new Sx(P,K,e,Ne),$=new ry(P,K),J.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),ge=new Dx(P),se=new q_,xe=new ay(P,K,$,se,J,Ne,ge),He=new wx(y),Z=new Cx(y),w=new km(P),pe=new bx(P,w),_=new Px(P,w,ge,pe),U=new Ux(P,_,w,ge),oe=new Nx(P,J,xe),ue=new Ex(se),z=new X_(y,He,Z,K,J,pe,ue),Q=new uy(y,se),H=new K_,Me=new ey(K),De=new vx(y,He,Z,$,U,f,c),Re=new iy(y,U,J),Ze=new dy(P,ge,J,$),ve=new Mx(P,K,ge),Be=new Lx(P,K,ge),ge.programs=z.programs,y.capabilities=J,y.extensions=K,y.properties=se,y.renderLists=H,y.shadowMap=Re,y.state=$,y.info=ge}N();let ce=new yh(y,P);this.xr=ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=K.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=K.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(Y,te,!1))},this.getSize=function(T){return T.set(Y,te)},this.setSize=function(T,F,G=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,te=F,t.width=Math.floor(T*V),t.height=Math.floor(F*V),G===!0&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Y*V,te*V).floor()},this.setDrawingBufferSize=function(T,F,G){Y=T,te=F,V=G,t.width=Math.floor(T*G),t.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,F,G,W){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,F,G,W),$.viewport(L.copy(he).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(ye)},this.setScissor=function(T,F,G,W){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,F,G,W),$.scissor(B.copy(ye).multiplyScalar(V).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){$.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){me=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,G=!0){let W=0;if(T){let O=!1;if(D!==null){let fe=D.texture.format;O=fe===el||fe===Qo||fe===Jo}if(O){let fe=D.texture.type,Te=fe===kn||fe===zi||fe===ir||fe===rr||fe===Zo||fe===$o,Fe=De.getClearColor(),Pe=De.getClearAlpha(),Ve=Fe.r,We=Fe.g,ke=Fe.b;Te?(g[0]=Ve,g[1]=We,g[2]=ke,g[3]=Pe,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=Ve,x[1]=We,x[2]=ke,x[3]=Pe,P.clearBufferiv(P.COLOR,0,x))}else W|=P.COLOR_BUFFER_BIT}F&&(W|=P.DEPTH_BUFFER_BIT),G&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",de,!1),De.dispose(),H.dispose(),Me.dispose(),se.dispose(),He.dispose(),Z.dispose(),U.dispose(),pe.dispose(),Ze.dispose(),z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ln),ce.removeEventListener("sessionend",Ra),re.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=ge.autoReset,F=Re.enabled,G=Re.autoUpdate,W=Re.needsUpdate,O=Re.type;N(),ge.autoReset=T,Re.enabled=F,Re.autoUpdate=G,Re.needsUpdate=W,Re.type=O}function de(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ne(T){let F=T.target;F.removeEventListener("dispose",ne),Ue(F)}function Ue(T){qe(T),se.remove(T)}function qe(T){let F=se.get(T).programs;F!==void 0&&(F.forEach(function(G){z.releaseProgram(G)}),T.isShaderMaterial&&z.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,W,O,fe){F===null&&(F=we);let Te=O.isMesh&&O.matrixWorld.determinant()<0,Fe=ap(T,F,G,W,O);$.setMaterial(W,Te);let Pe=G.index,Ve=1;if(W.wireframe===!0){if(Pe=_.getWireframeAttribute(G),Pe===void 0)return;Ve=2}let We=G.drawRange,ke=G.attributes.position,nt=We.start*Ve,ft=(We.start+We.count)*Ve;fe!==null&&(nt=Math.max(nt,fe.start*Ve),ft=Math.min(ft,(fe.start+fe.count)*Ve)),Pe!==null?(nt=Math.max(nt,0),ft=Math.min(ft,Pe.count)):ke!=null&&(nt=Math.max(nt,0),ft=Math.min(ft,ke.count));let Tt=ft-nt;if(Tt<0||Tt===1/0)return;pe.setup(O,W,Fe,G,Pe);let bt,mt=ve;if(Pe!==null&&(bt=w.get(Pe),mt=Be,mt.setIndex(bt)),O.isMesh)W.wireframe===!0?($.setLineWidth(W.wireframeLinewidth*Xe()),mt.setMode(P.LINES)):mt.setMode(P.TRIANGLES);else if(O.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),$.setLineWidth(ze*Xe()),O.isLineSegments?mt.setMode(P.LINES):O.isLineLoop?mt.setMode(P.LINE_LOOP):mt.setMode(P.LINE_STRIP)}else O.isPoints?mt.setMode(P.POINTS):O.isSprite&&mt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Gs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))mt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let ze=O._multiDrawStarts,Mt=O._multiDrawCounts,ot=O._multiDrawCount,cn=Pe?w.get(Pe).bytesPerElement:1,ys=se.get(W).currentProgram.getUniforms();for(let hn=0;hn<ot;hn++)ys.setValue(P,"_gl_DrawID",hn),mt.render(ze[hn]/cn,Mt[hn])}else if(O.isInstancedMesh)mt.renderInstances(nt,Tt,O.count);else if(G.isInstancedBufferGeometry){let ze=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mt=Math.min(G.instanceCount,ze);mt.renderInstances(nt,Tt,Mt)}else mt.render(nt,Tt)};function ct(T,F,G){T.transparent===!0&&T.side===zt&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,Wi(T,F,G),T.side=On,T.needsUpdate=!0,Wi(T,F,G),T.side=zt):Wi(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),p=Me.get(G),p.init(F),b.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let W=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let fe=O.material;if(fe)if(Array.isArray(fe))for(let Te=0;Te<fe.length;Te++){let Fe=fe[Te];ct(Fe,G,O),W.add(Fe)}else ct(fe,G,O),W.add(fe)}),p=b.pop(),W},this.compileAsync=function(T,F,G=null){let W=this.compile(T,F,G);return new Promise(O=>{function fe(){if(W.forEach(function(Te){se.get(Te).currentProgram.isReady()&&W.delete(Te)}),W.size===0){O(T);return}setTimeout(fe,10)}K.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let at=null;function Pn(T){at&&at(T)}function ln(){re.stop()}function Ra(){re.start()}let re=new Af;re.setAnimationLoop(Pn),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(T){at=T,ce.setAnimationLoop(T),T===null?re.stop():re.start()},ce.addEventListener("sessionstart",ln),ce.addEventListener("sessionend",Ra),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(F),F=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,D),p=Me.get(T,b.length),p.init(F),b.push(p),ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),je.setFromProjectionMatrix(ie,Fn,F.reversedDepth),j=this.localClippingEnabled,Ge=ue.init(this.clippingPlanes,j),m=H.get(T,E.length),m.init(),E.push(m),ce.enabled===!0&&ce.isPresenting===!0){let fe=y.xr.getDepthSensingMesh();fe!==null&&ht(fe,F,-1/0,y.sortObjects)}ht(T,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,me),Ae=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ae&&De.addToRenderList(m,T),this.info.render.frame++,Ge===!0&&ue.beginShadows();let G=p.state.shadowsArray;Re.render(G,T,F),Ge===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){let fe=F.cameras;if(O.length>0)for(let Te=0,Fe=fe.length;Te<Fe;Te++){let Pe=fe[Te];xn(W,O,T,Pe)}Ae&&De.render(T);for(let Te=0,Fe=fe.length;Te<Fe;Te++){let Pe=fe[Te];st(m,T,Pe,Pe.viewport)}}else O.length>0&&xn(W,O,T,F),Ae&&De.render(T),st(m,T,F);D!==null&&I===0&&(xe.updateMultisampleRenderTarget(D),xe.updateRenderTargetMipmap(D)),T.isScene===!0&&T.onAfterRender(y,T,F),pe.resetDefaultState(),M=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],Ge===!0&&ue.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function ht(T,F,G,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||je.intersectsSprite(T)){W&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);let Te=U.update(T),Fe=T.material;Fe.visible&&m.push(T,Te,Fe,G,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||je.intersectsObject(T))){let Te=U.update(T),Fe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Le.copy(Te.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(ie)),Array.isArray(Fe)){let Pe=Te.groups;for(let Ve=0,We=Pe.length;Ve<We;Ve++){let ke=Pe[Ve],nt=Fe[ke.materialIndex];nt&&nt.visible&&m.push(T,Te,nt,G,Le.z,ke)}}else Fe.visible&&m.push(T,Te,Fe,G,Le.z,null)}}let fe=T.children;for(let Te=0,Fe=fe.length;Te<Fe;Te++)ht(fe[Te],F,G,W)}function st(T,F,G,W){let O=T.opaque,fe=T.transmissive,Te=T.transparent;p.setupLightsView(G),Ge===!0&&ue.setGlobalState(y.clippingPlanes,G),W&&$.viewport(L.copy(W)),O.length>0&&Qn(O,F,G),fe.length>0&&Qn(fe,F,G),Te.length>0&&Qn(Te,F,G),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function xn(T,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Wn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?sr:kn,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let fe=p.state.transmissionRenderTarget[W.id],Te=W.viewport||L;fe.setSize(Te.z*y.transmissionResolutionScale,Te.w*y.transmissionResolutionScale);let Fe=y.getRenderTarget(),Pe=y.getActiveCubeFace(),Ve=y.getActiveMipmapLevel();y.setRenderTarget(fe),y.getClearColor(X),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Ae&&De.render(G);let We=y.toneMapping;y.toneMapping=mi;let ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),Ge===!0&&ue.setGlobalState(y.clippingPlanes,W),Qn(T,G,W),xe.updateMultisampleRenderTarget(fe),xe.updateRenderTargetMipmap(fe),K.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let ft=0,Tt=F.length;ft<Tt;ft++){let bt=F[ft],mt=bt.object,ze=bt.geometry,Mt=bt.material,ot=bt.group;if(Mt.side===zt&&mt.layers.test(W.layers)){let cn=Mt.side;Mt.side=en,Mt.needsUpdate=!0,_r(mt,G,W,ze,Mt,ot),Mt.side=cn,Mt.needsUpdate=!0,nt=!0}}nt===!0&&(xe.updateMultisampleRenderTarget(fe),xe.updateRenderTargetMipmap(fe))}y.setRenderTarget(Fe,Pe,Ve),y.setClearColor(X,q),ke!==void 0&&(W.viewport=ke),y.toneMapping=We}function Qn(T,F,G){let W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,fe=T.length;O<fe;O++){let Te=T[O],Fe=Te.object,Pe=Te.geometry,Ve=Te.group,We=Te.material;We.allowOverride===!0&&W!==null&&(We=W),Fe.layers.test(G.layers)&&_r(Fe,F,G,Pe,We,Ve)}}function _r(T,F,G,W,O,fe){T.onBeforeRender(y,F,G,W,O,fe),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(y,F,G,W,T,fe),O.transparent===!0&&O.side===zt&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,T,fe),O.side=On,O.needsUpdate=!0,y.renderBufferDirect(G,F,W,O,T,fe),O.side=zt):y.renderBufferDirect(G,F,W,O,T,fe),T.onAfterRender(y,F,G,W,O,fe)}function Wi(T,F,G){F.isScene!==!0&&(F=we);let W=se.get(T),O=p.state.lights,fe=p.state.shadowsArray,Te=O.state.version,Fe=z.getParameters(T,O.state,fe,F,G),Pe=z.getProgramCacheKey(Fe),Ve=W.programs;W.environment=T.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(T.isMeshStandardMaterial?Z:He).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",ne),Ve=new Map,W.programs=Ve);let We=Ve.get(Pe);if(We!==void 0){if(W.currentProgram===We&&W.lightsStateVersion===Te)return fu(T,Fe),We}else Fe.uniforms=z.getUniforms(T),T.onBeforeCompile(Fe,y),We=z.acquireProgram(Fe,Pe),Ve.set(Pe,We),W.uniforms=Fe.uniforms;let ke=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=ue.uniform),fu(T,Fe),W.needsLights=lp(T),W.lightsStateVersion=Te,W.needsLights&&(ke.ambientLightColor.value=O.state.ambient,ke.lightProbe.value=O.state.probe,ke.directionalLights.value=O.state.directional,ke.directionalLightShadows.value=O.state.directionalShadow,ke.spotLights.value=O.state.spot,ke.spotLightShadows.value=O.state.spotShadow,ke.rectAreaLights.value=O.state.rectArea,ke.ltc_1.value=O.state.rectAreaLTC1,ke.ltc_2.value=O.state.rectAreaLTC2,ke.pointLights.value=O.state.point,ke.pointLightShadows.value=O.state.pointShadow,ke.hemisphereLights.value=O.state.hemi,ke.directionalShadowMap.value=O.state.directionalShadowMap,ke.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ke.spotShadowMap.value=O.state.spotShadowMap,ke.spotLightMatrix.value=O.state.spotLightMatrix,ke.spotLightMap.value=O.state.spotLightMap,ke.pointShadowMap.value=O.state.pointShadowMap,ke.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=We,W.uniformsList=null,We}function du(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=ur.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function fu(T,F){let G=se.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function ap(T,F,G,W,O){F.isScene!==!0&&(F=we),xe.resetTextureUnits();let fe=F.fog,Te=W.isMeshStandardMaterial?F.environment:null,Fe=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Vt,Pe=(W.isMeshStandardMaterial?Z:He).get(W.envMap||Te),Ve=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,We=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,ft=!!G.morphAttributes.color,Tt=mi;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Tt=y.toneMapping);let bt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mt=bt!==void 0?bt.length:0,ze=se.get(W),Mt=p.state.lights;if(Ge===!0&&(j===!0||T!==S)){let $t=T===S&&W.id===M;ue.setState(W,T,$t)}let ot=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Mt.state.version||ze.outputColorSpace!==Fe||O.isBatchedMesh&&ze.batching===!1||!O.isBatchedMesh&&ze.batching===!0||O.isBatchedMesh&&ze.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ze.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ze.instancing===!1||!O.isInstancedMesh&&ze.instancing===!0||O.isSkinnedMesh&&ze.skinning===!1||!O.isSkinnedMesh&&ze.skinning===!0||O.isInstancedMesh&&ze.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ze.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ze.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ze.instancingMorph===!1&&O.morphTexture!==null||ze.envMap!==Pe||W.fog===!0&&ze.fog!==fe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ue.numPlanes||ze.numIntersection!==ue.numIntersection)||ze.vertexAlphas!==Ve||ze.vertexTangents!==We||ze.morphTargets!==ke||ze.morphNormals!==nt||ze.morphColors!==ft||ze.toneMapping!==Tt||ze.morphTargetsCount!==mt)&&(ot=!0):(ot=!0,ze.__version=W.version);let cn=ze.currentProgram;ot===!0&&(cn=Wi(W,F,O));let ys=!1,hn=!1,yr=!1,St=cn.getUniforms(),_n=ze.uniforms;if($.useProgram(cn.program)&&(ys=!0,hn=!0,yr=!0),W.id!==M&&(M=W.id,hn=!0),ys||S!==T){$.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),St.setValue(P,"projectionMatrix",T.projectionMatrix),St.setValue(P,"viewMatrix",T.matrixWorldInverse);let nn=St.map.cameraPosition;nn!==void 0&&nn.setValue(P,Ee.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&St.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&St.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,hn=!0,yr=!0)}if(O.isSkinnedMesh){St.setOptional(P,O,"bindMatrix"),St.setOptional(P,O,"bindMatrixInverse");let $t=O.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),St.setValue(P,"boneTexture",$t.boneTexture,xe))}O.isBatchedMesh&&(St.setOptional(P,O,"batchingTexture"),St.setValue(P,"batchingTexture",O._matricesTexture,xe),St.setOptional(P,O,"batchingIdTexture"),St.setValue(P,"batchingIdTexture",O._indirectTexture,xe),St.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&St.setValue(P,"batchingColorTexture",O._colorsTexture,xe));let yn=G.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&oe.update(O,G,cn),(hn||ze.receiveShadow!==O.receiveShadow)&&(ze.receiveShadow=O.receiveShadow,St.setValue(P,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(_n.envMap.value=Pe,_n.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(_n.envMapIntensity.value=F.environmentIntensity),hn&&(St.setValue(P,"toneMappingExposure",y.toneMappingExposure),ze.needsLights&&op(_n,yr),fe&&W.fog===!0&&Q.refreshFogUniforms(_n,fe),Q.refreshMaterialUniforms(_n,W,V,te,p.state.transmissionRenderTarget[T.id]),ur.upload(P,du(ze),_n,xe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ur.upload(P,du(ze),_n,xe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&St.setValue(P,"center",O.center),St.setValue(P,"modelViewMatrix",O.modelViewMatrix),St.setValue(P,"normalMatrix",O.normalMatrix),St.setValue(P,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let $t=W.uniformsGroups;for(let nn=0,Gl=$t.length;nn<Gl;nn++){let Xi=$t[nn];Ze.update(Xi,cn),Ze.bind(Xi,cn)}}return cn}function op(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function lp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(T,F,G){let W=se.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),se.get(T.texture).__webglTexture=F,se.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let G=se.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};let cp=P.createFramebuffer();this.setRenderTarget=function(T,F=0,G=0){D=T,A=F,I=G;let W=!0,O=null,fe=!1,Te=!1;if(T){let Pe=se.get(T);if(Pe.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(Pe.__webglFramebuffer===void 0)xe.setupRenderTarget(T);else if(Pe.__hasExternalTextures)xe.rebindTextures(T,se.get(T.texture).__webglTexture,se.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ke=T.depthTexture;if(Pe.__boundDepthTexture!==ke){if(ke!==null&&se.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(T)}}let Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Te=!0);let We=se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[F])?O=We[F][G]:O=We[F],fe=!0):T.samples>0&&xe.useMultisampledRTT(T)===!1?O=se.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?O=We[G]:O=We,L.copy(T.viewport),B.copy(T.scissor),k=T.scissorTest}else L.copy(he).multiplyScalar(V).floor(),B.copy(ye).multiplyScalar(V).floor(),k=Oe;if(G!==0&&(O=cp),$.bindFramebuffer(P.FRAMEBUFFER,O)&&W&&$.drawBuffers(T,O),$.viewport(L),$.scissor(B),$.setScissorTest(k),fe){let Pe=se.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pe.__webglTexture,G)}else if(Te){let Pe=F;for(let Ve=0;Ve<T.textures.length;Ve++){let We=se.get(T.textures[Ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ve,We.__webglTexture,G,Pe)}}else if(T!==null&&G!==0){let Pe=se.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pe.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(T,F,G,W,O,fe,Te,Fe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){$.bindFramebuffer(P.FRAMEBUFFER,Pe);try{let Ve=T.textures[Fe],We=Ve.format,ke=Ve.type;if(!J.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&G>=0&&G<=T.height-O&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Fe),P.readPixels(F,G,W,O,Ne.convert(We),Ne.convert(ke),fe))}finally{let Ve=D!==null?se.get(D).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,W,O,fe,Te,Fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(F>=0&&F<=T.width-W&&G>=0&&G<=T.height-O){$.bindFramebuffer(P.FRAMEBUFFER,Pe);let Ve=T.textures[Fe],We=Ve.format,ke=Ve.type;if(!J.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,nt),P.bufferData(P.PIXEL_PACK_BUFFER,fe.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Fe),P.readPixels(F,G,W,O,Ne.convert(We),Ne.convert(ke),0);let ft=D!==null?se.get(D).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,ft);let Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Yd(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,nt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,fe),P.deleteBuffer(nt),P.deleteSync(Tt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,G=0){let W=Math.pow(2,-G),O=Math.floor(T.image.width*W),fe=Math.floor(T.image.height*W),Te=F!==null?F.x:0,Fe=F!==null?F.y:0;xe.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,Te,Fe,O,fe),$.unbindTexture()};let hp=P.createFramebuffer(),up=P.createFramebuffer();this.copyTextureToTexture=function(T,F,G=null,W=null,O=0,fe=null){fe===null&&(O!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=O,O=0):fe=0);let Te,Fe,Pe,Ve,We,ke,nt,ft,Tt,bt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(G!==null)Te=G.max.x-G.min.x,Fe=G.max.y-G.min.y,Pe=G.isBox3?G.max.z-G.min.z:1,Ve=G.min.x,We=G.min.y,ke=G.isBox3?G.min.z:0;else{let yn=Math.pow(2,-O);Te=Math.floor(bt.width*yn),Fe=Math.floor(bt.height*yn),T.isDataArrayTexture?Pe=bt.depth:T.isData3DTexture?Pe=Math.floor(bt.depth*yn):Pe=1,Ve=0,We=0,ke=0}W!==null?(nt=W.x,ft=W.y,Tt=W.z):(nt=0,ft=0,Tt=0);let mt=Ne.convert(F.format),ze=Ne.convert(F.type),Mt;F.isData3DTexture?(xe.setTexture3D(F,0),Mt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(xe.setTexture2DArray(F,0),Mt=P.TEXTURE_2D_ARRAY):(xe.setTexture2D(F,0),Mt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let ot=P.getParameter(P.UNPACK_ROW_LENGTH),cn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ys=P.getParameter(P.UNPACK_SKIP_PIXELS),hn=P.getParameter(P.UNPACK_SKIP_ROWS),yr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke);let St=T.isDataArrayTexture||T.isData3DTexture,_n=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let yn=se.get(T),$t=se.get(F),nn=se.get(yn.__renderTarget),Gl=se.get($t.__renderTarget);$.bindFramebuffer(P.READ_FRAMEBUFFER,nn.__webglFramebuffer),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,Gl.__webglFramebuffer);for(let Xi=0;Xi<Pe;Xi++)St&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,se.get(T).__webglTexture,O,ke+Xi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,se.get(F).__webglTexture,fe,Tt+Xi)),P.blitFramebuffer(Ve,We,Te,Fe,nt,ft,Te,Fe,P.DEPTH_BUFFER_BIT,P.NEAREST);$.bindFramebuffer(P.READ_FRAMEBUFFER,null),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||T.isRenderTargetTexture||se.has(T)){let yn=se.get(T),$t=se.get(F);$.bindFramebuffer(P.READ_FRAMEBUFFER,hp),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,up);for(let nn=0;nn<Pe;nn++)St?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,yn.__webglTexture,O,ke+nn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yn.__webglTexture,O),_n?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,$t.__webglTexture,fe,Tt+nn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,$t.__webglTexture,fe),O!==0?P.blitFramebuffer(Ve,We,Te,Fe,nt,ft,Te,Fe,P.COLOR_BUFFER_BIT,P.NEAREST):_n?P.copyTexSubImage3D(Mt,fe,nt,ft,Tt+nn,Ve,We,Te,Fe):P.copyTexSubImage2D(Mt,fe,nt,ft,Ve,We,Te,Fe);$.bindFramebuffer(P.READ_FRAMEBUFFER,null),$.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else _n?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Mt,fe,nt,ft,Tt,Te,Fe,Pe,mt,ze,bt.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Mt,fe,nt,ft,Tt,Te,Fe,Pe,mt,bt.data):P.texSubImage3D(Mt,fe,nt,ft,Tt,Te,Fe,Pe,mt,ze,bt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,fe,nt,ft,Te,Fe,mt,ze,bt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,fe,nt,ft,bt.width,bt.height,mt,bt.data):P.texSubImage2D(P.TEXTURE_2D,fe,nt,ft,Te,Fe,mt,ze,bt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ot),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,cn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ys),P.pixelStorei(P.UNPACK_SKIP_ROWS,hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yr),fe===0&&F.generateMipmaps&&P.generateMipmap(Mt),$.unbindTexture()},this.initRenderTarget=function(T){se.get(T).__webglFramebuffer===void 0&&xe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),$.unbindTexture()},this.resetState=function(){A=0,I=0,D=null,$.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}};var Df={type:"change"},Mh={type:"start"},Uf={type:"end"},Fl=new oi,Nf=new bn,fy=Math.cos(70*Ma.DEG2RAD),Ut=new C,on=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6,Ol=class extends ma{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:ki.ROTATE,TWO:ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Qt,this._lastTargetPosition=new C,this._quat=new Qt().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qs,this._sphericalDelta=new Qs,this._scale=1,this._panOffset=new C,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new C,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=my.bind(this),this._onPointerDown=py.bind(this),this._onPointerUp=gy.bind(this),this._onContextMenu=Sy.bind(this),this._onMouseWheel=yy.bind(this),this._onKeyDown=vy.bind(this),this._onTouchStart=by.bind(this),this._onTouchMove=My.bind(this),this._onMouseDown=xy.bind(this),this._onMouseMove=_y.bind(this),this._interceptControlDown=Ey.bind(this),this._interceptControlUp=wy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=pt.NONE}update(e=null){let t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),i<-Math.PI?i+=on:i>Math.PI&&(i-=on),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ut.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Fl.origin.copy(this.object.position),Fl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fl.direction))<fy?this.object.lookAt(this.target):(Nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fl.intersectPlane(Nf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Ut.copy(i).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function py(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function my(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function gy(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Uf),this.state=pt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function xy(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=pt.DOLLY;break;case Bi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=pt.ROTATE}break;case Bi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Mh)}function _y(s){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function yy(s){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(s.preventDefault(),this.dispatchEvent(Mh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Uf))}function vy(s){this.enabled!==!1&&this._handleKeyDown(s)}function by(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=pt.TOUCH_ROTATE;break;case ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=pt.TOUCH_DOLLY_PAN;break;case ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Mh)}function My(s){switch(this._trackPointer(s),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=pt.NONE}}function Sy(s){this.enabled!==!1&&s.preventDefault()}function Ey(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wy(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var qt=6157567,fr=13238271,Sh=16735947;function ms(s,e=1){return new Gt({color:s,transparent:e<1,opacity:e,toneMapped:!1,depthWrite:e>=1})}function Of(s=qt,e=.34){return new Bt({color:s,transparent:!0,opacity:e,toneMapped:!1,depthWrite:!1})}function Hi(s,e=.62,t=.3){return new At({color:s,metalness:e,roughness:t,clearcoat:.85,clearcoatRoughness:.22,envMapIntensity:.45,emissive:199440})}function An(s,e=qt,t=.3,n=28){s.updateMatrixWorld(!0);let i=new Wt(new Zs(s.geometry,n),Of(e,t));return i.renderOrder=2,s.add(i),i}function Ft(s,e,t,n,i){let r=new Se(e,ms(t,.98));return n&&r.position.set(...n),i&&r.rotation.set(...i),s.add(r),r}function Ty(s,e,t,n,i){let r=new yt,a=new Se(new Xt(s,s,e,20,1),t);a.rotation.x=Math.PI/2,r.add(a);let o=new Xt(s*.58,s*.58,e+.012,14,1),c=new Se(o,n);c.rotation.x=Math.PI/2,r.add(c);for(let u of[-1,1]){let h=new Se(new qn(s*.62,s*.045,6,22),i);h.position.z=u*(e*.5+.008),r.add(h)}let l=new Se(new Xt(s*.16,s*.16,e+.03,10),i);return l.rotation.x=Math.PI/2,r.add(l),r}function Bf(s,e,t,n,i,r,a){for(let[o,c]of e){let l=Ty(t,n,i,r,a);l.position.set(o,t,c),s.add(l)}}function Ff(s,e,t,n,i=6){let r=new C(...s),a=new C(...e),o=a.clone().sub(r),c=o.length(),l=new Se(new Xt(t,t,c,i,1),n);return l.position.copy(r).add(a).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new C(0,1,0),o.normalize()),l}function pr(s,e,t=4.6){s.updateMatrixWorld(!0);let n=new Pt().setFromObject(s),i=n.getSize(new C),r=e/Math.max(.001,i.x),a=Math.max(i.x,i.z);return a*r>t&&(r=t/a),s.scale.multiplyScalar(r),s.updateMatrixWorld(!0),n=new Pt().setFromObject(s),s.position.x-=(n.min.x+n.max.x)*.5,s.position.z-=(n.min.z+n.max.z)*.5,s.position.y-=n.min.y,s.updateMatrixWorld(!0),n=new Pt().setFromObject(s),s.userData.displayBox=n.clone(),n}function Ay(){let s=new yt,e=Hi(1320751,.72,.23),t=new At({color:462872,metalness:.6,roughness:.06,transparent:!0,opacity:.86,clearcoat:1,depthWrite:!1}),n=new kt({color:329739,roughness:.92,metalness:.08}),i=new kt({color:4873572,metalness:.95,roughness:.25}),r=ms(qt),a=new Xn;a.moveTo(-2.16,.22),a.lineTo(-2.14,.46),a.quadraticCurveTo(-2.02,.67,-1.62,.72),a.lineTo(-1.1,.82),a.quadraticCurveTo(-.88,1.22,-.3,1.34),a.quadraticCurveTo(.3,1.4,.78,1.16),a.lineTo(1.28,.82),a.quadraticCurveTo(1.82,.72,2.08,.56),a.lineTo(2.15,.3),a.quadraticCurveTo(2.16,.12,1.9,.12),a.lineTo(-1.9,.12),a.quadraticCurveTo(-2.16,.12,-2.16,.22);let o=new li(a,{depth:1.6,bevelEnabled:!0,bevelThickness:.035,bevelSize:.04,bevelSegments:2,curveSegments:18,steps:1});o.translate(0,0,-.8);let c=new Se(o,e);s.add(c),An(c,qt,.28,24);let l=new Xn;l.moveTo(-.78,.99),l.quadraticCurveTo(-.52,1.3,.04,1.36),l.quadraticCurveTo(.55,1.32,.86,.99),l.lineTo(-.78,.99);let u=new li(l,{depth:1.15,bevelEnabled:!0,bevelThickness:.015,bevelSize:.02,bevelSegments:1,curveSegments:14});u.translate(0,0,-.575);let h=new Se(u,t);s.add(h),An(h,9370367,.35,35);for(let f of[-.806,.806])Ft(s,new et(2.45,.024,.014),qt,[-.18,.82,f]),Ft(s,new et(.6,.018,.012),fr,[-1.66,.69,f]),Ft(s,new et(.26,.014,.012),Sh,[1.9,.49,f]);Ft(s,new et(.035,.075,.4),fr,[-2.135,.49,-.53]),Ft(s,new et(.035,.075,.4),fr,[-2.135,.49,.53]),Ft(s,new et(.035,.05,1.16),16732063,[2.14,.48,0]),Ft(s,new et(1.68,.03,1.72),659733,[.25,.11,0]);let d=new Se(new et(.52,.035,1.58),e);d.position.set(1.76,1.12,0),s.add(d),An(d,qt,.42,20);for(let f of[-.56,.56]){let g=new Se(new et(.05,.28,.05),i);g.position.set(1.68,.96,f),s.add(g)}for(let f of[-.44,.44]){let g=new Se(new et(.56,.12,.06),ms(Sh,.55));g.position.set(1.2,.52,f*2.08),s.add(g)}return Bf(s,[[-1.34,-.79],[-1.34,.79],[1.34,-.79],[1.34,.79]],.34,.27,n,i,r),pr(s,3.45,3.9),{group:s,update(){}}}function Ry(){let s=new yt,e=Hi(2569018,.55,.38),t=Hi(4215131,.42,.5),n=new kt({color:461839,metalness:.3,roughness:.8}),i=new At({color:332055,metalness:.5,roughness:.08,transparent:!0,opacity:.86,clearcoat:1,depthWrite:!1}),r=new kt({color:263688,roughness:.94}),a=new kt({color:7041911,metalness:.9,roughness:.3}),o=ms(16756830),c=new Xn;c.moveTo(-2.42,.28),c.lineTo(-2.4,1.48),c.quadraticCurveTo(-2.36,1.92,-1.98,1.98),c.lineTo(-1.02,1.98),c.lineTo(-.78,1.42),c.lineTo(-.6,.78),c.lineTo(-.6,.28),c.lineTo(-2.42,.28);let l=new li(c,{depth:2.16,bevelEnabled:!0,bevelThickness:.035,bevelSize:.04,bevelSegments:2,curveSegments:10});l.translate(0,0,-1.08);let u=new Se(l,e);s.add(u),An(u,qt,.25,24);let h=new Se(new et(.04,.62,1.72),i);h.position.set(-2.39,1.53,0),s.add(h);for(let m of[-1.096,1.096]){let p=new Se(new et(.82,.52,.025),i);p.position.set(-1.52,1.57,m),s.add(p)}let d=new Se(new et(3.25,2.18,2.3),t);d.position.set(.95,1.42,0),s.add(d),An(d,qt,.24,20);let f=new Se(new et(3.32,.08,2.36),n);f.position.set(.95,2.54,0),s.add(f),Ft(s,new et(3.26,.018,.02),16757855,[.95,2.49,-1.16]),Ft(s,new et(3.26,.018,.02),16757855,[.95,2.49,1.16]);for(let m of[-.12,.46,1.04,1.62,2.2])for(let p of[-1.165,1.165]){let E=new Se(new et(.045,1.98,.025),a);E.position.set(m,1.32,p),s.add(E)}Ft(s,new et(.04,.15,1.82),16773327,[-2.425,1.24,0]),Ft(s,new et(.035,.08,.28),fr,[-2.44,.8,-.82]),Ft(s,new et(.035,.08,.28),fr,[-2.44,.8,.82]),Ft(s,new et(.025,.05,.1),16739179,[-2.44,1.72,-.94]),Ft(s,new et(.025,.05,.1),16739179,[-2.44,1.72,.94]),Bf(s,[[-1.94,-1.02],[-1.94,1.02],[1,-1.02],[1,1.02],[1.74,-1.02],[1.74,1.02]],.48,.34,r,a,o);let g=new Se(new et(2.6,.22,.05),n);g.position.set(.35,.46,1.16),s.add(g);let x=g.clone();return x.position.z=-1.16,s.add(x),pr(s,4.15,4.6),{group:s,update(){}}}function Cy(){let s=new yt,e=Hi(1780528,.65,.28),t=new kt({color:461582,metalness:.6,roughness:.55}),n=ms(5046200),i=new At({color:397849,metalness:.65,roughness:.08,transparent:!0,opacity:.84,depthWrite:!1}),r=new Se(new Li(.27,.74,8,16),e);r.rotation.z=Math.PI/2,r.position.y=.9,s.add(r),An(r,5963744,.3,30);let a=new Se(new Ui(.26,16,10),i);a.scale.set(.72,.55,.9),a.position.set(-.2,1.08,0),s.add(a);let o=new Se(new Di(.2,.36,12),e);o.rotation.z=Math.PI/2,o.position.set(-.76,.9,0),s.add(o);let c=[[-.83,-.67],[-.83,.67],[.83,-.67],[.83,.67]];for(let[f,g]of c){let x=Ff([0,.9,0],[f,.9,g],.045,t);s.add(x);let m=new Se(new et(.62,.026,.02),n);m.position.set(f*.56,.93,g*.56),m.rotation.y=-Math.atan2(g,f),s.add(m);let p=new Se(new qn(.36,.018,6,28),n);p.rotation.x=Math.PI/2,p.position.set(f,1.03,g),s.add(p);let E=new yt;E.position.set(f,1.03,g);for(let A=0;A<2;A+=1){let I=new Se(new et(.56,.008,.045),t);I.rotation.y=A*Math.PI*.52,E.add(I)}let b=new Se(new Xt(.055,.055,.09,10),e);E.add(b),E.userData.spin=!0,s.add(E),s.userData.rotors=s.userData.rotors||[],s.userData.rotors.push(E);let y=Ff([f,1.02,g],[f*1.15,.42,g*1.15],.028,t);s.add(y);let R=new Se(new Li(.035,.24,4,8),t);R.rotation.z=Math.PI/2,R.position.set(f*1.15,.23,g*1.15),s.add(R),Ft(s,new et(.11,.025,.02),n,[f*1.15,.2,g*1.15])}let l=new Se(new Ui(.16,14,10),t);l.position.set(-.5,.68,0),s.add(l);let u=new Se(new Xt(.085,.1,.13,16),e);u.rotation.z=Math.PI/2,u.position.set(-.65,.68,0),s.add(u);let h=new Se(new Xt(.065,.065,.02,16),i);h.rotation.z=Math.PI/2,h.position.set(-.72,.68,0),s.add(h),Ft(s,new et(.02,.05,.11),Sh,[-.73,.68,0]),pr(s,2.7,3.4);let d=s.userData.rotors||[];return{group:s,update(f,g,x){if(!x)return;let m=(4+g*.45)*.004;for(let p of d)p.rotation.y+=m}}}function Iy(){let s=new yt,e=Hi(1715511,.76,.22),t=Hi(1979713,.7,.28);t.side=zt;let n=new kt({color:396562,metalness:.55,roughness:.5}),i=ms(qt),r=new At({color:398106,metalness:.7,roughness:.06,transparent:!0,opacity:.86,clearcoat:1,depthWrite:!1}),a=new Se(new Li(.34,2.1,10,20),e);a.rotation.z=Math.PI/2,a.position.set(.16,1.02,0),s.add(a),An(a,qt,.24,32);let o=new Se(new Di(.3,.68,18),e);o.rotation.z=Math.PI/2,o.position.set(-1.63,1.02,0),s.add(o);let c=new Se(new Di(.215,.7,14),e);c.rotation.z=-Math.PI/2,c.position.set(1.75,1.02,0),s.add(c);function l(g,x,m,p,E,b){let y=[x,.9,0,m,.9,g,E,.9,g,p,.9,0,x,.9-b,0,m,.9-b,g,E,.9-b,g,p,.9-b,0],R=[0,1,2,0,2,3,7,6,5,7,5,4,0,4,5,0,5,1,1,5,6,1,6,2,2,6,7,2,7,3,3,7,4,3,4,0],A=new rt;return A.setAttribute("position",new Ye(y,3)),A.setIndex(R),A.computeVertexNormals(),A}for(let g of[-1,1]){let x=new Se(l(2.25*g,-.38,.35,1.1,1.08,.075),t);s.add(x),An(x,qt,.38,22);let m=new Se(l(.92*g,1.35,1.55,1.95,1.9,.055),t);s.add(m),An(m,qt,.26,22);let p=new Se(new Xt(.16,.19,.92,16),n);p.rotation.z=Math.PI/2,p.position.set(.34,.76,g*1.08),s.add(p);let E=new Se(new qn(.185,.024,6,22),i);E.rotation.y=Math.PI/2,E.position.set(.8,.76,g*1.08),s.add(E);let b=new Se(new qn(.17,.016,6,22),i);b.rotation.y=Math.PI/2,b.position.set(-.13,.76,g*1.08),s.add(b),Ft(s,new et(1.45,.018,.015),qt,[.25,.945,g*1.65])}let u=new Xn;u.moveTo(1.24,1.06),u.lineTo(1.88,1.62),u.lineTo(1.98,1.06);let h=new li(u,{depth:.06,bevelEnabled:!1,steps:1,curveSegments:4});h.translate(0,0,-.03);let d=new Se(h,t);s.add(d),An(d,qt,.38,18);let f=new Se(new Ui(.34,18,12),r);return f.scale.set(.86,.44,.72),f.position.set(-.7,1.3,0),s.add(f),Ft(s,new et(.035,.085,.32),fr,[-1.94,.91,0]),Ft(s,new et(1.15,.026,.03),qt,[.2,.73,0]),pr(s,4.3,4.6),{group:s,update(){}}}function Py(s){let e=new yt,t=Hi(2110524,.62,.32),n=new kt({color:528147,metalness:.5,roughness:.55}),i=ms(12185599),r=new At({color:463126,metalness:.7,roughness:.08,transparent:!0,opacity:.8,depthWrite:!1}),a=Math.max(.8,s.length*.5),o=Math.max(.18,Math.min(.9,s.height*.35)),c=new Se(new Li(o,a,10,20),t);c.rotation.z=Math.PI/2,c.position.y=o+s.height*.08,e.add(c),An(c,qt,.3,30);let l=new Se(new Ui(o*.94,16,12),r);l.scale.set(.7,1,1),l.position.set(-a*.5-o*.25,c.position.y,0),e.add(l);for(let d of[-.2,.35]){let f=new Se(new qn(o*1.01,.018,5,28),i);f.rotation.y=Math.PI/2,f.position.set(d*a,c.position.y,0),e.add(f)}for(let d of[-1,1]){let f=new Xn;f.moveTo(.2,0),f.lineTo(1,.24),f.lineTo(.86,0),f.lineTo(.2,0);let g=new li(f,{depth:.035,bevelEnabled:!1,steps:1,curveSegments:4});g.translate(0,0,-.017);let x=new Se(g,t);x.position.set(-.4,c.position.y-o*.18,d*o*.9),x.rotation.x=d*-.08,e.add(x),An(x,qt,.28,16)}let u=new Se(new Xt(o*.96,o*.7,.16,20),n);u.rotation.z=Math.PI/2,u.position.set(a*.55,c.position.y,0),e.add(u);let h=new Se(new qn(o*.72,.025,6,24),i);return h.rotation.y=Math.PI/2,h.position.set(a*.63,c.position.y,0),e.add(h),pr(e,3.1,3.6),{group:e,update(){}}}function Eh(s){switch(s.id){case"truck":return Ry();case"drone":return Cy();case"aircraft":return Iy();case"custom":return Py(s);case"coupe":default:return Ay()}}function wh(s,{preserveMaterials:e=!1}={}){let t=new yt,n=Hi(2110269,.7,.34),i=Of(7599359,.22),r=[],a=0,o=0;s.traverse(c=>{if(c.isLight||c.isCamera){r.push(c);return}if(!c.isMesh)return;a+=1;let l=c.geometry;if(l){l.computeVertexNormals();let u=l.index?l.index.count:l.attributes.position?.count||0;if(o+=u/3,(!e||!c.material)&&(c.material=n),c.castShadow=!1,c.receiveShadow=!1,o<22e3&&l.attributes.position){let h=new Wt(new Zs(l,38),i);h.renderOrder=2,c.add(h)}}});for(let c of r)c.removeFromParent();if(!a)throw new Error("The imported asset contains no triangle meshes.");return s.updateMatrixWorld(!0),t.add(s),pr(t,3.5,4.3),{group:t,update(){}}}function Th(s){s&&s.traverse(e=>{if(e.geometry&&e.geometry.dispose(),e.material){let t=Array.isArray(e.material)?e.material:[e.material];for(let n of t){for(let i of Object.values(n))i&&i.isTexture&&i.__aeroFlowOwned!==!0&&i.dispose();n.dispose()}}})}function Ah(s,e){if(e===$c)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===or||e===ba){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===or)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Bl=class extends wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Nh(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new Kh(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=fi.extractUrlBase(e);a=fi.resolveURL(l,this.path)}else a=fi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Fi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gf){try{a[tt.KHR_BINARY_GLTF]=new Zh(e)}catch(h){i&&i(h);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new nu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:a[h]=new Lh;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[h]=new $h(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[h]=new jh;break;case tt.KHR_MESH_QUANTIZATION:a[h]=new Jh;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Ly(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ph=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ce(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Vt);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Oi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new di(u),l.distance=h;break;case"spot":l=new fa(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Lh=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Gt}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Vt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,xt))}return Promise.all(i)}},Dh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Nh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Fh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Oh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,xt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Bh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},kh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(o[0],o[1],o[2],Vt),Promise.all(r)}},zh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Hh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(o[0],o[1],o[2],Vt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,xt)),Promise.all(r)}},Vh=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Gh=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:At}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Wh=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Xh=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},qh=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Yh=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Kh=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Rn.TRIANGLES&&l.mode!==Rn.TRIANGLE_STRIP&&l.mode!==Rn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let g of h){let x=new Ke,m=new C,p=new Qt,E=new C(1,1,1),b=new Zr(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&E.fromBufferAttribute(c.SCALE,y),b.setMatrixAt(y,x.compose(m,p,E));for(let y in c)if(y==="_COLOR_0"){let R=c[y];b.instanceColor=new Ci(R.array,R.itemSize,R.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);vt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Gf="glTF",Ea=12,kf={JSON:1313821514,BIN:5130562},Zh=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ea),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ea,r=new DataView(e,Ea),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===kf.JSON){let l=new Uint8Array(e,Ea+a,o);this.content=n.decode(l)}else if(c===kf.BIN){let l=Ea+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$h=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=eu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=eu[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=mr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(f)},o,l,Vt,d)})})}},jh=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Jh=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},kl=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,E=1-m,b=p-d+h;for(let y=0;y!==o;y++){let R=a[x+y+o],A=a[x+y+c]*u,I=a[g+y+o],D=a[g+y]*u;r[y]=E*R+b*A+m*I+p*D}return r}},Dy=new Qt,Qh=class extends kl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return Dy.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},mr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zf={9728:Ht,9729:Jt,9984:Yo,9985:nr,9986:cs,9987:Bn},Hf={33071:Hn,33648:zs,10497:Ai},Rh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ny={CUBICSPLINE:void 0,LINEAR:ts,STEP:es},Ch={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Uy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new kt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:On})),s.DefaultMaterial}function gs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fy(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Oy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function By(s){let e,t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ih(t.attributes):e=s.indices+":"+Ih(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ih(s.targets[n]);return e}function Ih(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function tu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ky(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var zy=new Ke,nu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ly,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new ha(this.options.manager):this.textureLoader=new pa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return gs(r,o,i),Jn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(fi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Rh[i.type],o=mr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new _t(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Rh[i.type],l=mr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=t.cache.get(E);b||(x=new l(o,p*f,i.count*f/u),b=new is(x,f/u),t.cache.add(E,b)),m=new Ri(b,c,d%f/u,g)}else o===null?x=new l(i.count*c):x=new l(o,d,i.count*c),m=new _t(x,c,g);if(i.sparse!==void 0){let p=Rh.SCALAR,E=mr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,R=new E(a[1],b,i.sparse.count*p),A=new l(a[2],y,i.sparse.count*c);o!==null&&(m=new _t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,D=R.length;I<D;I++){let M=R[I];if(m.setX(M,A[I*c]),c>=2&&m.setY(M,A[I*c+1]),c>=3&&m.setZ(M,A[I*c+2]),c>=4&&m.setW(M,A[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=zf[d.magFilter]||Jt,u.minFilter=zf[d.minFilter]||Bn,u.wrapS=Hf[d.wrapS]||Ai,u.wrapT=Hf[d.wrapT]||Ai,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ht&&u.minFilter!==Jt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new It(x);m.needsUpdate=!0,d(m)}),t.load(fi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Jn(h,a),h.userData.mimeType=a.mimeType||ky(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new rn,Lt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Bt,Lt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return kt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){let h=i[tt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Vt),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,xt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=zt);let u=r.alphaMode||Ch.OPAQUE;if(u===Ch.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ch.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Gt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Gt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Gt){let h=r.emissiveFactor;o.emissive=new Ce().setRGB(h[0],h[1],h[2],Vt)}return r.emissiveTexture!==void 0&&a!==Gt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,xt)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),Jn(h,r),t.associations.set(h,{materials:e}),r.extensions&&gs(i,h,r),h})}createUniqueName(e){let t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Vf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=By(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Vf(new rt,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Uy(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=a[f],p,E=l[f];if(m.mode===Rn.TRIANGLES||m.mode===Rn.TRIANGLE_STRIP||m.mode===Rn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new qr(x,E):new Se(x,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Rn.TRIANGLE_STRIP?p.geometry=Ah(p.geometry,ba):m.mode===Rn.TRIANGLE_FAN&&(p.geometry=Ah(p.geometry,or));else if(m.mode===Rn.LINES)p=new Wt(x,E);else if(m.mode===Rn.LINE_STRIP)p=new Ii(x,E);else if(m.mode===Rn.LINE_LOOP)p=new $r(x,E);else if(m.mode===Rn.POINTS)p=new En(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Oy(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Jn(p,r),m.extensions&&gs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&gs(i,h[0],r),h[0];let d=new yt;r.extensions&&gs(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(Ma.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new as(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Jn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Ke;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Kr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,E=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",E)),l.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let b=0,y=d.length;b<y;b++){let R=d[b],A=f[b],I=g[b],D=x[b],M=m[b];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();let S=n._createAnimationTracks(R,A,I,D,M);if(S)for(let L=0;L<S.length;L++)p.push(S[L])}let E=new ca(r,void 0,p);return Jn(E,i),E})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,zy)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Ys:l.length>1?u=new yt:l.length===1?u=l[0]:u=new vt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Jn(u,r),r.extensions&&gs(n,u,r),r.matrix!==void 0){let h=new Ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new yt;n.name&&(r.name=i.createUniqueName(n.name)),Jn(r,n),n.extensions&&gs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof Lt||d instanceof It)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];Vi[r.path]===Vi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Vi[r.path]){case Vi.weights:l=Yn;break;case Vi.rotation:l=Kn;break;case Vi.translation:case Vi.scale:l=Zn;break;default:switch(n.itemSize){case 1:l=Yn;break;case 2:case 3:default:l=Zn;break}break}let u=i.interpolation!==void 0?Ny[i.interpolation]:ts,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Vi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=tu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Kn?Qh:kl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Hy(s,e,t){let n=e.attributes,i=new Pt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){let u=tu(mr[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new C,c=new C;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=tu(mr[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new sn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Vf(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=eu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return it.workingColorSpace!==Vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Jn(s,e),Hy(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Fy(s,e.targets,t):s})}var Vy=/^[og]\s*(.+)?/,Gy=/^mtllib /,Wy=/^usemtl /,Xy=/^usemap /,Wf=/\s+/,Xf=new C,iu=new C,qf=new C,Yf=new C,Cn=new C,zl=new Ce;function qy(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:i||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){let i=this.vertices,r=this.object.geometry.normals;Xf.fromArray(i,e),iu.fromArray(i,t),qf.fromArray(i,n),Cn.subVectors(qf,iu),Yf.subVectors(Xf,iu),Cn.cross(Yf),Cn.normalize(),r.push(Cn.x,Cn.y,Cn.z),r.push(Cn.x,Cn.y,Cn.z),r.push(Cn.x,Cn.y,Cn.z)},addColor:function(e,t,n){let i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){let i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,a,o,c,l){let u=this.vertices.length,h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),f=this.parseVertexIndex(n,u);if(this.addVertex(h,d,f),this.addColor(h,d,f),o!==void 0&&o!==""){let g=this.normals.length;h=this.parseNormalIndex(o,g),d=this.parseNormalIndex(c,g),f=this.parseNormalIndex(l,g),this.addNormal(h,d,f)}else this.addFaceNormal(h,d,f);if(i!==void 0&&i!==""){let g=this.uvs.length;h=this.parseUVIndex(i,g),d=this.parseUVIndex(r,g),f=this.parseUVIndex(a,g),this.addUV(h,d,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let n=this.vertices.length,i=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject("",!1),s}var Hl=class extends wn{constructor(e){super(e),this.materials=null}load(e,t,n,i){let r=this,a=new Fi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){let t=new qy;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let n=e.split(`
`),i=[];for(let o=0,c=n.length;o<c;o++){let l=n[o].trimStart();if(l.length===0)continue;let u=l.charAt(0);if(u!=="#")if(u==="v"){let h=l.split(Wf);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(zl.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),xt),t.colors.push(zl.r,zl.g,zl.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){let d=l.slice(1).trim().split(Wf),f=[];for(let x=0,m=d.length;x<m;x++){let p=d[x];if(p.length>0){let E=p.split("/");f.push(E)}}let g=f[0];for(let x=1,m=f.length-1;x<m;x++){let p=f[x],E=f[x+1];t.addFace(g[0],p[0],E[0],g[1],p[1],E[1],g[2],p[2],E[2])}}else if(u==="l"){let h=l.substring(1).trim().split(" "),d=[],f=[];if(l.indexOf("/")===-1)d=h;else for(let g=0,x=h.length;g<x;g++){let m=h[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&f.push(m[1])}t.addLineGeometry(d,f)}else if(u==="p"){let d=l.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((i=Vy.exec(l))!==null){let h=(" "+i[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Wy.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Gy.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Xy.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(i=l.split(" "),i.length>1){let d=i[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;let h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();let r=new yt;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){let l=t.objects[o],u=l.geometry,h=l.materials,d=u.type==="Line",f=u.type==="Points",g=!1;if(u.vertices.length===0)continue;let x=new rt;x.setAttribute("position",new Ye(u.vertices,3)),u.normals.length>0&&x.setAttribute("normal",new Ye(u.normals,3)),u.colors.length>0&&(g=!0,x.setAttribute("color",new Ye(u.colors,3))),u.hasUVIndices===!0&&x.setAttribute("uv",new Ye(u.uvs,2));let m=[];for(let E=0,b=h.length;E<b;E++){let y=h[E],R=y.name+"_"+y.smooth+"_"+g,A=t.materials[R];if(this.materials!==null){if(A=this.materials.create(y.name),d&&A&&!(A instanceof Bt)){let I=new Bt;Lt.prototype.copy.call(I,A),I.color.copy(A.color),A=I}else if(f&&A&&!(A instanceof rn)){let I=new rn({size:10,sizeAttenuation:!1});Lt.prototype.copy.call(I,A),I.color.copy(A.color),I.map=A.map,A=I}}A===void 0&&(d?A=new Bt:f?A=new rn({size:1,sizeAttenuation:!1}):A=new oa,A.name=y.name,A.flatShading=!y.smooth,A.vertexColors=g,t.materials[R]=A),m.push(A)}let p;if(m.length>1){for(let E=0,b=h.length;E<b;E++){let y=h[E];x.addGroup(y.groupStart,y.groupCount,E)}d?p=new Wt(x,m):f?p=new En(x,m):p=new Se(x,m)}else d?p=new Wt(x,m[0]):f?p=new En(x,m[0]):p=new Se(x,m[0]);p.name=l.name,r.add(p)}else if(t.vertices.length>0){let o=new rn({size:1,sizeAttenuation:!1}),c=new rt;c.setAttribute("position",new Ye(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Ye(t.colors,3)),o.vertexColors=!0);let l=new En(c,o);r.add(l)}return r}};var Yy=["obj","glb","gltf"],Zf=".obj,.glb,.gltf,model/obj,model/gltf-binary,model/gltf+json",$f=16*1024*1024,Ky=1179937895,Zy=1313821514,$y=new Set(["KHR_draco_mesh_compression","EXT_meshopt_compression","KHR_texture_basisu"]);function jf(s=""){let e=String(s).split(".").pop()?.toLowerCase();return Yy.includes(e)?e:null}function tn(s,e){let t=new Error(e);return t.code=s,t}function Jf(s){if(s instanceof ArrayBuffer)return s;if(ArrayBuffer.isView(s))return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength);throw tn("INVALID_GLTF","The GLB data is not binary.")}function jy(s){let e=Jf(s);if(e.byteLength<20)throw tn("INVALID_GLTF","The GLB header is incomplete.");let t=new DataView(e);if(t.getUint32(0,!0)!==Ky||t.getUint32(4,!0)!==2)throw tn("INVALID_GLTF","The file is not a glTF 2.0 binary.");let n=12;for(;n+8<=e.byteLength;){let i=t.getUint32(n,!0),r=t.getUint32(n+4,!0),a=n+8;if(a+i>e.byteLength)throw tn("INVALID_GLTF","The GLB chunk table is truncated.");if(r===Zy)try{let o=new Uint8Array(e,a,i),c=new TextDecoder().decode(o).replace(/\0+$/g,"").trim();return JSON.parse(c)}catch{throw tn("INVALID_GLTF","The GLB JSON chunk could not be parsed.")}n=a+i,n%4!==0&&(n+=4-n%4)}throw tn("INVALID_GLTF","The GLB has no JSON chunk.")}function Jy(s){try{let e=String(s).replace(/^\uFEFF/,"").trim();return JSON.parse(e)}catch{throw tn("INVALID_GLTF","The glTF JSON could not be parsed.")}}function Kf(s){let t=(Array.isArray(s?.extensionsRequired)?s.extensionsRequired:[]).filter(r=>$y.has(r));if(t.length>0)throw tn("COMPRESSED_ASSET",`The model requires unsupported compression: ${t.join(", ")}.`);if([...Array.isArray(s?.buffers)?s.buffers:[],...Array.isArray(s?.images)?s.images:[]].find(r=>typeof r?.uri=="string"&&r.uri.length>0&&!r.uri.startsWith("data:")))throw tn("EXTERNAL_RESOURCES","The glTF references external buffers or textures; use a GLB or embed them as data URIs.")}function Qy(s){if(!s)throw tn("INVALID_GLTF","No imported asset was provided.");if(s.format==="glb")Kf(jy(s.data));else if(s.format==="gltf")Kf(Jy(s.data));else if(s.format!=="obj")throw tn("INVALID_GLTF","Unsupported imported asset format.")}function ev(s){let e=new Bl,t=s.format==="glb"?Jf(s.data):String(s.data);return new Promise((n,i)=>{e.parse(t,"",r=>{let a=r?.scene||r?.scenes?.[0];if(!a){i(tn("NO_MESHES","The glTF contains no renderable scene."));return}try{n(wh(a,{preserveMaterials:!0}))}catch(o){i(o)}},r=>{let a=r instanceof Error?r.message:String(r);if(/draco|meshopt|ktx2|basisu/i.test(a)){i(tn("COMPRESSED_ASSET",a));return}i(tn("INVALID_GLTF",a||"The glTF could not be parsed."))})})}async function Qf(s){if(Qy(s),s.format==="obj")try{let e=new Hl().parse(String(s.data));return wh(e)}catch(e){throw e?.code?e:tn("INVALID_OBJ",e instanceof Error?e.message:"The OBJ could not be parsed.")}return ev(s)}var su=[{id:"coupe",name:"GT Coupe",labelKey:"preset.coupe",kindKey:"preset.coupe.kind",cd:.29,length:4.6,width:1.96,height:1.24,mass:1480,areaFactor:.76,accent:"ion"},{id:"truck",name:"Cargo Rig",labelKey:"preset.truck",kindKey:"preset.truck.kind",cd:.72,length:8.4,width:2.48,height:3.5,mass:8200,areaFactor:.9,accent:"plasma"},{id:"drone",name:"Quadrotor",labelKey:"preset.drone",kindKey:"preset.drone.kind",cd:.86,length:1.35,width:1.25,height:.55,mass:4.2,areaFactor:.55,accent:"aurora"},{id:"aircraft",name:"Wing Pod",labelKey:"preset.aircraft",kindKey:"preset.aircraft.kind",cd:.11,length:6.2,width:2.4,height:2.2,mass:3100,areaFactor:.75,accent:"ion"},{id:"custom",name:"Bluff Pod",labelKey:"preset.custom",kindKey:"preset.custom.kind",cd:.55,length:3.2,width:1.6,height:1.4,mass:800,areaFactor:.82,accent:"ghost"}],wa=Object.fromEntries(su.map(s=>[s.id,s]));function xs(s,e={}){let t=wa[s]||wa.coupe;return{id:t.id,name:t.name,labelKey:t.labelKey,kindKey:t.kindKey,cd:t.cd,length:t.length,width:t.width,height:t.height,mass:t.mass,areaFactor:t.areaFactor,accent:t.accent,...e}}function tv(s){return Math.max(.01,s.width*s.height*s.areaFactor)}function Ta(s,e,t=1.225,n=181e-7){let i=Math.max(0,Number(e)||0),r=tv(s),a=.5*t*i*i,o=a*s.cd*r;return{speed:i,area:r,q:a,drag:o,cdA:s.cd*r,power:o*i,reynolds:i*s.length/n,dynamicLoad:o/Math.max(1,s.mass*9.81),density:t}}function ep(s){return Math.min(.95,Math.max(0,s)/1e3)}function xi(s,e=1){if(!Number.isFinite(s))return"\u2014";let t=Math.abs(s);return t>=1e9?`${(s/1e9).toFixed(e)}G`:t>=1e6?`${(s/1e6).toFixed(e)}M`:t>=1e3?`${(s/1e3).toFixed(e)}k`:s.toFixed(t>=100?0:e)}function tp(s){let e=Math.max(0,s||0),t=Math.floor(e/60),n=Math.floor(e%60),i=Math.floor(e*10%10);return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}.${i}`}var Vl={ion:{id:"ion",labelKey:"palette.ion",stops:["#163dff","#27d8ff","#c8ffff"],wake:"#ff5ecb",tone:"#41eaff"},aurora:{id:"aurora",labelKey:"palette.aurora",stops:["#004bff","#25f6c8","#eaff9d"],wake:"#ffb760",tone:"#38ffd0"},plasma:{id:"plasma",labelKey:"palette.plasma",stops:["#5318ff","#ff43c8","#ffd7a1"],wake:"#6ff5ff",tone:"#ff66d4"},ghost:{id:"ghost",labelKey:"palette.ghost",stops:["#3c6178","#9bdff3","#ffffff"],wake:"#83b9ff",tone:"#b9efff"}},nv={coupe:"ion",truck:"plasma",drone:"aurora",aircraft:"ion",custom:"ghost",imported:"ghost"};function iv(s="ion",e=!0,t="coupe",n=0){return e?n>=68?"plasma":nv[t]||"ion":Vl[s]?s:"ion"}function _s(s="ion",e=!0,t="coupe",n=0){return Vl[iv(s,e,t,n)]}var au=Math.PI*2,pS=new C(0,1,0),Gi=5,_i=Gi;function gr(s,e,t){return Math.min(t,Math.max(e,s))}function sv(){let s=document.createElement("canvas");s.width=128,s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,0.85)"),t.addColorStop(.6,"rgba(255,255,255,0.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Pi(s);return n.colorSpace=xt,n}function rv(){let s=document.createElement("canvas");s.width=256,s.height=256;let e=s.getContext("2d"),t=e.createRadialGradient(128,128,10,128,128,128);t.addColorStop(0,"rgba(255,255,255,0.55)"),t.addColorStop(.42,"rgba(255,255,255,0.22)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,256,256);let n=new Pi(s);return n.colorSpace=xt,n}function av(){let s=document.createElement("canvas");s.width=1024,s.height=512;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#02080d"),t.addColorStop(.42,"#071a23"),t.addColorStop(.56,"#12313b"),t.addColorStop(.68,"#07151b"),t.addColorStop(1,"#010305"),e.fillStyle=t,e.fillRect(0,0,1024,512);let n=e.createRadialGradient(260,238,4,260,238,210);n.addColorStop(0,"rgba(122, 250, 255, .95)"),n.addColorStop(.2,"rgba(56, 202, 235, .55)"),n.addColorStop(1,"rgba(10, 60, 80, 0)"),e.fillStyle=n,e.fillRect(0,0,1024,512);let i=e.createRadialGradient(790,285,4,790,285,185);i.addColorStop(0,"rgba(255, 113, 214, .72)"),i.addColorStop(.24,"rgba(166, 60, 169, .38)"),i.addColorStop(1,"rgba(44, 18, 54, 0)"),e.fillStyle=i,e.fillRect(0,0,1024,512);let r=e.createRadialGradient(510,110,3,510,110,140);r.addColorStop(0,"rgba(197, 255, 255, .5)"),r.addColorStop(1,"rgba(20, 60, 80, 0)"),e.fillStyle=r,e.fillRect(0,0,1024,512),e.fillStyle="rgba(148, 252, 255, .09)",e.fillRect(0,302,1024,1),e.fillStyle="rgba(255, 123, 218, .06)",e.fillRect(0,318,1024,1);let a=new Pi(s);return a.mapping=tr,a.colorSpace=xt,a}function ru(s,e="#8ff8ff",t=2.6){let n=document.createElement("canvas");n.width=512,n.height=96;let i=n.getContext("2d");i.clearRect(0,0,512,96),i.font='600 26px "Bahnschrift", "Segoe UI", sans-serif',i.letterSpacing="4px",i.fillStyle=e,i.fillText(s,10,58),i.fillStyle="rgba(105, 240, 255, 0.42)",i.fillRect(10,70,54,1);let r=new Pi(n);r.colorSpace=xt;let a=new qs({map:r,transparent:!0,opacity:.5,depthWrite:!1,depthTest:!1,toneMapped:!1}),o=new Xr(a);return o.scale.set(t,t*.1875,1),o.renderOrder=8,o}function ov(s){let e=new Ni(42,42,1,1);e.rotateX(-Math.PI/2);let t=new fn({uniforms:{uColor:{value:new Ce(s)},uOpacity:{value:1}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform vec3 uColor;
      uniform float uOpacity;
      float gridLine(vec2 p, float scale) {
        vec2 coord = p * scale;
        vec2 grid = abs(fract(coord - 0.5) - 0.5) / max(fwidth(coord), vec2(0.0001));
        return 1.0 - min(min(grid.x, grid.y), 1.0);
      }
      void main() {
        vec2 p = vUv * 42.0;
        float fine = gridLine(p, 2.0);
        float major = gridLine(p, 0.4);
        float dist = length(vUv - 0.5) * 2.0;
        float fade = 1.0 - smoothstep(0.2, 0.92, dist);
        float alpha = (fine * 0.1 + major * 0.28) * fade;
        vec3 col = uColor * (fine * 0.5 + major * 1.25);
        gl_FragColor = vec4(col, alpha * uOpacity);
      }
    `,transparent:!0,depthWrite:!1,blending:mn,toneMapped:!1,side:zt}),n=new Se(e,t);return n.position.y=.006,n.renderOrder=1,n}function lv(){let s=new yt,e=new kt({color:529693,metalness:.72,roughness:.36,emissive:133132}),t=new Gt({color:5369855,transparent:!0,opacity:.3,blending:mn,depthWrite:!1,toneMapped:!1,side:zt}),n=new Bt({color:3324103,transparent:!0,opacity:.18,blending:mn,depthWrite:!1,toneMapped:!1}),i=new Se(new Xt(3.18,3.28,.1,72,1),e);i.position.y=.045,s.add(i);let r=new Se(new Xt(3.04,3.11,.04,72,1),e);r.position.y=.112,s.add(r);for(let h of[1.25,2.25,3.06,3.3]){let d=new Se(new Js(h,h+.012,96),t);d.rotation.x=-Math.PI/2,d.position.y=.118,s.add(d)}let a=[];for(let h=0;h<72;h+=1){let d=h/72*au,f=h%6===0?2.74:2.92,g=3.03;a.push(Math.cos(d)*f,.122,Math.sin(d)*f,Math.cos(d)*g,.122,Math.sin(d)*g)}let o=new rt;o.setAttribute("position",new Ye(a,3)),s.add(new Wt(o,n));let c=[];for(let h=0;h<12;h+=1){let d=h/12*au;c.push(Math.cos(d)*.52,.124,Math.sin(d)*.52,Math.cos(d)*2.75,.124,Math.sin(d)*2.75)}let l=new rt;l.setAttribute("position",new Ye(c,3)),s.add(new Wt(l,n));let u=new Se(new Js(.48,.5,48),t);return u.rotation.x=-Math.PI/2,u.position.y=.123,s.add(u),s}function cv(){let s=new yt,e=new Bt({color:2849934,transparent:!0,opacity:.15,blending:mn,depthWrite:!1,toneMapped:!1}),t=new Bt({color:6682623,transparent:!0,opacity:.28,blending:mn,depthWrite:!1,toneMapped:!1}),n=[],i=4.7,r=5.3,a=10;for(let l=0;l<8;l+=1){let u=l/8*au+Math.PI/8;n.push([Math.cos(u)*r,1.2+Math.sin(u)*i*.72])}for(let l=-8;l<=8;l+=4){let u=[];for(let d=0;d<n.length;d+=1){let[f,g]=n[d],[x,m]=n[(d+1)%n.length];u.push(l,Math.max(.04,g),f,l,Math.max(.04,m),x)}u.push(l,.04,-r,l,.04,r),u.push(l,.04,r,l,3.4,r),u.push(l,.04,-r,l,3.4,-r);let h=new rt;h.setAttribute("position",new Ye(u,3)),s.add(new Wt(h,e))}let o=[];for(let l of[-5.3,5.3])o.push(-8,3.4,l,8,3.4,l);for(let l of[3.4])o.push(-8,l,-5.3,8,l,-5.3),o.push(-8,l,5.3,8,l,5.3);let c=new rt;return c.setAttribute("position",new Ye(o,3)),s.add(new Wt(c,t)),s}function hv(){let e=new Float32Array(2100),t=new Float32Array(700*3),n=new Ce;for(let a=0;a<700;a+=1){e[a*3]=(Math.random()-.5)*34,e[a*3+1]=Math.random()*12+.5,e[a*3+2]=(Math.random()-.5)*24,n.set(a%7===0?4843263:a%11===0?16738511:5215651);let o=.2+Math.random()*.5;t[a*3]=n.r*o,t[a*3+1]=n.g*o,t[a*3+2]=n.b*o}let i=new rt;i.setAttribute("position",new _t(e,3)),i.setAttribute("color",new _t(t,3));let r=new rn({size:.018,vertexColors:!0,transparent:!0,opacity:.5,blending:mn,depthWrite:!1,toneMapped:!1});return new En(i,r)}var ou=class{constructor(e,t,n){this.scene=e,this.count=t,this.glowTexture=n,this.head=new Float32Array(t*3),this.history=new Float32Array(t*Gi*3),this.seed=new Float32Array(t),this.age=new Float32Array(t),this.lastSample=new Float32Array(t),this.body={halfLength:1.6,halfWidth:.9,halfHeight:.7,centerY:.7},this.settings=null,this.dir=new C(1,0,0),this.lateral=new C(0,0,1),this.colors={a:new Ce("#163dff"),b:new Ce("#27d8ff"),c:new Ce("#c8ffff"),d:new Ce("#ff5ecb")},this.tmpColor=new Ce,this.material=new Bt({vertexColors:!0,transparent:!0,opacity:.8,blending:mn,depthWrite:!1,toneMapped:!1}),this.positionArray=new Float32Array(t*_i*2*3),this.colorArray=new Float32Array(t*_i*2*3),this.geometry=new rt,this.geometry.setAttribute("position",new _t(this.positionArray,3)),this.geometry.setAttribute("color",new _t(this.colorArray,3)),this.geometry.attributes.position.setUsage(lr),this.geometry.attributes.color.setUsage(lr),this.lines=new Wt(this.geometry,this.material),this.lines.frustumCulled=!1,this.lines.renderOrder=3,e.add(this.lines),this.headPositions=new Float32Array(t*3),this.headColors=new Float32Array(t*3),this.headGeometry=new rt,this.headGeometry.setAttribute("position",new _t(this.headPositions,3)),this.headGeometry.setAttribute("color",new _t(this.headColors,3)),this.headGeometry.attributes.position.setUsage(lr),this.headGeometry.attributes.color.setUsage(lr),this.headMaterial=new rn({size:.13,map:n,vertexColors:!0,transparent:!0,opacity:.95,alphaTest:.02,blending:mn,depthWrite:!1,toneMapped:!1,sizeAttenuation:!0}),this.points=new En(this.headGeometry,this.headMaterial),this.points.frustumCulled=!1,this.points.renderOrder=4,e.add(this.points)}setPalette(e){this.colors.a.set(e.stops[0]),this.colors.b.set(e.stops[1]),this.colors.c.set(e.stops[2]),this.colors.d.set(e.wake)}setBounds(e){let t=e.getCenter(new C),n=e.getSize(new C);this.body={halfLength:Math.max(.55,n.x*.5),halfWidth:Math.max(.38,n.z*.5),halfHeight:Math.max(.3,n.y*.5),centerY:t.y}}setVisible(e){this.lines.visible=e,this.points.visible=e}reset(e,t){this.settings=e,this.setDirection(e.windAngle);for(let n=0;n<this.count;n+=1)this.spawn(n,t,!0);this.writeGeometry(t)}setDirection(e){let t=e*Math.PI/180;this.dir.set(Math.cos(t),0,Math.sin(t)),this.lateral.set(-Math.sin(t),0,Math.cos(t))}spawn(e,t,n=!1){let i=e*3,r=n?-8.6+Math.random()*16.7:-9.2-Math.random()*1.4,a=(Math.random()*2-1)*3.6,o=.18+Math.pow(Math.random(),.82)*3.95,c=this.dir.x*r+this.lateral.x*a,l=this.dir.z*r+this.lateral.z*a;this.head[i]=c,this.head[i+1]=o,this.head[i+2]=l,this.seed[e]=Math.random(),this.age[e]=0,this.lastSample[e]=t-Math.random()*.045;let u=e*Gi*3;for(let h=0;h<Gi;h+=1){let d=(h+1)*(.1+Math.random()*.05);this.history[u+h*3]=c-this.dir.x*d,this.history[u+h*3+1]=o,this.history[u+h*3+2]=l-this.dir.z*d}}colorFor(e,t,n){let i=gr((e/Math.max(.001,t)-.55)/1.45,0,1);return i<.5?this.tmpColor.copy(this.colors.a).lerp(this.colors.b,i*2):this.tmpColor.copy(this.colors.b).lerp(this.colors.c,(i-.5)*2),n>.015&&this.tmpColor.lerp(this.colors.d,gr(n*1.8,0,.78)),this.tmpColor}update(e,t,n){this.settings=n,this.setDirection(n.windAngle);let i=this.dir,r=this.lateral,a=this.body,o=a.halfLength,c=a.halfWidth,l=a.halfHeight,u=a.centerY,h=n.windSpeed>0?.12+n.windSpeed*.065:0;if(h<=1e-4)return;let d=this.positionArray,f=this.colorArray,g=this.headPositions,x=this.headColors,m=.055,p=this.count;for(let E=0;E<p;E+=1){let b=E*3,y=this.head[b],R=this.head[b+1],A=this.head[b+2],I=y*i.x+A*i.z,D=y*r.x+A*r.z,M=I/(o*1.18+.45),S=(R-u)/(l*1.15+.3),L=D/(c*1.12+.3),B=M*M+S*S+L*L,k=Math.exp(-B*1.6),X=B<1.42,q=D>=0?1:-1,Y=R>=u?1:-1,te=h*(1-.26*k),V=Math.sin(I*.72+t*.82+this.seed[E]*19)*h*.024,le=Math.cos(D*1.07+t*.66+this.seed[E]*23)*h*.018;if(X){let Ae=(1.42-B)*h*.78;V+=q*Ae*.92,le+=Y*Ae*.42,te*=.86}let me=I+o*1.25,he=0;if(me>0){let Ae=Math.exp(-me/(o*1.65+1.2))*Math.exp(-Math.abs(S)*1.1),Xe=Math.sin(me*2.45-t*2.8+this.seed[E]*9);V+=Xe*h*.32*Ae*q,le+=Math.cos(me*1.85-t*2.2+this.seed[E]*7)*h*.13*Ae,te*=1-.12*Ae,he=Ae*.45}R<.2&&(le+=(.2-R)*7),R>4.3&&(le+=(4.3-R)*7);let ye=i.x*te+r.x*V,Oe=i.z*te+r.z*V,je=le;if(y+=ye*e,R+=je*e,A+=Oe*e,I=y*i.x+A*i.z,D=y*r.x+A*r.z,this.age[E]+=e,I>9.5||Math.abs(D)>4.4||R<.03||R>4.75||this.age[E]>15?(this.spawn(E,t,!1),y=this.head[b],R=this.head[b+1],A=this.head[b+2],I=y*i.x+A*i.z,D=y*r.x+A*r.z,he=0,te=h):(this.head[b]=y,this.head[b+1]=R,this.head[b+2]=A),t-this.lastSample[E]>m){this.lastSample[E]=t;let Ae=E*Gi*3;for(let Xe=Gi-1;Xe>0;Xe-=1)this.history[Ae+Xe*3]=this.history[Ae+(Xe-1)*3],this.history[Ae+Xe*3+1]=this.history[Ae+(Xe-1)*3+1],this.history[Ae+Xe*3+2]=this.history[Ae+(Xe-1)*3+2];this.history[Ae]=y,this.history[Ae+1]=R,this.history[Ae+2]=A}let Ge=this.colorFor(te,h,he),j=E*_i*2*3,ie=E*Gi*3,Ee=y,Le=R,we=A;for(let Ae=0;Ae<_i;Ae+=1){let Xe=this.history[ie+Ae*3],P=this.history[ie+Ae*3+1],ee=this.history[ie+Ae*3+2],K=j+Ae*6,J=Math.max(.06,1-Ae/_i),$=Math.max(.025,1-(Ae+1)/_i);d[K]=Ee,d[K+1]=Le,d[K+2]=we,d[K+3]=Xe,d[K+4]=P,d[K+5]=ee,f[K]=Ge.r*J,f[K+1]=Ge.g*J,f[K+2]=Ge.b*J,f[K+3]=Ge.r*$,f[K+4]=Ge.g*$,f[K+5]=Ge.b*$,Ee=Xe,Le=P,we=ee}g[b]=y,g[b+1]=R,g[b+2]=A,x[b]=Ge.r*1.2,x[b+1]=Ge.g*1.2,x[b+2]=Ge.b*1.2}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.headGeometry.attributes.position.needsUpdate=!0,this.headGeometry.attributes.color.needsUpdate=!0}writeGeometry(e){let t=this.positionArray,n=this.colorArray,i=this.colors.b,r=this.count;for(let a=0;a<r;a+=1){let o=a*3,c=a*_i*2*3,l=a*Gi*3,u=this.head[o],h=this.head[o+1],d=this.head[o+2];for(let f=0;f<_i;f+=1){let g=this.history[l+f*3],x=this.history[l+f*3+1],m=this.history[l+f*3+2],p=c+f*6;t[p]=u,t[p+1]=h,t[p+2]=d,t[p+3]=g,t[p+4]=x,t[p+5]=m;let E=1-f/_i;n[p]=i.r*E,n[p+1]=i.g*E,n[p+2]=i.b*E,n[p+3]=i.r*E*.3,n[p+4]=i.g*E*.3,n[p+5]=i.b*E*.3,u=g,h=x,d=m}this.headPositions[o]=this.head[o],this.headPositions[o+1]=this.head[o+1],this.headPositions[o+2]=this.head[o+2],this.headColors[o]=i.r,this.headColors[o+1]=i.g,this.headColors[o+2]=i.b}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.headGeometry.attributes.position.needsUpdate=!0,this.headGeometry.attributes.color.needsUpdate=!0}dispose(){this.scene.remove(this.lines),this.scene.remove(this.points),this.geometry.dispose(),this.headGeometry.dispose(),this.material.dispose(),this.headMaterial.dispose()}};function np({canvas:s,container:e,initialSettings:t,onTelemetry:n,onReady:i,onError:r,onImportError:a}){let o=!1,c=0,l;try{l=new Nl({canvas:s,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch(Z){return r?.(Z),null}l.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),l.setClearColor(198926,1),l.outputColorSpace=xt,l.toneMapping=Xo,l.toneMappingExposure=1.2;let u=new Wr;u.background=new Ce(198926),u.fog=new Gr(198926,.028);let h=new Ct(36,1,.1,100),d=new C(-4.8,2.9,7.1);h.position.copy(d);let f=new Ol(h,s);f.enableDamping=!0,f.dampingFactor=.055,f.enablePan=!1,f.minDistance=4.2,f.maxDistance=17,f.minPolarAngle=.08,f.maxPolarAngle=Math.PI*.505,f.autoRotateSpeed=.48,f.rotateSpeed=.65,f.zoomSpeed=.8,f.target.set(0,.95,0),f.update();let g={current:t},x={current:Ta(t.specimen,t.windSpeed)},m={time:0,last:performance.now(),lastTelemetry:0,frames:0,fps:60},p={drift:0,lateral:0,pivot:new yt};p.pivot.position.y=.18,u.add(p.pivot);let E=sv(),b=rv(),y=av();u.environment=y,u.environmentIntensity=1.15;let R=_s(t.palette,t.autoPalette,t.specimen.id,t.windSpeed),A=ov(R.tone);u.add(A),u.add(lv()),u.add(cv());let I=hv();u.add(I);let D=new Gt({map:b,color:new Ce(R.tone),transparent:!0,opacity:.4,blending:mn,depthWrite:!1,toneMapped:!1,side:zt}),M=new Se(new Ni(5.2,5.2),D);M.rotation.x=-Math.PI/2,M.position.y=.14,M.renderOrder=2,u.add(M);let S=ru("TEST SECTION 01 // FLOW FIELD");S.position.set(-6.6,.4,4.1),u.add(S);let L=ru("FORCE BALANCE // LIVE","#ff8bdc",2.3);L.position.set(3.8,.35,4.3),u.add(L);let B=new ua(7794175,132360,1.15);u.add(B);let k=new Oi(14154751,3.2);k.position.set(-4.8,7.4,4.5),u.add(k);let X=new Oi(1797375,2.1);X.position.set(4.5,4.5,-5.5),u.add(X);let q=new di(16731851,24,16,2);q.position.set(2.8,1.8,4.8),u.add(q);let Y=new di(3339775,32,18,2);Y.position.set(-4.2,2.2,3.4),u.add(Y);let te=new di(8716260,18,14,2);te.position.set(0,6.5,.5),u.add(te);let V=new er(new C(1,0,0),new C(-5.6,.18,3.8),1.9,6157567,.3,.16);u.add(V);let le=ru("WIND VECTOR","#6ef4ff",1.7);le.position.set(-5.6,.48,3.8),u.add(le);let me=new er(new C(1,0,0),new C(0,2.2,0),1.4,16735947,.26,.12);me.visible=!1,u.add(me);let he=new ou(u,window.innerWidth<760?620:1120,E);he.setPalette(R),he.setVisible(t.showStreams),le.material.opacity=.38;let ye=null,Oe="",je=0,Ge=1.2;function j(){ye&&(p.pivot.remove(ye.group),Th(ye.group),ye=null)}function ie(){if(!ye)return null;ye.group.updateWorldMatrix(!0,!0),p.pivot.updateWorldMatrix(!0,!0);let Z=new Pt().setFromObject(ye.group),w=new Ke().copy(p.pivot.matrixWorld).invert();return Z.applyMatrix4(w)}function Ee(){if(!ye)return;let Z=ie();Z.translate(new C(0,.18,0)),he.setBounds(Z),Ge=Math.max(.5,Z.max.y)}function Le(Z){if(!ye)return;let w=`${Z.length.toFixed(2)}:${Z.width.toFixed(2)}:${Z.height.toFixed(2)}`;if(ye.visualKey===w)return;ye.visualKey=w;let _=ye.baseSpecimen||Z,U=(Me,ue)=>gr(Math.pow(Math.max(.15,Me)/Math.max(.15,ue),.72),.64,1.38),z=new C(U(Z.length,_.length),U(Z.height,_.height),U(Z.width,_.width));ye.group.scale.copy(ye.baseScale).multiply(z),ye.group.position.set(0,0,0),ye.group.updateMatrixWorld(!0);let Q=ie(),H=Q.getCenter(new C);ye.group.position.x-=H.x,ye.group.position.z-=H.z,ye.group.position.y-=Q.min.y,ye.group.updateMatrixWorld(!0),Ee(),ye.visualKey=w}function we(Z,w,_){j(),Oe=w,p.drift=0,p.lateral=0,p.pivot.position.set(0,.18,0),p.pivot.rotation.set(0,0,0);let U=++je,z=()=>g.current.specimen;function Q(H,Me){if(o||U!==je){Th(H.group);return}ye=H,ye.baseSpecimen={...Me},ye.baseScale=H.group.scale.clone(),ye.visualKey="",p.pivot.add(ye.group),Le(Me);let ue=ie();ue.translate(new C(0,.18,0));let Re=new C(0,gr(ue.getCenter(new C).y*.8,.7,2.4),0);f.target.lerp(Re,.45),he.reset(g.current,m.time)}w.startsWith("imported:")&&_?Qf(_).then(H=>Q(H,z())).catch(H=>{o||U!==je||(a?.(H),Q(Eh({...z(),id:"custom"}),z()))}):Q(Eh(Z),Z)}function Ae(){let Z=g.current,w=_s(Z.palette,Z.autoPalette,Z.specimen.id,Z.windSpeed);return he.setPalette(w),D.color.set(w.tone),A.material.uniforms.uColor.value.set(w.tone),V.setColor(new Ce(w.tone)),me.setColor(new Ce(w.wake)),S.material&&(S.material.opacity=.34),w}function Xe(){let w=g.current.windAngle*Math.PI/180,_=new C(Math.cos(w),0,Math.sin(w));V.setDirection(_),V.setLength(1.9,.3,.16)}we(t.specimen,t.modelKey,t.importedAsset),he.reset(t,0);function P(){let Z=Math.max(1,e.clientWidth),w=Math.max(1,e.clientHeight);l.setSize(Z,w,!1),h.aspect=Z/w,h.updateProjectionMatrix()}let ee=new ResizeObserver(P);ee.observe(e),P();function K(Z){let w=f.target.y;Z==="side"?(h.position.set(.01,2.2,9.4),f.target.set(0,w,0)):Z==="top"?(h.position.set(.01,9.6,.9),f.target.set(0,.55,0)):(h.position.copy(d),f.target.set(0,w,0)),f.update()}function J(){m.time=0,p.drift=0,p.lateral=0,he.reset(g.current,0),K("iso")}function $(Z){let w=g.current;g.current=Z,x.current=Ta(Z.specimen,Z.windSpeed),he.settings=Z,Ae(),Xe(),he.setVisible(Z.showStreams);let _=_s(Z.palette,Z.autoPalette,Z.specimen.id,Z.windSpeed);D.color.set(_.tone),f.autoRotate=!!Z.autoRotate,me.visible=!!Z.showForce&&x.current.drag>.5,Z.modelKey!==Oe?we(Z.specimen,Z.modelKey,Z.importedAsset):(Le(Z.specimen),w.windAngle!==Z.windAngle&&Xe())}function ge(Z=!1){let w=performance.now();if(!Z&&w-m.lastTelemetry<150)return;m.lastTelemetry=w;let _=g.current,U=x.current,z=_s(_.palette,_.autoPalette,_.specimen.id,_.windSpeed);n?.({time:m.time,fps:m.fps,drag:U.drag,q:U.q,power:U.power,reynolds:U.reynolds,cdA:U.cdA,area:U.area,drift:p.drift,paletteId:z.id,particles:he.count,running:_.running})}let se=!0;function xe(Z){if(o)return;c=requestAnimationFrame(xe);let w=Math.min(.05,Math.max(.001,(Z-m.last)/1e3)),_=m.last;m.last=Z;let U=g.current,z=x.current,Q=!!U.running;Q?(m.time+=w,he.update(w,m.time,U),ye?.update&&ye.update(m.time,U.windSpeed,Q)):he.update(0,m.time,U);let H=gr(z.drag/2e3,0,1),Me=new C(Math.cos(U.windAngle*Math.PI/180),0,Math.sin(U.windAngle*Math.PI/180)),ue=new C(-Me.z,0,Me.x);if(Q){let ve=ep(z.drag)*.9,Be=1-Math.pow(.002,w);p.drift+=(ve-p.drift)*Be;let Ne=Math.sin(m.time*1.15)*H*.055;p.lateral+=(Ne-p.lateral)*(1-Math.pow(.03,w))}let Re=Math.sin(m.time*1.55)*(.006+H*.018);p.pivot.position.x=Me.x*p.drift+ue.x*p.lateral,p.pivot.position.z=Me.z*p.drift+ue.z*p.lateral,p.pivot.position.y=.18+Re,p.pivot.rotation.z=p.drift*.22+Math.sin(m.time*.7)*.005,p.pivot.rotation.x=-Math.sin(U.windAngle*Math.PI/180)*p.drift*.22+Math.cos(m.time*1.1)*.004*(.3+H),p.pivot.rotation.y=Math.sin(U.windAngle*Math.PI/180)*p.drift*.1,M.position.x=p.pivot.position.x*.55,M.position.z=p.pivot.position.z*.55,M.material.opacity=.24+H*.28;let De=new C(p.pivot.position.x-Me.x*.1,Math.max(1.3,Ge+.7),p.pivot.position.z-Me.z*.1);me.position.copy(De),me.setDirection(Me),me.setLength(.9+gr(z.drag/3800,0,1)*2.1,.22,.1),me.visible=!!U.showForce&&z.drag>.5,f.autoRotate=!!U.autoRotate,f.update(),I.rotation.y+=w*.006,l.render(u,h),m.frames+=1;let oe=Z-_;oe>0&&(m.fps+=(1e3/Math.max(1,oe)-m.fps)*.05),ge(),se&&(se=!1,i?.())}function He(Z){Z.preventDefault(),r?.(new Error("WebGL context lost."))}return s.addEventListener("webglcontextlost",He),P(),ge(!0),c=requestAnimationFrame(xe),{update:$,reset:J,setView:K,dispose(){o||(o=!0,je+=1,cancelAnimationFrame(c),ee.disconnect(),s.removeEventListener("webglcontextlost",He),f.dispose(),j(),he.dispose(),u.traverse(Z=>{if(Z.geometry&&Z.geometry.dispose(),Z.material){let w=Array.isArray(Z.material)?Z.material:[Z.material];for(let _ of w){for(let U of Object.values(_))U&&U.isTexture&&U.dispose();_.dispose()}}}),l.dispose(),E.dispose(),b.dispose(),y.dispose(),u.clear())}}}var ip,v,dv;function sp(s){ip=s,v=s.createElement,dv=s.Fragment}var hu="aeroflow",In={open:!1,windSpeed:30,articleId:"coupe",importName:"",paletteTone:"#41eaff",particles:1120},uu=new Set;function fv(){for(let s of uu)s()}function lu(s){In.open!==s&&(In.open=s,fv())}function pv(s){return uu.add(s),()=>uu.delete(s)}var wt={specimen:xs("coupe"),windSpeed:30,windAngle:0,palette:"ion",autoPalette:!0,showStreams:!0,showForce:!0,autoRotate:!1,running:!0,imported:null,importRevision:0};function yi({name:s,size:e=16}){let t={width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.7,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,focusable:!1};switch(s){case"play":return v("svg",{...t},v("path",{d:"M8.5 5.6v12.8L18 12z",fill:"currentColor",stroke:"none"}));case"pause":return v("svg",{...t},v("rect",{x:"7.5",y:"5.5",width:"3.2",height:"13",rx:"0.7",fill:"currentColor",stroke:"none"}),v("rect",{x:"13.3",y:"5.5",width:"3.2",height:"13",rx:"0.7",fill:"currentColor",stroke:"none"}));case"close":return v("svg",{...t},v("path",{d:"M6 6l12 12M18 6L6 18"}));case"reset":return v("svg",{...t},v("path",{d:"M5.2 9.2A7.2 7.2 0 1 1 5 14.4"}),v("path",{d:"M5.2 4.8v4.6h4.6"}));case"orbit":return v("svg",{...t},v("ellipse",{cx:"12",cy:"12",rx:"8.2",ry:"4.3",transform:"rotate(-28 12 12)"}),v("circle",{cx:"12",cy:"12",r:"2.2",fill:"currentColor",stroke:"none"}),v("path",{d:"M18.6 6.2l1.7-.5-.5 1.8"}));case"stream":return v("svg",{...t},v("path",{d:"M4 8h9.5c2 0 3.1-1.2 3.1-2.5S15.5 3 14.2 3"}),v("path",{d:"M4 12h13c2 0 3 1.1 3 2.4s-1 2.6-2.6 2.6"}),v("path",{d:"M4 16h7.2c1.7 0 2.7 1 2.7 2.1"}));case"force":return v("svg",{...t},v("path",{d:"M4 12h14"}),v("path",{d:"M14 8l4 4-4 4"}),v("path",{d:"M4 8.5V6M4 15.5V18"}));case"upload":return v("svg",{...t},v("path",{d:"M12 16V5"}),v("path",{d:"M8.4 8.4L12 4.8l3.6 3.6"}),v("path",{d:"M5 15v3.2c0 .5.4.8.8.8h12.4c.4 0 .8-.3.8-.8V15"}));case"auto":return v("svg",{...t},v("path",{d:"M12 3.8l1.4 4.1 4.1 1.4-4.1 1.4L12 14.8l-1.4-4.1-4.1-1.4 4.1-1.4z"}),v("path",{d:"M18.2 15.2l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"}));case"wind":return v("svg",{...t},v("path",{d:"M3 8h9.6c1.7 0 2.7-1 2.7-2.2S14.3 3.6 13.1 3.6c-1 0-1.8.5-2.2 1.3"}),v("path",{d:"M3 12h14.4c1.7 0 2.7 1 2.7 2.2s-1 2.2-2.2 2.2c-1.1 0-1.9-.6-2.3-1.5"}),v("path",{d:"M3 16.5h7.2"}));case"chevron":return v("svg",{...t},v("path",{d:"M9 6l6 6-6 6"}));case"check":return v("svg",{...t},v("path",{d:"M5 12.5l4.2 4.2L19 6.8"}));case"cube":return v("svg",{...t},v("path",{d:"M12 3.2l7.5 4.2v9.2L12 20.8l-7.5-4.2V7.4z"}),v("path",{d:"M4.7 7.5L12 11.8l7.3-4.3M12 11.8v8.7"}));default:return v("svg",{...t},v("circle",{cx:"12",cy:"12",r:"7"}))}}function mv({kind:s}){let e={viewBox:"0 0 64 36",fill:"none",stroke:"currentColor",strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,focusable:!1};return s==="truck"?v("svg",{...e},v("path",{d:"M5 24V14h19v10M24 17h9l8 7h7v-3"}),v("path",{d:"M6 24h5m6 0h12m8 0h8"}),v("circle",{cx:"14",cy:"26",r:"3.4"}),v("circle",{cx:"31",cy:"26",r:"3.4"}),v("circle",{cx:"42",cy:"26",r:"3.4"}),v("path",{d:"M8 18h12v-4H8z",opacity:".45"})):s==="drone"?v("svg",{...e},v("path",{d:"M18 18l8-4 8 4M32 14l8 4"}),v("ellipse",{cx:"14",cy:"13",rx:"9",ry:"3.4"}),v("ellipse",{cx:"50",cy:"13",rx:"9",ry:"3.4"}),v("ellipse",{cx:"14",cy:"26",rx:"9",ry:"3.4",opacity:".5"}),v("ellipse",{cx:"50",cy:"26",rx:"9",ry:"3.4",opacity:".5"}),v("rect",{x:"26",y:"13",width:"12",height:"8",rx:"3"}),v("path",{d:"M30 21v4m4-4v4"})):s==="aircraft"?v("svg",{...e},v("path",{d:"M7 20c2-4 12-5 23-5 8 0 19 1 27 5-9 4-18 3-27 3-10 0-20 0-23-3z"}),v("path",{d:"M28 18l5-9 5 9"}),v("path",{d:"M19 20h34",opacity:".4"}),v("path",{d:"M28 21h4m5 0h4",opacity:".6"})):s==="custom"?v("svg",{...e},v("path",{d:"M7 23c0-4 3-6 8-7l22-6c5-1 12 0 16 4 3 3 2 7-2 9-5 2-12 1-17 1H16c-5 0-9-0-9-1z"}),v("path",{d:"M21 14v14m13-17v17",opacity:".3"}),v("circle",{cx:"52",cy:"18",r:"2.2"})):v("svg",{...e},v("path",{d:"M4 24c1-4 6-6 14-7l9-6c4-3 11-2 14 1l9 8c4 1 6 2 6 4H4z"}),v("path",{d:"M9 24h42",opacity:".55"}),v("circle",{cx:"17",cy:"26",r:"3.2"}),v("circle",{cx:"45",cy:"26",r:"3.2"}),v("path",{d:"M10 20h40",opacity:".22"}))}function Aa({index:s,title:e,subtitle:t}){return v("div",{className:"af-panel-head"},v("span",{className:"af-panel-index"},s),v("div",null,v("span",{className:"af-panel-title"},e),t?v("span",{className:"af-panel-sub"},t):null))}function xr({label:s,value:e,display:t,unit:n,min:i,max:r,step:a,onChange:o,ariaLabel:c}){let l=(Number(e)-i)/(r-i)*100;return v("label",{className:"af-range-row"},v("span",{className:"af-range-label"},v("span",null,s),v("span",{className:"af-range-value"},t,n?v("small",null,n):null)),v("input",{type:"range",min:i,max:r,step:a,value:e,"aria-label":c||s,onChange:u=>o(Number(u.target.value)),style:{"--af-fill":`${Math.max(0,Math.min(100,l))}%`}}))}function cu({active:s,onClick:e,icon:t,label:n,title:i}){return v("button",{type:"button",className:`af-chip${s?" is-active":""}`,onClick:e,"aria-pressed":s,title:i||n},v(yi,{name:t,size:14}),v("span",null,n))}function gv(s){if(!Number.isFinite(s)||s<=0)return"\u2014";let e=Math.floor(Math.log10(s));return`${(s/10**e).toFixed(2)}e${e}`}function xv(s){let e=(Math.round(s)%360+360)%360;return e<=24||e>=336?"wind.headwind":e>=156&&e<=204?"wind.tailwind":"wind.cross"}function _v(s){switch(s?.code){case"EXTERNAL_RESOURCES":return"panel.importExternal";case"COMPRESSED_ASSET":return"panel.importCompressed";case"NO_MESHES":return"panel.importNoMeshes";case"INVALID_GLTF":case"INVALID_OBJ":return"panel.importInvalid";default:return"panel.importError"}}function yv(s,e,t){let n=s.length>1?s:[0,s[0]||0],i=Math.max(1,...n)*1.08;return n.map((r,a)=>{let o=a/Math.max(1,n.length-1)*e,c=t-Math.max(0,r)/i*(t-8)-4;return`${a===0?"M":"L"}${o.toFixed(2)},${c.toFixed(2)}`}).join(" ")}function vv(s){let{useMemo:e,useRef:t,useState:n,useEffect:i,useCallback:r}=ip;function a(){let[,h]=n(0);return i(()=>{let f=s.locale.subscribe(()=>h(g=>g+1));return()=>{typeof f=="function"&&f()}},[]),e(()=>s.locale.bind(hu),[])}function o(){let[h,d]=n(In.open);return i(()=>pv(()=>d(In.open)),[]),h}function c(){let h=a(),d=o(),f=In.importName?{labelKey:"preset.imported"}:wa[In.articleId]||wa.coupe;return v("div",{className:"af-dock-wrap"},v("style",null,bv),v("button",{type:"button",className:`af-dock${d?" is-open":""}`,onClick:()=>lu(!0),"aria-label":`${h("launcher.open")} \u2014 ${h("lab.title")}`},v("span",{className:"af-dock-glow","aria-hidden":"true"}),v("span",{className:"af-dock-mark","aria-hidden":"true"},v("svg",{viewBox:"0 0 40 40",fill:"none"},v("rect",{x:"1",y:"1",width:"38",height:"38",rx:"11",stroke:"currentColor",strokeOpacity:".35"}),v("path",{d:"M7 14h12c2.6 0 4 1.6 4.3 3.2",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),v("path",{d:"M7 20h20.6c2.7 0 4.1 1.4 4.4 3.3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}),v("path",{d:"M7 26h11.4c2.2 0 3.4 1.2 3.8 2.6",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",opacity:".55"}),v("path",{d:"M23 15.5c2.9-2 7.4-1.8 9.7.5 1.6 1.6 1.6 4.3-.4 5.7-1.8 1.3-4.6 1.1-6.7.2l2.8-2.7-4.3-.5z",stroke:"currentColor",strokeOpacity:".8",strokeWidth:"1"}))),v("span",{className:"af-dock-copy"},v("span",{className:"af-dock-kicker"},h("launcher.kicker")),v("span",{className:"af-dock-title"},h("launcher.title")),v("span",{className:"af-dock-desc"},h("launcher.desc"))),v("span",{className:"af-dock-stats","aria-hidden":"true"},v("span",{className:"af-dock-stat"},v("small",null,h("launcher.wind")),v("strong",null,In.windSpeed.toFixed(0),v("em",null,"m/s"))),v("span",{className:"af-dock-stat"},v("small",null,h("launcher.article")),v("strong",{className:"is-text"},f.labelKey?h(f.labelKey):h("preset.imported")))),v("span",{className:"af-dock-status"},v("span",{className:"af-dock-dot","aria-hidden":"true"}),v("span",null,h("launcher.live"))),v("span",{className:"af-dock-open"},h("launcher.open"),v(yi,{name:"chevron",size:13}))))}function l(){return o()?v(u,null):null}function u(){let h=a(),d=t(null),f=t(null),g=t(null),x=t(null),m=t(null),p=t(null),E=t(null),b=t(wt.importRevision||0),y=t(xs(wt.specimen.id)),[R,A]=n(()=>({...wt.specimen})),[I,D]=n(wt.windSpeed),[M,S]=n(wt.windAngle),[L,B]=n(wt.palette),[k,X]=n(wt.autoPalette),[q,Y]=n(wt.showStreams),[te,V]=n(wt.showForce),[le,me]=n(wt.autoRotate),[he,ye]=n(wt.running),[Oe,je]=n(wt.imported),[Ge,j]=n(!1),[ie,Ee]=n(!1),[Le,we]=n(""),[Ae,Xe]=n(!1),[P,ee]=n(""),[K,J]=n(0),[$,ge]=n("iso"),[se,xe]=n({time:0,fps:0,drag:0,q:0,power:0,reynolds:0,cdA:0,area:0,drift:0,paletteId:"ion",particles:0,running:!0,samples:[]}),He=Oe?`imported:${Oe.revision}`:`preset:${R.id}`,Z=e(()=>Ta(R,I),[R,I]),w=e(()=>_s(L,k,R.id,I),[L,k,R.id,I]),_=e(()=>({specimen:R,windSpeed:I,windAngle:M,palette:L,autoPalette:k,showStreams:q,showForce:te,autoRotate:le,running:he,modelKey:He,importedAsset:Oe}),[R,I,M,L,k,q,te,le,he,He,Oe]),U=t(_);U.current=_;let z=t({specimen:R,imported:Oe,windSpeed:I,running:he,palette:w});z.current={specimen:R,imported:Oe,windSpeed:I,running:he,palette:w},i(()=>{wt.specimen=R,wt.windSpeed=I,wt.windAngle=M,wt.palette=L,wt.autoPalette=k,wt.showStreams=q,wt.showForce=te,wt.autoRotate=le,wt.running=he,wt.imported=Oe,wt.importRevision=b.current},[R,I,M,L,k,q,te,le,he,Oe]),i(()=>{p.current=document.activeElement;let re=window.setTimeout(()=>d.current?.focus(),0),ht=st=>{if(st.key==="Escape"){st.stopPropagation(),lu(!1);return}if(st.key!=="Tab"||!f.current)return;let xn=Array.from(f.current.querySelectorAll('button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')).filter(Wi=>Wi.offsetParent!==null||Wi===document.activeElement);if(!xn.length)return;let Qn=xn[0],_r=xn[xn.length-1];st.shiftKey&&document.activeElement===Qn?(st.preventDefault(),_r.focus()):!st.shiftKey&&document.activeElement===_r&&(st.preventDefault(),Qn.focus())};return document.addEventListener("keydown",ht,!0),()=>{window.clearTimeout(re),document.removeEventListener("keydown",ht,!0);let st=p.current;st&&typeof st.focus=="function"&&st.isConnected&&window.setTimeout(()=>st.focus(),0)}},[]),i(()=>{if(!g.current||!x.current)return;let re=null;try{re=np({canvas:g.current,container:x.current,initialSettings:U.current,onTelemetry:ht=>{xe(xn=>{let Qn=[...xn.samples,ht.drag].slice(-48);return{...ht,samples:Qn}});let st=z.current;In.windSpeed=st.windSpeed,In.articleId=st.imported?"imported":st.specimen.id,In.importName=st.imported?.name||"",In.paletteTone=st.palette.tone,In.particles=ht.particles},onReady:()=>{Xe(!0),ee("")},onError:()=>{ee(h("lab.webglError"))},onImportError:ht=>{we(h(_v(ht))),je(null),A(y.current||xs("coupe"))}}),m.current=re}catch{ee(h("lab.webglError")),m.current=null}return()=>{re&&re.dispose(),m.current===re&&(m.current=null)}},[K]),i(()=>{m.current&&m.current.update(_)},[_]);let Q=r(()=>{lu(!1)},[]),H=re=>{ge(re),m.current?.setView(re)},Me=()=>{m.current?.reset(),ge("iso")},ue=re=>{let ht=xs(re);y.current=ht,A(ht),je(null),we("")},Re=async re=>{if(!re)return;let ht=jf(re.name);if(!ht||re.size>$f){we(h("panel.importError"));return}j(!0),we("");try{let st=ht==="glb"?await re.arrayBuffer():await re.text();if(!st||(typeof st=="string"?st.trim().length<8:st.byteLength<20))throw new Error("empty");y.current=R,b.current+=1,je({name:re.name,format:ht,data:st,revision:b.current}),A(xs("custom",{name:re.name}))}catch{we(h("panel.importError"))}finally{j(!1)}},De=re=>{let ht=re.target.files?.[0];Re(ht),re.target.value=""},oe=re=>{re.preventDefault(),Ee(!1),Re(re.dataTransfer?.files?.[0])},ve=()=>{je(null),we(""),A(y.current||xs("coupe"))},Be=(re,ht)=>{A(st=>({...st,[re]:ht}))},Ne=h(xv(M)),pe=w.tone,Ze={"--af-accent":pe,"--af-stops":`linear-gradient(90deg, ${w.stops[0]}, ${w.stops[1]}, ${w.stops[2]})`},N=244,ce=58,_e=se.samples.length?se.samples:[Z.drag],Ie=yv(_e,N,ce),de=N,ne=Math.max(1,..._e)*1.08,Ue=ce-Math.max(0,_e[_e.length-1])/ne*(ce-8)-4,qe=Math.min(1,Z.drag/4e3),ct=Oe?null:R.id,at=Oe?Oe.name:h(R.labelKey),Pn=h(P?"lab.noWebgl":he?"lab.online":"lab.paused"),ln=Math.round(se.fps||0),Ra=Z.power>=1e3?`${xi(Z.power/1e3,2)} kW`:`${xi(Z.power,1)} W`;return v("div",{className:"af-overlay",ref:f,"data-aeroflow-lab":"true","data-ready":Ae?"true":"false",style:Ze,onMouseDown:re=>{re.target===re.currentTarget&&Q()}},v("style",null,Mv),v("div",{className:"af-shell",role:"dialog","aria-modal":"true","aria-labelledby":"af-title",onMouseDown:re=>re.stopPropagation()},v("div",{className:"af-corner af-corner-tl","aria-hidden":"true"}),v("div",{className:"af-corner af-corner-tr","aria-hidden":"true"}),v("div",{className:"af-corner af-corner-bl","aria-hidden":"true"}),v("div",{className:"af-corner af-corner-br","aria-hidden":"true"}),v("header",{className:"af-header"},v("div",{className:"af-brand"},v("span",{className:"af-brandmark","aria-hidden":"true"},v("svg",{viewBox:"0 0 44 44",fill:"none"},v("rect",{x:"1",y:"1",width:"42",height:"42",rx:"12",stroke:"currentColor",strokeOpacity:".32"}),v("path",{d:"M8 14h13.2c2.8 0 4.4 1.7 4.7 3.6",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),v("path",{d:"M8 21h22.7c2.9 0 4.5 1.6 4.8 3.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round"}),v("path",{d:"M8 28h12.6c2.4 0 3.8 1.3 4.2 2.8",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",opacity:".54"}),v("path",{d:"M27 16c3-2.2 7.8-2 10.2.4 1.8 1.8 1.6 4.7-.6 6.2-1.9 1.3-4.8 1.1-7 .1l3-2.8-4.7-.5z",stroke:"currentColor",strokeOpacity:".85",strokeWidth:"1.1"}),v("circle",{cx:"34",cy:"30",r:"1.8",fill:"currentColor"}))),v("div",{className:"af-brand-copy"},v("div",{className:"af-brand-row"},v("h1",{id:"af-title"},h("lab.title")),v("span",{className:"af-version"},"V1.1")),v("div",{className:"af-brand-sub"},h("lab.subtitle"),v("span",null,h("lab.badge"))))),v("div",{className:"af-header-center"},v("span",{className:"af-status"},v("span",{className:`af-status-dot${he?" is-live":""}`,"aria-hidden":"true"}),Pn),v("span",{className:"af-header-divider","aria-hidden":"true"}),v("span",{className:"af-header-metric"},v("small",null,h("hud.article")),v("strong",null,at)),v("span",{className:"af-header-metric"},v("small",null,h("hud.drag")),v("strong",null,xi(Z.drag,1),v("em",null,"N")))),v("div",{className:"af-header-actions"},v("span",{className:"af-fps",title:h("telemetry.fps")},v("small",null,"FPS"),v("strong",null,ln||"\u2014")),v("button",{type:"button",className:"af-close",onClick:Q,ref:d,"aria-label":h("lab.close"),title:h("lab.close")},v("span",null,h("lab.esc")),v(yi,{name:"close",size:16})))),v("div",{className:"af-body"},v("aside",{className:"af-rail af-left","aria-label":h("section.objectCn")},v(Aa,{index:"01",title:h("section.object"),subtitle:h("section.objectCn")}),v("div",{className:"af-preset-grid"},su.map(re=>v("button",{key:re.id,type:"button",className:`af-preset${ct===re.id?" is-selected":""}`,onClick:()=>ue(re.id),"aria-pressed":ct===re.id},v("span",{className:"af-preset-top"},v("span",{className:"af-preset-glyph"},v(mv,{kind:re.id})),v("span",{className:"af-preset-cd"},"Cd ",(ct===re.id?R.cd:re.cd).toFixed(2))),v("span",{className:"af-preset-name"},h(re.labelKey)),v("span",{className:"af-preset-kind"},h(re.kindKey)),ct===re.id?v("span",{className:"af-selected-tick"},v(yi,{name:"check",size:11})):null))),v("div",{className:`af-import-zone${ie?" is-dragging":""}${Oe?" has-file":""}`,onDragOver:re=>{re.preventDefault(),Ee(!0)},onDragLeave:()=>Ee(!1),onDrop:oe},v("label",{className:"af-import-label"},v("input",{ref:E,type:"file",accept:Zf,onChange:De,className:"af-file-input","aria-label":h("panel.import")}),v("span",{className:"af-import-icon"},v(yi,{name:Oe?"cube":"upload",size:18})),v("span",{className:"af-import-copy"},v("strong",null,Ge?h("panel.importBusy"):Oe?Oe.name:h("panel.import")),v("small",null,h(Oe?"panel.importedNote":"panel.importHint"))),v("span",{className:"af-import-badge"},Oe?Oe.format.toUpperCase():"3D")),Oe?v("button",{type:"button",className:"af-import-clear",onClick:ve,"aria-label":h("panel.clearImport"),title:h("panel.clearImport")},v(yi,{name:"close",size:12})):null),Le?v("p",{className:"af-inline-error",role:"alert"},Le):null,v("div",{className:"af-area-card"},v("span",{className:"af-area-label"},h("panel.area")),v("strong",null,Z.area.toFixed(2),v("small",null,"m\xB2")),v("span",{className:"af-area-meta"},h("panel.areaHint")," \xB7 CdA ",Z.cdA.toFixed(2)),v("i",{style:{width:`${Math.min(100,Z.area*10)}%`},"aria-hidden":"true"})),v(Aa,{index:"02",title:h("section.geometry"),subtitle:h("section.geometryCn")}),v("p",{className:"af-rail-hint"},h("panel.paramsHint")),v(xr,{label:h("dim.length"),value:R.length,display:R.length.toFixed(1),unit:h("dim.meters"),min:.6,max:12,step:.1,onChange:re=>Be("length",re)}),v(xr,{label:h("dim.width"),value:R.width,display:R.width.toFixed(2),unit:h("dim.meters"),min:.3,max:4.2,step:.02,onChange:re=>Be("width",re)}),v(xr,{label:h("dim.height"),value:R.height,display:R.height.toFixed(2),unit:h("dim.meters"),min:.25,max:4.5,step:.02,onChange:re=>Be("height",re)}),v(xr,{label:h("dim.cd"),value:R.cd,display:R.cd.toFixed(2),min:.02,max:1.4,step:.01,onChange:re=>Be("cd",re)}),v("div",{className:"af-mass-row"},v("span",null,h("panel.mass")),v("strong",null,xi(R.mass,0)," ",v("small",null,"kg")))),v("section",{className:"af-stage",ref:x,"aria-label":h("hud.flowField")},v("canvas",{ref:g,className:"af-canvas",key:K}),v("div",{className:"af-scanlines","aria-hidden":"true"}),v("div",{className:"af-vignette","aria-hidden":"true"}),v("div",{className:"af-hud af-hud-top"},v("div",{className:"af-hud-block af-coordinates"},v("span",{className:"af-hud-overline"},h("hud.testSection")),v("span",{className:"af-hud-small"},h("hud.flowField")," / 0.00 \u2014 100.00 m\xB7s\u207B\xB9")),v("div",{className:"af-hud-wind"},v("span",{className:"af-hud-overline"},h("hud.windVector")),v("span",{className:"af-wind-arrow",style:{transform:`rotate(${M}deg)`},"aria-hidden":"true"},"\u2192"),v("strong",null,String(Math.round(M)).padStart(3,"0"),"\xB0"),v("span",{className:"af-hud-sep"},"/"),v("strong",null,I.toFixed(0)," ",v("small",null,"m/s")),v("span",{className:"af-mode-pill"},Ne)),v("div",{className:"af-view-switch",role:"group","aria-label":h("hud.view")},["iso","side","top"].map(re=>v("button",{key:re,type:"button",className:$===re?"is-active":"",onClick:()=>H(re),"aria-pressed":$===re},h(`hud.${re}`))))),v("div",{className:"af-side-scale","aria-hidden":"true"},v("span",null,"+04"),v("i",null),v("span",null,"+02"),v("i",null),v("span",null,"00"),v("i",null),v("span",null,"\u221202")),v("div",{className:"af-hud af-hud-bottom"},v("div",{className:"af-legend"},v("div",{className:"af-legend-head"},v("span",null,h("flow.velocity")),v("span",null,h("hud.palette")," \xB7 ",h(w.labelKey))),v("span",{className:"af-legend-gradient",style:{background:Ze["--af-stops"]}}),v("div",{className:"af-legend-labels"},v("span",null,h("flow.low")," 0"),v("span",null,"1.0"),v("span",{className:"af-legend-fast"},h("flow.high")," ",I.toFixed(0)," m/s"))),v("div",{className:"af-playbar"},v("button",{type:"button",className:"af-play",onClick:()=>ye(re=>!re),"aria-label":h(he?"hud.pause":"hud.play"),title:h(he?"hud.pause":"hud.play")},v(yi,{name:he?"pause":"play",size:17})),v("div",{className:"af-time"},v("span",null,h("hud.elapsed")),v("strong",null,tp(se.time))),v("span",{className:"af-play-divider","aria-hidden":"true"}),v(cu,{active:q,onClick:()=>Y(re=>!re),icon:"stream",label:h("hud.streams")}),v(cu,{active:te,onClick:()=>V(re=>!re),icon:"force",label:h("hud.forceArrow")}),v(cu,{active:le,onClick:()=>me(re=>!re),icon:"orbit",label:h("hud.autoOrbit")}),v("button",{type:"button",className:"af-icon-btn",onClick:Me,title:h("hud.reset"),"aria-label":h("hud.reset")},v(yi,{name:"reset",size:15}))),v("div",{className:"af-force-hud"},v("div",{className:"af-force-head"},v("span",null,h("hud.forceBalance")),v("span",{className:`af-live-dot${he?" is-live":""}`})),v("div",{className:"af-force-value"},v("strong",null,xi(Z.drag,1)),v("span",null,"N"),v("small",null,h("hud.drag"))),v("div",{className:"af-force-bar"},v("i",{style:{width:`${Math.max(3,qe*100)}%`}})),v("div",{className:"af-force-foot"},v("span",null,"F",v("sub",null,"D")),v("span",null,h("hud.drift")," ",se.drift.toFixed(2)),v("span",null,se.particles," ",v("small",null,h("telemetry.particles")))))),v("div",{className:"af-stage-note"},v("span",{className:"af-axis"},"X"),v("span",{className:"af-axis af-axis-y"},"Y"),v("span",{className:"af-axis af-axis-z"},"Z"),v("span",null,h("hud.cameraHint"))),!Ae&&!P?v("div",{className:"af-boot"},v("div",{className:"af-boot-orbit","aria-hidden":"true"},v("i",null),v("i",null),v("i",null)),v("strong",null,h("lab.booting")),v("span",null,h("lab.bootHint")),v("div",{className:"af-boot-bar"},v("i",null))):null,P?v("div",{className:"af-boot af-boot-error",role:"alert"},v("span",{className:"af-error-mark","aria-hidden":"true"},"!"),v("strong",null,h("lab.noWebgl")),v("span",null,P),v("button",{type:"button",className:"af-retry",onClick:()=>{Xe(!1),ee(""),J(re=>re+1)}},h("lab.tryAgain"))):null),v("aside",{className:"af-rail af-right","aria-label":h("section.windCn")},v(Aa,{index:"03",title:h("section.wind"),subtitle:h("section.windCn")}),v("div",{className:"af-wind-display"},v("div",null,v("span",{className:"af-wind-label"},h("wind.speed")),v("strong",null,I.toFixed(0),v("small",null,"m/s")),v("span",{className:"af-wind-kmh"},(I*3.6).toFixed(0)," km/h \xB7 ",Ne)),v("span",{className:"af-wind-icon","aria-hidden":"true"},v(yi,{name:"wind",size:30}))),v(xr,{label:h("wind.speed"),value:I,display:I.toFixed(0),unit:h("wind.unit"),min:0,max:100,step:1,onChange:D,ariaLabel:h("wind.speed")}),v("div",{className:"af-quick-row"},[10,30,60,100].map(re=>v("button",{key:re,type:"button",className:Math.round(I)===re?"is-active":"",onClick:()=>D(re)},re))),v("p",{className:"af-rail-hint"},h("wind.speedHint")," \xB7 ",h("wind.air")),v("div",{className:"af-direction-block"},v("div",{className:"af-direction-head"},v("span",null,h("wind.direction")),v("strong",null,String(Math.round(M)).padStart(3,"0"),"\xB0")),v("div",{className:"af-compass-wrap"},v("svg",{className:"af-compass",viewBox:"0 0 148 148",role:"img","aria-label":`${h("wind.direction")} ${Math.round(M)}\xB0`},v("defs",null,v("radialGradient",{id:"af-compass-glow",cx:"50%",cy:"50%",r:"50%"},v("stop",{offset:"0",stopColor:pe,stopOpacity:".28"}),v("stop",{offset:".64",stopColor:pe,stopOpacity:".07"}),v("stop",{offset:"1",stopColor:pe,stopOpacity:"0"}))),v("circle",{cx:"74",cy:"74",r:"64",fill:"url(#af-compass-glow)"}),v("circle",{cx:"74",cy:"74",r:"53",fill:"none",stroke:"rgba(150,247,255,.2)",strokeWidth:".8"}),v("circle",{cx:"74",cy:"74",r:"41",fill:"none",stroke:"rgba(150,247,255,.1)",strokeWidth:".7",strokeDasharray:"1 6"}),Array.from({length:24}).map((re,ht)=>{let st=ht/24*Math.PI*2,xn=ht%6===0?46:50;return v("line",{key:ht,x1:74+Math.cos(st)*xn,y1:74+Math.sin(st)*xn,x2:74+Math.cos(st)*53,y2:74+Math.sin(st)*53,stroke:ht%6===0?"rgba(187,251,255,.55)":"rgba(150,247,255,.22)",strokeWidth:ht%6===0?1.2:.7})}),v("g",{transform:`rotate(${M} 74 74)`},v("path",{d:"M74 74 L121 74",stroke:pe,strokeWidth:"1.6",strokeLinecap:"round"}),v("path",{d:"M113 68.8L123 74l-10 5.2z",fill:pe}),v("path",{d:"M74 30v-8",stroke:pe,strokeOpacity:".35"})),v("circle",{cx:"74",cy:"74",r:"4.2",fill:pe}),v("circle",{cx:"74",cy:"74",r:"23",fill:"none",stroke:pe,strokeOpacity:".16"}),v("text",{x:"74",y:"143",textAnchor:"middle",fill:"rgba(198,253,255,.58)",fontSize:"8",letterSpacing:"2"},"FLOW"),v("text",{x:"10",y:"77",fill:"rgba(198,253,255,.42)",fontSize:"7"},"L"),v("text",{x:"134",y:"77",fill:"rgba(198,253,255,.42)",fontSize:"7"},"R")),v("div",{className:"af-compass-readout"},v("span",null,h("hud.windVector")),v("strong",null,Ne),v("small",null,Math.round(M),"\xB0 / 360\xB0"))),v(xr,{label:h("wind.direction"),value:M,display:`${Math.round(M)}\xB0`,min:0,max:359,step:1,onChange:S,ariaLabel:h("wind.direction")}),v("div",{className:"af-quick-row af-direction-presets"},[0,90,180,270].map(re=>v("button",{key:re,type:"button",className:Math.round(M)===re?"is-active":"",onClick:()=>S(re)},h(`wind.preset${re}`)))),v("p",{className:"af-rail-hint"},h("wind.directionHint"))),v(Aa,{index:"04",title:h("section.telemetry"),subtitle:h("section.telemetryCn")}),v("div",{className:"af-telemetry-grid"},v("div",{className:"af-metric af-metric-main"},v("span",null,h("telemetry.drag")),v("strong",null,xi(Z.drag,1),v("small",null,"N")),v("i",{style:{width:`${Math.max(3,qe*100)}%`}})),v("div",{className:"af-metric"},v("span",null,h("telemetry.q")),v("strong",null,xi(Z.q,1),v("small",null,"Pa"))),v("div",{className:"af-metric"},v("span",null,h("telemetry.power")),v("strong",null,Ra)),v("div",{className:"af-metric"},v("span",null,h("telemetry.re")),v("strong",null,gv(Z.reynolds))),v("div",{className:"af-metric"},v("span",null,h("telemetry.cda")),v("strong",null,Z.cdA.toFixed(2),v("small",null,"m\xB2")))),v("div",{className:"af-chart"},v("div",{className:"af-chart-head"},v("span",null,h("telemetry.trend")),v("span",null,xi(Z.drag,0)," N")),v("svg",{viewBox:`0 0 ${N} ${ce}`,preserveAspectRatio:"none","aria-hidden":"true"},v("defs",null,v("linearGradient",{id:"af-spark-fill",x1:"0",y1:"0",x2:"0",y2:"1"},v("stop",{offset:"0",stopColor:pe,stopOpacity:".34"}),v("stop",{offset:"1",stopColor:pe,stopOpacity:"0"}))),v("path",{d:`${Ie} L${N},${ce} L0,${ce} Z`,fill:"url(#af-spark-fill)",stroke:"none"}),v("path",{d:Ie,fill:"none",stroke:pe,strokeWidth:"1.1",vectorEffect:"non-scaling-stroke"}),v("circle",{cx:de,cy:Ue,r:"2.2",fill:pe})),v("div",{className:"af-chart-foot"},v("span",null,"\u22128 s"),v("span",null,h("hud.live")," \xB7 ",ln," FPS"))),v(Aa,{index:"05",title:h("section.flow"),subtitle:h("section.flowCn")}),v("div",{className:"af-auto-row"},v("div",null,v("span",{className:"af-auto-title"},h("flow.auto")),v("small",null,h("flow.autoHint"))),v("button",{type:"button",className:`af-switch${k?" is-on":""}`,role:"switch","aria-checked":k,"aria-label":h("flow.auto"),onClick:()=>X(re=>!re)},v("span",null))),v("div",{className:"af-palette-row"},Object.values(Vl).map(re=>v("button",{key:re.id,type:"button",className:`af-swatch${w.id===re.id?" is-selected":""}`,onClick:()=>{B(re.id),X(!1)},"aria-label":h(re.labelKey),"aria-pressed":w.id===re.id&&!k,title:h(re.labelKey)},v("span",{className:"af-swatch-chip",style:{background:`linear-gradient(120deg, ${re.stops[0]}, ${re.stops[1]} 62%, ${re.stops[2]})`}}),v("span",null,h(re.labelKey)),w.id===re.id?v("em",null,k?h("hud.auto"):""):null))),v("div",{className:"af-field-foot"},v("span",null,v("i",{className:"af-mini-dot"})," ",h("hud.flowField")),v("span",null,se.particles||"\u2014"," ",h("telemetry.particles")),v("span",null,1.225.toFixed(3)," kg/m\xB3")),v("p",{className:"af-disclaimer"},h("lab.note"))))))}return{Launcher:c,OverlayHost:l,AeroLab:u}}var bv=`
.af-dock-wrap { width: 100%; }
.af-dock {
  --af-dock-accent: var(--dsw-alias-brand-primary, #3b82f6);
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 54px;
  padding: 8px 14px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 14px;
  background:
    linear-gradient(105deg, color-mix(in srgb, var(--af-dock-accent) 7%, transparent), transparent 38%),
    var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: border-color .18s ease, background .18s ease, transform .18s ease;
}
.af-dock:hover { border-color: color-mix(in srgb, var(--af-dock-accent) 55%, var(--dsw-alias-border-l1)); transform: translateY(-1px); }
.af-dock:focus-visible { outline: 2px solid var(--af-dock-accent); outline-offset: 2px; }
.af-dock.is-open { border-color: var(--af-dock-accent); }
.af-dock-glow {
  position: absolute; inset: 0 auto 0 0; width: 4px;
  background: linear-gradient(180deg, transparent, var(--af-dock-accent), transparent);
  opacity: .8;
}
.af-dock-mark { color: var(--af-dock-accent); width: 40px; height: 40px; flex: none; }
.af-dock-mark svg { width: 40px; height: 40px; display: block; }
.af-dock-copy { display: flex; flex-direction: column; min-width: 0; gap: 1px; flex: 1; }
.af-dock-kicker { font: 600 9px/1.2 ui-monospace, "Cascadia Mono", monospace; letter-spacing: .16em; text-transform: uppercase; color: var(--dsw-alias-label-tertiary); }
.af-dock-title { font: 650 13.5px/1.35 "Bahnschrift", "Segoe UI", sans-serif; letter-spacing: .015em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-dock-desc { font: 400 11px/1.35 "Segoe UI", sans-serif; color: var(--dsw-alias-label-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-dock-stats { display: flex; align-items: stretch; gap: 18px; padding-right: 6px; }
.af-dock-stat { display: flex; flex-direction: column; gap: 2px; min-width: 52px; }
.af-dock-stat small { font: 600 8.5px/1 ui-monospace, monospace; letter-spacing: .12em; color: var(--dsw-alias-label-tertiary); text-transform: uppercase; }
.af-dock-stat strong { font: 600 13px/1.15 ui-monospace, monospace; color: var(--dsw-alias-label-primary); white-space: nowrap; }
.af-dock-stat strong em { font-style: normal; font-size: 9px; color: var(--dsw-alias-label-tertiary); margin-left: 3px; }
.af-dock-stat strong.is-text { font-family: "Segoe UI", sans-serif; font-size: 12px; max-width: 105px; overflow: hidden; text-overflow: ellipsis; }
.af-dock-status { display: flex; align-items: center; gap: 5px; font: 600 9px/1 ui-monospace, monospace; letter-spacing: .08em; color: var(--dsw-alias-state-success-primary, #23a55a); white-space: nowrap; }
.af-dock-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; box-shadow: 0 0 8px currentColor; }
.af-dock-open {
  display: inline-flex; align-items: center; gap: 3px; padding: 6px 9px;
  border: 1px solid color-mix(in srgb, var(--af-dock-accent) 40%, transparent);
  border-radius: 7px; color: var(--af-dock-accent);
  font: 600 10px/1 "Segoe UI", sans-serif; white-space: nowrap;
  background: color-mix(in srgb, var(--af-dock-accent) 7%, transparent);
}
@media (max-width: 860px) {
  .af-dock-stats { display: none; }
  .af-dock-status { display: none; }
}
@media (max-width: 560px) {
  .af-dock { gap: 9px; padding: 7px 10px; min-height: 48px; }
  .af-dock-mark, .af-dock-mark svg { width: 32px; height: 32px; }
  .af-dock-desc { display: none; }
  .af-dock-open { font-size: 0; padding: 6px 7px; }
  .af-dock-open svg { width: 14px; height: 14px; }
}
`,Mv=`
.af-overlay {
  --af-ink: #03090e;
  --af-panel: rgba(6, 18, 25, .92);
  --af-panel-2: rgba(8, 23, 31, .78);
  --af-line: rgba(107, 238, 255, .13);
  --af-line-strong: rgba(107, 238, 255, .27);
  --af-text: #d9f9ff;
  --af-muted: #7fa3ad;
  --af-dim: #4c6b75;
  --af-accent: #41eaff;
  --af-cyan: #78f7ff;
  --af-warm: #ff9b5c;
  position: fixed;
  inset: 0;
  z-index: 70;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(6px, 1.8vh, 22px);
  background:
    radial-gradient(ellipse at 50% 12%, rgba(24, 102, 126, .2), transparent 56%),
    radial-gradient(ellipse at 86% 82%, rgba(105, 24, 120, .14), transparent 52%),
    rgba(1, 5, 9, .82);
  backdrop-filter: blur(15px) saturate(120%);
  -webkit-backdrop-filter: blur(15px) saturate(120%);
  pointer-events: auto;
  overscroll-behavior: contain;
  font-family: "Segoe UI", "Microsoft YaHei UI", sans-serif;
  color: var(--af-text);
  animation: af-fade .22s ease-out;
}
@keyframes af-fade { from { opacity: 0; } to { opacity: 1; } }
.af-overlay *, .af-overlay *::before, .af-overlay *::after { box-sizing: border-box; }
.af-overlay button, .af-overlay input { font: inherit; }
.af-shell {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(1660px, 99vw);
  height: min(960px, 97vh);
  overflow: hidden;
  border: 1px solid rgba(104, 243, 255, .24);
  border-radius: 12px;
  background:
    linear-gradient(90deg, rgba(92, 235, 255, .02) 1px, transparent 1px) 0 0 / 48px 48px,
    linear-gradient(rgba(92, 235, 255, .018) 1px, transparent 1px) 0 0 / 48px 48px,
    radial-gradient(ellipse at 52% 0%, rgba(18, 84, 102, .16), transparent 48%),
    #040c12;
  box-shadow: 0 34px 90px rgba(0, 0, 0, .62), inset 0 0 70px rgba(0, 174, 216, .04);
}
.af-shell::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 4;
  background: repeating-linear-gradient(0deg, transparent 0 3px, rgba(128, 245, 255, .012) 3px 4px);
  mix-blend-mode: screen;
  opacity: .5;
}
.af-corner { position: absolute; width: 18px; height: 18px; z-index: 5; pointer-events: none; border-color: var(--af-accent); opacity: .7; }
.af-corner-tl { top: 6px; left: 6px; border-top: 1px solid; border-left: 1px solid; }
.af-corner-tr { top: 6px; right: 6px; border-top: 1px solid; border-right: 1px solid; }
.af-corner-bl { bottom: 6px; left: 6px; border-bottom: 1px solid; border-left: 1px solid; }
.af-corner-br { bottom: 6px; right: 6px; border-bottom: 1px solid; border-right: 1px solid; }
.af-header {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 18px;
  min-height: 66px;
  padding: 10px 18px;
  border-bottom: 1px solid var(--af-line);
  background: linear-gradient(180deg, rgba(8, 24, 32, .9), rgba(5, 15, 21, .7));
}
.af-header::after {
  content: "";
  position: absolute; bottom: -1px; left: 18px; width: 220px; height: 1px;
  background: linear-gradient(90deg, var(--af-accent), transparent);
  opacity: .5;
}
.af-brand { display: flex; align-items: center; gap: 11px; min-width: 270px; }
.af-brandmark { display: block; width: 44px; height: 44px; color: var(--af-accent); flex: none; filter: drop-shadow(0 0 12px rgba(57, 231, 255, .17)); }
.af-brandmark svg { width: 44px; height: 44px; display: block; }
.af-brand-copy { min-width: 0; }
.af-brand-row { display: flex; align-items: center; gap: 8px; }
.af-brand-row h1 { margin: 0; font: 650 19px/1.05 "Bahnschrift", "Segoe UI", sans-serif; letter-spacing: .12em; color: #e6fdff; white-space: nowrap; }
.af-version { border: 1px solid var(--af-line-strong); border-radius: 3px; padding: 2px 4px; color: var(--af-muted); font: 500 7px/1 ui-monospace, monospace; letter-spacing: .1em; }
.af-brand-sub { margin-top: 4px; color: var(--af-muted); font: 500 9px/1.2 "Segoe UI", sans-serif; letter-spacing: .055em; white-space: nowrap; }
.af-brand-sub span { margin-left: 9px; color: var(--af-dim); font: 500 8px/1 ui-monospace, monospace; letter-spacing: .1em; }
.af-header-center { display: flex; align-items: center; gap: 15px; flex: 1; min-width: 0; }
.af-status {
  display: inline-flex; align-items: center; gap: 7px; flex: none;
  color: #8af6d9; font: 600 9px/1 ui-monospace, monospace; letter-spacing: .08em; text-transform: uppercase;
}
.af-status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--af-muted); }
.af-status-dot.is-live { background: #42ffcb; box-shadow: 0 0 0 4px rgba(66, 255, 203, .07), 0 0 10px rgba(66, 255, 203, .8); animation: af-pulse 1.9s ease-in-out infinite; }
@keyframes af-pulse { 0%, 100% { opacity: 1; } 50% { opacity: .45; } }
.af-header-divider { width: 1px; height: 22px; background: var(--af-line); }
.af-header-metric { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
.af-header-metric small { color: var(--af-dim); font: 600 8px/1 ui-monospace, monospace; letter-spacing: .11em; text-transform: uppercase; }
.af-header-metric strong { color: var(--af-text); font: 500 12px/1.15 ui-monospace, monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 150px; }
.af-header-metric strong em { margin-left: 3px; font-style: normal; color: var(--af-muted); font-size: 9px; }
.af-header-actions { display: flex; align-items: center; gap: 13px; margin-left: auto; }
.af-fps { display: flex; align-items: baseline; gap: 5px; color: var(--af-dim); }
.af-fps small { font: 500 8px/1 ui-monospace, monospace; letter-spacing: .08em; }
.af-fps strong { color: var(--af-muted); font: 500 11px/1 ui-monospace, monospace; }
.af-close {
  display: inline-flex; align-items: center; gap: 8px;
  min-height: 32px; padding: 0 8px 0 10px;
  border: 1px solid var(--af-line); border-radius: 6px;
  background: rgba(11, 30, 39, .72); color: var(--af-muted); cursor: pointer;
}
.af-close span { font: 500 8px/1 ui-monospace, monospace; letter-spacing: .1em; }
.af-close:hover { color: var(--af-text); border-color: var(--af-line-strong); background: rgba(24, 55, 67, .8); }
.af-close:focus-visible, .af-overlay button:focus-visible, .af-overlay input:focus-visible { outline: 1px solid var(--af-accent); outline-offset: 2px; }
.af-body {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 262px minmax(0, 1fr) 306px;
  gap: 9px;
  flex: 1;
  min-height: 0;
  padding: 9px;
}
.af-rail {
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid var(--af-line);
  background: linear-gradient(160deg, rgba(8, 22, 29, .76), rgba(4, 12, 17, .54));
  scrollbar-width: thin;
  scrollbar-color: rgba(104, 234, 255, .25) transparent;
}
.af-rail::-webkit-scrollbar { width: 4px; }
.af-rail::-webkit-scrollbar-thumb { background: rgba(104, 234, 255, .22); border-radius: 4px; }
.af-left { padding: 14px 13px 18px; border-radius: 6px 2px 2px 6px; }
.af-right { padding: 14px 13px 18px; border-radius: 2px 6px 6px 2px; }
.af-left::before, .af-right::before {
  content: ""; position: sticky; top: 0; display: block; height: 1px; margin: -14px -13px 13px;
  background: linear-gradient(90deg, transparent, var(--af-accent), transparent); opacity: .25;
}
.af-panel-head { display: flex; align-items: center; gap: 9px; margin: 2px 0 10px; }
.af-panel-index {
  display: inline-flex; align-items: center; justify-content: center;
  width: 21px; height: 21px; flex: none;
  border: 1px solid var(--af-line-strong); border-radius: 4px;
  color: var(--af-accent); font: 500 8px/1 ui-monospace, monospace;
}
.af-panel-title { display: block; color: var(--af-text); font: 600 9px/1.1 ui-monospace, monospace; letter-spacing: .12em; }
.af-panel-sub { display: block; margin-top: 3px; color: var(--af-dim); font: 500 8px/1 "Segoe UI", sans-serif; letter-spacing: .07em; }
.af-preset-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.af-preset {
  position: relative;
  display: flex; flex-direction: column; align-items: stretch; gap: 2px;
  min-width: 0; padding: 7px 7px 8px;
  border: 1px solid var(--af-line); border-radius: 5px;
  background: rgba(7, 20, 27, .62); color: var(--af-text); cursor: pointer; text-align: left;
  transition: border-color .16s ease, background .16s ease, transform .16s ease;
}
.af-preset:hover { border-color: var(--af-line-strong); background: rgba(16, 42, 51, .6); transform: translateY(-1px); }
.af-preset.is-selected { border-color: color-mix(in srgb, var(--af-accent) 64%, transparent); background: linear-gradient(145deg, color-mix(in srgb, var(--af-accent) 10%, transparent), rgba(7, 20, 27, .8)); box-shadow: inset 0 0 18px color-mix(in srgb, var(--af-accent) 5%, transparent); }
.af-preset-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 3px; min-height: 30px; }
.af-preset-glyph { color: var(--af-muted); display: block; width: 52px; height: 30px; opacity: .86; }
.af-preset-glyph svg { width: 52px; height: 30px; display: block; }
.af-preset.is-selected .af-preset-glyph { color: var(--af-accent); }
.af-preset-cd { color: var(--af-dim); font: 500 7px/1.2 ui-monospace, monospace; white-space: nowrap; }
.af-preset-name { margin-top: 3px; font: 600 10px/1.2 "Segoe UI", sans-serif; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.af-preset-kind { color: var(--af-dim); font: 500 7px/1.2 ui-monospace, monospace; letter-spacing: .035em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-selected-tick { position: absolute; top: 4px; right: 4px; display: grid; place-items: center; width: 14px; height: 14px; color: var(--af-ink); background: var(--af-accent); border-radius: 3px; }
.af-import-zone { position: relative; margin-top: 8px; }
.af-import-zone.is-dragging .af-import-label { border-color: var(--af-accent); background: color-mix(in srgb, var(--af-accent) 11%, rgba(7, 20, 27, .7)); }
.af-import-label {
  display: flex; align-items: center; gap: 8px; min-height: 42px; padding: 7px 8px;
  border: 1px dashed var(--af-line-strong); border-radius: 5px;
  background: rgba(7, 20, 27, .45); cursor: pointer; transition: border-color .16s, background .16s;
}
.af-import-label:hover { border-color: var(--af-accent); background: rgba(13, 39, 48, .52); }
.af-import-label:focus-within { border-color: var(--af-accent); outline: 1px solid var(--af-accent); outline-offset: 2px; }
.af-file-input { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
.af-import-icon { display: grid; place-items: center; width: 26px; height: 26px; flex: none; border: 1px solid var(--af-line); border-radius: 4px; color: var(--af-accent); }
.af-import-copy { min-width: 0; display: flex; flex-direction: column; gap: 2px; flex: 1; }
.af-import-copy strong { color: var(--af-text); font: 500 9px/1.2 "Segoe UI", sans-serif; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-import-copy small { color: var(--af-dim); font: 400 7px/1.25 "Segoe UI", sans-serif; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-import-badge { flex: none; color: var(--af-accent); font: 500 7px/1 ui-monospace, monospace; letter-spacing: .06em; opacity: .8; }
.af-import-clear {
  position: absolute; top: -5px; right: -5px; display: grid; place-items: center; width: 17px; height: 17px;
  border: 1px solid var(--af-line-strong); border-radius: 50%; background: #071820; color: var(--af-muted); cursor: pointer;
}
.af-import-clear:hover { color: var(--af-text); border-color: var(--af-accent); }
.af-inline-error { margin: 6px 1px 0; color: #ff9e9e; font: 400 8px/1.35 "Segoe UI", sans-serif; }
.af-area-card {
  position: relative; display: grid; grid-template-columns: 1fr auto; gap: 3px 8px;
  margin-top: 8px; padding: 9px 10px 10px; overflow: hidden;
  border: 1px solid var(--af-line); border-radius: 5px;
  background: linear-gradient(120deg, rgba(10, 30, 38, .82), rgba(5, 15, 20, .55));
}
.af-area-label { color: var(--af-muted); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-area-card strong { grid-row: span 2; align-self: center; color: var(--af-text); font: 500 19px/1 ui-monospace, monospace; }
.af-area-card strong small { margin-left: 3px; color: var(--af-muted); font-size: 9px; }
.af-area-meta { color: var(--af-dim); font: 400 7px/1.2 "Segoe UI", sans-serif; }
.af-area-card i { position: absolute; bottom: 0; left: 0; height: 1px; background: var(--af-accent); opacity: .65; box-shadow: 0 0 8px var(--af-accent); }
.af-rail-hint { margin: 0 0 8px; color: var(--af-dim); font: 400 8px/1.4 "Segoe UI", sans-serif; }
.af-left .af-panel-head:nth-of-type(2) { margin-top: 16px; }
.af-range-row { display: block; margin: 0 0 9px; }
.af-range-label { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin-bottom: 4px; color: var(--af-muted); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-range-value { color: var(--af-text); font: 500 10px/1 ui-monospace, monospace; white-space: nowrap; }
.af-range-value small { margin-left: 3px; color: var(--af-dim); font-size: 7px; }
.af-range-row input[type="range"] {
  display: block; width: 100%; height: 14px; margin: 0; cursor: pointer;
  -webkit-appearance: none; appearance: none; background: transparent;
}
.af-range-row input[type="range"]::-webkit-slider-runnable-track {
  height: 2px; border-radius: 2px;
  background: linear-gradient(90deg, var(--af-accent) 0 var(--af-fill), rgba(111, 239, 255, .16) var(--af-fill) 100%);
}
.af-range-row input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none; width: 8px; height: 8px; margin-top: -3px;
  border: 1px solid var(--af-ink); border-radius: 50%; background: var(--af-accent);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--af-accent) 25%, transparent), 0 0 8px color-mix(in srgb, var(--af-accent) 65%, transparent);
}
.af-range-row input[type="range"]::-moz-range-track { height: 2px; background: rgba(111, 239, 255, .18); }
.af-range-row input[type="range"]::-moz-range-progress { height: 2px; background: var(--af-accent); }
.af-range-row input[type="range"]::-moz-range-thumb { width: 8px; height: 8px; border: 1px solid var(--af-ink); border-radius: 50%; background: var(--af-accent); }
.af-mass-row { display: flex; align-items: center; justify-content: space-between; padding-top: 8px; margin-top: 2px; border-top: 1px solid var(--af-line); color: var(--af-muted); font: 400 8px/1.2 "Segoe UI", sans-serif; }
.af-mass-row strong { color: var(--af-text); font: 500 10px/1 ui-monospace, monospace; }
.af-mass-row strong small { color: var(--af-dim); font-size: 7px; }
.af-stage {
  position: relative; min-width: 0; min-height: 0; overflow: hidden;
  border: 1px solid var(--af-line);
  border-radius: 3px;
  background:
    radial-gradient(ellipse at 50% 42%, rgba(15, 69, 82, .24), transparent 56%),
    #030a0f;
  isolation: isolate;
}
.af-stage::before, .af-stage::after {
  content: ""; position: absolute; z-index: 3; pointer-events: none; width: 22px; height: 22px; border-color: var(--af-accent); opacity: .55;
}
.af-stage::before { top: 8px; left: 8px; border-top: 1px solid; border-left: 1px solid; }
.af-stage::after { right: 8px; bottom: 8px; border-right: 1px solid; border-bottom: 1px solid; }
.af-canvas { position: absolute; inset: 0; display: block; width: 100%; height: 100%; touch-action: none; cursor: grab; }
.af-canvas:active { cursor: grabbing; }
.af-scanlines, .af-vignette { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.af-scanlines { opacity: .35; background: repeating-linear-gradient(0deg, transparent 0 3px, rgba(139, 248, 255, .018) 3px 4px); }
.af-vignette { background: radial-gradient(ellipse at 50% 45%, transparent 38%, rgba(0, 4, 8, .52) 100%); }
.af-hud { position: absolute; left: 15px; right: 15px; z-index: 5; display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; pointer-events: none; }
.af-hud-top { top: 14px; }
.af-hud-bottom { bottom: 14px; align-items: flex-end; }
.af-hud-block { display: flex; flex-direction: column; gap: 4px; }
.af-hud-overline { color: var(--af-muted); font: 600 8px/1.2 ui-monospace, monospace; letter-spacing: .15em; text-transform: uppercase; }
.af-hud-small { color: var(--af-dim); font: 400 7px/1.3 ui-monospace, monospace; letter-spacing: .035em; }
.af-hud-wind { display: flex; align-items: center; gap: 7px; flex-wrap: wrap; padding: 6px 9px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(4, 15, 21, .58); backdrop-filter: blur(4px); pointer-events: none; margin-left: auto; }
.af-hud-wind .af-hud-overline { margin-right: 3px; }
.af-wind-arrow { display: inline-block; color: var(--af-accent); font: 500 17px/1 ui-monospace, monospace; transform-origin: center; transition: transform .2s ease; text-shadow: 0 0 10px var(--af-accent); }
.af-hud-wind strong { color: var(--af-text); font: 500 11px/1 ui-monospace, monospace; white-space: nowrap; }
.af-hud-wind strong small { color: var(--af-muted); font-size: 8px; }
.af-hud-sep { color: var(--af-dim); font: 400 10px/1 ui-monospace, monospace; }
.af-mode-pill { padding: 2px 4px; border: 1px solid color-mix(in srgb, var(--af-accent) 35%, transparent); border-radius: 2px; color: var(--af-accent); font: 500 7px/1.2 ui-monospace, monospace; letter-spacing: .05em; }
.af-view-switch { display: flex; border: 1px solid var(--af-line); border-radius: 4px; overflow: hidden; background: rgba(5, 15, 21, .68); pointer-events: auto; flex: none; }
.af-view-switch button { padding: 6px 8px; border: 0; border-left: 1px solid var(--af-line); background: transparent; color: var(--af-muted); font: 500 7px/1 ui-monospace, monospace; letter-spacing: .06em; cursor: pointer; }
.af-view-switch button:first-child { border-left: 0; }
.af-view-switch button:hover { color: var(--af-text); background: rgba(35, 85, 100, .35); }
.af-view-switch button.is-active { color: var(--af-ink); background: var(--af-accent); }
.af-side-scale { position: absolute; top: 50%; right: 7px; z-index: 4; display: flex; flex-direction: column; align-items: flex-end; gap: 3px; transform: translateY(-50%); color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; pointer-events: none; }
.af-side-scale i { width: 12px; height: 1px; background: var(--af-line-strong); margin-bottom: 5px; }
.af-legend { display: flex; flex-direction: column; gap: 5px; width: 188px; padding: 7px 8px 6px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(4, 15, 21, .65); backdrop-filter: blur(4px); pointer-events: none; }
.af-legend-head { display: flex; justify-content: space-between; gap: 6px; color: var(--af-muted); font: 500 7px/1.2 ui-monospace, monospace; letter-spacing: .06em; }
.af-legend-head span:last-child { color: var(--af-accent); }
.af-legend-gradient { height: 3px; border-radius: 2px; box-shadow: 0 0 12px color-mix(in srgb, var(--af-accent) 20%, transparent); }
.af-legend-labels { display: flex; justify-content: space-between; gap: 4px; color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; }
.af-legend-fast { color: var(--af-muted); }
.af-playbar { display: flex; align-items: center; gap: 9px; padding: 5px 7px 5px 5px; border: 1px solid var(--af-line); border-radius: 5px; background: rgba(4, 15, 21, .76); backdrop-filter: blur(6px); pointer-events: auto; flex-wrap: wrap; max-width: 100%; }
.af-play { display: grid; place-items: center; width: 30px; height: 30px; flex: none; border: 1px solid color-mix(in srgb, var(--af-accent) 45%, transparent); border-radius: 4px; background: color-mix(in srgb, var(--af-accent) 9%, transparent); color: var(--af-accent); cursor: pointer; }
.af-play:hover { background: var(--af-accent); color: var(--af-ink); }
.af-time { display: flex; flex-direction: column; gap: 2px; min-width: 56px; }
.af-time span { color: var(--af-dim); font: 500 6px/1 ui-monospace, monospace; letter-spacing: .08em; }
.af-time strong { color: var(--af-text); font: 500 10px/1 ui-monospace, monospace; }
.af-play-divider { width: 1px; height: 19px; background: var(--af-line); }
.af-chip { display: inline-flex; align-items: center; gap: 4px; height: 25px; padding: 0 6px; border: 1px solid var(--af-line); border-radius: 3px; background: transparent; color: var(--af-muted); font: 500 7px/1 "Segoe UI", sans-serif; cursor: pointer; white-space: nowrap; }
.af-chip:hover { color: var(--af-text); border-color: var(--af-line-strong); }
.af-chip.is-active { color: var(--af-accent); border-color: color-mix(in srgb, var(--af-accent) 38%, transparent); background: color-mix(in srgb, var(--af-accent) 8%, transparent); }
.af-chip svg { flex: none; }
.af-icon-btn { display: grid; place-items: center; width: 25px; height: 25px; border: 1px solid var(--af-line); border-radius: 3px; background: transparent; color: var(--af-muted); cursor: pointer; }
.af-icon-btn:hover { color: var(--af-text); border-color: var(--af-line-strong); }
.af-force-hud { width: 158px; margin-left: auto; padding: 7px 9px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(4, 15, 21, .7); backdrop-filter: blur(4px); pointer-events: none; }
.af-force-head { display: flex; align-items: center; justify-content: space-between; gap: 6px; color: var(--af-muted); font: 500 7px/1.2 ui-monospace, monospace; letter-spacing: .06em; }
.af-live-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--af-dim); }
.af-live-dot.is-live { background: var(--af-accent); box-shadow: 0 0 7px var(--af-accent); }
.af-force-value { display: flex; align-items: baseline; gap: 3px; margin: 3px 0 4px; }
.af-force-value strong { color: var(--af-text); font: 500 19px/1 ui-monospace, monospace; letter-spacing: -.02em; }
.af-force-value span { color: var(--af-accent); font: 500 8px/1 ui-monospace, monospace; }
.af-force-value small { margin-left: auto; color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; }
.af-force-bar { height: 2px; overflow: hidden; background: rgba(102, 239, 255, .12); border-radius: 2px; }
.af-force-bar i { display: block; height: 100%; background: linear-gradient(90deg, var(--af-accent), #fff); box-shadow: 0 0 8px var(--af-accent); transition: width .2s ease; }
.af-force-foot { display: flex; justify-content: space-between; gap: 5px; margin-top: 4px; color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; }
.af-force-foot span:last-child { color: var(--af-muted); }
.af-force-foot small { font-size: 5px; }
.af-stage-note { position: absolute; left: 16px; bottom: 88px; z-index: 4; display: flex; align-items: center; gap: 6px; color: var(--af-dim); font: 400 6px/1.2 ui-monospace, monospace; letter-spacing: .04em; pointer-events: none; }
.af-axis { display: inline-flex; align-items: center; justify-content: center; width: 10px; height: 10px; border: 1px solid var(--af-line-strong); border-radius: 2px; color: var(--af-muted); font: 500 6px/1 ui-monospace, monospace; }
.af-axis-y { color: #a5ffcf; }
.af-axis-z { color: #ff9ed9; }
.af-boot { position: absolute; inset: 0; z-index: 8; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; background: radial-gradient(ellipse at 50% 50%, rgba(9, 34, 44, .84), rgba(2, 7, 10, .96)); color: var(--af-text); text-align: center; }
.af-boot strong { font: 600 10px/1.2 ui-monospace, monospace; letter-spacing: .15em; color: var(--af-accent); }
.af-boot > span { color: var(--af-muted); font: 400 9px/1.4 "Segoe UI", sans-serif; max-width: 300px; }
.af-boot-orbit { position: relative; width: 74px; height: 74px; margin-bottom: 9px; }
.af-boot-orbit i { position: absolute; inset: 7px; border: 1px solid var(--af-line-strong); border-radius: 50%; animation: af-spin 2.4s linear infinite; }
.af-boot-orbit i:nth-child(1) { border-color: transparent var(--af-accent) transparent transparent; }
.af-boot-orbit i:nth-child(2) { inset: 17px; border-color: transparent transparent var(--af-muted) transparent; animation-duration: 1.8s; animation-direction: reverse; }
.af-boot-orbit i:nth-child(3) { inset: 28px; border: 0; background: var(--af-accent); box-shadow: 0 0 18px var(--af-accent); animation: af-pulse 1.1s ease-in-out infinite; }
@keyframes af-spin { to { transform: rotate(360deg); } }
.af-boot-bar { width: 170px; height: 2px; margin-top: 6px; overflow: hidden; background: rgba(111, 239, 255, .12); }
.af-boot-bar i { display: block; width: 45%; height: 100%; background: var(--af-accent); box-shadow: 0 0 8px var(--af-accent); animation: af-load 1.4s ease-in-out infinite; }
@keyframes af-load { 0% { transform: translateX(-110%); } 100% { transform: translateX(260%); } }
.af-boot-error { gap: 10px; }
.af-error-mark { display: grid; place-items: center; width: 34px; height: 34px; margin-bottom: 3px; border: 1px solid rgba(255, 142, 142, .5); border-radius: 50%; color: #ff9e9e; font: 500 16px/1 ui-monospace, monospace; }
.af-retry { margin-top: 5px; padding: 7px 14px; border: 1px solid var(--af-line-strong); border-radius: 4px; background: rgba(17, 44, 53, .7); color: var(--af-text); font: 500 9px/1 "Segoe UI", sans-serif; cursor: pointer; }
.af-retry:hover { border-color: var(--af-accent); color: var(--af-accent); }
.af-wind-display { display: flex; align-items: flex-start; justify-content: space-between; padding: 1px 0 8px; }
.af-wind-label { display: block; margin-bottom: 4px; color: var(--af-muted); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-wind-display strong { color: var(--af-text); font: 500 31px/1 ui-monospace, monospace; letter-spacing: -.055em; }
.af-wind-display strong small { margin-left: 4px; color: var(--af-accent); font-size: 10px; letter-spacing: .02em; }
.af-wind-kmh { display: block; margin-top: 5px; color: var(--af-dim); font: 400 7px/1.2 ui-monospace, monospace; }
.af-wind-icon { color: var(--af-accent); opacity: .65; padding-top: 7px; }
.af-quick-row { display: flex; gap: 4px; margin: 1px 0 8px; }
.af-quick-row button { flex: 1; min-width: 0; padding: 4px 2px; border: 1px solid var(--af-line); border-radius: 3px; background: rgba(7, 20, 27, .5); color: var(--af-muted); font: 500 7px/1.2 ui-monospace, monospace; cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-quick-row button:hover { border-color: var(--af-line-strong); color: var(--af-text); }
.af-quick-row button.is-active { border-color: color-mix(in srgb, var(--af-accent) 48%, transparent); color: var(--af-accent); background: color-mix(in srgb, var(--af-accent) 8%, transparent); }
.af-direction-block { padding-top: 10px; margin-top: 2px; border-top: 1px solid var(--af-line); }
.af-direction-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 2px; color: var(--af-muted); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-direction-head strong { color: var(--af-accent); font: 500 14px/1 ui-monospace, monospace; }
.af-compass-wrap { display: flex; align-items: center; gap: 4px; margin: 3px 0 4px; }
.af-compass { display: block; width: 116px; height: 116px; flex: none; margin-left: -3px; }
.af-compass-readout { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.af-compass-readout span { color: var(--af-dim); font: 500 6px/1.2 ui-monospace, monospace; letter-spacing: .07em; }
.af-compass-readout strong { color: var(--af-text); font: 600 9px/1.2 "Segoe UI", sans-serif; }
.af-compass-readout small { color: var(--af-muted); font: 400 7px/1.2 ui-monospace, monospace; }
.af-direction-presets { margin-top: 5px; }
.af-right .af-panel-head:nth-of-type(2) { margin-top: 16px; }
.af-telemetry-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5px; }
.af-metric { position: relative; min-width: 0; padding: 6px 7px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(6, 18, 24, .55); overflow: hidden; }
.af-metric span { display: block; margin-bottom: 4px; color: var(--af-dim); font: 500 7px/1.2 "Segoe UI", sans-serif; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-metric strong { color: var(--af-text); font: 500 13px/1 ui-monospace, monospace; letter-spacing: -.02em; white-space: nowrap; }
.af-metric strong small { margin-left: 2px; color: var(--af-muted); font-size: 7px; }
.af-metric-main { grid-column: span 2; padding: 8px; background: linear-gradient(110deg, color-mix(in srgb, var(--af-accent) 8%, transparent), rgba(6, 18, 24, .55)); }
.af-metric-main strong { font-size: 23px; }
.af-metric-main i { position: absolute; bottom: 0; left: 0; height: 1px; background: var(--af-accent); box-shadow: 0 0 8px var(--af-accent); }
.af-chart { margin-top: 6px; padding: 7px 7px 5px; border: 1px solid var(--af-line); border-radius: 4px; background: rgba(5, 16, 21, .62); }
.af-chart-head { display: flex; justify-content: space-between; gap: 5px; color: var(--af-dim); font: 500 6px/1.2 ui-monospace, monospace; letter-spacing: .04em; }
.af-chart-head span:last-child { color: var(--af-muted); }
.af-chart svg { display: block; width: 100%; height: 58px; margin-top: 4px; overflow: visible; }
.af-chart-foot { display: flex; justify-content: space-between; color: var(--af-dim); font: 400 6px/1 ui-monospace, monospace; }
.af-auto-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 1px 0 8px; }
.af-auto-title { display: block; color: var(--af-text); font: 500 8px/1.2 "Segoe UI", sans-serif; }
.af-auto-row small { display: block; margin-top: 3px; color: var(--af-dim); font: 400 7px/1.25 "Segoe UI", sans-serif; }
.af-switch { position: relative; width: 29px; height: 15px; flex: none; padding: 0; border: 1px solid var(--af-line-strong); border-radius: 10px; background: rgba(9, 24, 31, .8); cursor: pointer; }
.af-switch span { position: absolute; top: 2px; left: 2px; width: 9px; height: 9px; border-radius: 50%; background: var(--af-dim); transition: transform .16s ease, background .16s ease, box-shadow .16s ease; }
.af-switch.is-on { border-color: color-mix(in srgb, var(--af-accent) 50%, transparent); background: color-mix(in srgb, var(--af-accent) 14%, transparent); }
.af-switch.is-on span { transform: translateX(14px); background: var(--af-accent); box-shadow: 0 0 8px var(--af-accent); }
.af-palette-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; }
.af-swatch { display: flex; align-items: center; gap: 5px; min-width: 0; padding: 4px 5px; border: 1px solid var(--af-line); border-radius: 3px; background: rgba(6, 18, 24, .5); color: var(--af-muted); font: 500 7px/1.2 "Segoe UI", sans-serif; cursor: pointer; text-align: left; }
.af-swatch:hover { border-color: var(--af-line-strong); color: var(--af-text); }
.af-swatch.is-selected { border-color: color-mix(in srgb, var(--af-accent) 54%, transparent); color: var(--af-text); }
.af-swatch-chip { width: 14px; height: 9px; flex: none; border-radius: 2px; box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .12); }
.af-swatch span:nth-child(2) { min-width: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.af-swatch em { margin-left: auto; color: var(--af-accent); font: 500 5px/1 ui-monospace, monospace; font-style: normal; letter-spacing: .04em; }
.af-field-foot { display: flex; flex-wrap: wrap; gap: 4px 8px; margin-top: 8px; padding-top: 7px; border-top: 1px solid var(--af-line); color: var(--af-dim); font: 500 6px/1.2 ui-monospace, monospace; letter-spacing: .02em; }
.af-field-foot span { display: inline-flex; align-items: center; gap: 3px; }
.af-mini-dot { width: 3px; height: 3px; border-radius: 50%; background: var(--af-accent); box-shadow: 0 0 4px var(--af-accent); }
.af-disclaimer { margin: 13px 0 0; color: var(--af-dim); font: 400 7px/1.45 "Segoe UI", sans-serif; border-top: 1px solid var(--af-line); padding-top: 8px; }
@media (max-width: 1320px) {
  .af-body { grid-template-columns: 238px minmax(0, 1fr) 286px; gap: 7px; padding: 7px; }
  .af-left { padding: 12px 11px 16px; }
  .af-right { padding: 12px 11px 16px; }
  .af-dock-stats { gap: 11px; }
  .af-playbar { gap: 6px; }
  .af-chip span { display: none; }
  .af-chip { padding: 0 7px; }
  .af-legend { display: none; }
}
@media (max-width: 1120px) {
  .af-body { grid-template-columns: 218px minmax(0, 1fr) 260px; }
  .af-brand { min-width: 220px; }
  .af-brand-row h1 { font-size: 17px; }
  .af-header-center .af-header-metric { display: none; }
  .af-header-center { justify-content: flex-start; }
  .af-preset-grid { gap: 4px; }
  .af-preset-name { font-size: 9px; }
  .af-coordinates { display: none; }
  .af-force-hud { display: none; }
  .af-playbar { max-width: 100%; }
}
@media (max-width: 920px) {
  .af-overlay { padding: 0; align-items: stretch; }
  .af-shell { width: 100vw; height: 100vh; max-height: 100vh; border-radius: 0; border-left: 0; border-right: 0; }
  .af-header { min-height: 58px; padding: 8px 12px; gap: 10px; }
  .af-brand { min-width: 0; flex: 1; }
  .af-brandmark, .af-brandmark svg { width: 34px; height: 34px; }
  .af-brand-row h1 { font-size: 15px; }
  .af-brand-sub span { display: none; }
  .af-header-center { display: none; }
  .af-body { display: flex; flex-direction: column; overflow-y: auto; padding: 7px; gap: 7px; }
  .af-stage { order: -1; min-height: 470px; flex: none; }
  .af-left, .af-right { overflow: visible; min-height: auto; flex: none; border-radius: 5px; }
  .af-left { display: grid; grid-template-columns: 1fr 1fr; column-gap: 13px; align-items: start; }
  .af-left .af-panel-head { grid-column: 1 / -1; }
  .af-left .af-preset-grid, .af-left .af-import-zone, .af-left .af-inline-error, .af-left .af-area-card { grid-column: 1 / -1; }
  .af-left .af-panel-head:nth-of-type(2) { grid-column: 1 / -1; margin-top: 9px; }
  .af-left .af-rail-hint { grid-column: 1 / -1; }
  .af-left .af-mass-row { grid-column: 1 / -1; }
  .af-right { display: grid; grid-template-columns: 1fr 1fr; column-gap: 14px; align-items: start; }
  .af-right .af-panel-head { grid-column: 1 / -1; }
  .af-right .af-panel-head:nth-of-type(2) { margin-top: 9px; }
  .af-right .af-telemetry-grid, .af-right .af-chart, .af-right .af-auto-row, .af-right .af-palette-row, .af-right .af-field-foot, .af-right .af-disclaimer { grid-column: 1 / -1; }
  .af-right .af-direction-block { grid-column: 1 / -1; }
  .af-right .af-rail-hint { grid-column: 1 / -1; }
  .af-legend { display: flex; }
  .af-force-hud { display: block; width: 145px; }
  .af-playbar { max-width: calc(100% - 150px); }
  .af-coordinates { display: flex; }
}
@media (max-width: 760px) {
  .af-legend { display: none; }
  .af-force-hud { display: none; }
  .af-playbar { max-width: 100%; }
}
@media (max-width: 640px) {
  .af-stage { min-height: 400px; }
  .af-hud { left: 9px; right: 9px; }
  .af-hud-top { top: 9px; }
  .af-hud-bottom { bottom: 9px; flex-wrap: wrap; }
  .af-hud-block.af-coordinates { display: none; }
  .af-hud-wind { margin-left: 0; }
  .af-view-switch { margin-left: auto; }
  .af-legend { display: none; }
  .af-force-hud { display: none; }
  .af-playbar { width: 100%; max-width: 100%; justify-content: space-between; }
  .af-stage-note { display: none; }
  .af-side-scale { display: none; }
  .af-left { display: block; }
  .af-right { display: block; }
  .af-brand-sub { max-width: 190px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .af-version { display: none; }
  .af-fps { display: none; }
  .af-header-metric { display: none; }
  .af-shell { overflow-y: auto; }
  .af-body { overflow: visible; }
}
`,Sv={inject:["slots","locale"],apply(s){s.effect(()=>{let n=s.locale.register(hu,"en",pu),i=s.locale.register(hu,"zh",mu);return()=>{n(),i()}});let{Launcher:e,OverlayHost:t}=vv(s);s.slots.inject("conversation.input.dock",()=>s.slots.register({name:"conversation.input.dock",id:"aeroflow-launcher",order:30},e)),s.slots.inject("shell.overlay",()=>s.slots.register({name:"shell.overlay",id:"aeroflow-lab",order:30},t))}},rp=Sv;window.__ModuleLoader__.load({id:"aeroflow-dsh-plugin",factory(s){return sp(s("react")),rp}});})();
/*! Bundled license information:

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

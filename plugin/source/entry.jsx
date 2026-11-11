import plugin, { installReact } from './client.jsx';

window.__ModuleLoader__.load({
  id: 'aeroflow-dsh-plugin',
  factory(require) {
    installReact(require('react'));
    return plugin;
  },
});

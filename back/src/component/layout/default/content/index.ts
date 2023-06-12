import type { App, Plugin } from 'vue';
import LayoutContent from './src/component/index.vue'
LayoutContent.install = (app: App) => {
    app.component(LayoutContent.name, LayoutContent);
    return app;
}

type a = LayoutContent as typeof LayoutContent & Plugin

export default LayoutContent as typeof LayoutContent & Plugin
// export default LayoutContent

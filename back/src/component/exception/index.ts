import type { App, Plugin } from 'vue';
import Exception from './src/component/index.vue'

Exception.install = (app: App) => {
    app.component(Exception.name, Exception);
    return app;
}

export default Exception as typeof Exception & Plugin
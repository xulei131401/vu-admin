import type { App, Plugin } from 'vue'
import AppContainer from './src/component/index.vue'

AppContainer.install = (app: App) => {
    app.component(AppContainer.name, AppContainer);
    return app;
}

export default AppContainer as typeof AppContainer & Plugin
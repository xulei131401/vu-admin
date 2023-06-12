import type { App, Plugin } from 'vue'
import Login from './src/component/index.vue'

Login.install = (app: App) => {
    app.component(Login.name, Login);
    return app;
}

export default Login as typeof Login & Plugin
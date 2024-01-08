import { App } from 'vue'
import VAdmin from 'vu'

export default {
    install(app: App) {
        setupGlobal(app)
    }
}

export function setupGlobal(app: App) {
    app.use(VAdmin)
}

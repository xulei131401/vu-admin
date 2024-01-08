import {withInstall} from '@/component/util'
import appProvider from './AppProvider.vue'

export const AppProvider = withInstall(appProvider)
export default AppProvider

declare module 'vue' {
  export interface GlobalComponents {
    VuAppProvider: typeof AppProvider;
  }
}
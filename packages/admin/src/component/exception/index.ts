import {withInstall} from '@/component/util'
import exception from './Exception.vue'

export const Exception = withInstall(exception)
export default Exception

declare module 'vue' {
  export interface GlobalComponents {
    VuException: typeof Exception;
  }
}
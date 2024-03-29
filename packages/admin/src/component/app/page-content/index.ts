import {withInstall} from '@/component/util'
import pageContent from './PageContent.vue'

export const PageContent = withInstall(pageContent)
export default PageContent

declare module 'vue' {
  export interface GlobalComponents {
    VuPageContent: typeof PageContent;
  }
}
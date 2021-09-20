// @ts-ignore
import Layout from './Layout.vue'
import vRipple from '../../directives/vRipple';
import vClip from '../../directives/vClip.js'
import vScroll from '../../directives/vScroll'

export default {
  Layout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    app.directive('ripple', vRipple);
    app.directive('clip', vClip);
    app.directive('scroll', vScroll);
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  }
}
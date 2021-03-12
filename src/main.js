import '~/assets/scss/main.scss'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch, faGithub, faTwitter, faYoutube, faLinkedin);


import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component("fa-icon", FontAwesomeIcon);
  Vue.use(BootstrapVue)

}

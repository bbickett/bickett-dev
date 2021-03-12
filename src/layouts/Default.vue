<template>
    <div class="layout">

        <header class="header">
          <main-nav></main-nav>
        </header>

        <main class="container-fluid main">
            <slot/>
        </main>
    
        <site-footer></site-footer>
    </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import MainNav from '~/components/MainNav.vue'
import SiteFooter from '~/components/SiteFooter.vue'

  export default {
    components: {
        MainNav,
        SiteFooter
    }
  }
</script>


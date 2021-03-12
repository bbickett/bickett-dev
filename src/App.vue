<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName + '- bickett.dev',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ],
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Oswald:400,600,700|Roboto:300,400|Architects+Daughter|Permanent+Marker&display=swap"
        }
      ]
    }
  }
}
</script>


<style lang="scss">

    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }


    .main {
        display: flex;
        flex-direction: column;
        flex: 1;
    }



</style>
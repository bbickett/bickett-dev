<template>
  <Layout>
    <h1>About Me</h1>

    <brian-avatar www="150"></brian-avatar>

  </Layout>
</template>

<script>

import BrianAvatar from '@/components/BrianAvatar'


export default {
  metaInfo: {
    title: 'About Me'
  },
  components: {
      BrianAvatar
  },
  data() {
    return {

    }
  }
}
</script>

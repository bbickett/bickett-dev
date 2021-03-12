<template>
  <Layout>

    <h1 class="page-title">{{ $page.article.title }}</h1>

    <article v-html="$page.article.content" class="article" />

  </Layout>
</template>

<page-query>
query Article ($path: String!) {
  article: article (path: $path) {
    title
    content
    timeToRead
    cover
    slug
    date
    excerpt
    path
  }
}
</page-query>

<script>

export default {

    metaInfo() {
        return {
          title: this.$page.article.title,
        }
    },

}
</script>


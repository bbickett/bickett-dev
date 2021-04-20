<template>
  <Layout>

      <section id="introduction" class="container">
          <h2>Hello!</h2>

          <p>
            This is my little corner of the web where I hope to enlighten others and better my own skills 
            by writing about things I have learned or am currently learning.  I mostly will try to focus on
            web development, but may occasionally dive into my other interests: fixing/building things, 
            woodworking, house chores and remodels, and running!
          </p>


          <p>Hopefully I'll have get this site designed a little better and get my first blog post up!</p>
      </section>



      <!-- <section id="latest-articles">
        <div class="container">
          <h2>Latest Articles</h2>

          <div class="articles row row-cols-2">
              <div class="col" v-for="article in $page.recentArticles.edges" :key="article.node.id">
                  <div class="article card">
                      <h3><g-link :to="article.node.path" :aria-label="article.node.title">{{ article.node.title }}</g-link></h3>
                      <p>{{ article.node.excerpt }}</p>
                  </div>
              </div>
          </div>

          <g-link to="/blog">What to see more articles?</g-link>
      </div>
    </section> -->



  </Layout>
</template>

<page-query>
query Articles {
  recentArticles: allArticle(perPage: 6) {
    edges {
      node {
        id
        title
        excerpt
        # ... cover (width: 550, height: 286, quality: 90)
        path
        date(format: "MMMM DD, YYYY")
        timeToRead
      }
    }
  }
}
</page-query>

<script>

import BrianAvatar from '@/components/BrianAvatar'

export default {
  components: {
    BrianAvatar
  },
  metaInfo: {
    title: 'Brian Bickett'
  }
}
</script>

<style lang="scss">

#latest-articles {
  background-color: white;
}
</style>
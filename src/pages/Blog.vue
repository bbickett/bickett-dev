<template>
    <Layout>

        <div class="container">
          <h1 class="page-title">Articles</h1>

          <p>Total Pages: {{ $page.articles.pageInfo.totalPages }}</p>
          <p>Current Pages: {{ $page.articles.pageInfo.currentPage }}</p>
          <p>Total Articles: {{ $page.articles.totalCount }}</p>

          <article-list :articles="$page.articles.edges" :page-info="$page.articles.pageInfo" />


        </div>
        
    </Layout>
</template>


<page-query>
query Blog ($page: Int) {
  articles: allArticle(perPage: 5, page: $page)  {
    pageInfo {
      totalPages
      currentPage
    }
    totalCount
    edges {
      node {
        id
        title
        slug
        excerpt
        cover
        timeToRead
        path
        date
        tags {
          id
          title
          
        }
      }
    }
  }
}
</page-query>


<script>

import ArticleList from "@/components/ArticleList";

export default {
    metaInfo: {
      title: 'Blog'
    },
    components: {
        ArticleList
    }
}

</script>

<template>
    <div class="article-list">
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="article in articles" :key="article.node.id" class="article">
                <article-summary :article="article" class="col"></article-summary>
            </div>
        </div>
    </div>
</template>

<script>

import ArticleSummary from '@/components/ArticleSummary'

export default {
    props: ["articles", "pageInfo"],
    components: {
        ArticleSummary
    }
}

</script>
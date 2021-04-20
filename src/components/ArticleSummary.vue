<template>
    <div class="article-summary">
        <b-card
            :title="article.node.title"
            tag="article"
            no-body
        >
            <b-card-img src="https://picsum.photos/600/300/?image=25" alt="Image" top></b-card-img>

            <b-card-body>
                <b-card-title><g-link :to="article.node.path" class="stretched-link">{{ article.node.title }}</g-link></b-card-title>
                <b-card-sub-title class="mb-2">{{ article.node.timeToRead }} min read</b-card-sub-title>
                <b-card-text v-if="article.node.excerpt">
                    <p>{{ article.node.excerpt }}</p>
                </b-card-text>
            </b-card-body>

            <b-card-footer>
                <small class="float-right">
                    {{ new Date(article.node.date).toLocaleDateString() }}
                </small>
            </b-card-footer>
        </b-card>
    </div>
</template>

<script>


    export default {
        name: 'ArticleSummary',
        props: ['article'],
        components: {

        },
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {

        }
    }

</script>

<style lang="scss">
    .article-summary {
        
    }
</style>
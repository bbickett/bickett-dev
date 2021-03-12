<template>
    <div class="article-list">

        <div v-for="post in posts" :key="post.node.id" class="article">
            <h2>
                <g-link :to="post.node.path">{{ post.node.title }}</g-link>
            </h2>
            <small>
                {{ new Date(post.node.date).toLocaleDateString() }}
                {{ post.node.timeToRead }} min read
            </small>
            <p v-if="post.node.excerpt">{{ post.node.excerpt }}</p>
        </div>
    </div>
</template>

<script>


export default {
    props: ["posts", "pageInfo"],
    components: {
        
    }
}
</script>
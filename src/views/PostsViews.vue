<template>
    <div>
        <Post v-bind:key="post.id" v-for="post in posts" :post="post"/>
    </div>
</template>

<script>

    import Post from '../components/Post'

    export default {
        name: "PostsViews",
        components: {
            Post
        },
        created() {
            this.$store.dispatch('getPosts');
        },
        computed: {
            posts() {
                return this.$store.getters.postsUsers;
            }
        }
    }
</script>

<style scoped>

</style>
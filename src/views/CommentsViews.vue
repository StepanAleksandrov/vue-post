<template>
    <div class="align">
        <button class="v-btn" v-on:click="info">Information on the author</button>
        <div>
            <Comment v-bind:key="comment.id" v-for="comment in comments" :comment="comment"/>
        </div>
    </div>

</template>

<script>

    import Comment from '../components/Comment'

    export default {
        name: "CommentsViews",
        components: {
            Comment
        },
        computed: {
            comments() {
                return this.$store.getters.commentsPost;
            },
            userId() {
                return this.$store.state.userId
            }
        },
        methods: {
            info: function () {
                this.$store.dispatch('getUsers', this.userId);
                this.$router.push({ name: 'user'})
            }
        }
    }
</script>

<style scoped>
    .v-btn{
        color: ghostwhite;
        margin: 15px;
        background-color: #5dae6a;
    }
    .align{
        text-align: center;
    }
</style>
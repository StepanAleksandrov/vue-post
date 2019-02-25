<template>
    <div class="postCard">
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title primary-title>
                        <div>
                                <h3 class="headline mb-0" v-on:click="getComments">{{this.post.title}}</h3>
                            <div> {{this.post.body}}</div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

    export default {
        name: "post",
        props: ['post'],
        methods: {
            getComments: function () {
                this.$store.commit('setPostId', this.post.userId);
                this.$store.dispatch('getComments', this.post.id);
                this.$router.push({ name: 'comments', params: { id: this.post.id } })
            }
        }
    }
</script>

<style scoped>
    .postCard {
        margin-bottom: 20px;
    }
    .headline:hover{
        cursor: pointer;
    }
</style>
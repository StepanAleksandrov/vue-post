<template>
    <div class="postComment" >
        <h2>{{comment.name}}</h2>
        <h3>{{this.comment.email}}</h3>
        <p>{{comment.body}}</p>
    </div>
</template>

<script>
    export default {
        name: "comment",
        props: ['comment'],
    }
</script>

<style scoped>
    h2{
        color: #4c62ae;
    }
    h3{
       color: #ff1a26;
        margin: 3px;
    }
    h3:hover{
        cursor: pointer;
    }
    .postComment{
        border: 1px solid #858585;
        text-align: center;
        margin: 10px;
        padding: 10px;
    }
</style>
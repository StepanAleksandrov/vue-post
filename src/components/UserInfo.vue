<template>
    <div class="info">
        <h1 style="padding-bottom: 5px">{{this.user[0].name}} {{this.user[0].username}}</h1>
        <p>{{this.user[0].email}}</p>
        <p>Street: {{this.user[0].address.street}}, {{this.user[0].address.suite}},
            City: {{this.user[0].address.city}}</p>
        <p>Phone: {{this.user[0].phone}}</p>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        computed: {
            user() {
                return this.$store.getters.userInfo;
            }
        }
    }
</script>

<style scoped>
    .info{
        margin-top: 20px;
        text-align: center;
    }
    p{
        font-family: "Arial Black";
        font-size: 14px;
        color: #4f7c8b;
    }
</style>
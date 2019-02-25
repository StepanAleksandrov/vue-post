export  default {
    setPosts(state, posts) {
        state.posts = posts;
    },
    setComments(state, comments) {
        state.comments = comments;
    },
    setPostId(state,userId){
        state.userId = userId;
    },
    setUser(state, user) {
        state.userInfo = user;
    }
}
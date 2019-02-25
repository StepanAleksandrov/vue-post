import Vue from 'vue'
import Router from 'vue-router'
import PostsViews from './views/PostsViews'
import CommentViews from './views/CommentsViews';
import UserInfo from './components/UserInfo';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'App',
            component: PostsViews
        },
        {
            path: '/comments/:id',
            name: 'comments',
            component: CommentViews
        },
        {
            path: '/user',
            name: 'user',
            component: UserInfo
        }
    ]
})
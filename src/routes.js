import Home from './components/Home';
import PostList from './components/posts/PostList';
import PostDetail from './components/posts/PostDetail';
import Post from './components/posts/Post';

export const routes = [
    { path: '/', component: Home },
    {
        path: '/posts', component: Post, children: [
            { path: '', component: PostList, name: 'postList' },
            {
                path: ':id', component: PostDetail, name: 'postDetail',
                beforeEnter: (to, from, next) => {
                    let result = confirm('Activate route post detail ?');
                    next(result);
                }
            }
        ]
    },
    /*  { path: '/posts', component: PostList,  name: 'postList' },
      { path: '/posts/:id', component: PostDetail, name:'postDetail' },*/
    { path: '*', redirect: '/' }
];
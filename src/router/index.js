import Vue from 'vue'
import Router from 'vue-router'
import articleList from '../components/articleList'
import articleDetail from '../components/articleDetail'
import postArticle from '../components/postArticle'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'articleList',
      component: articleList
    }, {
        path: '/article-detail',
        name: 'articleDetail',
        component: articleDetail
    }, {
      path: '/post-article',
      name: "postArticle",
      component: postArticle
    }
  ]
})

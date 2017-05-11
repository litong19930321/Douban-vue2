import Vue from 'vue'
import Router from 'vue-router'


import PagesView from '../pages/PageView.vue'
import HomePage from '../pages/HomePage.vue'
import BookPage from '../pages/BookPage.vue'
import DetailPage from '../pages/DetailPage.vue'
import GroupPage from '../pages/GroupPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import MoviePage from '../pages/MoviePage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import StatusPage from '../pages/StatusPage.vue'
import SubjectPage from '../pages/SubjectPage.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/pages/"
    },
    {
      path: '/pages',
      component: PagesView,
      children:[
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'movie',
          name: 'MoviePage',
          component: MoviePage
        },
        {
          path: 'book',
          name: 'BookPage',
          component: BookPage
        },
        {
          path: 'status',
          name: 'StatusPage',
          component: StatusPage
        },
        {
          path: 'group',
          name: 'GroupPage',
          component: GroupPage
        },
        {
          path: 'detail/:id',
          name: 'DetailPage',
          component: DetailPage
        }
      ]
    },
    {
      path: 'pages/:classify/subject/:id',
      name: 'SubjectPage',
      component: {
        default: PagesView,
        subject: SubjectPage
      }
    },
    {
      path: '/search',
      name: 'SearchPage',
      component: {
        default: PagesView,
        search: SearchPage
      }
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})

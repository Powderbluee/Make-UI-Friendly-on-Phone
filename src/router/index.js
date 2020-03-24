import Vue from 'vue'
import Router from 'vue-router'
import ProjectDisplay from '@/components/ProjectDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProjectDisplay',
      component: ProjectDisplay,
    }
  ]
})

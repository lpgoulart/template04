import Vue from 'vue'
import Router from 'vue-router'
import Service from '@/components/Service'
import Contato from '@/components/Contato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Service',
      component: Service
    },
    {
      path: '/trabalhos',
      name: 'Service',
      component: Service
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})

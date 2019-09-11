import Vue from 'vue'
import Router from 'vue-router'
import Service from '@/components/Service'
import Sobre from '@/components/Sobre'
import Trabalhos from '@/components/Trabalhos'
import Contato from '@/components/Contato'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/servicos',
      name: 'Service',
      component: Service
    },
    {
      path: '/trabalhos',
      name: 'Trabalhos',
      component: Trabalhos
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})

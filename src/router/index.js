import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Resultat from '../views/ResultatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/resultat',
      name: 'resultat',
      component: Resultat
    }
  ]
})

export default router

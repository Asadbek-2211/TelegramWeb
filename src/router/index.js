import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/groups/:group_id',
      name: 'groups',
      component: () => import('../views/GroupsView.vue')
    },
    {
      path: '/contacts/:user_id',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
  ]
})
export default router

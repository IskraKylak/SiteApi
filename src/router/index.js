import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/home'
import blog from '@/views/bmo'
import calendarevent from '@/views/calendarevent'
import contact from '@/views/contact'
import details from '@/views/details'
import presidium from '@/views/presidium'
import NotFound from '@/views/404.vue'
import experts from '@/views/experts.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: home
   },
   {
      path: '/bmo',
      name: 'bmo',
      component: blog
   },
   {
      path: '/calendarevent/',
      name: 'calendarevent',
      component: calendarevent
   },
   {
      path: '/contact',
      name: 'contact',
      component: contact
   },
   {
      path: '/details/:Pid',
      name: 'details',
      component: details
   },
   {
      path: '/presidium',
      name: 'presidium',
      component: presidium
   },
   {
      path: '/experts',
      name: 'experts',
      component: experts
   },
   {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router

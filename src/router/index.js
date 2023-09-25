import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalInformations from '../views/PersonalInformations.vue'
import PaymentDetails from '../views/PaymentDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PersonalInformations',
    component: PersonalInformations
  },
  {
    path: '/payment-details',
    name: 'PaymentDetails',
    component: PaymentDetails
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

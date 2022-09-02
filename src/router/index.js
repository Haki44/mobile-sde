import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Boat from '../views/boat/Boat.vue'
import BoatDetails from '../views/boat/BoatDetails.vue'
import BoatBooking from '../views/boat/BoatBooking.vue'
import AdminBoat from '../views/admin/boat/IndexBoat.vue';
import CreateBoat from '../views/admin/boat/CreateBoat.vue';
import EditBoat from '../views/admin/boat/EditBoat.vue';

import Adventure from '../views/adventure/Adventure.vue'
import AdventureDetails from '../views/adventure/AdventureDetails.vue'
import AdventureBooking from '../views/adventure/AdventureBooking.vue'
import AdminAdventure from '../views/admin/adventure/IndexAdventure.vue';

import AdminPeriod from '../views/admin/period/IndexPeriod.vue';

import Login from '../views/auth/Login.vue';
import Register from '../views/auth/Register.vue';
import Contact from '../views/Contact.vue';
import Admin from '../views/admin/Admin.vue';

// import store from '../store';
import auth from '../store/auth';

const routes = [
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },

  { path: '/', name: 'Home', component: Home },
  { path: '/contact', name: 'Contact', component: Contact },

  { path: '/boat', name: 'Boat', component: Boat },
  { path: '/boat/:id', name: 'BoatDetails', component: BoatDetails },
  { path: '/boat/:id/booking', name: 'BoatBooking', component: BoatBooking, meta: {requiresAuth: true} },
  { path: '/admin/boat', name: 'AdminBoat', component: AdminBoat, /*beforeEnter: isAdmin,*/ },
  { path: '/admin/boat/create', name: 'CreateBoat', component: CreateBoat, /*beforeEnter: isAdmin,*/ },
  { path: '/admin/boat/edit/:id', name: 'EditBoat', component: EditBoat, /*beforeEnter: isAdmin,*/ },

  { path: '/adventure', name: 'Adventure', component: Adventure },
  { path: '/adventure/:id', name: 'AdventureDetails', component: AdventureDetails },
  { path: '/adventure/:id/booking', name: 'AdventureBooking', component: AdventureBooking, meta: {requiresAuth: true} },
  { path: '/admin/adventure', name: 'AdminAdventure', component: AdminAdventure, /*beforeEnter: isAdmin,*/ },

  { path: '/admin', name: 'Admin', component: Admin, /*beforeEnter: isAdmin,*/ },

  { path: '/admin/period', name: 'AdminPeriod', component: AdminPeriod, /*beforeEnter: isAdmin,*/ },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !auth.state.user.token) {
      next({name: 'Login'});
  } else {
      next();
  }
});

// function isAdmin(to, from, next) {
//   if (auth.state.authUser.admin != 1) {
//     next({name: 'Login'});
//   } else {
//     next();
//   }
// }

export default router

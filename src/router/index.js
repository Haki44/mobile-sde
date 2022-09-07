import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Boat from '../views/boat/Boat.vue'
import BoatDetails from '../views/boat/BoatDetails.vue'
import BoatBooking from '../views/boat/BoatBooking.vue'
import AdminBoat from '../views/admin/boat/IndexBoat.vue';
import CreateBoat from '../views/admin/boat/CreateBoat.vue';
import EditBoat from '../views/admin/boat/EditBoat.vue';
import EventBoat from '../views/admin/boat/EventBoat.vue';
import EditEvent from '../views/admin/boat/EditEvent.vue';

import Adventure from '../views/adventure/Adventure.vue'
import AdventureDetails from '../views/adventure/AdventureDetails.vue'
import AdventureBooking from '../views/adventure/AdventureBooking.vue'
import AdminAdventure from '../views/admin/adventure/IndexAdventure.vue';
import CreateAdventure from '../views/admin/adventure/CreateAdventure.vue';
import EditAdventure from '../views/admin/adventure/EditAdventure.vue';

import AdminPeriod from '../views/admin/period/IndexPeriod.vue';

import IndexMessages from '../views/admin/messages/IndexMessages.vue';

import IndexContact from '../views/admin/messages/contact/IndexContact.vue';
import ContactDetails from '../views/admin/messages/contact/ContactDetails.vue';

import IndexBoatBooking from '../views/admin/messages/boat-booking/IndexBoatBooking.vue';
import BoatBookingDetails from '../views/admin/messages/boat-booking/BoatBookingDetails.vue';

import IndexAdventureBooking from '../views/admin/messages/adventure-booking/IndexAdventureBooking.vue';
import AdventureBookingDetails from '../views/admin/messages/adventure-booking/AdventureBookingDetails.vue';

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
  { path: '/admin/boat', name: 'AdminBoat', component: AdminBoat, beforeEnter: isAdmin, },
  { path: '/admin/boat/create', name: 'CreateBoat', component: CreateBoat, beforeEnter: isAdmin, },
  { path: '/admin/boat/edit/:id', name: 'EditBoat', component: EditBoat, beforeEnter: isAdmin, },
  { path: '/admin/boat/:id/event', name: 'EventBoat', component: EventBoat, beforeEnter: isAdmin, },
  { path: '/admin/event/:id', name: 'EditEvent', component: EditEvent, beforeEnter: isAdmin, },

  { path: '/adventure', name: 'Adventure', component: Adventure },
  { path: '/adventure/:id', name: 'AdventureDetails', component: AdventureDetails },
  { path: '/adventure/:id/booking', name: 'AdventureBooking', component: AdventureBooking, meta: {requiresAuth: true} },
  { path: '/admin/adventure', name: 'AdminAdventure', component: AdminAdventure, beforeEnter: isAdmin, },
  { path: '/admin/adventure/create', name: 'CreateAdventure', component: CreateAdventure, beforeEnter: isAdmin, },
  { path: '/admin/adventure/edit/:id', name: 'EditAdventure', component: EditAdventure, beforeEnter: isAdmin, },

  { path: '/admin/period', name: 'AdminPeriod', component: AdminPeriod, beforeEnter: isAdmin, },
  
  { path: '/admin/messages', name: 'IndexMessages', component: IndexMessages, beforeEnter: isAdmin, },

  { path: '/admin/contact', name: 'IndexContact', component: IndexContact, beforeEnter: isAdmin, },
  { path: '/admin/contact/:id', name: 'ContactDetails', component: ContactDetails, beforeEnter: isAdmin, },

  { path: '/admin/boat-booking', name: 'IndexBoatBooking', component: IndexBoatBooking, beforeEnter: isAdmin, },
  { path: '/admin/boat-booking/:id', name: 'BoatBookingDetails', component: BoatBookingDetails, beforeEnter: isAdmin, },

  { path: '/admin/adventure-booking', name: 'IndexAdventureBooking', component: IndexAdventureBooking, beforeEnter: isAdmin, },
  { path: '/admin/adventure-booking/:id', name: 'AdventureBookingDetails', component: AdventureBookingDetails, beforeEnter: isAdmin, },

  { path: '/admin', name: 'Admin', component: Admin, beforeEnter: isAdmin, },

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

function isAdmin(to, from, next) {
  if (auth.state.authUser.admin != 1) {
    next({name: 'Login'});
  } else {
    next();
  }
}

export default router

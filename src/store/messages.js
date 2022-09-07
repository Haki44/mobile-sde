import axiosClient from "../axios/index";
import router from '../router'

const messages = {
  namespaced: true,

  state: {
    contacts: [],
    boatBookings: [],
    adventureBookings: [],
    contactDetails: [],
    boatBookingDetails: [],
    adventureBookingDetails: [],
  },
  mutations:{
    UPDATE_CONTACTS(state, payload){
      state.contacts = payload
    },
    UPDATE_BOAT_BOOKINGS(state, payload){
      state.boatBookings = payload
    },
    UPDATE_ADVENTURE_BOOKINGS(state, payload){
      state.adventureBookings = payload
    },
    UPDATE_CONTACT_DETAILS(state, payload){
      state.contactDetails = payload
    },
    UPDATE_BOAT_BOOKING_DETAILS(state, payload){
      state.boatBookingDetails = payload
    },
    UPDATE_ADVENTURE_BOOKING_DETAILS(state, payload){
      state.adventureBookingDetails = payload
    },
  },
  getters: {
  },
  actions:{
    // Contact
    getContacts(context){
      axiosClient.get('contact')
      .then( res => {
        context.commit('UPDATE_CONTACTS', res.data);
      })
      .catch( err => console.log(err));
    },

    getContactDetails(context){
      const contactId = router.currentRoute.value.params.id

      axiosClient.get(`contact/${contactId}`)
      .then( res => {
        context.commit('UPDATE_CONTACT_DETAILS', res.data);
      })
      .catch( err => console.log(err));
    },

    // Edit contact in BDD
    updateContact(context){
      const contactId = router.currentRoute.value.params.id

      axiosClient.put(`contact/${contactId}`)
      .then( res => {
        context.commit('UPDATE_CONTACTS', res.data);
        router.push(`/admin/contact`)
        alert('La demande de contact à bien été traitée')
      })
      .catch( err => console.log(err));
    },

    // Boat Booking
    getBoatBookings(context){
      axiosClient.get('boat-booking')
      .then( res => {
        context.commit('UPDATE_BOAT_BOOKINGS', res.data);
      })
      .catch( err => console.log(err));
    },

    getBoatBookingDetails(context){
      const boatBookingId = router.currentRoute.value.params.id

      axiosClient.get(`boat-booking/${boatBookingId}`)
      .then( res => {
        context.commit('UPDATE_BOAT_BOOKING_DETAILS', res.data);
      })
      .catch( err => console.log(err));
    },

    updateBoatBooking(context){
      const boatBookingId = router.currentRoute.value.params.id

      axiosClient.put(`boat-booking/${boatBookingId}`)
      .then( res => {
        context.commit('UPDATE_BOAT_BOOKINGS', res.data);
        router.push(`/admin/boat-booking`)
        alert('La demande de location de bateau à bien été traitée')
      })
      .catch( err => console.log(err));
    },

    // Adventure Booking
    getAdventureBookings(context){
      axiosClient.get('adventure-booking')
      .then( res => {
        context.commit('UPDATE_ADVENTURE_BOOKINGS', res.data);
      })
      .catch( err => console.log(err));
    },

    getAdventureBookingDetails(context){
      const adventureBookingId = router.currentRoute.value.params.id

      axiosClient.get(`adventure-booking/${adventureBookingId}`)
      .then( res => {
        context.commit('UPDATE_ADVENTURE_BOOKING_DETAILS', res.data);
      })
      .catch( err => console.log(err));
    },

    updateAdventureBooking(context){
      const adventureBookingId = router.currentRoute.value.params.id

      axiosClient.put(`adventure-booking/${adventureBookingId}`)
      .then( res => {
        context.commit('UPDATE_ADVENTURE_BOOKINGS', res.data);
        router.push(`/admin/adventure-booking`)
        alert('La demande de croisière à bien été traitée')
      })
      .catch( err => console.log(err));
    },

  },
}

export default messages;
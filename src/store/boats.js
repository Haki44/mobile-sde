// import axios from 'axios'
import axiosClient from "../axios/index";
import router from '../router'
import dayjs from 'dayjs';

const boats = {
  namespaced: true,

  state: {
    boats: [],
    periods: [],
    boatDetail: [],
    datesReservationBoat: [],
    eventsBoat: [],
    eventDetail: [],
  },
  mutations:{
    UPDATE_BOATS(state, payload){
      state.boats = payload
    },
    UPDATE_PERIODS(state, payload){
      state.periods = payload
      // console.log(state.periods)
    },
    UPDATE_BOAT_DETAIL(state, payload){
      state.boatDetail = payload
      // console.log(state.boatDetail)
    },
    UPDATE_EVENT_DETAIL(state, payload){
      state.eventDetail = payload
      // console.log(state.eventDetail)
    },
    UPDATE_EVENTS_BOAT(state, payload){
      state.eventsBoat = payload
      // console.log(state.eventsBoat)
    },
    UPDATE_DATES_RESERVATION_BOAT(state, payload){
      state.datesReservationBoat = payload
      // console.log(state.datesReservationBoat)
    },
  },
  getters: {

  },
  actions:{
    
    async getBoats(context){
      axiosClient.get('boat')
      .then( res => {
        context.commit('UPDATE_BOATS', res.data);
      })
      .catch( err => console.log(err));
    },

    async getBoatDetail(context) {

      const boatId = router.currentRoute.value.params.id
      axiosClient.get(`boat/${boatId}`)
      .then( res => {
        context.commit('UPDATE_BOAT_DETAIL', res.data);
      })
      .catch( err => console.log(err));

      axiosClient.get('period')
      .then( res => {
        // console.log(res)
        context.commit('UPDATE_PERIODS', res.data);
      })
      .catch( err => console.log(err));

    },

    async getEventsBoat(context) {
      console.log(context)
      const boatId = router.currentRoute.value.params.id
      axiosClient.get('event')
      .then( res => {
        const events = res.data
        // console.log(events)
        const arrayEvents = []
        events.forEach(element => {
          if (element.boat_id == boatId) {
            arrayEvents.push(element)
          }
        });
        context.commit('UPDATE_EVENTS_BOAT', arrayEvents);
      })
      .catch( err => console.log(err));
    },

    // creation d'evenement qui vont ensuite etre dans le calendrier
    async storeEvent(context,payload){
      const boatId = router.currentRoute.value.params.id
      console.log(context)
      console.log(payload)
      const date = dayjs(new Date())
      if (payload.start == '' || payload.end == '' || payload.title == '') {
        alert('Vous devez remplir les champs vides')
      } else if(date.format('YYYY-MM-DD') > payload.start || payload.start > payload.end) {
        alert('Les dates sélectionnées ne sont pas corrects')
      } else {
        let eventItem = {title: payload.title, start: payload.start, end: payload.end, boat_id: boatId}
        axiosClient.post('event', eventItem)
        .then( res => {
          if (res.status == '200') {
            axiosClient.get('event')
            .then( res => {
              const events = res.data
              // console.log(events)
              const arrayEvents = []
              events.forEach(element => {
                if (element.boat_id == boatId) {
                  arrayEvents.push(element)
                }
              });
              context.commit('UPDATE_EVENTS_BOAT', arrayEvents);
              router.push(`/admin/boat/${boatId}/event`)
              alert('L\'event ' + payload.title + ' à été ajouté')
            })
            .catch( err => console.log(err));
          }
        })
        .catch( err => console.log(err));
      }
    },

    async getEventDetail(context){
      const eventId = router.currentRoute.value.params.id
      axiosClient.get(`event/${eventId}`)
      .then( res => {
        context.commit('UPDATE_EVENT_DETAIL', res.data);
      })
      .catch( err => console.log(err));
    },

    async updateEvent(context, payload){
      console.log(context)
      console.log(payload)
      const eventId = router.currentRoute.value.params.id
      const date = dayjs(new Date())

      if (payload.start == '' || payload.end == '' || payload.title == '') {
        alert('Vous devez remplir les champs vides')
      } else if(date.format('YYYY-MM-DD') > payload.start || payload.start > payload.end) {
        alert('Les dates sélectionnées ne sont pas corrects')
      } else {
        let eventItem = {title: payload.title, start: payload.start, end: payload.end, boat_id: payload.boat_id}
        console.log(eventItem)
        axiosClient.put(`event/${eventId}`, eventItem)
        .then( res => {
          if (res.status == '200') {
            router.push(`/admin/boat/${payload.boat_id}/event`)
            alert('L\'event' + payload.title + 'à été modifié')
          }
        })
        .catch( err => console.log(err));
      }
    },

    async getPeriods(context){

      axiosClient.get('period')
      .then( res => {
        context.commit('UPDATE_PERIODS', res.data);
      })
      .catch( err => console.log(err));

    },

    // récupere les dates entrée dans le details du bateau pour les passer dans la demande de reservation
    async datesReservationBoat(context, payload) {

      const boatId = router.currentRoute.value.params.id

      if (payload.start == '' || payload.end == '') {
        alert('Vous devez choisir des dates sur le calendrier')
      } else {
        context.commit('UPDATE_DATES_RESERVATION_BOAT', payload);
        router.push(`/boat/${boatId}/booking`)
      }
  
    },

    // envoie de la demande de location de bateau
    async sendBoatBooking(context, payload){

      const userId = context.rootState.auth.authUser.id
      const boatId = router.currentRoute.value.params.id
      const date = dayjs(new Date())

      if (payload.name == '' || payload.firstname == '' || payload.nationality == '' || payload.email == '' || payload.tel == '' || payload.start == '' || payload.end == '' || payload.skipper == '' || payload.description == '') {
        alert('Un ou plusieurs champs sont vides, veuillez les remplir')
      } else if(date.format('YYYY-MM-DD') > payload.start || payload.start > payload.end) {
        alert('Les dates sélectionnées ne sont pas corrects')
      } else {
        const bookingItem = { name: payload.name, firstname: payload.firstname, nationality: payload.nationality, tel: payload.tel, email: payload.email, start_date: payload.start, end_date: payload.end, with_skipper: payload.skipper, description: payload.description, user_id: userId, boat_id: boatId }
        // console.log(bookingItem)
  
        await axiosClient.post('registerBoatBooking', bookingItem)
        .then(res => {
          console.log(res)
          router.push(`/`)
          alert('Your booking request for rental boat as been sent, we\'re coming back to you !')
        })
        .catch(err => alert(err.response.data.message));
     
      }
    },

    async deleteBoat(context, payload){
      console.log(context)
      const boatId = payload.id

      axiosClient.delete(`boat/${boatId}`)
      alert('Le bateau ' + payload.name + ' à bien été suprimé' )
      
      axiosClient.get('boat')
      .then( res => {
        context.commit('UPDATE_BOATS', res.data);
        router.push(`/admin/boat`)
      })
      .catch( err => console.log(err));
    },

    async deleteEvent(context, payload){
      // console.log(context)
      // console.log(payload)
      const eventId = payload.id
      const boatId = payload.boat_id

      axiosClient.delete(`event/${eventId}`)
  
      axiosClient.get('event')
      .then( res => {
        const events = res.data
        // console.log(events)
        const arrayEvents = []
        events.forEach(element => {
          if (element.boat_id == boatId) {
            arrayEvents.push(element)
          }
        });
        context.commit('UPDATE_EVENTS_BOAT', arrayEvents);
        alert('La date pour ' + payload.title + ' à bien été suprimée' )
        router.push(`/admin/boat/${boatId}/event`)
      })
      .catch( err => console.log(err));
    },

  },
}

export default boats;
import axiosClient from "../axios/index";
import router from '../router'

const adventures = {
  namespaced: true,

  state: {
    adventures: [],
    levels: [],
    adventureDetail: [],
    levelName: '',
  },
  mutations:{
    UPDATE_ADVENTURES(state, payload){
      state.adventures = payload
    },
    UPDATE_LEVELS(state, payload){
      state.levels = payload
    },
    UPDATE_ADVENTURE_DETAIL(state, payload){
      state.adventureDetail = payload
      state.levelName = state.adventureDetail.level.name
      console.log(state.levelName)
    },
  },
  getters: {

  },
  actions:{
    
    async getAdventures(context){

      axiosClient.get('adventure')
      .then( res => {
        console.log(res)
        context.commit('UPDATE_ADVENTURES', res.data);
      })
      .catch( err => console.log(err));

    },

    async getLevels(context){

      axiosClient.get('level')
      .then( res => {
        console.log(res)
        context.commit('UPDATE_LEVELS', res.data);
      })
      .catch( err => console.log(err));

    },

    async getAdventureDetail(context) {

      const adventureId = router.currentRoute.value.params.id
      axiosClient.get(`adventure/${adventureId}`)
      .then( res => {
        context.commit('UPDATE_ADVENTURE_DETAIL', res.data);
      })
      .catch( err => console.log(err));

    },

    async goToAdventureBooking(){
      const adventureId = router.currentRoute.value.params.id

      router.push(`/adventure/${adventureId}/booking`)
    },

    async sendAdventureBooking(context, payload){

      const userId = context.rootState.auth.authUser.id
      const adventureId = router.currentRoute.value.params.id

      if (payload.name == '' || payload.firstname == '' || payload.nationality == '' || payload.email == '' || payload.tel == '' || payload.description == '') {
        alert('Un ou plusieurs champs sont vides, veuillez les remplir')
      } else {
        const bookingItem = { name: payload.name, firstname: payload.firstname, nationality: payload.nationality, tel: payload.tel, email: payload.email, places_needed:payload.places_needed, description: payload.description, user_id: userId, adventure_id: adventureId }
        await axiosClient.post('registerAdventureBooking', bookingItem)
        .then(res => {
          console.log(res)
          router.push(`/adventure`)
        })
        .catch(err => alert(err.response.data.message));
     
      }
    },

    async deleteAdventure(context, payload){
      console.log(context)
      const adventureId = payload.id

      axiosClient.delete(`adventure/${adventureId}`)
      alert('La croisière ' + payload.name + ' à bien été suprimée' )
      
      axiosClient.get('adventure')
      .then( res => {
        context.commit('UPDATE_ADVENTURES', res.data);
        location.reload()
      })
      .catch( err => console.log(err));
    },

  },
}

export default adventures;
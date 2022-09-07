import axiosClient from "../axios/index";

const skippers = {
  namespaced: true,

  state: {
    skippers: [],
  },
  mutations:{
    UPDATE_SKIPPERS(state, payload){
      state.skippers = payload
      console.log(state.skippers)
    },
  },
  getters: {
  },
  actions:{
    async getSkippers(context){
      axiosClient.get('skipper')
      .then( res => {
        context.commit('UPDATE_SKIPPERS', res.data);
      })
      .catch( err => console.log(err));
    },
  },
}

export default skippers;
// import { AxiosError } from "axios";
import axiosClient from "../axios/index";
import router from '../router'

const auth = {
  namespaced: true,

  state: {
    // token: null,
    authUser: {},
    user: {
        data: {
          role: null,
        },
        token: localStorage.getItem('auth_token')
    }
  },
  mutations:{
    UPDATE_USER(state, payload){
      state.user = payload
    },

    UPDATE_ROLE(state, payload){
      state.user.data.role = payload
    },

    UPDATE_AUTH_USER(state, payload){
      state.authUser = payload
    },
  },
  getters: {

  },
  actions:{
    // login
    async login(context, payload) {

      const logItem = { email: payload.email, password: payload.password }

      await axiosClient.post('login', logItem)
      
          .then(res => {
            context.state.user.token = res.data.token;
            // persiste la connexion
            localStorage.setItem('auth_token', context.state.user.token)
          })
          .catch(err => {
            alert('Il y a eu un probleme lors de la connexion')
            console.log(err)
          });
          
      router.back()
      // location.replace(`/`)
      // router.push(`/`);
    },

    // register
    async register(context, payload) {
      if (payload.password == payload.confirm_password) {
        const registerItem = { name: payload.name, firstname: payload.firstname, nationality: payload.nationality, tel: payload.tel, email: payload.email, password: payload.password }
        await axiosClient.post('register', registerItem)
        .then(res => {
          console.log(res)
          router.push(`/login`)
        })
        .catch(err => alert(err.response.data.message));
        // console.log(AxiosError.response.data.message)
     
      } else {
        alert('Les deux mot de passes ne sont pas identique')
      }
      
    },

    // logout
    async logout() {
      localStorage.setItem('auth_token', '')
      console.log(localStorage.getItem('auth_token'))
      location.replace(`/`)
      // router.push(`/`)
      // location.reload()
    },
    
    // is amdin
    async getRole(context) {
      axiosClient.get('getAuthUser')
        .then( res => {
          context.commit('UPDATE_ROLE', res.data[0].admin);
        })
        .catch( err => console.log(err));
    },

    // get auth user
    async getAuthUser(context) {
      axiosClient.get('getAuthUser')
        .then( res => {
          context.commit('UPDATE_AUTH_USER', res.data[0]);
        })
        .catch( err => console.log(err));
    }
  },
}

export default auth;
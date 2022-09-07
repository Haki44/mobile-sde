import axiosClient from "../axios/index";
import router from '../router'

const contact = {
  namespaced: true,

  state: {
  },
  mutations:{
  },
  getters: {
  },
  actions:{
    // envoie du formulaire de contact
    async sendContact(context, payload) {
      
      if (payload.name == '' || payload.firstname == '' || payload.email == '' || payload.tel == '' || payload.description == '') {
        alert('Un ou plusieurs champs sont vides, veuillez les remplir')
      } else {
        const contactItem = { name: payload.name, firstname: payload.firstname, tel: payload.tel, email: payload.email, description: payload.description }
        await axiosClient.post('sendContact', contactItem)
        .then(res => {
          console.log(res)
          router.push(`/contact`)
          alert('Votre message à bien été envoyé')
        })
        .catch(err => alert(err.response.data.message));
      }
    },

  },
}

export default contact;
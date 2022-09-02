<template>
  <div>
    <AdminPanel/>

    <div class="margintop60">
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Ceate Adventure
                </h2>
            </div>
        </div>
      </header>
    </div>

    <div class="p-5">
      <form @submit="storeAdventure" enctype="multipart/form-data">
        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="adventure.name" required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <div class="relative z-0 mb-6 w-full group"> 
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Upload adventure images</label>
          <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" accept="image/*" @change="uploadImage">
        </div>

        <div class="relative z-0 mb-6 w-full group"> 
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select a level</label>
          <select v-model="adventure.level_id" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option disabled value="">Please select one</option>
            <option v-for="level in levels" :key="level.id" :value="level.id">{{level.name}}</option>
          </select>
        </div>

        <div class="relative z-0 mb-6 w-full group"> 
          <div class="flex align-center">
              <div class="flex items-center mt-2 mr-4">
                  <input type="radio" v-model="adventure.family" value="1" name="family" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="family" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
              </div>
              <div class="flex items-center">
                  <input type="radio" v-model="adventure.family" value="0" name="family" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="family" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
              </div>
          </div>
          <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Family</label>
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="adventure.price" required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price (€)</label>
        </div>

        <div class="flex flex-row">
          <div class="basis-1/2 mr-5">
            <div class="relative z-0 mb-6 w-full group">
                <input type="number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="adventure.places" required />
                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Places</label>
            </div>
          </div>
       
          <div class="basis-1/2">
            <div class="relative z-0 mb-6 w-full group">
                <input type="number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="adventure.available_places" required />
                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available places</label>
            </div>
          </div>
        </div>

        <div class="flex flex-row">
          <!-- Start date -->
          <div class="basis-1/2 mr-5">
            <div class="relative z-0 mb-6 w-full group">
                <input type="date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="adventure.departure_date" required />
                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Departure date</label>
            </div>
          </div>
          <!-- End date -->
          <div class="basis-1/2">
            <div class="relative z-0 mb-6 w-full group">
                <input type="date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="adventure.arrival_date" required />
                <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Arrival date</label>
            </div>
          </div>
        </div>

        <div class="mt-5 relative z-0 mb-6 w-full group">
            <textarea id="description" rows="4" v-model="adventure.description_fr" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
            <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description (fr)</label>
        </div>
        <div class="mt-5 relative z-0 mb-6 w-full group">
            <textarea id="description" rows="4" v-model="adventure.description_en" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
            <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description (en)</label>
        </div>

        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">create Adventure</button>
      </form>      
    </div>

  </div>
</template>

<script>
import AdminPanel from '../../../components/AdminPanel.vue';
import {mapState, mapActions} from 'vuex';
import axiosClient from "../../../axios/index";
import router from '../../../router'

export default {
  components: {AdminPanel},
  data() {
    return {
      adventure: {
        name: '',
        level_id: '',
        family: '',
        price: '',
        places: '',
        available_places: '',
        departure_date: '',
        arrival_date: '',
        file: '',
        description_fr: '',
        description_en: '',
      }
    }
  },
  mounted(){
    window.scrollTo(0, 0)
    this.getLevels();
  },
  computed: {
    ...mapState('adventures', ['levels']),
  },
  methods: {
    ...mapActions('adventures', ['storeAdventure', 'getLevels']),

    async uploadImage(e) {
      this.adventure.file = e.target.files[0];
    },
    async storeAdventure(e){
      e.preventDefault();
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      if (this.adventure.family == '') {
        alert('You need to check family case')
      } else {
        let adventureItem = { name: this.adventure.name, level_id: this.adventure.level_id, family: this.adventure.family, price:this.adventure.price, places: this.adventure.places, available_places: this.adventure.available_places, departure_date: this.adventure.departure_date, arrival_date: this.adventure.arrival_date, picture: this.adventure.file, description_fr: this.adventure.description_fr, description_en: this.adventure.description_en}
        console.log(adventureItem)
        await axiosClient.post('adventure', adventureItem, config)
        .then(res => {
          console.log(res)
          router.push(`/adventure`)
        })
        .catch(err => alert(err.response.data.message));
      }

    },

  },
}
</script>

<style>

</style>
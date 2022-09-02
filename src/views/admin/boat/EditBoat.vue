<template>
  <div>
    <AdminPanel/>

    <div class="margintop60">
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Edit {{ boatDetail.name }}
                </h2>
            </div>
        </div>
      </header>
    </div>

    <div class="p-5">
      <form @submit="updateBoat" enctype="multipart/form-data">
      <!-- <form enctype="multipart/form-data"> -->
        <!-- <v-text-field v-model="boatDetail.name" label="Name" /> -->
        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.name" required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
        </div>
        <div class="relative z-0 mb-6 w-full group"> 
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="multiple_files">Upload boat images</label>
          <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" accept="image/*" @change="uploadImage">
        </div>
        <div class="mt-5 relative z-0 mb-6 w-full group">
            <textarea id="description" rows="4" v-model="boatDetail.description_fr" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
            <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description (fr)</label>
        </div>
        <div class="mt-5 relative z-0 mb-6 w-full group">
            <textarea id="description" rows="4" v-model="boatDetail.description_en" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
            <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description (en)</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.type_fr" required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type (fr)</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.type_en" required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type (en)</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.displacements" required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Displacements (kg)</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.surface" required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Surface (m²)</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
            <input type="number" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.engine_power" required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Engine power</label>
        </div>

        <div class="flex flex-row">
          
          <div class="basis-1/2 mr-5">
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="start_date" id="start_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.hull_fr" required />
                <label for="start_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hull (fr)</label>
            </div>
          </div>
       
          <div class="basis-1/2">
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="end_date" id="end_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.hull_en" required />
                <label for="end_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hull (en)</label>
            </div>
          </div>

        </div>

        <div class="flex flex-row">
          
          <div class="basis-1/2 mr-5">
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="start_date" id="start_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.deck_fr" required />
                <label for="start_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deck (fr)</label>
            </div>
          </div>
       
          <div class="basis-1/2">
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="end_date" id="end_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.deck_en" required />
                <label for="end_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deck (en)</label>
            </div>
          </div>
          
        </div>

        <div class="flex flex-row">
          
          <div class="basis-1/2 mr-5">
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="start_date" id="start_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.mast_fr" required />
                <label for="start_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mast (fr)</label>
            </div>
          </div>
       
          <div class="basis-1/2">
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="end_date" id="end_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.mast_en" required />
                <label for="end_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mast (en)</label>
            </div>
          </div>
          
        </div>

        <div class="relative z-0 mb-6 w-full group">
            <input type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="boatDetail.architect" required />
            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Architect</label>
        </div>

        <div class="mt-5 relative z-0 mb-6 w-full group">
            <textarea id="description" rows="4" v-model="boatDetail.diverse_fr" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
            <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Diverse (fr)</label>
        </div>
        <div class="mt-5 relative z-0 mb-6 w-full group">
            <textarea id="description" rows="4" v-model="boatDetail.diverse_en" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
            <label for="description" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Diverse (en)</label>
        </div>

        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Boat</button>
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
      boat: {
        // name: '',
        file: '',
        // description_fr: `${boats.state.boatDetail.description_fr}`,
        // description_en: `${boats.state.boatDetail.description_en}`,
        // type_fr: `${boats.state.boatDetail.type_fr}`,
        // type_en: `${boats.state.boatDetail.type_en}`,
        // displacements: `${boats.state.boatDetail.displacements}`,
        // surface: `${boats.state.boatDetail.surface}`,
        // engine_power: `${boats.state.boatDetail.engine_power}`,
        // hull_fr: `${boats.state.boatDetail.hull_fr}`,
        // hull_en: `${boats.state.boatDetail.hull_en}`,
        // deck_fr: `${boats.state.boatDetail.deck_fr}`,
        // deck_en: `${boats.state.boatDetail.deck_en}`,
        // mast_fr: `${boats.state.boatDetail.mast_fr}`,
        // mast_en: `${boats.state.boatDetail.mast_en}`,
        // architect: `${boats.state.boatDetail.architect}`,
        // diverse_fr: `${boats.state.boatDetail.diverse_fr}`,
        // diverse_en: `${boats.state.boatDetail.diverse_en}`,
      }
    }
  },
  mounted(){
    window.scrollTo(0, 0)
    this.getBoatDetail();
  },
  computed: {
    ...mapState('boats', ['periods', 'boatDetail']),
  },
  methods: {
    ...mapActions('boats', ['getBoatDetail', 'updateBoat']),

    // async uploadImage(e) {
    //   this.boat.file = e.target.files[0];
    // },

    async updateBoat(e){
      e.preventDefault();
      const boatId = this.boatDetail.id
      // const config = {
      //     headers: {
      //         'content-type': 'multipart/form-data'
      //     }
      // }
      let boatItem = { name: this.boatDetail.name, picture: this.boat.file, description_fr: this.boatDetail.description_fr, description_en: this.boatDetail.description_en,type_fr: this.boatDetail.type_fr, type_en: this.boatDetail.type_en, displacements: this.boatDetail.displacements, surface: this.boatDetail.surface, engine_power: this.boatDetail.engine_power, hull_fr: this.boatDetail.hull_fr, hull_en: this.boatDetail.hull_en, deck_fr: this.boatDetail.deck_fr, deck_en: this.boatDetail.deck_en, mast_fr: this.boatDetail.mast_fr, mast_en: this.boatDetail.mast_en, architect: this.boatDetail.architect, diverse_fr: this.boatDetail.diverse_fr, diverse_en: this.boatDetail.diverse_en}
      console.log(boatItem)
      await axiosClient.put(`boat/${boatId}`, boatItem)
      .then(res => {
        console.log(res)
        router.push(`/boat`)
      })
      .catch(err => alert(err.response.data.message));
    // console.log(this.boatDetail.name)
    },

    // async uploadImage(e) {
      //  const files = e.target.files[0]
      //  console.log(files)
      //  this.picture = files
      //  console.log(this.boat.picture)
      // this.boat.file = e.target.files[0];
      // console.log(this.boat.file)
    // },

  },
}
</script>

<style>

</style>
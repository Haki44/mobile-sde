<template>
  <div>
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Rental boat
                </h2>
            </div>
        </div>
      </header>

      <div class="w-full flex flex-col items-center justify-center">
        <div v-for="boat in boats.data" :key="boat.id" class="mb-5">
          <div class="w-full flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div v-for="picture in boat.pictures" :key="picture.id" class="">
              <div v-if="picture.is_first == 1" class="md:h-full md:w-80">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-full md:rounded-none md:rounded-l-lg" :src="`${urlImage}/boat/${boat.id}/${picture.id}-${picture.picture}`" alt="">
              </div>
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal w-full">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ boat.name }}</h5>
                <p class="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">{{ boat.description_en }}</p>
                <router-link :to="{ name: 'BoatDetails', params:{ id: boat.id }}" class="flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  See details
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </router-link>
            </div>
          </div>
        </div>
      </div>

  </div>

  <Footer/>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Footer from '../../components/Footer.vue';

export default {

  name: 'Boat',
  components: {
    Footer
  },
  mounted(){
    window.scrollTo(0, 0)
    this.getBoats();
  },
  computed: {
    ...mapState('boats', ['boats']),
    ...mapState('images', ['urlImage']),
  },
  methods: {
    ...mapActions('boats', ['getBoats']),
  },

}
</script>

<style>

</style>
<template>
  <div>
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Cruise
                </h2>
            </div>
        </div>
      </header>

      <div class="w-full flex flex-col items-center justify-center">
        <div>
          <p class="p-5 mb-3 font-light text-2xl text-gray-500 dark:text-gray-400">Choose the cruise that suits you and discover the world on yachts that are waiting for you.</p>
        </div>
        <div v-for="adventure in adventures.data" :key="adventure.id" class="mb-5">
          <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div v-for="picture in adventure.pictures" :key="picture.id" class="">
              <div v-if="picture.is_first == 1" class="md:h-full md:w-80">
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-full md:rounded-none md:rounded-l-lg" :src="`${urlImage}/adventure/${adventure.id}/${picture.id}-${picture.picture}`" alt="">
              </div>
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ adventure.name }}</h5>
                <p class="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">{{ adventure.description_en }}</p>
                <router-link :to="{ name: 'AdventureDetails', params:{ id: adventure.id }}" class="flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  See this cruise
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

  name: 'Adventure',
  components: {
    Footer
  },
  mounted(){
    window.scrollTo(0, 0)
    this.getAdventures();
  },
  computed: {
    ...mapState('adventures', ['adventures']),
    ...mapState('images', ['urlImage']),
  },
  methods: {
    ...mapActions('adventures', ['getAdventures']),
  },

}
</script>

<style>

</style>
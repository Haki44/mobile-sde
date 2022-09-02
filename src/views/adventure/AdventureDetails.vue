<template>
  <div>
    <header class="bg-white shadow mb-5">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div name="header">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ adventureDetail.name }}
            </h2>
        </div>
      </div>
    </header>

    <div id="controls-carousel" class="relative mb-5" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
            <div v-for="picture in adventureDetail.pictures" :key="picture.id"  class="duration-700 ease-in-out bg-blue-900 h-full" data-carousel-item>
              <img :src="`http://sde-api/storage/adventure/${adventureDetail.id}/${picture.id}-${picture.picture}`" class="absolute block w-full " :alt="`${picture.picture}`">
            </div>
      </div>
      <!-- Slider controls -->
      <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span class="bg-blue-900 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span class="sr-only">Previous</span>
          </span>
      </button>
      <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span class="bg-blue-900 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span class="sr-only">Next</span>
          </span>
      </button>
    </div> 

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center flex-col">

      <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-5">
        <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">{{ adventureDetail.name }}</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Informations for the adventure.</p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Description</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ adventureDetail.description_fr }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Niveau</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ levelName }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Familiale</dt>
                <dd v-if="adventureDetail.family == 1" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Oui</dd>
                <dd v-else class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Non</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Départ</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ formatDate(adventureDetail.departure_date) }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Arrivée</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ formatDate(adventureDetail.arrival_date) }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Prix</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ adventureDetail.price }}€ / personnes</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Place(s)</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ adventureDetail.available_places }}/{{ adventureDetail.places }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <button class="text-center bg-blue-900 text-white p-2 rounded m-3 pl-5 pr-5" @click="goToAdventureBooking()">
        I wish reserve this cruise
      </button>

    </div> 
  </div>

  <Footer/>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import dayjs from 'dayjs';
import Footer from '../../components/Footer.vue';

export default {

  name: 'AdventureDetails',
  components: {
    Footer
  },
  mounted(){
    window.scrollTo(0, 0)
    this.getAdventureDetail();
  },
  computed: {
    ...mapState('adventures', ['adventureDetail', 'levelName']),
  },
  methods: {
    ...mapActions('adventures', ['getAdventureDetail', 'goToAdventureBooking']),

    formatDate(dateString) {
      const date = dayjs(dateString);
          // Then specify how you want your dates to be formatted
      return date.format('DD/MM/YYYY');
    }
  },

}
</script>

<style>

</style>
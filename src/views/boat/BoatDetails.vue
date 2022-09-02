<template>
  <div>
    <header class="bg-white shadow mb-5">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div name="header">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ boatDetail.name }}
            </h2>
        </div>
      </div>
    </header>

    <div id="controls-carousel" class="relative mb-5" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <!-- <div class="hidden duration-700 ease-in-out bg-blue-900" data-carousel-item>
              <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div> -->
          <!-- Item 2 -->
          <!-- <div v-for="picture in boatDetail.pictures" :key="picture.id" class="w-full h-full"> -->
            <div v-for="picture in boatDetail.pictures" :key="picture.id"  class="duration-700 ease-in-out bg-blue-900 h-full" data-carousel-item>
              <img :src="`http://sde-api/storage/boat/${boatDetail.id}/${picture.id}-${picture.picture}`" class="absolute block w-full " :alt="`${picture.picture}`">
            </div>
          <!-- </div> -->
          <!-- Item 3 -->
          <!-- <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div> -->
          <!-- Item 4 -->
          <!-- <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div> -->
          <!-- Item 5 -->
          <!-- <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div> -->
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
            <h3 class="text-lg leading-6 font-medium text-gray-900">{{ boatDetail.name }}</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Boat informations and caracteristics.</p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Description</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ boatDetail.description_fr }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Type</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ boatDetail.type_fr }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Displacements</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ boatDetail.displacements }} kg</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Surface</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ boatDetail.surface }} m²</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Engine power</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ boatDetail.engine_power }} ch</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Hull</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ boatDetail.hull_fr }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Deck</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ boatDetail.deck_fr }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Mast</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ boatDetail.mast_fr }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Architect</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ boatDetail.architect }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg mb-5">
          <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
              <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
                  <tr>
                      <th scope="col" class="py-3 px-6 text-center">
                          Period name
                      </th>
                      <th scope="col" class="py-3 px-6 text-center">
                          With Skipper
                      </th>
                      <th scope="col" class="py-3 px-6 text-center">
                          Without Skipper
                      </th>
                  </tr>
              </thead>
              <tbody>
                <tr v-for="period in periods" :key="period.id" class="bg-blue-500 border-b border-blue-400">
                    <th scope="row" class="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center">
                      {{ period.name }} <br />
                      ({{ formatDate(period.start_date) }} - {{ formatDate(period.end_date) }})
                    </th>
                    <td class="py-4 px-6 text-center">
                      <div v-for="boatRentalPrice in boatDetail.boat_rental_prices" :key="boatRentalPrice.id">
                        <div v-if="boatRentalPrice.with_skipper == 1 && boatRentalPrice.period_id == period.id">
                          {{ boatRentalPrice.price }} €
                        </div>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-center">
                      <div v-for="boatRentalPrice in boatDetail.boat_rental_prices" :key="boatRentalPrice.id">
                        <div v-if="boatRentalPrice.with_skipper == 0 && boatRentalPrice.period_id == period.id">
                          {{ boatRentalPrice.price }} €
                        </div>
                      </div>
                    </td>
                </tr>
              </tbody>
          </table>
      </div>

      <div class="flex flex-col justify-center mb-5">
        <v-date-picker
            mode='range'
            v-model='selectedDate'
            :min-date='new Date()'
            :model-config="modelConfig"
            :disabled-dates="eventsBoat"
            locale="en"
            is-range
            is-dark
            show-caps>
        </v-date-picker>

        <button class="text-center bg-blue-900 text-white p-2 rounded m-3 pl-5 pr-5" @click="datesReservationBoat(selectedDate)">
          I wish reserve this boat
        </button>
      </div>

    </div> 
  </div>

  <Footer/>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import dayjs from 'dayjs';
import 'v-calendar/dist/style.css';
import Footer from '../../components/Footer.vue';

export default {

  name: 'BoatDetails',
  components: {
    Footer
  },
  data() {
    return {
      selectedDate: {
        start: '',
        end: ''
      },
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD', // Uses 'iso' if missing
      },
    };
  },
  mounted(){
    window.scrollTo(0, 0)
    this.getBoatDetail();
    this.getEventsBoat();
  },
  computed: {
    ...mapState('boats', ['boatDetail', 'periods', 'eventsBoat']),
  },
  methods: {
    ...mapActions('boats', ['getBoatDetail', 'datesReservationBoat', 'getEventsBoat']),

    formatDate(dateString) {
        const date = dayjs(dateString);
            // Then specify how you want your dates to be formatted
        return date.format('DD/MM');
    }
  },

}
</script>

<style>

</style>
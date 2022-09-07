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

    <!-- Carousel -->
    <div class="flex overflow-x-auto mb-5">
      <div v-for="picture in adventureDetail.pictures" :key="picture.id">
        <div class="w-screen flex justify-center">
          <img class="h-56" :src="`${urlImage}/adventure/${adventureDetail.id}/${picture.id}-${picture.picture}`" :alt="`${picture.picture}`">
        </div>
      </div>
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
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ adventureDetail.description_en }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Level</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ levelName }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Family</dt>
                <dd v-if="adventureDetail.family == 1" class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Yes</dd>
                <dd v-else class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">No</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Departure</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ formatDate(adventureDetail.departure_date) }}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Arrival</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{ formatDate(adventureDetail.arrival_date) }}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Price</dt>
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
      <!-- <router-link :to="{ name: 'AdventureBooking', params:{ id: adventureDetail.id }}" class="text-center bg-blue-900 text-white p-2 rounded m-3 pl-5 pr-5">
        I wish reserve this cruise
      </router-link> -->

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
    ...mapState('images', ['urlImage']),
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
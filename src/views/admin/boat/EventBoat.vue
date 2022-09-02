<template>
  <div>
    <AdminPanel/>

    <div class="margintop60">
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Event for {{boatDetail.name}}
                </h2>
            </div>
        </div>
      </header>
    </div>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center flex-col">
      <!-- Title -->
      <div class="relative z-0 mb-6 w-full group pl-5 pr-5">
        <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="event.title" required />
        <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Booking name</label>
      </div>

      <div class="flex flex-row">
        <!-- Start date -->
        <div class="basis-1/2 mr-5">
          <div class="relative z-0 mb-6 w-full group">
              <input type="date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="event.start" required />
              <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start date</label>
          </div>
        </div>
        <!-- End date -->
        <div class="basis-1/2">
          <div class="relative z-0 mb-6 w-full group">
              <input type="date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="event.end" required />
              <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End date</label>
          </div>
        </div>
      </div>

      <button @click="storeEvent(event)" class="text-center bg-blue-900 text-white p-2 rounded m-3 pl-5 pr-5">
        Add date
      </button>

      <div class="flex flex-col justify-center mb-5">
        <v-date-picker
            mode='range'
            v-model='selectedDate'
          
            :model-config="modelConfig"
            :disabled-dates="eventsBoat"
            locale="en"
            is-range
            is-dark
            show-caps>
        </v-date-picker>
      </div>

    </div>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
              <tr>
                  <th scope="col" class="py-3 px-6 text-center">
                      Event Title
                  </th>
                  <th scope="col" class="py-3 px-6 text-center">
                      Start date
                  </th>
                  <th scope="col" class="py-3 px-6 text-center">
                      End date
                  </th>
                  <th scope="col" class="py-3 px-6 text-center">
                      Edit
                  </th>
                  <th scope="col" class="py-3 px-6 text-center">
                      Delete
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="event in eventsBoat" :key="event.id" class="bg-blue-500 border-b border-blue-400">
                  <th scope="row" class="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center">
                      {{ event.title }}
                  </th>
                  <td class="py-4 px-6 text-center">
                      {{ formatDate(event.start) }}
                  </td>
                  <td class="py-4 px-6 text-center">
                      {{ formatDate(event.end) }}
                  </td>
                  <td class="py-4 px-6 text-center">
                      <router-link :to="{ name: 'EditEvent', params:{ id: event.id }}" class="text-center bg-blue-600 text-white p-2 rounded m-3 pl-5 pr-5">Edit</router-link>
                  </td>
                  <td class="py-4 px-6 text-center">
                      <a href="#" class="text-center bg-red-600 text-white p-2 rounded mr-3 pl-5 pr-5" @click="deleteEvent(event)">Delete</a>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>

  </div>
</template>

<script>
import AdminPanel from '../../../components/AdminPanel.vue'
import {mapState, mapActions} from 'vuex';
import dayjs from 'dayjs';
import 'v-calendar/dist/style.css';

export default {
  components: {AdminPanel},
  data() {
    return {
      event: {
        title: '',
        start: '',
        end: '',
      },
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
    ...mapState('boats', ['boatDetail','eventsBoat']),
  },
  methods: {
    ...mapActions('boats', ['getBoatDetail', 'updateBoat', 'getEventsBoat', 'storeEvent', 'deleteEvent']),

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
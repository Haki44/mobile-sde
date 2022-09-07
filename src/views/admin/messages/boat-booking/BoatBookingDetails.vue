<template>
  <div>
    <AdminPanel/>

    <div class="margintop60">
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                  Boat booking Details
                </h2>
            </div>
        </div>
      </header>
    </div>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center flex-col">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Informations for the boat booking :
            <div v-for="boat in boats.data" :key="boat.id">
              <div v-if="boatBookingDetails.boat_id == boat.id">
                <b>{{ boat.name }}</b>
              </div>
            </div>
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">Details request boat booking.</p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{boatBookingDetails.name}} {{boatBookingDetails.firstname}}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Nationality</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{boatBookingDetails.nationality}}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{boatBookingDetails.email}}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Phone number</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{boatBookingDetails.tel}}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Dates requested</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{formatDate(boatBookingDetails.start_date)}} to {{formatDate(boatBookingDetails.end_date)}}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">With Skipper</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span v-if="boatBookingDetails.with_skipper == 1">
                  Yes
                </span>
                <span v-else-if="boatBookingDetails.with_skipper == 0">
                  No
                </span>
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Description</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{boatBookingDetails.description}}</dd>
            </div>
          </dl>
        </div>
      </div>
      <button @click="updateBoatBooking" class="text-center bg-blue-900 text-white p-2 rounded mb-5 mt-3 pl-5 pr-5">
        Processed
      </button>
    </div>

  </div>
</template>

<script>
import AdminPanel from '../../../../components/AdminPanel.vue'
import {mapState, mapActions} from 'vuex';
import dayjs from 'dayjs';

export default {
components: { AdminPanel },
  mounted(){
    window.scrollTo(0, 0)
    this.getBoatBookingDetails();
    this.getBoats();
  },
  computed: {
    ...mapState('messages', ['boatBookingDetails']),
    ...mapState('boats', ['boats']),
  },
  methods: {
    ...mapActions('messages', ['getBoatBookingDetails', 'updateBoatBooking']),
    ...mapActions('boats', ['getBoats']),

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
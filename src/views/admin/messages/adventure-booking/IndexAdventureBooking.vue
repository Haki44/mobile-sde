<template>
  <div>
    <AdminPanel/>

    <div class="margintop60">
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Admin Adventure Bookings
                </h2>
            </div>
        </div>
      </header>
    </div>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
                    <tr>
                        <th scope="col" class="py-3 px-6 text-center">
                            Name
                        </th>
                        <th scope="col" class="py-3 px-6 text-center">
                            Nationality
                        </th>
                        <th scope="col" class="py-3 px-6 text-center">
                            Phone Number
                        </th>
                        <th scope="col" class="py-3 px-6 text-center"> 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="adventureBooking in adventureBookings" :key="adventureBooking.id" class="bg-blue-500 border-b border-blue-400">
                        <th v-if="adventureBooking.is_validate == 0" scope="row" class="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center">
                            {{adventureBooking.name}} {{adventureBooking.firstname}}
                        </th>
                        <td v-if="adventureBooking.is_validate == 0" class="py-4 px-6 text-center">
                            {{ adventureBooking.nationality }}
                        </td>
                        <td v-if="adventureBooking.is_validate == 0" class="py-4 px-6 text-center">
                            {{ adventureBooking.tel }}
                        </td>
                        <td v-if="adventureBooking.is_validate == 0" class="py-4 px-6 text-center">
                            <router-link :to="{name: 'AdventureBookingDetails', params:{ id: adventureBooking.id }}" class="text-center bg-yellow-400 text-white p-2 rounded mr-3 pl-5 pr-5">Details</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

  </div>
</template>

<script>
import AdminPanel from '../../../../components/AdminPanel.vue'
import {mapState, mapActions} from 'vuex';

export default {
  components: { AdminPanel },
  mounted(){
    window.scrollTo(0, 0)
    this.getAdventureBookings();
  },
  computed: {
    ...mapState('messages', ['adventureBookings']),
  },
  methods: {
    ...mapActions('messages', ['getAdventureBookings']),
  },
}
</script>

<style>

</style>
<template>
  <div>
    <AdminPanel/>

    <div class="margintop60">
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Event for {{eventDetail.title}}
                </h2>
            </div>
        </div>
      </header>
    </div>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center flex-col">
      <!-- Title -->
      <div class="relative z-0 mb-6 w-full group pl-5 pr-5">
        <input type="text" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="eventDetail.title" required />
        <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Booking name</label>
      </div>

      <div class="flex flex-row">
        <!-- Start date -->
        <div class="basis-1/2 mr-5">
          <div class="relative z-0 mb-6 w-full group">
              <input type="date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="eventDetail.start" required />
              <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start date</label>
          </div>
        </div>
        <!-- End date -->
        <div class="basis-1/2">
          <div class="relative z-0 mb-6 w-full group">
              <input type="date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" v-model="eventDetail.end" required />
              <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End date</label>
          </div>
        </div>
      </div>

      <button @click="updateEvent(eventDetail)" class="text-center bg-blue-900 text-white p-2 rounded m-3 pl-5 pr-5">
        Edit date
      </button>

    </div>
  </div>
</template>

<script>
import AdminPanel from '../../../components/AdminPanel.vue';
import {mapState, mapActions} from 'vuex';
export default {
  components: {AdminPanel},
  mounted(){
    window.scrollTo(0, 0)
    this.getEventDetail();
  },
  computed: {
    ...mapState('boats', ['eventDetail']),
  },
  methods: {
    ...mapActions('boats', ['getEventDetail', 'updateEvent']),
  },
}
</script>

<style>

</style>
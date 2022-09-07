<template>
  <div>
    <AdminPanel/>

    <div class="margintop60">
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                  Contact Details
                </h2>
            </div>
        </div>
      </header>
    </div>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center flex-col">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">Informations for the contact :</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">Details request contact.</p>
        </div>
        <div class="border-t border-gray-200">
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{contactDetails.name}} {{contactDetails.firstname}}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{contactDetails.email}}</dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Phone number</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{contactDetails.tel}}</dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Description</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{{contactDetails.description}}</dd>
            </div>
          </dl>
        </div>
      </div>
      <button @click="updateContact" class="text-center bg-blue-900 text-white p-2 rounded mb-5 mt-3 pl-5 pr-5">
        Processed
      </button>
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
    this.getContactDetails();
  },
  computed: {
    ...mapState('messages', ['contactDetails']),
  },
  methods: {
    ...mapActions('messages', ['getContactDetails', 'updateContact']),
  },
}
</script>

<style>

</style>
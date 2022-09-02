<template>
  <div>
    <AdminPanel/>

    <div class="margintop60">
      <header class="bg-white shadow mb-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div name="header">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Admin Adventure
                </h2>
            </div>
        </div>
      </header>
    </div>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col">
      <div class="w-full flex justify-end">
        <router-link to="/admin/adventure/create" class="text-center bg-blue-600 text-white p-2 rounded w-36 mr-5 mb-5">Create Adventure</router-link>
      </div>

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead class="text-xs text-white uppercase bg-blue-600 dark:text-white">
                    <tr>
                        <th scope="col" class="py-3 px-6 text-center">
                            Adventure name
                        </th>
                        <th scope="col" class="py-3 px-6 text-center">
                            Edit date
                        </th>
                        <th scope="col" class="py-3 px-6 text-center">
                            Delete Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="adventure in adventures.data" :key="adventure.id" class="bg-blue-500 border-b border-blue-400">
                        <th scope="row" class="py-4 px-6 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 text-center">
                            {{ adventure.name }}
                        </th>
                        <td class="py-4 px-6 text-center">
                            <a href="#" class="text-center bg-blue-600 text-white p-2 rounded mr-3 pl-5 pr-5">Edit</a>
                        </td>
                        <td class="py-4 px-6 text-center">
                            <a href="#" class="text-center bg-red-600 text-white p-2 rounded mr-3 pl-5 pr-5">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

  </div>
</template>

<script>
import AdminPanel from '../../../components/AdminPanel.vue'
import {mapState, mapActions} from 'vuex';

export default {
  components: { AdminPanel },
  mounted(){
    window.scrollTo(0, 0)
    this.getAdventures();
  },
  computed: {
    ...mapState('adventures', ['adventures']),
  },
  methods: {
    ...mapActions('adventures', ['getAdventures']),
  },
}
</script>

<style>

</style>
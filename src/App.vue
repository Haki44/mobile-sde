<template>
  <div>
    <nav class="w-full bg-blue-900 fixed z-40 border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <router-link to="/" class="flex ml-3 justify-center items-center">
                <img src="../public/img/logos/logo-blanc.png" class="mr-3 h-6 sm:h-9" alt="Logo SDE" />
            </router-link>
            <div class="flex items-center md:order-2">
                <div class="flex items-center" v-if="user.token == undefined || user.token.length == 0">
                    <router-link class="text-white dark:text-white font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5" to="/login">Login</router-link>
                    <div class="text-white">|</div>
                    <router-link class="text-white font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2" to="/register">Register</router-link>
                </div>
                <div v-else>
                    <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">{{ authUser.name }} {{ authUser.firstname }}<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    <!-- Dropdown menu -->
                    <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 marginneg">
                        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li>
                                <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" @click="logout()">Logout</a>
                            </li>
                        </ul>
                    </div>
                    <!-- <button class="text-white focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2" @click="logout()">Logout</button> -->
                </div>
                <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden" aria-controls="mega-menu" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg aria-hidden="true" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div id="mega-menu" class="hidden justify-between items-center w-full text-sm md:flex md:w-auto md:order-1">
                <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                    <li>
                        <router-link class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" to="/">Accueil</router-link>
                    </li>
                    <li>
                        <router-link class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" to="/boat">Location de bateaux</router-link>
                    </li>
                    <li>
                      <router-link class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" to="/adventure">Croisière</router-link>
                    </li>
                    <li>
                        <router-link class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" to="/contact" >Contact</router-link>
                    </li>
                    <li v-if="authUser.admin == 1">
                        <router-link class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" to="/admin">Admin</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="body">
        <router-view/>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {mapState, mapActions} from 'vuex';

export default {

  name: 'App',
  components: {
    // HelloWorld
  },
  mounted(){
    this.getRole();
    this.getAuthUser();
  },
  computed: {
    ...mapState('auth', ['user', 'authUser']),
  },
  methods: {
    ...mapActions('auth', ['getRole', 'getAuthUser', 'logout']),
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.body {
  padding-top: 60px;
}
.marginneg {
    margin-top: -20px;
}
</style>

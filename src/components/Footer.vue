<template>
  <footer class="p-4 bg-blue-900 md:px-6 md:py-8">
    <div class="sm:flex sm:items-center sm:justify-between">
        <!-- <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a> -->
        <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <router-link to="/contact" class="hover:underline">Contact</router-link>
            </li>
       
        </ul>
        <p class="text-white mr-4 md:mr-6 ">05 01 02 03 04</p>
    </div>
    <hr class="my-6 border-white sm:mx-auto lg:my-8" />
    <span class="block text-sm text-white sm:text-center dark:text-gray-400">© 2022 Mobile-SDE. All Rights Reserved.
    </span>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>
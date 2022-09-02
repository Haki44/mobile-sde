<template>
    <div class="bg-h">
        <div class="bg-boat pt-5">

            <header>
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div name="header" class="flex flex-col justify-center items-center">
                        <img class="logo-f" src="../../public/img/logos/logo-blanc.png" alt="logo">
                        <h1 class="animate__animated animate__fadeInUp text-center title-font tracking-wider text-5xl text-white leading-tight">
                            SAILING DREAM EXPERIENCE
                        </h1>
                    </div>
                </div>
            </header>

            <div class="mx-auto px-6 lg:px-8 pb-12 mt-5">
                <div class="text-blue-900 flex justify-center align-center">
                    <p class="border-white border-2 text-white text-3xl text-center basis-1/2 p-5 desc-home">Louez un yacht ou reservez une croisière et vivez une experience unique à bord d'un voilier d'exception</p>
                </div>
            </div>

            <div class="mx-auto sm:px-6 lg:px-8 md:py-12 flex md:flex-row flex-col justify-center">
                <div class="basis-1/2 p-5 flex justify-center border-white md:border-r">
                    <router-link to="/boat" class="w-80 button-home text-center text-xl border-2 border-white bg-button-home text-blue-900 hover:bg-blue-900 hover:text-white transition duration-500">
                        <b>Louez votre Yacht</b>
                    </router-link>
                </div>

                <div class="basis-1/2 p-5 flex justify-center border-white md:border-l">
                    <router-link to="/adventure" class="w-80 button-home text-center text-xl border-2 border-white bg-button-home text-blue-900 hover:bg-blue-900 hover:text-white transition duration-500">
                        <b>Reservez votre croisière</b>
                    </router-link>
                </div>
               
                <!-- <div class="basis-1/2 p-5 flex justify-center border-white md:border-r">
                    <a href="#" class="button-home text-center text-xl border-2 border-white bg-button-home text-blue-900 hover:bg-blue-900 hover:text-white transition duration-500">
                        <b>Reservez votre unité</b>
                    </a>
                </div>

                <div class="basis-1/2 p-5 flex justify-center border-white md:border-l">
                    <a href="#" class="button-home text-center text-xl border-2 border-white bg-button-home text-blue-900 hover:bg-blue-900 hover:text-white transition duration-500">
                        <b>Reservez votre regate</b>
                    </a>
                </div> -->
            </div>

        </div>
    </div>

    <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {Footer},

}
</script>

<style scoped>
.title-font {
    font-family: 'Oswald', sans-serif;
}

.p-nav {
    padding-top: 64px;
}

.bg-boat {
    background-image: url('../../public/img/DSC_2095FUTNA_2_50_noir.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    width: auto;
    height: 100%;
}

.bg-button-home {
 background: #ffffffad;
}

.logo-f {
    height: 100px;
}

.button-home {
    padding: 15px 35px;
}

.margin-t-50 {
    margin-top: 50px;
}

.margin-t-100 {
    margin-top: 100px;
}

.margin-t-200 {
    margin-top: 100px;
}

.margin-b-100 {
    margin-bottom: 100px;
}

.logo-h-40 {
    height: 45px;
}

.boat-img {
    width: 564px;
}

.bg-skipper-l {
    background-image: url('/img/bg-boat.jpg');
    background-position: center;
    background-size: cover;
    transition: 0.5s;
}

.bg-skipper-l:hover {
    transform: scale(1.25);
    transition: 0.5s;
}

.bg-skipper-r {
    background-image: url('/img/skipper-choice1.jpg');
    background-position: center;
    background-size: cover;
    transition: 0.5s;
}

.bg-skipper-r:hover {
    transform: scale(1.25);
    transition: 0.5s;
}

.bg-txt-home {
    background: #22222291;
}

.desc-home {
    font-family: 'Barlow Semi Condensed', sans-serif;
}

@media screen and (min-width: 550px) {
  .bg-h {
    height: 90vh;
  }
}
</style>
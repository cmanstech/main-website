<script setup>
    import { RouterView } from 'vue-router';
    import Navbar from './components/Navbar.vue';
    import Footer from './components/footer.vue';
    import { VueLenis, useLenis } from 'lenis/vue'
    import { watch } from 'vue'

    const lenisOptions = {
    // lenis options (optional)
    }

    const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
    })

    watch(
    lenis,
    (lenis) => {
        // lenis instance
        console.log(lenis)
    },
    { immediate: true }
    )

</script>

<template>
  <VueLenis root :options="lenisOptions"/>
  <div class="min-h-screen flex flex-col bg-(--eggwhite)">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
  html { scroll-behavior: auto; }
</style>



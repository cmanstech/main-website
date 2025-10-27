<script setup>
    import { RouterView } from 'vue-router';
    import Navbar from './components/Navbar.vue';
    import Footer from './components/footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 pt-16">
      <RouterView />
    </main>
    <Footer/>
  </div>
</template>




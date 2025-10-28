<script setup>
    import { RouterView } from 'vue-router';
    import Navbar from './components/Navbar.vue';
    import Footer from './components/footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-(--eggwhite)">
    <Navbar />
    <main>
      <RouterView />
    </main>
    
    <Footer />
  </div>
</template>




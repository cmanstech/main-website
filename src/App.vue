<script setup>
    import { RouterView } from 'vue-router';
    import Nav from './components/nav.vue';
    import Footer from './components/footer.vue';
    import homeView from './components/homeView.vue';
</script>

<template>
  <div class="min-h-dvh">
    <Nav />
    <main class="mt-16">
      <Router-view />
    </main>
    <Footer class="mt-16" />
    <homeView />
  </div>
</template>




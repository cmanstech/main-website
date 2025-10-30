<script setup>
const props = defineProps({
  src: String,
  kicker: String,
  title: String,
  desc: String,
  darken: {
    type: Number,
    default: 0.4
  }
})
</script>

<template>
  <section class="relative w-full min-h-svh flex items-center justify-center">
    <!-- รูปพื้นหลัง -->
    <img :src="src" alt="" class="absolute inset-0 w-full h-full object-cover" />
    <div
      class="absolute inset-0 pointer-events-none"
      :style="{ backgroundColor: `rgba(0,0,0,${darken})` }"
    ></div>

    <!-- เนื้อหา -->
    <div class="relative z-10 text-center text-white max-w-3xl mx-6">
      <p class="uppercase tracking-widest text-sm mb-4 opacity-80">{{ kicker }}</p>
      <h2 class="font-en-display leading-tight mb-6">{{ title }}</h2>
      <p class="text-white/90 mb-10">{{ desc }}</p>

      <slot name="cta" />
    </div>
  </section>
</template>

<style scoped>
.font-en-display {
  font-family: var(--display-en);
  font-size: clamp(2.4rem, 6vw, 4.8rem);
}
</style>
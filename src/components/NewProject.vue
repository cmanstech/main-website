<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
  category:    { type: String, default: null },
  heading:     { type: String, default: null },
  description: { type: String, default: null },
  ctaLabel:    { type: String, default: null },
  ctaHref:     { type: String, default: 'https://changconnect.cmans.tech/' },
  videoSrc:    { type: String, default: () => new URL('@/assets/For_Cmans_Tech_Website.mp4', import.meta.url).href },
  videoType:   { type: String, default: 'video/mp4' },
  poster:      { type: String, default: '' },
});

const displayCategory    = computed(() => props.category    ?? t('newProject.category'));
const displayDescription = computed(() => props.description ?? t('newProject.description'));
const displayCtaLabel    = computed(() => props.ctaLabel    ?? t('newProject.cta'));
const headingLines       = computed(() => (props.heading    ?? t('newProject.heading')).split('\n'));

const slideCount = 2;
const current = ref(0);
const locked = ref(false);

function prev() {
  current.value = (current.value - 1 + slideCount) % slideCount;
}
function next() {
  current.value = (current.value + 1) % slideCount;
}

function onWheel(e) {
  const delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
  const goingForward = delta > 0;
  const goingBack = delta < 0;

  if (locked.value) { e.preventDefault(); return; }

  if (goingForward && current.value < slideCount - 1) {
    e.preventDefault();
    next();
    locked.value = true;
    setTimeout(() => { locked.value = false; }, 700);
  } else if (goingBack && current.value > 0) {
    e.preventDefault();
    prev();
    locked.value = true;
    setTimeout(() => { locked.value = false; }, 700);
  }
}
</script>

<template>
  <section class="relative w-full h-screen overflow-hidden bg-black" @wheel="onWheel">

    <!-- Backgrounds only — this track slides, nothing else does -->
    <div class="bg-track" :style="{ transform: `translateX(-${current * 100}%)` }">
      <!-- BG 1: video -->
      <div class="bg-slide">
        <video
          class="absolute inset-0 w-full h-full object-cover"
          :poster="poster"
          autoplay muted loop playsinline preload="auto"
        >
          <source :src="videoSrc" :type="videoType" />
        </video>
      </div>
      <!-- BG 2: screenshot -->
      <div class="bg-slide">
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('/img/changconnect_screenshot.png')"
        ></div>
      </div>
    </div>

    <!-- Vignette — fixed, sits above backgrounds -->
    <div class="absolute inset-0 z-1 vignette pointer-events-none"></div>

    <!-- Content — fixed, never moves -->
    <div class="absolute inset-0 z-10 flex items-center">
      <div class="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div class="max-w-xl">
          <p class="font-grotesk text-[11px] sm:text-xs tracking-[0.32em] mb-6 text-white/95">{{ displayCategory }}</p>
          <h1 class="font-display font-semibold text-white leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[68px]">
            <span v-for="(line, i) in headingLines" :key="i" class="block">{{ line }}</span>
          </h1>
          <p class="font-body text-sm md:text-[15px] font-semibold text-white/95 mt-8 mb-10 max-w-md leading-relaxed">{{ displayDescription }}</p>
          <a :href="ctaHref" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 group select-none">
            <span class="font-grotesk text-sm md:text-[15px] border border-white/90 rounded-full px-6 py-2 transition-colors duration-300 text-white group-hover:bg-white group-hover:text-black">{{ displayCtaLabel }}</span>
            <span class="w-10 h-10 border border-white/90 rounded-full flex items-center justify-center transition-all duration-300 text-white group-hover:bg-white group-hover:text-black" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="9 7 17 7 17 15"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- Dot indicators -->
    <div class="absolute bottom-6 inset-x-0 z-20 flex justify-center gap-2">
      <button
        v-for="i in slideCount"
        :key="i"
        class="dot"
        :class="{ active: i - 1 === current }"
        :aria-label="`Go to slide ${i}`"
        @click="current = i - 1"
      />
    </div>

  </section>
</template>

<style scoped>
  .font-display { font-family: var(--display-en); }
  .font-body    { font-family: var(--body-en); }
  .font-grotesk { font-family: var(--display-grotesk); letter-spacing: 0.02em; }

  :global(html[lang^="th"]) .font-display,
  :global(html[lang^="th"]) .font-body { font-family: var(--body-th); }

  /* Only the backgrounds slide */
  .bg-track {
    position: absolute;
    inset: 0;
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  }

  .bg-slide {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .vignette {
    background:
      radial-gradient(ellipse at 30% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 70%, rgba(0,0,0,0) 100%),
      linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.0) 100%);
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.4);
    border: none;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
  }
  .dot.active {
    background: white;
    transform: scale(1.25);
  }
</style>

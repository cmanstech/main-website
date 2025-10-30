<script setup>
    import { RouterLink } from 'vue-router';
    import BaseButton from './buttons/BaseButton.vue';
    import CtaArrowButton from './buttons/CtaArrowButton.vue';

</script>


<template>
    <section class="relative h-svh min-h-[560px] w-full overflow-hidden">
        <video
            class="absolute inset-0 h-full w-full object-cover object-center"
            autoplay
            muted
            loop
            playsinline
        >
            <source src="/src/assets/HeroSection-vid.mp4" type="video/mp4" />
        </video>

        <div class="absolute inset-0 bg-black/25"></div>

    <!-- bottom gradient for contrast -->
    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 h-[32vh]
             bg-linear-to-t from-black/45 via-black/10 to-transparent"
    ></div>

    <!-- center heading -->
    <div class="relative z-10 h-full flex items-center justify-center text-center px-6">
      <h1 class="leading-[0.95] text-[clamp(20px,8vw,100px)] font-display-en text-(--primary-eggwhite)">
        Code.<br/>Craft.<br/>Continuity.
      </h1>
    </div>

    <!-- bottom copy + scroll CTA (pin to bottom) -->
    <div class="absolute z-10 inset-x-0 bottom-10 flex flex-col items-center gap-4 px-6">
      <p class="text-md opacity-85 text-(--primary-eggwhite) text-center font-display-en-space">
        We turn complex infrastructure into effortless experiences.
      </p>

      <div class="mt-10 md:mt-16 flex justify-end">
          <div
            to="/contact"
            class="inline-flex items-center gap-3 rounded-full border border-(--primary-eggwhite)/85 px-5 py-2.5 text-(--primary-eggwhite)
                   hover:bg-(--primary-eggwhite) hover:text-(--secondary-darkbrown) transition font-display-grotesk"
          >
            SCROLL&nbsp;TO&nbsp;EXPLORE
            <span class="grid size-8 rounded-full border border-current place-items-center">

              <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 7l10 10M17 7v10H7" />
              </svg>
            </span>
        </div>
        </div>
    </div>
    </section>
</template>



<style scoped>
    @media (prefers-reduced-motion: reduce){
        video {
            display: none;
        }
    }
    .font-display-grotesk { font-family: "Space Mono";}
    .font-display-en { font-family: "Figtree", monospace;}
    .font-display-en-space { font-family: "Figtree", monospace;}
</style>
<script setup>
  import { RouterLink } from 'vue-router'

</script>



<template>
  <footer class="bg-(--secondary-darkbrown) text-(--primary-eggwhite)">
    <!-- TOP: content -->
    <div
      class="mx-[30px] py-12 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-10"
    >
      <!-- Left: big copy (max 50vw) -->
      <div class="max-w-[min(50vw,720px)]">
        <h2
          class="text-[clamp(28px,3.2vw,44px)] leading-tight"
          style="font-family: var(--display-en) text-(--primary-eggwhite)"
        
        >
          Blending design and engineering to craft digital experiences that last. We build technology that scales with you. Reliable, adaptable, and future-ready.
        </h2>

        <p class="mt-10 opacity-90">
          it@cmans.tech
        </p>
      </div>

      <!-- Right: links + CTA aligned -->
      <div class="flex flex-col justify-between">
        <ul class="space-y-4 text-[15px] leading-6">
          <li><RouterLink to="/about" class="footer-link">About us</RouterLink></li>
          <li><RouterLink to="/projects" class="footer-link">Projects</RouterLink></li>
          <li><RouterLink to="/blog" class="footer-link">Blog</RouterLink></li>
        </ul>

        <!-- CTA row (right aligned) -->
        <div class="mt-10 md:mt-16 flex justify-end">
          <RouterLink
            to="/contact"
            class="inline-flex items-center gap-3 rounded-full border border-(--primary-eggwhite)/85 px-5 py-2.5
                   hover:bg-(--primary-eggwhite) hover:text-(--secondary-darkbrown) transition"
          >
            CONTACT&nbsp;US
            <span class="grid size-8 rounded-full border border-current place-items-center">

              <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>


    <div class="mx-[30px] h-px bg-(--primary-eggwhite)/40"></div>


    <div class="mx-[30px] py-10 md:py-12">
      <img
        src="@/assets/svg/cmans-tech-Hori-white.svg"
        alt="CMANS TECH"
        class="w-full h-auto"
      />
    </div>

    <div class="mx-[30px] pb-8 text-center text-xs tracking-wider opacity-80 font-(--en-grotesk)">
      © 2025 CMANS TECH CO., LTD.  All Rights Reserved.
    </div>
  </footer>
</template>



<style scoped>
    .footer-link {
      color: inherit;
      text-decoration: none;
      transition: opacity .2s ease;
    }
    .footer-link:hover { opacity: .8; }
</style>
<!-- <template>
    <section
        class="relative h-screen w-full flex flex-col items-center justify-center bg-(--secondary-darkbrown) text-var(--eggwhite) px-30"
    >

    </section>
</template> -->


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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum pretium arcu, id iaculis tortor pharetra sit amet. Aliquam et est ultricies
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
              <!-- ใช้ไอคอนที่มีอยู่ก็ได้ -->
              <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </span>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="mx-[30px] h-px bg-(--primary-eggwhite)/40"></div>

    <!-- BOTTOM: big logo full width within same side padding -->
    <div class="mx-[30px] py-10 md:py-12">
      <!-- ถ้าเป็นไฟล์ภาพ .svg -->
      <img
        src="/src/assets/cmans-tech-Hori.svg"
        alt="CMANS TECH"
        class="w-full h-auto invert"
      />
    </div>

    <!-- Copyright -->
    <div class="mx-[30px] pb-8 text-center text-xs tracking-wider opacity-80 font-(--en-grotesk)">
      © 2025 CMANS TECH CO., LTD.  All Rights Reserved.
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer-link {
  color: inherit;
  text-decoration: none;
  transition: opacity .2s ease;
}
.footer-link:hover { opacity: .8; }
</style>
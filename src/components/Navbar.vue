<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const isOpen = ref(false)
const isScrolled = ref(false)

const toggle = () => (isOpen.value = !isOpen.value)
const close  = () => (isOpen.value = false)

const onScroll = () => { isScrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const router = useRouter()
router.afterEach(() => close())
</script>

<template>
  <header
    :class="[
      // ใช้ mix-blend เฉพาะเดสก์ท็อป กันปัญหาข้อความซีดบนมือถือ
      'fixed inset-x-0 top-0 z-50 transition-all duration-300 text-white lg:mix-blend-difference mix-blend-normal',
      isScrolled ? 'bg-transparent' : 'backdrop-blur-0'
    ]"
  >
    <!-- ===== Desktop (>=lg) ===== -->
    <nav class="hidden lg:grid mx-[30px] grid-cols-[1fr_auto_1fr] items-center py-3">
      <!-- left -->
      <ul class="flex items-center gap-10">
        <li><RouterLink class="nav-link" to="/">Home</RouterLink></li>
        <li><RouterLink class="nav-link" to="/about">About Us</RouterLink></li>
        <li><RouterLink class="nav-link" to="/services">Services</RouterLink></li>
      </ul>

      <!-- center logo -->
      <RouterLink to="/" class="flex items-center justify-center">
        <img src="@/assets/svg/cmans-tech-Hori-white.svg" alt="CMANS TECH" class="h-8 w-[220px]" />
      </RouterLink>

      <!-- right -->
      <ul class="flex items-center justify-end gap-10">
        <li><RouterLink class="nav-link" to="/projects">Projects</RouterLink></li>
        <li><RouterLink class="nav-link" to="/contact">Contact Us</RouterLink></li>
        <!-- <li><RouterLink class="nav-link" to="/blog">Blog</RouterLink></li> -->
      </ul>
    </nav>

    <!-- ===== Mobile (<lg): logo กลาง + hamburger ขวา ===== -->
    <div class="lg:hidden relative mx-[30px] py-3">
      <!-- logo กลาง -->
      <RouterLink
        to="/"
        class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        aria-label="Home"
      >
        <img src="@/assets/svg/cmans-tech-Hori-white.svg" alt="CMANS TECH" class="h-7 w-[180px]" />
      </RouterLink>

      <!-- hamburger ขวา -->
      <div class="flex items-center justify-end">
        <button
          class="p-2"
          @click="toggle"
          :aria-expanded="isOpen ? 'true' : 'false'"
          aria-label="Toggle menu"
        >
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Overlay เมนูมือถือ: ทึบ เต็มจอ -->
      <transition name="fade-slide">
        <div v-if="isOpen" class="fixed inset-0 z-40 bg-black/85">
          <!-- ปุ่มปิดมุมขวาบน -->
          <button
            class="absolute top-4 right-4 p-2 text-white/90"
            @click="close"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- โลโก้ด้านบนกึ่งกลาง (ใน overlay) -->
          <div class="pt-12 flex justify-center">
            <img src="@/assets/svg/cmans-tech-Hori-white.svg" alt="CMANS TECH" class="h-8 w-[200px] opacity-95" />
          </div>

          <!-- รายการเมนู -->
          <div class="h-full flex items-center justify-center">
            <ul class="w-[80%] max-w-sm space-y-3 text-center text-(--primary-eggwhite)">
              <li><RouterLink class="mobile-link" to="/"         @click="close">Home</RouterLink></li>
              <li><RouterLink class="mobile-link" to="/about"    @click="close">About Us</RouterLink></li>
              <li><RouterLink class="mobile-link" to="/services" @click="close">Services</RouterLink></li>
              <li><RouterLink class="mobile-link" to="/projects" @click="close">Projects</RouterLink></li>
              <li><RouterLink class="mobile-link" to="/contact"  @click="close">Contact Us</RouterLink></li>
              <!-- <li><RouterLink class="mobile-link" to="/blog"     @click="close">Blog</RouterLink></li> -->
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.nav-link{
  font-family: var(--display-en);
  font-size: 14pt;
  color: inherit;
  transition: opacity .2s ease;
}
.nav-link:hover { opacity: .7; }

/* mobile overlay links ใหญ่ คลิกง่าย */
.mobile-link{
  font-family: var(--display-en);
  font-size: 22px;
  display: block;
  padding: 10px 0;
  transition: opacity .2s ease;
}
.mobile-link:hover { opacity: .8; }

/* transition ตรงกับ name="fade-slide" */
.fade-slide-enter-active, .fade-slide-leave-active { transition: all .28s ease; }
.fade-slide-enter-from { opacity: 0; transform: translateY(-8px); }
.fade-slide-leave-to   { opacity: 0; transform: translateY(-8px); }
</style>
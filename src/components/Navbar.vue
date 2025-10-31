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
      'fixed inset-x-0 top-0 z-50 transition-all duration-300 text-white mix-blend-difference',
    //   isScrolled ? 'backdrop-blur bg-black/5' : 'bg-transparent'
        isScrolled ? 'bg-transparent' : 'backdrop-blur-0'
    ]"
  >
    <!-- ===== Desktop (>=lg) ===== -->
    <nav class="hidden lg:grid mx-[30px] grid-cols-[1fr_auto_1fr] items-center py-3 text-white">
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
      </ul>
    </nav>

    <!-- ===== Mobile (<lg) : logo กลาง + hamburger ขวา ===== -->
    <div class="lg:hidden relative mx-[30px] py-3 text-white">
      <!-- logo กลางด้วย absolute -->
      <RouterLink
        to="/"
        class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        aria-label="Home"
      >
        <img src="@/assets/svg/cmans-tech-Hori-white.svg" alt="CMANS TECH" class="h-7 w-[180px]" />
      </RouterLink>

      <!-- ปุ่ม hamburger ชิดขวา -->
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

      <!-- แผงเมนู mobile -->
      <transition name="fade-slide">
        <div
          v-if="isOpen"
          class="mt-2 rounded-2xl bg-black/70 text-(--primary-eggwhite) backdrop-blur p-4 border border-white/10"
        >
          <ul class="space-y-2">
            <li><RouterLink class="nav-link block py-2" to="/"         @click="close">Home</RouterLink></li>
            <li><RouterLink class="nav-link block py-2" to="/about"    @click="close">About Us</RouterLink></li>
            <li><RouterLink class="nav-link block py-2" to="/services" @click="close">Services</RouterLink></li>
            <li><RouterLink class="nav-link block py-2" to="/projects" @click="close">Projects</RouterLink></li>
            <li><RouterLink class="nav-link block py-2" to="/contact"  @click="close">Contact Us</RouterLink></li>
            <li><RouterLink class="nav-link block py-2" to="/blog"     @click="close">Blog</RouterLink></li>
          </ul>
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

    /* transition ตรงกับ name="fade-slide" */
    .fade-slide-enter-active, .fade-slide-leave-active { transition: all .22s ease; }
    .fade-slide-enter-from { opacity: 0; transform: translateY(-6px); }
    .fade-slide-leave-to   { opacity: 0; transform: translateY(-6px); }
</style>
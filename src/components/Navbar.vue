<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const isOpen = ref(false)
const isScrolled = ref(false)

const toggle = () => (isOpen.value = !isOpen.value)
const close  = () => (isOpen.value = false)

const onScroll = () => { isScrolled.value = window.scrollY > 50 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const router = useRouter()
router.afterEach(() => close())

function setLocale(lang) {
  locale.value = lang
  localStorage.setItem('lang', lang)
}
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 transition-all duration-300 text-white lg:mix-blend-difference mix-blend-normal',
      isScrolled ? 'bg-transparent' : 'backdrop-blur-0'
    ]"
  >
    <!-- ===== Desktop (>=lg) ===== -->
    <nav class="hidden lg:grid mx-[30px] grid-cols-[1fr_auto_1fr] items-center py-3">
      <!-- left -->
      <ul class="flex items-center gap-10">
        <li><RouterLink class="nav-link" to="/">{{ t('nav.home') }}</RouterLink></li>
        <li><RouterLink class="nav-link" to="/about">{{ t('nav.about') }}</RouterLink></li>
        <li><RouterLink class="nav-link" to="/services">{{ t('nav.services') }}</RouterLink></li>
      </ul>

      <!-- center -->
      <RouterLink to="/" class="flex items-center justify-center">
        <img src="@/assets/svg/ctech-new-logo-02.svg" alt="CMANS TECH" class="h-12 w-[200px]" />
      </RouterLink>

      <!-- right -->
      <ul class="flex items-center justify-end gap-10">
        <li><RouterLink class="nav-link" to="/projects">{{ t('nav.projects') }}</RouterLink></li>
        <li><RouterLink class="nav-link" to="/contact">{{ t('nav.contact') }}</RouterLink></li>
        <!-- lang switcher -->
        <li class="flex items-center gap-1 text-sm font-mono">
          <button
            :class="['lang-btn', locale === 'en' ? 'opacity-100' : 'opacity-40']"
            @click="setLocale('en')"
          >EN</button>
          <span class="opacity-40">|</span>
          <button
            :class="['lang-btn', locale === 'th' ? 'opacity-100' : 'opacity-40']"
            @click="setLocale('th')"
          >TH</button>
        </li>
      </ul>
    </nav>

    <!-- ===== Mobile (<lg) ===== -->
    <div class="lg:hidden relative mx-[30px] py-3">
      <!-- logo center -->
      <RouterLink
        to="/"
        class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        aria-label="Home"
      >
        <img src="@/assets/svg/ctech-new-logo-02.svg" alt="CMANS TECH" class="h-7 w-[180px]" />
      </RouterLink>

      <!-- hamburger right -->
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

      <!-- Mobile overlay -->
      <transition name="fade-slide">
        <div v-if="isOpen" class="fixed inset-0 z-40 bg-black/85">
          <!-- close button -->
          <button
            class="absolute top-4 right-4 p-2 text-white/90"
            @click="close"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>

          <!-- logo -->
          <div class="pt-12 flex justify-center">
            <img src="@/assets/svg/cmans-tech-Hori-white.svg" alt="CMANS TECH" class="h-8 w-[200px] opacity-95" />
          </div>

          <!-- menu links -->
          <div class="h-full flex flex-col items-center justify-center gap-10">
            <ul class="w-[80%] max-w-sm space-y-3 text-center text-(--primary-eggwhite)">
              <li><RouterLink class="mobile-link" to="/"         @click="close">{{ t('nav.home') }}</RouterLink></li>
              <li><RouterLink class="mobile-link" to="/about"    @click="close">{{ t('nav.about') }}</RouterLink></li>
              <li><RouterLink class="mobile-link" to="/services" @click="close">{{ t('nav.services') }}</RouterLink></li>
              <li><RouterLink class="mobile-link" to="/projects" @click="close">{{ t('nav.projects') }}</RouterLink></li>
              <li><RouterLink class="mobile-link" to="/contact"  @click="close">{{ t('nav.contact') }}</RouterLink></li>
            </ul>

            <!-- lang switcher -->
            <div class="flex items-center gap-3 text-white text-lg font-mono">
              <button
                :class="locale === 'en' ? 'opacity-100' : 'opacity-40'"
                @click="setLocale('en')"
              >EN</button>
              <span class="opacity-40">|</span>
              <button
                :class="locale === 'th' ? 'opacity-100' : 'opacity-40'"
                @click="setLocale('th')"
              >TH</button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  font-family: var(--display-en);
  font-size: 14pt;
  color: inherit;
  transition: opacity .2s ease;
}
.nav-link:hover { opacity: .7; }

.lang-btn {
  font-family: var(--display-en);
  font-size: 13px;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity .2s ease;
}
.lang-btn:hover { opacity: 1 !important; }

.mobile-link {
  font-family: var(--display-en);
  font-size: 22px;
  display: block;
  padding: 10px 0;
  transition: opacity .2s ease;
}
.mobile-link:hover { opacity: .8; }

.fade-slide-enter-active, .fade-slide-leave-active { transition: all .28s ease; }
.fade-slide-enter-from { opacity: 0; transform: translateY(-8px); }
.fade-slide-leave-to   { opacity: 0; transform: translateY(-8px); }
</style>

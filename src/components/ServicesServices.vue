<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import imgCustom from '/public/img/services-custom.jpg'
import imgPlugins from '/public/img/services-plugins.jpg'
import imgScalable from '/public/img/services-scalable.jpg'
import imgUi from '/public/img/services-ui.jpg'

const { t, tm } = useI18n()
const changconnectVideo = new URL('@/assets/For_Website_Cmans_Tech_1.mp4', import.meta.url).href

const imgs = [imgCustom, imgPlugins, imgScalable, imgUi]

const items = computed(() =>
  tm('servicesServices.items').map((item, i) => ({ ...item, img: imgs[i] }))
)

const active = ref(0)
const toggle = (i) => {
  active.value = active.value === i ? -1 : i
}

const enter = (el) => {
  el.style.height = '0px'
  el.style.opacity = '0'
  requestAnimationFrame(() => {
    el.style.transition = 'height 280ms ease, opacity 280ms ease'
    el.style.height = el.scrollHeight + 'px'
    el.style.opacity = '1'
  })
}
const afterEnter = (el) => {
  el.style.height = 'auto'
  el.style.transition = ''
}
const leave = (el) => {
  el.style.height = el.scrollHeight + 'px'
  el.style.opacity = '1'
  requestAnimationFrame(() => {
    el.style.transition = 'height 220ms ease, opacity 220ms ease'
    el.style.height = '0px'
    el.style.opacity = '0'
  })
}
</script>

<template>
  <section class="relative w-full min-h-svh bg-(--primary-eggwhite)">
    <div class="mx-[30px] max-w-none lg:mx-auto px-0 lg:px-4 py-14 lg:py-24">
      <div class="grid grid-cols-12 gap-10">

        <!-- LEFT: sticky label + copy -->
        <div class="col-span-12 lg:col-span-4 lg:sticky lg:top-24 self-start">
          <div class="flex items-start gap-6 mb-6">
            <span class="text-[40px] font-(--display-en) text-(--secondary-darkbrown)">
              {{ t('servicesServices.label') }}
            </span>
          </div>
          <p class="text-(--secondary-darkbrown) font-(--display-en) leading-tight text-[clamp(22px,3.1vw,32px)]/tight">
            {{ t('servicesServices.tagline') }}
          </p>
        </div>

        <!-- RIGHT: list -->
        <div class="col-span-12 lg:col-span-8 divide-y divide-(--secondary-darkbrown)/30">

          <!-- Changconnect — always visible, not collapseable -->
          <div class="py-10">
            <h3 class="text-[clamp(18px,2vw,22px)] font-(--display-grotesk) text-(--secondary-darkbrown) mb-4">
              <a href="https://changconnect.cmans.tech/" target="_blank" rel="noopener noreferrer" class="hover:underline">Changconnect</a>
            </h3>
            <div class="pt-2 text-[15px] leading-6 text-(--secondary-darkbrown)/80">
              <p class="max-w-[75ch] mb-6">
                {{ t('servicesServices.changconnectDesc') }}
              </p>
              <div class="w-full aspect-[3/1.2] bg-black mb-6 overflow-hidden">
                <video class="w-full h-full object-cover" autoplay muted loop playsinline preload="auto">
                  <source :src="changconnectVideo" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <!-- Collapseable items -->
          <div v-for="(it, i) in items" :key="i" class="py-10">
            <button
              type="button"
              class="w-full flex items-start justify-between gap-4 text-left"
              @click="toggle(i)"
              :aria-expanded="active === i"
            >
              <h3 class="text-[clamp(18px,2vw,22px)] font-(--display-grotesk) text-(--secondary-darkbrown)">
                {{ it.title }}
              </h3>
              <span class="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border border-(--secondary-darkbrown)/50 text-(--secondary-darkbrown)">
                <svg v-if="active === i" viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg v-else viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </button>
            <Transition @enter="enter" @after-enter="afterEnter" @leave="leave">
              <div v-show="active === i" class="overflow-hidden">
                <div class="pt-4 text-[15px] leading-6 text-(--secondary-darkbrown)/80">
                  <p class="max-w-[75ch] mb-6 whitespace-pre-line">{{ it.desc }}</p>
                  <div class="w-full aspect-[3/1.2] bg-neutral-300 mb-6 overflow-hidden">
                    <img v-if="it.img" :src="it.img" :alt="it.title" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </Transition>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

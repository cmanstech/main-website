<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const rowRef = ref(null)
let ro

const setSize = () => {
  const el = rowRef.value
  if (!el) return
  const w = el.clientWidth || window.innerWidth
  const s = Math.max(200, Math.min(380, w / 5))
  el.style.setProperty('--s', `${s}px`)
  el.style.setProperty('--overlap', '0.22')
}

onMounted(() => {
  setSize()
  ro = new ResizeObserver(setSize)
  ro.observe(rowRef.value || document.body)
  window.addEventListener('resize', setSize, { passive: true })
})

onUnmounted(() => {
  ro?.disconnect?.()
  window.removeEventListener('resize', setSize)
})
</script>

<template>
  <section class="relative w-full min-h-svh bg-(--primary-eggwhite)">
    <div class="mx-[30px] max-w-none lg:mx-auto px-0 lg:px-4 py-14 lg:py-24">

      <!-- Header -->
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-11 lg:col-span-4 flex items-start gap-6">
          <span class="text-[40px] font-(--display-en) text-(--secondary-darkbrown)">
            {{ t('process.label1') }}<br/>{{ t('process.label2') }}
          </span>
        </div>
        <div class="col-span-11 lg:col-span-8">
          <p class="text-(--secondary-darkbrown) font-(--display-en) leading-tight text-[clamp(18px,2.4vw,28px)]/tight">
            {{ t('process.tagline') }}
          </p>
        </div>
      </div>

      <!-- Circles Row -->
      <div class="mt-50">
        <div
          ref="rowRef"
          class="flex items-center justify-center flex-wrap gap-0"
          style="--s:240px; --overlap:.22;"
        >
          <div
            class="relative grid place-items-center rounded-full border border-(--secondary-darkbrown)/60 text-(--secondary-darkbrown)"
            :style="{ width: 'var(--s)', height: 'var(--s)' }"
          >
            <span class="text-[clamp(18px,1.6vw,24px)] font-(--display-grotesk)">{{ t('process.discover') }}</span>
          </div>

          <div
            class="relative grid place-items-center rounded-full border border-(--secondary-darkbrown)/60 text-(--secondary-darkbrown)"
            :style="{ width: 'var(--s)', height: 'var(--s)', marginLeft: 'calc(var(--s) * var(--overlap) * -1)' }"
          >
            <span class="text-[clamp(18px,1.6vw,24px)] font-(--display-grotesk)">{{ t('process.design') }}</span>
          </div>

          <div
            class="relative grid place-items-center rounded-full border border-(--secondary-darkbrown)/60 text-(--secondary-darkbrown)"
            :style="{ width: 'var(--s)', height: 'var(--s)', marginLeft: 'calc(var(--s) * var(--overlap) * -1)' }"
          >
            <span class="text-[clamp(18px,1.6vw,24px)] font-(--display-grotesk)">{{ t('process.develop') }}</span>
          </div>

          <div
            class="relative grid place-items-center rounded-full border border-(--secondary-darkbrown)/60 text-(--secondary-darkbrown)"
            :style="{ width: 'var(--s)', height: 'var(--s)', marginLeft: 'calc(var(--s) * var(--overlap) * -1)' }"
          >
            <span class="text-center leading-snug text-[clamp(18px,1.6vw,24px)] font-(--display-grotesk) whitespace-pre-line">
              {{ t('process.deploy') }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

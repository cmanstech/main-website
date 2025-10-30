<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const rowRef = ref(null)
let ro

// คำนวณขนาดวงกลมแบบ responsive ด้วย ResizeObserver
const setSize = () => {
  const el = rowRef.value
  if (!el) return
  const w = el.clientWidth || window.innerWidth

  // วงกลมกว้าง ~20% ของพื้นที่ แต่ไม่เล็ก/ใหญ่เกินไป
  const s = Math.max(200, Math.min(380, w / 5))
  // ซ้อนทับกัน ~22% ของเส้นผ่านศูนย์กลาง (ลบด้วย margin-left ลบ)
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
        <!-- ซ้าย: หัวข้อ + เส้น -->
        <div class="col-span-11 lg:col-span-4 flex items-start gap-6">
          <span class="text-[40px] font-(--display-en) text-(--secondary-darkbrown)">Our<br/>Process</span>
          <span class="h-px flex-1 bg-(--secondary-darkbrown)/30 translate-y-[0.7em]"></span>
        </div>

        <!-- ขวา: คำอธิบาย -->
        <div class="col-span-11 lg:col-span-8">
          <p class="text-(--secondary-darkbrown) font-(--display-en) leading-tight text-[clamp(18px,2.4vw,28px)]/tight">
                From architecture to interface, every detail is designed for clarity, efficiency, and a flawless user experience.
                Our process combines engineering precision with creative thinking — ensuring every product we build is not only functional, but also effortless to use and easy to scale.
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
          <!-- วงกลม 1 -->
          <div
            class="relative grid place-items-center rounded-full border border-(--secondary-darkbrown)/60 text-(--secondary-darkbrown)"
            :style="{ width: 'var(--s)', height: 'var(--s)' }"
          >
            <span class="text-[clamp(18px,1.6vw,24px)] font-(--display-grotesk)">Discover</span>
          </div>

          <!-- วงกลม 2 -->
          <div
            class="relative grid place-items-center rounded-full border border-(--secondary-darkbrown)/60 text-(--secondary-darkbrown)"
            :style="{ width: 'var(--s)', height: 'var(--s)', marginLeft: 'calc(var(--s) * var(--overlap) * -1)' }"
          >
            <span class="text-[clamp(18px,1.6vw,24px)] font-(--display-grotesk)">Design</span>
          </div>

          <!-- วงกลม 3 -->
          <div
            class="relative grid place-items-center rounded-full border border-(--secondary-darkbrown)/60 text-(--secondary-darkbrown)"
            :style="{ width: 'var(--s)', height: 'var(--s)', marginLeft: 'calc(var(--s) * var(--overlap) * -1)' }"
          >
            <span class="text-[clamp(18px,1.6vw,24px)] font-(--display-grotesk)">Develop</span>
          </div>

          <!-- วงกลม 4 -->
          <div
            class="relative grid place-items-center rounded-full border border-(--secondary-darkbrown)/60 text-(--secondary-darkbrown)"
            :style="{ width: 'var(--s)', height: 'var(--s)', marginLeft: 'calc(var(--s) * var(--overlap) * -1)' }"
          >
            <span class="text-center leading-snug text-[clamp(18px,1.6vw,24px)] font-(--display-grotesk)">
              Deploy<br/>&amp;<br/>Support
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
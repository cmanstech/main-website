<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  mediaType: { type: String, default: 'image' }, // 'image' | 'video' | 'canvas'
  src: { type: String, default: '' },            // path ของรูป/วิดีโอ
  darken: { type: Number, default: 0.35 },       // 0–1 เข้มเท่าไหร่ (ช่วยให้ตัวอักษรคอนทราสต์)
})

/* optional: effect เฉพาะกราฟิกแบบ generative เบา ๆ */
const canvasRef = ref(null)
let rafId
onMounted(() => {
  if (props.mediaType !== 'canvas') return
  const cvs = canvasRef.value
  const ctx = cvs.getContext('2d')
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  const fit = () => {
    cvs.width = cvs.clientWidth * dpr
    cvs.height = cvs.clientHeight * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  const pts = Array.from({ length: 90 }).map(() => ({
    x: Math.random() * (cvs.clientWidth || 1),
    y: Math.random() * (cvs.clientHeight || 1),
    a: Math.random() * Math.PI * 2,
    s: 0.6 + Math.random() * 0.9,
  }))
  fit()
  const onResize = () => fit()
  window.addEventListener('resize', onResize)

  const tick = () => {
    const w = cvs.clientWidth
    const h = cvs.clientHeight
    ctx.fillStyle = 'rgba(0,0,0,0.05)'
    ctx.fillRect(0, 0, w, h)
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'
    ctx.lineWidth = 1
    for (const p of pts) {
      const nx = p.x + Math.cos(p.a) * p.s * 2
      const ny = p.y + Math.sin(p.a) * p.s * 2
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke()
      p.x = (nx + w) % w
      p.y = (ny + h) % h
      p.a += (Math.sin(p.x * 0.01) + Math.cos(p.y * 0.008)) * 0.02
    }
    rafId = requestAnimationFrame(tick)
  }
  ctx.fillStyle = 'rgba(0,0,0,0.06)'
  ctx.fillRect(0, 0, cvs.clientWidth, cvs.clientHeight)
  tick()

  onUnmounted(() => {
    cancelAnimationFrame(rafId)
    window.removeEventListener('resize', onResize)
  })
})
</script>

<template>
  <section class="relative min-h-svh w-full overflow-hidden bg-black">
    <!-- media -->
    <div class="absolute inset-0">
      <img
        v-if="mediaType==='image'"
        :src="src"
        alt=""
        class="w-full h-full object-cover"
        loading="lazy"
      />

      <canvas v-else ref="canvasRef" class="w-full h-full"></canvas>

      <!-- darken overlay -->
      <div
        class="absolute inset-0 pointer-events-none"
        :style="{ background: `rgba(0,0,0,${darken})` }"
      />
      <!-- vignette -->
      <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_65%,rgba(0,0,0,0.55)_100%)]" />
    </div>

    <!-- content -->
    <div class="relative mx-[30px] max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-svh">
        <!-- text block (ซ้าย) -->
        <div class="lg:col-span-6 text-(--primary-eggwhite)">
          <p class="uppercase tracking-widest text-xs/5 opacity-80 mb-4 font-en" :style="{fontFamily:'var(--body-en)'}">
            <!-- small kicker -->
            <slot name="kicker">Why Us</slot>
          </p>
          <h2 class="font-en-display leading-[0.95] tracking-[-0.02em]"
              :style="{fontFamily:'var(--display-en)'}">
            <slot name="title">
              By focusing on companies transforming the digital landscape.
            </slot>
          </h2>
          <p class="mt-6 max-w-prose text-base/7 text-white/85 font-en" :style="{fontFamily:'var(--body-en)'}">
            <slot name="desc">
              We identify solutions that address contemporary challenges and generate sustainable returns.
            </slot>
          </p>

          <!-- CTA -->
          <div class="mt-8">
            <slot name="cta"></slot>
          </div>
        </div>

        <div class="">

        </div>

        <!-- spacer -->
        <div class="lg:col-span-6" />
      </div>
    </div>

    
  </section>
</template>

<style scoped>
  .font-en { font-family: var(--body-en); }
  .font-en-display { font-family: var(--display-en); font-size: clamp(2.6rem, 6vw, 4.6rem); }
</style>
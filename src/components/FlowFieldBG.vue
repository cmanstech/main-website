<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { createNoise2D } from 'simplex-noise'

const canvas = ref(null)
const divider = ref(null)

let ctx, raf = null
let DPR = 1

// ====== ศูนย์กลางอิงตำแหน่ง divider ======
let center = { x: 0, y: 0 }
const calcCenterFromDivider = () => {
  const d = divider.value?.getBoundingClientRect()
  const r = canvas.value?.getBoundingClientRect()
  if (!d || !r) return
  center.x = d.left + d.width / 2 - r.left
  center.y = d.top  + d.height / 2 - r.top
}

// ====== ตัวช่วย ======
const rand = (a = 0, b = 1) => Math.random() * (b - a) + a
const map  = (v, a, b, c2, d2) => ((v - a) * (d2 - c2)) / (b - a) + c2
const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)

// ====== พาเลตสีแบบไล่ตำแหน่ง ======
const r1 = rand(0, 255); const r2 = rand(0, 255)
const g1 = rand(0, 255); const g2 = rand(0, 255)
const b1 = rand(0, 255); const b2 = rand(0, 255)

// ====== Noise / Curl (ลูปสวย) ======
const noise2D  = createNoise2D()
const noise2D2 = createNoise2D()
const eps = 1e-3
const fbm = (x, y) => {
  const n1 = noise2D(x, y)
  const n2 = 0.5 * noise2D2(x * 2.03, y * 2.03)
  return (n1 + n2 * 0.7) / 1.7
}
const curl = (x, y, jitter = 0.03) => {
  const n1 = fbm(x, y + eps)
  const n2 = fbm(x, y - eps)
  const a = (n1 - n2) / (2 * eps)
  const n3 = fbm(x + eps, y)
  const n4 = fbm(x - eps, y)
  const b = (n3 - n4) / (2 * eps)
  let u =  a
  let v = -b
  const len = Math.hypot(u, v) || 1
  u = (u / len) + (Math.random() - 0.5) * jitter
  v = (v / len) + (Math.random() - 0.5) * jitter
  return { u, v }
}

// ====== พารามิเตอร์ที่ “ปรับตามความกว้าง” ======
const baseBg = 'rgba(247, 244, 235, 1)'
let trailFill = 'rgba(247, 244, 235, 0.05)'
let NUM = 350
let multBase = 0.0012
let mult = multBase
let speed = 1.1
let lineW = 0.8
let jitterAmt = 0.35
let maxRadius = 800
const warmupFrames = 180

// คุมด้วย breakpoint: ≤800px จะใช้ชุดค่าที่เบา/ถี่ขึ้น
let currentBP = 'sm'
const applyResponsiveParams = () => {
  const w = canvas.value.clientWidth
  const h = canvas.value.clientHeight
  const area = w * h
  const minSide = Math.min(w, h)

  if (w <= 800) {
    currentBP = 'sm'
    // เบาลง + ถี่ขึ้น + ลดความทึบ
    NUM = Math.round(area / 2200)
    NUM = Math.max(280, Math.min(NUM, 900))
    mult = multBase * (800 / Math.max(300, minSide)) * 1.2
    speed = 1.0
    lineW = 0.7
    jitterAmt = 0.45
    trailFill = 'rgba(247, 244, 235, 0.04)'
    maxRadius = Math.min(w, h) * 0.5
  } else {
    currentBP = 'lg'
    NUM = Math.round(area / 600)
    NUM = Math.max(350, Math.min(NUM, 1600))
    mult = multBase * (600 / Math.max(300, minSide))
    speed = 1.1
    lineW = 0.8
    jitterAmt = 0.35
    trailFill = 'rgba(247, 244, 235, 0.05)'
    maxRadius = Math.min(w, h) * 0.5
  }
}

// ====== Resize / DPR ======
  const resize = () => {
  const c = canvas.value
  const rect = c.getBoundingClientRect()
  DPR = Math.min(window.devicePixelRatio || 1, 2)
  c.width  = Math.max(1, Math.floor(rect.width  * DPR))
  c.height = Math.max(1, Math.floor(rect.height * DPR))
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
  calcCenterFromDivider()
  applyResponsiveParams()
}

// ====== Particles & spawn จาก trail แรก ======
  const particles = []
  const spawnPool = []
  let frameCount = 0
  let warming = true

  const spawnInCircle = () => {
  const t = 2 * Math.PI * Math.random()
  const r = Math.sqrt(Math.random()) * maxRadius
  return { x: center.x + Math.cos(t) * r, y: center.y + Math.sin(t) * r }
}

  const initParticles = () => {
  particles.length = 0
  spawnPool.length = 0
  frameCount = 0
  warming = true

  for (let i = 0; i < NUM; i++) {
    const p0 = spawnInCircle()
    particles.push({
      x: p0.x, y: p0.y,
      px: p0.x, py: p0.y,
      life: rand(200, 600),
      maxLife: rand(200, 600),
    })
  }
}

// ====== Draw loop ======
  const draw = () => {
  const c = canvas.value

  // เติมทับบาง ๆ เพื่อ trail (ลด banding บนจอเล็ก)
  ctx.fillStyle = trailFill
  ctx.fillRect(0, 0, c.clientWidth, c.clientHeight)

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i]

    const r = map(p.x, 0, c.clientWidth,  r1, r2)
    const g = map(p.y, 0, c.clientHeight, g1, g2)
    const b = map(p.x, 0, c.clientWidth,  b1, b2)
    const alpha = map(dist(center.x, center.y, p.x, p.y), 10, maxRadius, 0.12, 0.40)

    const { u, v } = curl(
      (p.x + (Math.random() - 0.5) * jitterAmt) * mult,
      (p.y + (Math.random() - 0.5) * jitterAmt) * mult,
      0.03
    )

    p.px = p.x
    p.py = p.y
    p.x += u * speed
    p.y += v * speed
    p.life--

    // wrap ขอบจอ
    if (p.x > c.clientWidth) p.x = 0
    if (p.x < 0) p.x = c.clientWidth
    if (p.y > c.clientHeight) p.y = 0
    if (p.y < 0) p.y = c.clientHeight

    const insideNow  = dist(center.x, center.y, p.x, p.y)  < maxRadius
    const insidePrev = dist(center.x, center.y, p.px, p.py) < maxRadius

    if (insideNow && insidePrev) {
      ctx.strokeStyle = `rgba(${r|0}, ${g|0}, ${b|0}, ${alpha})`
      ctx.lineWidth = lineW
      ctx.beginPath()
      ctx.moveTo(p.px, p.py)
      ctx.lineTo(p.x, p.y)
      ctx.stroke()

      if (warming && frameCount % 2 === 0) {
        spawnPool.push({ x: p.x, y: p.y })
      }
    }

    if (p.life <= 0 || (!insideNow && !insidePrev)) {
      const s = spawnPool.length
        ? spawnPool[(Math.random() * spawnPool.length) | 0]
        : spawnInCircle()
      p.x = s.x; p.y = s.y
      p.px = p.x; p.py = p.y
      p.life = rand(200, 600)
      p.maxLife = p.life
    }
  }

  frameCount++
  if (warming && frameCount > warmupFrames) {
    warming = false
    if (spawnPool.length > 20000) spawnPool.length = 20000
  }

  // มาสก์รัศมีให้ขอบนุ่ม
  // ctx.save()
  // ctx.globalCompositeOperation = 'destination-in'
  // const g = ctx.createRadialGradient(center.x, center.y, maxRadius * 0.6, center.x, center.y, maxRadius)
  // g.addColorStop(0, 'rgba(0,0,0,1)')
  // g.addColorStop(1, 'rgba(0,0,0,0)')
  // ctx.fillStyle = g
  // ctx.fillRect(0, 0, c.clientWidth, c.clientHeight)
  // ctx.restore()

  raf = requestAnimationFrame(draw)
}

// ====== Lifecycle ======
onMounted(() => {
  const c = canvas.value
  ctx = c.getContext('2d', { alpha: true })

  resize()
  // เผื่อฟอนต์/เลย์เอาต์เพิ่งวาดเสร็จ ให้คำนวณศูนย์กลางใหม่อีกครั้ง
  setTimeout(() => { calcCenterFromDivider(); applyResponsiveParams(); initParticles() }, 60)

  // พื้นหลังเริ่มต้น
  ctx.fillStyle = baseBg
  ctx.fillRect(0, 0, c.clientWidth, c.clientHeight)

  initParticles()
  window.addEventListener('resize', () => {
    const prevBP = currentBP
    resize()
    // ถ้าเปลี่ยน breakpoint (ข้าม 800px) ให้ re-init
    if (prevBP !== currentBP) initParticles()
  })

  raf = requestAnimationFrame(draw)
})

onUnmounted(() => {
  if (raf) cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <div class="relative h-svh w-full">
    <canvas ref="canvas" class="absolute inset-0 w-full h-full"></canvas>

    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-(--secondary-darkbrown)">
      <h2 class="text-4xl md:text-5xl font-(--display-en)">Code<br />meets<br />design.</h2>
      <!-- ใช้เส้นนี้เป็น anchor ศูนย์กลางจริง -->
      <div ref="divider" class="my-12 h-[200px] w-px bg-(--secondary-darkbrown)/60"></div>
      <h2 class="text-4xl md:text-5xl font-(--display-en)">System<br />meets<br />simplicity.</h2>
    </div>
  </div>
</template>

<style scoped>
canvas { display:block; }
</style>

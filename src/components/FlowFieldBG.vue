<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { createNoise2D } from 'simplex-noise'

const canvas = ref(null)

onMounted(() => {
  const c = canvas.value
  const ctx = c.getContext('2d', { alpha: true })
  const noise2D = createNoise2D()

  const DPR = Math.min(window.devicePixelRatio || 1, 2)
  const resize = () => {
    const { clientWidth: w, clientHeight: h } = c
    c.width = w * DPR
    c.height = h * DPR
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
  }
  const rand = (a = 1, b = 0) => Math.random() * (b - a) + a
  const map = (v, a, b, c2, d2) => ((v - a) * (d2 - c2)) / (b - a) + c2
  const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)

  resize()
  window.addEventListener('resize', resize)

  // ======= params =======
  const density = 30                    // ความหนาแน่นของจุด (ยิ่งมากยิ่งแน่น)
  const maxRadius = 500                 // รัศมีพื้นที่วาดวงกลม
  const mult = rand(0.001, 0.001)        // สเกล noise
  const baseBg = 'rgba(247, 244, 235, 1)'   // สีครีมอ่อนหลัก (#F7F4EB)
  const trail  = 'rgba(247, 244, 235, 0.08)' // เติมทับบางๆ ให้เกิด effect ละมุน
  // =======================

  // สุ่มพาเลตสี
  const r1 = rand(0, 255); const r2 = rand(0, 255)
  const g1 = rand(0, 255); const g2 = rand(0, 255)
  const b1 = rand(0, 255); const b2 = rand(0, 255)

  // สร้างจุดบนกริด + jitter
  const points = []
  const space = c.clientWidth / density
  for (let x = 0; x < c.clientWidth; x += space) {
    for (let y = 0; y < c.clientHeight; y += space) {
      points.push({
        x: x + rand(-10, 10),
        y: y + rand(-10, 10),
      })
    }
  }
  // สลับลำดับนิดหน่อยให้วาด random
  points.sort(() => Math.random() - 0.5)

  // พื้นหลังเริ่มต้น
  ctx.fillStyle = baseBg
  ctx.fillRect(0, 0, c.clientWidth, c.clientHeight)

  let raf
  const draw = () => {
    // เติมทับบาง ๆ ให้เกิด trail (ไม่ clear ทั้งหมด)
    ctx.fillStyle = trail
    ctx.fillRect(15, 15, c.clientWidth, c.clientHeight)

    // ค่อย ๆ เพิ่มจำนวนจุดที่อนุญาตให้ขยับ
    const max = Math.min(points.length, Math.floor(performance.now() / 20) * 46)

    for (let i = 0; i < max; i++) {
      const p = points[i]

      // สีแบบไล่ค่าตามตำแหน่ง
      const r = map(p.x, 0, c.clientWidth,  r1, r2)
      const g = map(p.y, 0, c.clientHeight, g1, g2)
      const b = map(p.x, 0, c.clientWidth,  b1, b2)
      const alpha = map(
        dist(c.clientWidth / 2, c.clientHeight / 2, p.x, p.y),
        10, maxRadius, 1, 20
      )

      // มุมตาม noise field
      const angle = map(
        noise2D(p.x * mult, p.y * mult), // [-1,1]
        -1, 1, 0, Math.PI * 2
      )

      // อัปเดตตำแหน่ง
      p.x += Math.cos(angle)
      p.y += Math.sin(angle)

      // วาดเฉพาะในรัศมี
      if (dist(c.clientWidth / 2, c.clientHeight / 2, p.x, p.y) < maxRadius) {
        ctx.fillStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 10)
        ctx.fill()
      }
    }

    raf = requestAnimationFrame(draw)
  }

  raf = requestAnimationFrame(draw)

  onUnmounted(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('resize', resize)
  })
})
</script>

<template>
  <div class="relative h-svh w-full">
    <canvas ref="canvas" class="absolute inset-0 w-full h-full"></canvas>

    <!-- เนื้อหา/ข้อความของ Pim -->
    <div class="relative z-10 flex flex-col items-center justify-center h-full text-center text-(--secondary-darkbrown)">
      <h2 class="text-4xl md:text-5xl font-(--display-en)">Code<br />meets<br />design.</h2>
      <div class="my-12 h-[200px] w-px bg-(--secondary-darkbrown)/60"></div>
      <h2 class="text-4xl md:text-5xl font-(--display-en)">System<br />meets<br />simplicity.</h2>
    </div>
  </div>
</template>

<style scoped>
canvas { display:block; }
</style>
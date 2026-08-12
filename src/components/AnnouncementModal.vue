<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  // รูปประกาศ ขนาด 1080x1080 px วางไว้ที่ public/img/announcement.jpg
  src: { type: String, default: 'public/img/rip-ctech.png' },
  alt: { type: String, default: 'ประกาศสำคัญ' },
})

const open = ref(false)

function close() {
  open.value = false
}

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  // เด้งทุกครั้งที่เข้าหน้าแรก
  open.value = true
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Transition name="am-fade">
    <div
      v-if="open"
      class="am-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="alt"
      @click.self="close"
    >
      <div class="am-panel">


        <!-- ปุ่มปิด -->
        <button class="am-close" type="button" aria-label="ปิด" @click="close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          </svg>
        </button>

        <!-- รูปประกาศ 1080x1080 -->
        <div class="am-image-wrap">
          <img :src="src" :alt="alt" class="am-image" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.am-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(6px);
}

.am-panel {
  position: relative;
  width: min(1080px, 92vw);
  max-height: 90vh;
  border-radius: 18px;
  overflow: hidden;
  background:
    radial-gradient(120% 120% at 50% 0%, #1a1a1a 0%, #050505 60%, #000 100%);
  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.6),
    inset 0 0 1px rgba(255, 255, 255, 0.08);
}

/* แสงโบเก้ — วงกลมเบลอลอยอยู่บนพื้นดำ */


@keyframes am-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50%      { transform: translateY(-14px) scale(1.08); }
}

.am-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 9999px;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.06);
  transition: background 0.2s, color 0.2s;
}
.am-close:hover {
  background: rgba(255, 255, 255, 0.16);
  color: #fff;
}

.am-image-wrap {
  position: relative;
  z-index: 1;
  padding: 22px;
}
.am-image {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1; /* รูป 1080x1080 */
  object-fit: cover;
  border-radius: 10px;
}

/* fade + scale ตอนเปิด/ปิด */
.am-fade-enter-active,
.am-fade-leave-active {
  transition: opacity 0.3s ease;
}
.am-fade-enter-from,
.am-fade-leave-to {
  opacity: 0;
}
.am-fade-enter-active .am-panel {
  animation: am-pop 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes am-pop {
  from { transform: translateY(16px) scale(0.96); opacity: 0; }
  to   { transform: translateY(0) scale(1); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .am-bokeh { animation: none; }
  .am-fade-enter-active .am-panel { animation: none; }
}
</style>

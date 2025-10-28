<template>
    <component
        :is="tag"
        :to="as=== 'router-link' ? to : undefined"
        :href="as==='a' ? href : undefined"
        class="group inline-flex items-center gap-2 select-none outline-none"
        :class="[sizeC, variantC, disabled ? 'opacity=50 pointer-events-none' : 'cursor-pointer']"
    >
        <slot />
    </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  as: { type: String, default: 'button' },      // 'button' | 'a' | 'router-link'
  href: { type: String, default: undefined },
  to:   { type: [String, Object], default: undefined },
  variant: { type: String, default: 'primary' },// 'primary' | 'ghost' | 'link'
  size:    { type: String, default: 'md' },     // 'sm' | 'md' | 'lg'
  disabled:{ type: Boolean, default: false },
})


const tag = computed(() => {
  if (props.as === 'router-link') return RouterLink
  if (props.as === 'a') return 'a'
  return 'button'
})


const sizeC = computed(() => ({
  sm:  'px-3 py-1.5 text-sm',
  md:  'px-4 py-2.5 text-sm',
  lg:  'px-5 py-3 text-base',
}[props.size]))

const variantC = computed(() => {
  switch (props.variant) {
    case 'ghost':
      return 'border border-neutral-300 text-neutral-100/90 rounded-full hover:bg-neutral-100/10 transition'
    case 'link':
      return 'text-inherit'
    default:
      return 'bg-white text-neutral-900 rounded-full hover:bg-neutral-100 transition'
  }
})
</script>
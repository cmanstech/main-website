<script setup>
    import { computed } from 'vue'
    import { RouterLink } from 'vue-router'

    const props = defineProps({
      label: { type: String, required: true },
      as: { type: String, default: 'button' },
      href: { type: String, default: '' },
      to:   { type: [String, Object], default: '' },

      // 👇 เพิ่มสองตัวนี้ (คือสาเหตุ error)
      size:  { type: String, default: 'md' },
      theme: { type: String, default: 'light-on-dark' } 
    })

    const tag = computed(() => {
      if (props.as === 'router-link') return RouterLink
      if (props.as === 'a') return 'a'
      return 'button'
    })

    const sizeC = computed(() => {
      const key = (props.size || 'md').trim().toLowerCase()
      const map = {
        sm: { pill: 'px-4 py-2 text-sm',  circle: 'w-10 h-10',  icon: 'w-4 h-4' },
        md: { pill: 'px-5 py-2.5 text-base', circle: 'w-12 h-12', icon: 'w-5 h-5' },
        lg: { pill: 'px-6 py-3 text-lg',  circle: 'w-14 h-14',  icon: 'w-6 h-6' },
      }
      return map[key] || map.md
    })


    const colorC = computed(() => {
      if (props.theme === 'dark-on-light') {
        return {
          base: 'text-(--secondary-darkbrown) border-(--secondary-darkbrown)',
          hoverPill: 'group-hover:bg-(--secondary-darkbrown) group-hover:text-(--primary-eggwhite)',
          hoverCircle: 'group-hover:bg-(--secondary-darkbrown) group-hover:text-(--primary-eggwhite)'
        }
      }
      // default: light text on dark bg
      return {
        base: 'text-(--primary-eggwhite) border-(--primary-eggwhite)',
        hoverPill: 'group-hover:bg-(--primary-eggwhite) group-hover:text-(--secondary-darkbrown)',
        hoverCircle: 'group-hover:bg-(--primary-eggwhite) group-hover:text-(--secondary-darkbrown)'
      }
    })
</script>

<template>
  <component
    :is="tag"
    :href="as === 'a' ? href : undefined"
    :to="as === 'router-link' ? to : undefined"
    class="group inline-flex items-center rounded-full transition duration-300 ease-out
           font-(--display-grotesk)"
    :class="[
      'border',
      sizeC.pill,      
      colorC.base,
      colorC.hoverPill
    ]"
  >
    {{ label }}


      <span
        class="ml-3 flex items-center justify-center rounded-full border transition duration-300 ease-out"
        :class="[sizeC.circle, colorC.base, colorC.hoverCircle]"
        aria-hidden="true"
      >

      </span>
                <svg :class="['transition-transform', sizeC.icon, 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5']" viewBox="0 0 24 24" fill="none">
          <path d="M7 17 L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 7 H17 V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>


    <slot />
  </component>
</template>

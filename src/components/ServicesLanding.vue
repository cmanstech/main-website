<script setup>
    import { ref } from 'vue'

    const items = ref([
        {
            title: 'Custom IT Solutions',
            desc: 'Tailored systems designed around your organization. We understand that every organization has unique needs. Thats why we build fully customized IT systems — from internal management tools and data analytics platforms to industry-specific solutions — all engineered to align perfectly with your workflow and objectives.'
        },
        {
            title: 'Plugins & Integrations',
            desc: 'Seamless connections for better performance. Enhance your existing systems with custom-built plugins and integrations such as Payment Gateway, Booking, or E-Commerce solutions. We ensure new and legacy systems work together smoothly, reducing complexity and increasing overall efficiency.'
        },
        {
            title: 'Scalable & Secure',
            desc: `Zero-downtime deployments, observability by default, least-privilege access, and encryption in transit/at rest.`,
        },
        {
            title: 'User-Friendly Interfaces',
            desc: `Type-first UI, motion that serves meaning, and accessibility that’s built-in — not bolted on.`,
        },
    ])

    
    const active = ref(0)
    const toggle = (i) => {
    active.value = active.value === i ? -1 : i
    }

    
    const enter = (el) => {
            el.style.height = '0px'
            el.style.opacity = '0'
        requestAnimationFrame(() => {
            el.style.transition = 'height 300ms ease, opacity 300ms ease'
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
        el.style.transition = 'height 250ms ease, opacity 250ms ease'
        el.style.height = '0px'
        el.style.opacity = '0'
        })
    }
</script>

<template>
  <section class="relative z-10 w-full min-h-svh bg-(--primary-eggwhite)">
    <div class="mx-[30px] max-w-none lg:mx-auto px-0 lg:px-4 py-34 lg:py-44">
      <!-- header grid -->
      <div class="grid grid-cols-12 gap-6">
            <!-- left label + divider -->
            <div class="col-span-11 lg:col-span-4 flex items-start gap-6">
                <span class="text-[40px] font-(--display-en) text-(--secondary-darkbrown)">Services</span>
                <span class="h-px flex-1 bg-(--secondary-darkbrown)/30 translate-y-[0.45em]"></span>
            </div>

            <!-- right big copy -->
            <div class="col-span-11 lg:col-span-8">
                <p
                    class="text-(--secondary-darkbrown) font-(--display-en) leading-tight text-[clamp(22px,3.1vw,32px)]/tight"
                >
                    We craft IT systems and plugins that flow effortlessly across platforms <br/>
                    enhancing every interaction and elevating how your business works.
                </p>
            </div>
      </div>

      <!-- spacer -->
      <div class="h-8 lg:h-20"></div>

      <!-- list -->
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-11 lg:col-span-4"></div>

            <div class="col-span-11 lg:col-span-7 divide-y divide-(--secondary-darkbrown)/30">
                    <div
                        v-for="(it, i) in items"
                        :key="i"
                        class="py-8"
                    >
                        <!-- row button -->
                        <button
                            type="button"
                            class="w-full flex items-start justify-between gap-4 text-left"
                            @click="toggle(i)"
                            :aria-expanded="active === i"
                        >
                            <h3 class="text-[clamp(18px,2vw,22px)] font-(--display-grotesk) text-(--secondary-darkbrown)">
                                {{ it.title }}
                            </h3>

                            <!-- round icon -->
                            <span
                                class="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border border-(--secondary-darkbrown)/50 text-(--secondary-darkbrown)"
                            >
                               
                                <svg
                                    v-if="active === i"
                                    viewBox="0 0 24 24"
                                    class="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <!-- NE arrow -->
                                    <path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <svg
                                v-else
                                    viewBox="0 0 24 24"
                                    class="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <!-- down arrow -->
                                    <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </button>

                        <!-- detail -->
                        <Transition @enter="enter" @after-enter="afterEnter" @leave="leave">
                        <div
                            v-show="active === i"
                            class="overflow-hidden"
                        >
                            <div class="pt-4 pr-10 text-[15px] leading-6 text-(--secondary-darkbrown)/80">
                            <p class="max-w-[75ch] whitespace-pre-line">
                                {{ it.desc }}
                            </p>
                            </div>
                        </div>
                        </Transition>
                    </div>
            </div>
      </div>
    </div>
  </section>
</template>
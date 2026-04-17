<script setup>
    import { ref } from 'vue'
    import imgCustom from '/public/img/services-custom.jpg'
    import imgPlugins from '/public/img/services-plugins.jpg'
    import imgScalable from '/public/img/services-scalable.jpg'
    import imgUi from '/public/img/services-ui.jpg'

    const items = ref([
    {
        title: 'Custom IT Solutions',
        desc: 'Tailored systems designed around your organization. We understand that every organization has unique needs. That’s why we build fully customized IT systems — from internal management tools and data analytics platforms to industry-specific solutions — all engineered to align perfectly with your workflow and objectives.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet orci ac elit ultrices sagittis. Sed mattis leo metus, vel tincidunt mauris dapibus sed. Morbi lobortis tortor eleifend tortor aliquam sodales. Nunc aliquet volutpat dui eu vulputate. Donec eu bibendum nisl, eu feugiat enim. Vivamus finibus orci sapien.',
        img: imgCustom
    },
    {
        title: 'Plugins & Integrations',
        desc: 'Seamless connections for better performance. Enhance your existing systems with custom-built plugins and integrations such as Payment Gateway, Booking, or E-Commerce solutions. We ensure new and legacy systems work together smoothly, reducing complexity and increasing overall efficiency.',
        body: 'More detailed copy about plugins & integrations can go here. Explain how we connect legacy systems, gateways, CRMs, and analytics so everything feels like one product.',
        img: imgPlugins
    },
    {
        title: 'Scalable & Secure',
        desc: 'Engineered for growth and fortified for safety. We design architectures that scale without limits while ensuring encryption, reliability, and zero-downtime protection across every layer of your system.',
        body: 'Talk about infra, monitoring, alerting, rollbacks, and security posture here. This is the long-form description that shows up when this item is active.',
        img: imgScalable
    },
    {
        title: 'User-Friendly Interfaces',
        desc: 'Interfaces designed for clarity and ease. We craft layouts that feel intuitive from the first interaction, reducing friction and making complex systems simple to use for everyone.',
        body: 'Explain design systems, UX patterns, accessibility, and how we keep interfaces clear even when the system is complex underneath.',
        img: imgUi
    },
    ])

        const active = ref(0)
        const toggle = (i) => {
        active.value = active.value === i ? -1 : i
        }

        // transition helpers
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
                    Services
                </span>
                <!-- <span class="h-px flex-1 bg-(--secondary-darkbrown)/30 translate-y-[0.45em]"></span> -->
                </div>

                <p
                class="text-(--secondary-darkbrown) font-(--display-en)
                        leading-tight text-[clamp(22px,3.1vw,32px)]/tight"
                >
                We craft IT systems and plugins that flow effortlessly across platforms —
                enhancing every interaction and elevating how your business works.
                </p>
            </div>

            <!-- RIGHT: list services + รูป -->
            <div class="col-span-12 lg:col-span-8 divide-y divide-(--secondary-darkbrown)/30">
                <div
                v-for="(it, i) in items"
                :key="i"
                class="py-10"
                >
                <!-- หัวเรื่อง + ปุ่ม -->
                <button
                    type="button"
                    class="w-full flex items-start justify-between gap-4 text-left"
                    @click="toggle(i)"
                    :aria-expanded="active === i"
                >
                    <h3 class="text-[clamp(18px,2vw,22px)] font-(--display-grotesk) text-(--secondary-darkbrown)">
                    {{ it.title }}
                    </h3>

                    <span
                    class="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border
                            border-(--secondary-darkbrown)/50 text-(--secondary-darkbrown)"
                    >
                    <svg
                        v-if="active === i"
                        viewBox="0 0 24 24"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M7 17L17 7M7 7h10v10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg
                        v-else
                        viewBox="0 0 24 24"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </span>
                </button>

                <!-- เนื้อหา + รูป -->
                <Transition @enter="enter" @after-enter="afterEnter" @leave="leave">
                    <div v-show="active === i" class="overflow-hidden">
                    <div class="pt-4 text-[15px] leading-6 text-(--secondary-darkbrown)/80">
                        <p class="max-w-[75ch] mb-6 whitespace-pre-line">
                        {{ it.desc }}
                        </p>

                        <!-- รูป -->
                        <div class="w-full aspect-[3/1.2] bg-neutral-300 mb-6 overflow-hidden">

                        <img
                            v-if="it.img"
                            :src="it.img"
                            :alt="it.title"
                            class="w-full h-full object-cover"
                        />
                        </div>

                        <p class="text-[14px] leading-6 text-(--secondary-darkbrown)/80">
                        {{ it.detail }}
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
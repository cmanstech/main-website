<script setup>
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        label: {
            type: String,
            required: true,
        },
        as: {
            type: String,
            default: 'button'
        },
        href: {
            type: String,
            default: ''
        },
        to: {
            type: [
                String,
                Object
            ],
            default: ''
        },
        size: {
            type: String,
            default: 'lg'
        },
        theme: {
            type: String,
            default: 'light-on-dark'
        }
    })

    const tag = computed(() => {
        if (props.as === 'a') return 'a'
        if (props.as === 'router-link') return RouterLink
        return 'button'
    })

    const sizeC = computed(() => {
        switch (props.size) {
            case 'sm': return {
                // pill: 'px-4 py-2 text-sm rounded-full',
                circle: 'w-10 h-10 rounded-full',
                icon: 'w-4 h-4'
            }
            case 'md': return {
                // pill: 'px-5 py-2.5 text-base rounded-full',
                circle: 'w-12 h-12 rounded-full',
                icon: 'w-5 h-5'
            }
            default:
                return {
                    // pill: 'px-6 py-3 text-lg rounded-full',
                    circle: 'w-14 h-14 rounded-full',
                    icon: 'w-6 h-6'
                }
        }
    })

    const colorC = computed(() => {
        if (props.theme === 'dark-on-light') {
            return {
                base: 'text-(--primary-eggwhite) border-(--primary-eggwhite)',
                // hoverPill: 'group-hover:bg-(--primary-eggwhite) group-hover:text-(--secondary-darkbrown)',
                hoverCircle: 'group-hover:bg-(--primary-eggwhite) group-hover:text-(--secondary-darkbrown)'
            }
        }
        return {
            base: 'text-(--primary-eggwhite) border-(--primary-eggwhite)',
            // hoverPill: 'group-hover:bg-(--primary-eggwhite) group-hover:text-(--secondary-darkbrown)',
            hoverCircle: 'group-hover:bg-(--primary-eggwhite) group-hover:text-(--secondary-darkbrown)',
        }
    })



</script>



<template>
    <component
        :is="tag"
        :href="as === 'a' ? href : undefined"
        :to="as === 'router-link' ? to : undefined"
        class="inline-flex items-center group select-none focus:outline-none"
    >
        <!-- round button for arrow -->

        <span
            :class="[
                'ml-5 border flex items-center justify-center transition-colors duration-300 ease-out',
                sizeC.circle,
                colorC.base,
                colorC.hoverCircle
            ]"
            aria-hidden="true"
        >

            <svg
                :class="['transition-transform duration-300 ease-out', sizeC.icon, 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5']"
            >
                <path d="M7 17 L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 7 H17 V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </component>
</template>

<!-- <style scoped>
    span.ml-3 { margin-left: -0.75rem; }

</style> -->
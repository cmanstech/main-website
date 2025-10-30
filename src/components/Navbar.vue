<script setup>
    import { onMounted, onUnmounted, ref } from "vue";
    import { RouterLink, useRouter } from "vue-router";

    const isOpen = ref(false);
    const isScrolled = ref(false);

    const toggle = () => (isOpen.value = !isOpen.value);
    const close = () => (isOpen.value = false);

    const onScroll = () => {
        isScrolled.value = window.scrollY > 50;
    }

    onMounted(() => {
        window.addEventListener("scroll", onScroll, { passive: true })
    })
    onUnmounted(() => {
        window.removeEventListener("scroll", onScroll)
    }) 

    const router = useRouter();
    useRouter().afterEach(() => close());

    // export default {
    //     data() {
    //         return {
    //             scrolledPastTreshold: false,
    //         };
    //     },
    //     methods: {
    //         handleScrolled(event) {
    //             const scrollPosition = event.target.scrollTop;
    //             const treshold = 100;
    //             this.scrolledPastTreshold = scrollPosition > treshold;
    //         },
    //     },
    // }
</script>



<template>
    <header
    :class="[
        'fixed inset-x-0 top-0 left-0 w-full bg-transparent text-white z-50 transition-all duration-500 ease-in-out mix-blend-difference',
        isScrolled
            ? 'bg-transparent'
            : 'backdrop-blur-0'
            // ? ''
            // : ''
    ]"
    >
    <nav class="hidden md:grid max-w-none mx-[30px] grid-cols-[1fr_auto_1fr] items-center justify-between py-2.5"
    >

    <!-- left menu -->
    <ul class="whitespace-nowrap flex items-center justify-start gap-16">
        <li>
            <RouterLink to="/" class="nav-link">
                Home
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/about" class="nav-link">
                About Us
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/services" class="nav-link">
                Services
            </RouterLink>
        </li>
    </ul>

    <!-- logo -->
    <RouterLink to="/" class="flex items-center justify-center">
        <img
        src="@/assets/svg/cmans-tech-Hori-white.svg"
        alt="CTechLogo"
        class="block h-8 w-[220px]"
        />
    </RouterLink>

    <!-- right menu -->
     <ul class="whitespace-nowrap flex items-center justify-end gap-16">
        <li>
            <RouterLink to="/projects" class="nav-link">
                Projects
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/contact" class="nav-link">
                Contact Us
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/Blog" class="nav-link">
                Blog
            </RouterLink>
        </li>
     </ul>

     <!-- mobile -->

     <button
        class="p-2 outline-none"
        @click="toggle"
        :aria-expanded="isOpen ? 'true' : 'false' "
        aria-label="Toggle-menu"
     >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
     </button>
    </nav>

        <transition name="fadeslide">
            <div
                v-if="isOpen"
                class="md:hidden mx-[-30px] mt-2 rounded-2xl bg-black-70 text-(--primary-eggwhite) backdrop-blur p-4 border border-(--primary-eggwhite)/10"
            >
                <ul class="space-y-2">
                    <li><RouterLink class="nav-link block py-2" to="/" @click="close">Home</RouterLink></li>
                    <li><RouterLink class="nav-link block py-2" to="/" @click="close">About Us</RouterLink></li>
                    <li><RouterLink class="nav-link block py-2" to="/" @click="close">Services</RouterLink></li>
                    <li><RouterLink class="nav-link block py-2" to="/" @click="close">Projects</RouterLink></li>
                    <li><RouterLink class="nav-link block py-2" to="/" @click="close">Contact Us</RouterLink></li>
                    <li><RouterLink class="nav-link block py-2" to="/" @click="close">Blog</RouterLink></li>
                </ul>
            </div>
        </transition>
    </header>
</template>

<style scoped>
    .nav-link {
        font-family: var(--display-en);
        font-size: 14pt;
        color: inherit;
        transition: opacity 0.2s ease;
    }
    
    .nav-link:hover {
        opacity: 0.7;
    }

    .scroll-container {
        height: 1000px;
        overflow-y: scroll;
    }

    .inverted-text {
        color: white;
        background-color: black;
    }

    .fade-slide-enter-active, .fade-slide-leave-active { transition: all .22 ease; }
    .fade-slide-enter-from { opacity: 0; transform: translateY(-6px); }
    .fade-slide-leave-to { opacity: 0; transform: translateY(-6px); }
    </style>


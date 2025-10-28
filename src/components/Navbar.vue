<script>
    // import { ref, onMounted, onUnmounted } from "vue";
    import { RouterLink } from "vue-router";

    // const isScrolled = ref(false);

    // const handScroll = () => {
    //     isScrolled.value = window.scrollY > 50;
    // };
    // onMounted(() => {
    //     window.addEventListener("scroll", handScroll);
    // });
    // onUnmounted(() => {
    //     window.removeEventListener("scroll", handScroll);
    // });

    export default {
        data() {
            return {
                scrolledPastTreshold: false,
            };
        },
        methods: {
            handleScrolled(event) {
                const scrollPosition = event.target.scrollTop;
                const treshold = 100;
                this.scrolledPastTreshold = scrollPosition > treshold;
            },
        },
    }
</script>



<template>
    <header
    :class="[
        'fixed top-0 left-0 w-full bg-transparent text-(--eggwhite) z-50 transition-all duration-500 ease-in-out mix-blend-multiply',
        isScrolled
            ? 'bg-transparent'
            : 'backdrop-blur-0'
    ]"
    >
    <nav class="max-w-none mx-[30px] grid grid-cols-[1fr_auto_1fr] items-center justify-between py-2.5 "
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
        src="/src/assets/cmans-tech-Hori.svg"
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
    </nav>
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
    </style>


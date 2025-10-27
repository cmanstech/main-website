<script>
    import { ref, onMounted, onUnmounted } from "vue";
    import { RouterLink } from "vue-router";

    const isScrolled = ref(false);

    const handScroll = () => {
        isScrolled.value = window.scrollY > 50;
    };
    onMounted(() => {
        window.addEventListener("scroll", handScroll);
    });
    onUnmounted(() => {
        window.removeEventListener("scroll", handScroll);
    });
</script>



<template>
    <header
    :class="[
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
            ? 'bg-white/80 backdrop-blur-md text-black shadow-sm'
            : 'bg-transparent text-black'
    ]"
    >
    <nav class="max-w-6xl mx-auto flex items-center justify-between py-4 px-5 font-(--body-en) text-sm tracking-wide"
    >

    <!-- left menu -->
    <ul class="flex items-center gap-64">
        <li>
            <RouterLink to="/app" class="whitespace-nowrap hover:text-primary-500 transition">
                Home
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/about" class="whitespace-nowrap hover:text-primary-500 transition">
                About Us
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/services" class="whitespace-nowrap hover:text-primary-500 transition">
                Services
            </RouterLink>
        </li>
    </ul>

    <!-- logo -->
    <RouterLink to="/" class="flex items-center justify-center">
        <img
        src="/cmans-tech-Hori.svg"
        alt="CTechLogo"
        class="h-6 w-auto transition-all duration-200"
        :class="['mix-blend-difference']"
        />
    </RouterLink>

    <!-- right menu -->
     <ul class="flex items-center gap-64">
        <li>
            <RouterLink to="/projects" class="whitespace-nowrap hover:text-primary-500 transition">
                Projects
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/contact" class="whitespace-nowrap hover:text-primary-500 transition">
                Contact Us
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/Blog" class="whitespace-nowrap hover:text-primary-500 transition">
                Blog
            </RouterLink>
        </li>
     </ul>
    </nav>
    </header>

    
</template>


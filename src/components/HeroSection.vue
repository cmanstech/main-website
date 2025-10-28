<template>
    <section class="relative h-svh min-h-[560px] w-full overflow-hidden">
        <video
            class="absolute inset-0 h-full w-full object-cover object-center"
            autoplay
            muted
            loop
            playsinline
        >
            <source src="/src/assets/HeroSection-vid.mp4" type="video/mp4" />
        </video>

        <!-- overlay -->
         <div class="absolute inset-0 bg-black-20">
         </div>

        <div class="relative z-10 h-full max-w-440 mx-auto px-6 py-80 flex flex-col justify-center">
            <h1
            class="
                leading-[0.95]
                tracking-tight
                text-[clamp(40px,8vw,120px)]
                font-display-en
                text-(--primary-eggwhite)"
            >
            Beyond Code. <br class="hidden md:block" /> Beyond Limits.
            </h1>
        </div>
    </section>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style scoped>
    @media (prefers-reduced-motion: reduce){
        video {
            display: none;
        }
    }
</style>
<script setup>
    import { RouterLink } from 'vue-router';
    import HeroSection from '@/components/HeroSection.vue';
    import aboutVideo from '@/assets/AboutUs-vid.mp4'
</script>

<template>
    <HeroSection
        :video="aboutVideo"
        :heading="['The people, principles, and craft behind everything we build.']"
        subtext="What defines us."
    /> 


    
</template>

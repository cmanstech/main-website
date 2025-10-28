<script setup>
    import HeroSection from '@/components/HeroSection.vue'
    import SectionSplit from '@/components/SectionSplit.vue';
    import FeaturedProjects from '@/components/FeaturedProjects.vue';
    import ClientsSection from '@/components/ClientsSection.vue';
    import Footer from '@/components/footer.vue';
</script>

<template>
<HeroSection />
    <SectionSplit mediaType="image" src="/media/field-robot.jpg" :darken="0.35">
      <template #kicker>Technology</template>
      <template #title>
        We invest design & engineering where reliability meets emotion.
      </template>
      <template #desc>
        Zero-downtime infra, type-first UI, and craft that scales — so products feel effortless at any load.
      </template>
      <template #cta>
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-sm text-white hover:bg-white hover:text-(--secondary-darkbrown) transition"
        >
          See work
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </RouterLink>
      </template>
    </SectionSplit>  
  <FeaturedProjects />
  <ClientsSection />
  <Footer />  
</template>
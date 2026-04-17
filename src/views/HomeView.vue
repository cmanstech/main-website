<script setup>
    import HeroSection from '@/components/HeroSection.vue'
    import ServicesLanding from '@/components/ServicesLanding.vue'
    import FlowFieldBG from '@/components/FlowFieldBG.vue'
    import ProcessLanding from '@/components/ProcessLanding.vue'

    // import mock1 from '@/assets/mockups-1.jpg'
    // import mock2 from '@/assets/mockups-2.jpg'
    // import mock3 from '@/assets/mockups-3.jpg'
    // import mock4 from '@/assets/mockups-4.jpg'
    import SectionSplit from '@/components/SectionSplit.vue'
    import Mockups1 from '/img/mockups-1.jpg'


</script>


<template>
  <HeroSection />
  <ServicesLanding/>
  <FlowFieldBG />
  <ProcessLanding />
    <SectionSplit
      :src="Mockups1"
      kicker="WHY US"
      title="Built with logic. Refined with design. Sustained by continuity."
      desc="Zero-downtime infra, type-first UI, and craft that scales — so products feel effortless at any load."
      :darken="0.35"
    >
      <template #cta>
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-sm text-white hover:bg-white hover:text-(--secondary-darkbrown) transition"
        >
          See work
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </RouterLink>
      </template>
    </SectionSplit>
</template>


<!-- ex-routerlink -->

<!-- <RouterLink
            to="/projects"
            class="inline-flex items-center gap-4 rounded-full border border-white/70 px-4 py-2 text-md text-(--eggwhite) hover:bg-white hover:text-(--secondary-darkbrown) transition"
          >
            See work
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
</RouterLink> -->
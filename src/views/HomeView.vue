<script setup>
    import HeroSection from '@/components/HeroSection.vue'
    import ServicesLanding from '@/components/ServicesLanding.vue'
    import FlowFieldBG from '@/components/FlowFieldBG.vue'
    import ProcessLanding from '@/components/ProcessLanding.vue'
    import SectionSplit from '@/components/SectionSplit.vue'
    import Mockups1 from '/img/mockups-1.jpg'
    import NewProject from '@/components/NewProject.vue'
    import ServicesServices from '@/components/ServicesServices.vue'
    import AnnouncementModal from '@/components/AnnouncementModal.vue'
    import { useI18n } from 'vue-i18n'

    const { t } = useI18n()
</script>

<template>
  <AnnouncementModal />
  <HeroSection />
  <ServicesServices/>
  <NewProject />
  <FlowFieldBG />
  <ProcessLanding />
  <SectionSplit
    :src="Mockups1"
    :kicker="t('whyUs.kicker')"
    :title="t('whyUs.title')"
    :desc="t('whyUs.desc')"
    :darken="0.35"
  >
    <template #cta>
      <RouterLink
        to="/projects"
        class="inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-sm text-white hover:bg-white hover:text-(--secondary-darkbrown) transition"
      >
        {{ t('whyUs.cta') }}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </RouterLink>
    </template>
  </SectionSplit>
</template>

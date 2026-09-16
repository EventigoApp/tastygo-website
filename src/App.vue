<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PricingSection from './components/PricingSection.vue'
import AudienceSection from './components/AudienceSection.vue'
import ContactCta from './components/ContactCta.vue'
import SiteFooter from './components/SiteFooter.vue'
import DemoModal from './components/DemoModal.vue'
import { useDemoModal } from './composables/useDemoModal'
import { tiers } from './data/pricing'

const demoModal = useDemoModal(tiers.length)
</script>

<template>
  <NavBar />
  <div class="page-container">
    <HeroSection />
    <StatsSection />
    <FeaturesSection />
    <PricingSection @open-demo="demoModal.open" />
    <AudienceSection />
    <ContactCta />
    <SiteFooter />
  </div>
  <DemoModal
    :is-open="demoModal.state.isOpen"
    :active-index="demoModal.state.activeIndex"
    @close="demoModal.close"
    @step="demoModal.step"
  />
</template>

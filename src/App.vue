<script setup>
import { watchEffect } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import FreeSection from './components/FreeSection.vue'
import ProSection from './components/ProSection.vue'
import PlansSection from './components/PlansSection.vue'
import AudienceSection from './components/AudienceSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useCopy, lang } from './i18n'

watchEffect(() => {
  document.title = useCopy().meta.title
  document.documentElement.lang = lang.current
})
</script>

<template>
  <NavBar />
  <main class="page-container">
    <HeroSection />
    <HowItWorks />
    <FreeSection />
    <ProSection />
    <PlansSection />
    <AudienceSection />
    <FaqSection />
    <ContactSection />
  </main>
  <div class="page-container"><SiteFooter /></div>
</template>

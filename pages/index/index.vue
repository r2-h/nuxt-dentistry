<script setup lang="ts">
import FifthSection from "./_components/fifth-section/FifthSection.vue"
import FirstSection from "./_components/first-section/FirstSection.vue"
import FourthSection from "./_components/fourth-section/FourthSection.vue"
import SecondSection from "./_components/second-section/SecondSection.vue"
import ThirdSection from "./_components/third-section/ThirdSection.vue"
import SectionSix from "./_components/section-six/SectionSix.vue"
import SectionSeven from "./_components/section-seven/SectionSeven.vue"
</script>

<template>
  <FirstSection />
  <SecondSection />
  <ThirdSection
    class="mx-auto mt-[6.1rem] w-full max-w-[71.2rem] lg:mt-[7.1rem]"
  />
  <FourthSection />
  <FifthSection />
  <SectionSix />
  <SectionSeven />
</template>

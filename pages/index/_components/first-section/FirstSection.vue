<script setup lang="ts">
import FirstSide from "./first-side/FirstSide.vue"
import SecondSide from "./second-side/SecondSide.vue"
</script>

<template>
  <section
    class="relative flex h-full w-full flex-col items-center justify-between lg:mt-[3.75rem] xl:flex-row"
  >
    <FirstSide />
    <SecondSide />
  </section>
</template>

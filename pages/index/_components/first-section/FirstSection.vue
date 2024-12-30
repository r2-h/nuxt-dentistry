<script setup lang="ts">
import FirstSide from "./first-side/FirstSide.vue"
import SecondSide from "./second-side/SecondSide.vue"
</script>

<template>
  <section
    class="relative lg:mt-[3.75rem] flex h-full w-full flex-col items-center justify-between xl:flex-row"
  >
    <FirstSide />
    <SecondSide />
  </section>
</template>

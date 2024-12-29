<script setup lang="ts">
import OuterOrbit from "./OuterOrbit.vue"
import InnerOrbit from "./InnerOrbit.vue"
</script>

<template>
  <div
    class="relative flex h-full items-center justify-center xl:-top-4 xl:-mr-9 xl:mb-0"
  >
    <img
      src="/img/main-picture.png"
      alt="doctor"
      class="z-10 mr-28 mt-12 h-[26rem] object-cover xl:-mb-[5.5rem] xl:h-[32rem]"
    />
    <OuterOrbit />
    <InnerOrbit />
  </div>
</template>

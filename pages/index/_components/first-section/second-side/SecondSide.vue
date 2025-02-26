<script setup lang="ts">
import OuterOrbit from "./OuterOrbit.vue"
import InnerOrbit from "./InnerOrbit.vue"
</script>

<template>
  <div
    class="relative flex h-full items-center justify-center xl:-top-4 xl:-mr-9 xl:mb-0"
  >
    <div class="relative z-10 xl:z-0">
      <img
        src="/img/main-picture.png"
        alt="doctor"
        class="z-10 mr-20 mt-12 h-[23rem] object-cover"
      />
      <div
        class="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"
      />
    </div>
    <OuterOrbit />
    <InnerOrbit />
  </div>
</template>

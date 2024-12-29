<script setup lang="ts">
import ArrowRight from "~/components/icons/ArrowRight.vue"

defineProps<{
  icon: any
  title: string
  description: string
}>()
</script>

<template>
  <div
    class="pb-6.5 flex h-full w-full max-w-[24.1rem] flex-col items-center justify-between rounded-lg bg-white px-9 pt-4.5 text-center"
  >
    <div
      class="mb-4.5 grid aspect-square size-[4.37rem] place-content-center rounded-full bg-blue-sky"
    >
      <component :is="icon" />
    </div>

    <h4 class="text-h4 text-blue-dark">{{ title }}</h4>
    <p class="text-b1 text-gray-body">
      {{ description }}
    </p>
    <NuxtLink to="/services" class="flex items-center gap-x-2.5 text-center">
      <span class="text-b1 text-blue-dark underline">Learn More </span>
      <ArrowRight />
    </NuxtLink>
  </div>
</template>

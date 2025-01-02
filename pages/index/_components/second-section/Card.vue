<script setup lang="ts">
import ArrowInCircle from "~/components/icons/ArrowInCircle.vue"

const { description, icon, title } = defineProps<any>() // TODO: fix type
</script>

<template>
  <div
    class="flex h-full w-full max-w-[25rem] flex-col items-center justify-between rounded-lg bg-white px-9 pb-6.5 pt-4.5 text-center lg:max-w-[24.1rem]"
  >
    <div
      class="mx-auto mb-4.5 grid aspect-square size-[4.37rem] place-content-center rounded-full bg-blue-sky"
    >
      <component :is="icon" />
    </div>

    <h4 class="mb-3.5 text-center text-h4 text-blue-dark">{{ title }}</h4>
    <p class="mb-3.5 line-clamp-4 text-b1 text-gray-body">
      {{ description }}
    </p>
    <NuxtLink
      to="/services"
      class="mx-auto flex w-fit items-end gap-x-2.5 text-center"
    >
      <span class="text-b1 text-blue-dark underline">Learn More </span>
      <ArrowInCircle />
    </NuxtLink>
  </div>
</template>

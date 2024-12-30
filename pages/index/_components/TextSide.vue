<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="w-full max-w-[34rem]">
    <h2 class="mb-4.5 text-h2 capitalize">
      {{ props.title }}
    </h2>
    <p class="mb-10 text-b1 text-gray-body">
      {{ props.description }}
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
const user = defineProps<{
  firstname?: string
  lastname?: string
  icon?: string
  isActiveUser?: boolean
}>()
</script>

<template>
  <div class="relative">
    <img :src="user.icon" alt="user icon" class="rounded-full bg-gray-200" />
    <div
      v-if="isActiveUser"
      class="absolute right-1.5 top-0 z-10 size-2.5 rounded-full border border-white bg-green-success"
    />
  </div>
</template>

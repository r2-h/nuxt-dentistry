<script setup lang="ts">
import Avatar from "~/components/Avatar.vue"
import Star from "~/components/icons/Star.vue"

defineProps<{
  name: string
  comment: string
  avatar: string
}>()

const stars = Array(5).fill(null)
</script>

<template>
  <div class="w-full rounded-lg2 px-7.5 pb-7.5 pt-6 shadow-xl">
    <div class="mb-4 flex items-center gap-2.5">
      <Avatar :icon="avatar" class="size-[4.3rem]" />
      <div class="space-y-1">
        <h4 class="text-h4 text-blue-dark">{{ name }}</h4>
        <div class="flex items-center">
          <Star v-for="star in stars" :key="star" />
        </div>
      </div>
    </div>
    <p class="text-b2 text-gray-body">{{ comment }}</p>
  </div>
</template>

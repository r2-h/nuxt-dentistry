<script setup lang="ts">
const user = {
  firstname: "John",
  lastname: "Doe",
  icon: "/img/ava.png",
}
const isActiveUser = true
</script>

<template>
  <div class="relative size-[3.43rem]">
    <img :src="user.icon" alt="user icon" class="rounded-full bg-gray-200" />
    <div
      v-if="isActiveUser"
      class="absolute bg-green-success size-2.5 top-0 right-1.5 rounded-full z-10 border border-white"
    />
  </div>
</template>

<script setup lang="ts">
const { imageSrc } = defineProps<{ imageSrc: string }>()
</script>

<template>
  <div class="image-wrapper relative lg:mr-[1.8rem] lg:mt-[1.8rem]">
    <img :src="imageSrc" alt="photo" class="object-cover" />
    <div
      class="image-wrapper absolute bottom-[1.8rem] left-[1.8rem] -z-10 hidden lg:block"
    />
  </div>
</template>

<style lang="css" scoped>
.image-wrapper {
  max-height: 22.6rem;
  height: 100%;
  width: 100%;
  max-width: 25.8rem;
  border-radius: 0.625rem;
  background: linear-gradient(45deg, white, theme("colors.blue.sky"));
}
</style>

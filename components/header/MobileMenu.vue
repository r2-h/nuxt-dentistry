<script setup lang="ts">
defineProps<{
  isActive?: boolean
}>()
</script>

<template>
  <label
    class="relative cursor-pointer md:hidden"
    for="mobile-menu"
    role="button"
  >
    <slot name="trigger" />

    <div
      :class="[
        'fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm',
        isActive && 'block',
      ]"
    >
      &nbsp;
    </div>
    <div
      :class="[
        'fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500',
        isActive && 'translate-x-0',
      ]"
    >
      <div class="float-right w-[85%] bg-white h-full shadow-2xl">
        <slot name="content" :onCloseMobileMenu="$emit('onCloseMobileMenu')" />
      </div>
    </div>
  </label>
</template>

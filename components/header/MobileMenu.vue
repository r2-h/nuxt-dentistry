<script setup lang="ts">
defineProps<{
  isActive?: boolean
}>()
</script>

<template>
  <label
    class="relative cursor-pointer lg:hidden"
    for="mobile-menu"
    role="button"
  >
    <input class="peer hidden" type="checkbox" id="mobile-menu" />
    <slot name="trigger" />
    <div
      :class="
        cn(
          'fixed inset-0 z-10 hidden h-full w-full bg-black/50 backdrop-blur-xs',
          isActive && 'block'
        )
      "
    >
      &nbsp;
    </div>
    <div
      :class="
        cn(
          'fixed top-0 right-0 z-20 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500',
          isActive && 'translate-x-0'
        )
      "
    >
      <div class="float-right w-[85%] bg-white h-full shadow-2xl">
        <slot name="content" />
      </div>
    </div>
  </label>
</template>

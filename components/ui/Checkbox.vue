<script setup lang="ts">
defineProps<{
  value?: string
  checked?: boolean
  label?: string
  disabled?: boolean
}>()
</script>

<template>
  <label
    class="inline-flex items-center cursor-pointer gap-1.5 select-none mt-7"
  >
    <div class="flex items-center relative">
      <input
        defaultChecked
        type="checkbox"
        class="peer size-3.5 cursor-pointer transition-all appearance-none rounded-none bg-slate-100 shadow hover:shadow-md border border-black checked:bg-slate-800 checked:border-slate-800"
      />
      <span
        class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <IconsCheck />
      </span>
    </div>
    <span class="text-b3 text-blue-dark"> {{ label }} </span>
  </label>
</template>

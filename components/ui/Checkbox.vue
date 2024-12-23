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
        id="check-custom-style"
      />
      <span
        class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-3"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="1"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
    <span class="text-b3 text-blue-dark"> {{ label }} </span>
  </label>
</template>

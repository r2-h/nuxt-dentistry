<script setup lang="ts">
import MinusInCircle from "./icons/MinusInCircle.vue"
import PlusInCircle from "./icons/PlusInCircle.vue"

const isOpen = ref(false)

defineProps<{
  answer: string
  question: string
}>()
</script>

<template>
  <div
    :class="`text-b1 ${isOpen && 'my-0.5 rounded-lg2 bg-blue-mid px-6 py-5 text-white'}`"
  >
    <button
      :class="`flex w-full items-start justify-between gap-2 pl-2.5 pt-7.5 text-start ${isOpen ? 'pl-0 pt-0' : 'pb-7.5'}`"
      @click="isOpen = !isOpen"
    >
      <div class="flex items-start">
        <span
          :class="`ml-2.5 mr-2.5 mt-3 block size-1 shrink-0 rounded-full font-medium ${isOpen ? 'ml-0 bg-white' : 'bg-black'}`"
        />
        {{ question }}
      </div>
      <component
        :is="isOpen ? MinusInCircle : PlusInCircle"
        :class="`mt-1 shrink-0 !text-inherit ${isOpen && '-mr-2.5'}`"
      />
    </button>
    <hr :class="`${isOpen && 'my-2.5'}`" />
    <div
      :class="`grid overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`"
    >
      <div class="overflow-hidden font-normal">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

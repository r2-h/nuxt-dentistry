<script setup lang="ts">
import MinusInCircle from "./icons/MinusInCircle.vue"
import PlusInCircle from "./icons/PlusInCircle.vue"

const isOpen = ref(false)

defineProps<{
  answer: string
  question: string
  last?: boolean
}>()
</script>

<template>
  <div
    :class="`text-b1 ${isOpen && 'rounded-lg2 bg-blue-mid my-0.5 px-6 py-5 text-white'}`"
  >
    <button
      :class="`flex w-full cursor-pointer items-start justify-between gap-2 text-start ${isOpen ? 'pl-0 pt-2 text-black' : 'pb-7.5 pt-7.5 pl-2.5'}`"
      @click="isOpen = !isOpen"
    >
      <div class="flex items-start">
        <span
          :class="`mr-2.5 mt-3 block size-1 shrink-0 rounded-full bg-black font-medium ${isOpen ? 'ml-0' : 'ml-2.5'}`"
        />
        {{ question }}
      </div>
      <component
        :is="isOpen ? MinusInCircle : PlusInCircle"
        :class="`text-inherit! mr-6 mt-1 shrink-0 ${isOpen && '!mr-0'}`"
      />
    </button>
    <hr v-if="!last" :class="`${isOpen && 'my-2.5'}`" />
    <div
      :class="`grid overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`"
    >
      <div class="overflow-hidden font-normal">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

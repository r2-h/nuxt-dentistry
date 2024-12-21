<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority"

defineEmits<{
  (e: "action"): void
}>()

const button = cva("relative inline-flex items-center text-white h-[3.43rem]", {
  variants: {
    intent: {
      primary: "bg-blue-mid rounded-lg2 font-semibold text-b2 px-[30px]",
      secondary: " bg-blue-dark rounded",
      danger: "bg-red-500 ",
    },
    disabled: {
      true: "bg-gray-300 cursor-not-allowed",
    },
  },
})
type ButtonProps = VariantProps<typeof button>

const { intent = "primary", tag = "button" } = defineProps<{
  intent?: ButtonProps["intent"]
  leftNode?: object
  rightNode?: object
  loading?: boolean
  tag?: string
  disabled?: boolean
}>()
</script>

<template>
  <component
    :is="tag"
    @click="$emit('action')"
    :class="button({ intent, disabled })"
  >
    <span v-if="loading" class="absolute flex left-1/2 -translate-x-1/2">
      <IconsLoading />
    </span>

    <component
      :is="leftNode"
      :class="['mr-2 size-5', loading && 'invisible']"
    />

    <div :class="[loading && 'invisible']">
      <slot />
    </div>

    <component
      :is="rightNode"
      :class="['ml-2 size-5 text-white', loading && 'invisible']"
    />
  </component>
</template>

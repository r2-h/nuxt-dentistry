<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority"

const button = cva("relative inline-flex items-center text-white h-[3.43rem]", {
  variants: {
    intent: {
      primary: "bg-blue-mid rounded-lg2",
      secondary: " bg-blue-dark rounded",
      danger: "bg-red-500 ",
    },
  },
})
type ButtonProps = VariantProps<typeof button>

const { intent = "secondary", tag = "button" } = defineProps<{
  intent?: ButtonProps["intent"]
  leftNode?: object
  rightNode?: object
  loading?: boolean
  tag?: string
}>()

defineEmits<{
  (e: "action"): void
}>()
</script>

<template>
  <component :is="tag" @click="$emit('action')" :class="button({ intent })">
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

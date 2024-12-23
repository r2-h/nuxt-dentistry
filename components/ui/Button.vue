<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority"

defineEmits<{
  (e: "action"): void
}>()

const button = cva(
  "relative inline-flex items-center h-[3.43rem] rounded-lg2 w-full justify-center",
  {
    variants: {
      intent: {
        primary: "bg-blue-mid  font-semibold text-b2 px-[30px] text-white",
        secondary: " bg-blue-dark rounded text-white",
        tertiary: "bg-white  px-[30px] text-blue-dark text-b3",
        danger: "bg-red-500 ",
      },
      disabled: {
        true: "bg-gray-300 cursor-not-allowed",
      },
    },
  }
)
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
  <component :is="tag" @click="$emit('action')">
    <span v-if="loading" class="absolute flex left-1/2 -translate-x-1/2">
      <IconsLoading />
    </span>

    <component
      :is="leftNode"
      :class="['mr-2 size-5', loading && 'invisible']"
    />

    <div :class="[button({ intent, disabled }), loading && 'invisible']">
      <slot />
    </div>

    <component
      :is="rightNode"
      :class="['ml-2 size-5 text-white', loading && 'invisible']"
    />
  </component>
</template>

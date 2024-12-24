<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority"

defineEmits<{
  (e: "action"): void
}>()

const button = cva("relative inline-flex items-center  w-full justify-center", {
  variants: {
    intent: {
      primary: "bg-blue-mid  font-semibold text-b2  text-white rounded-lg2",
      secondary: " bg-blue-dark rounded text-white",
      tertiary: "bg-white   text-blue-dark text-b3",
      danger: "bg-red-500 ",
    },
    size: {
      lg: "px-[30px] h-[3.43rem]",
      icon: "",
    },
    disabled: {
      true: "bg-gray-300 cursor-not-allowed",
    },
  },
})
type ButtonProps = VariantProps<typeof button>

const {
  intent = "primary",
  tag = "button",
  size = "lg",
} = defineProps<{
  intent?: ButtonProps["intent"]
  size?: ButtonProps["size"]
  leftNode?: object
  rightNode?: object
  loading?: boolean
  tag?: string
  disabled?: boolean
  _class?: string
}>()
</script>

<template>
  <div>
    <span v-if="loading" class="absolute flex left-1/2 -translate-x-1/2">
      <IconsLoading />
    </span>

    <component
      :is="leftNode"
      :class="['mr-2 size-5', loading && 'invisible']"
    />

    <component
      v-bind="$attrs"
      :is="tag"
      @click="$emit('action')"
      :class="[
        button({ intent, disabled, size }),
        _class,
        loading && 'invisible',
      ]"
    >
      <slot />
    </component>

    <component
      :is="rightNode"
      :class="['ml-2 size-5 text-white', loading && 'invisible']"
    />
  </div>
</template>

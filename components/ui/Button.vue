<script setup lang="ts">
import { cva, type VariantProps } from "class-variance-authority"

defineEmits<{
  (e: "action"): void
}>()

const button = cva("relative inline-flex items-center justify-center", {
  variants: {
    intent: {
      primary:
        "bg-blue-mid  font-semibold text-b2  text-white rounded-lg2 px-[1.87rem] h-[3.43rem] hover:bg-blue-mid/95",
      ghostAuth:
        "text-b3 font-semibold lg:font-medium lg:border rounded-lg2 border-blue-dark lg:w-full lg:h-[3.75rem]",
      secondary: " bg-blue-dark rounded text-white",
      tertiary: "bg-white   text-blue-dark text-b3",
      danger: "bg-red-500 ",
      iconWhiteSquare:
        "bg-white border  flex items-center justify-center  h-11 w-24 border-none",
      iconDarkBlueSquare:
        "border  flex items-center justify-center  h-11 w-24 border-none bg-blue-dark",
      iconWhite:
        "bg-white border border-blue-mid rounded-lg2 size-[3.43rem] flex items-center justify-center grow-0 group-hover:border-blue-mid/85",
      iconBlue:
        "bg-blue-mid  rounded-lg2 size-[3.43rem] flex items-center justify-center grow-0 ",
      icon: "",
    },
    disabled: {
      true: "bg-gray-300 pointer-events-none",
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
  _class?: string
}>()
</script>

<template>
  <div class="group">
    <span v-if="loading" class="absolute left-1/2 flex -translate-x-1/2">
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
      :class="[button({ intent, disabled }), _class, loading && 'invisible']"
    >
      <slot />
    </component>

    <component
      :is="rightNode"
      :class="['ml-2 size-5 text-white', loading && 'invisible']"
    />
  </div>
</template>

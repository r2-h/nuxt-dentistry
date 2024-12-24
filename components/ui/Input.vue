<script setup lang="ts">
defineProps<{
  label?: string
  value?: string
  rightNode?: object
  placeholder?: string
  type?: HTMLInputElement["type"]
}>()

const emit = defineEmits<{
  (e: "onChange", value: string): void
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit("onChange", target.value)
}
</script>

<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div class="relative">
      <input
        :value="value"
        @input="handleInput"
        v-bind="$attrs"
        :type="type"
        class="rounded-md p-2 text-white bg-blue-950 border border-white focus:border-white outline-none pr-10 pl-4"
        :placeholder="placeholder"
      />
      <component
        :is="rightNode"
        class="size-5 text-white absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>
  </div>
</template>

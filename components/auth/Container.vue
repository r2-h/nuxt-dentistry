<script setup lang="ts">
import GoogleIcon from "~/components/icons/GoogleIcon.vue"
import Button from "~/components/ui/Button.vue"
import Checkbox from "../ui/Checkbox.vue"
import Divider from "../Divider.vue"

defineProps<{
  mainImageSrc: string
  googleBtnText: string
  title: string
  submitBtnText: string
  textQuestion: string
  textAnswer: string
}>()
</script>

<template>
  <div class="bg-red-200 h-[calc(100dvh-10.68rem)] flex mx-5 sm:mx-0">
    <img
      :src="mainImageSrc"
      alt="dentistry"
      class="object-cover rounded-lg2 w-full max-w-[38.1rem] sm:block hidden"
    />

    <div class="h-full w-full flex justify-center">
      <div
        class="min-w-[20rem] w-full max-w-[25.87rem] bg-green-400 mt-[6.25rem]"
      >
        <h2 class="text-h2 mb-3">{{ title }}</h2>
        <p class="text-gray-body text-b1 mb-7">
          Discover a better way of spendings with us.
        </p>
        <Button intent="tertiary" class="w-full mb-10">
          <GoogleIcon class="mr-2.5" />
          {{ googleBtnText }}
        </Button>
        <Divider class="mb-8.5" />
        <slot />
        <Checkbox label="I agree with Terms and Privacy" />
        <Button intent="primary" class="w-full mb-5.5">
          {{ submitBtnText }}
        </Button>
        <div class="text-b3 text-blue-dark text-center">
          {{ textQuestion }} <span class="underline">{{ textAnswer }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GoogleIcon from "~/components/icons/GoogleIcon.vue"
import Button from "~/components/ui/Button.vue"
import Divider from "../Divider.vue"
import ArrowShort from "../icons/ArrowShort.vue"

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
  <div class="lg:mt-9.5 flex justify-center gap-x-5 lg:justify-between">
    <div
      class="relative hidden w-full min-w-[32.7rem] max-w-[38.1rem] flex-1 lg:block"
    >
      <img
        :src="mainImageSrc"
        alt="dentistry"
        class="max-h-[calc(100dvh-10.55rem)] w-full object-cover brightness-75"
      />
      <div
        class="absolute bottom-[2.9rem] left-0 right-0 w-full px-[5rem] text-h4 font-light text-white"
      >
        “Effort is like toothpaste; you can usually squeeze out just a little
        bit more.”<br />
        ~ Dr Andre Jackson
        <div class="mt-5 flex justify-between text-b2">
          Manager of Smile Pvt.Ltd
          <div class="flex gap-x-2.5">
            <button>
              <ArrowShort />
            </button>
            <button>
              <ArrowShort class="rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mb-[8rem] mt-[5.5rem] flex h-full w-full max-w-[26rem] flex-1 lg:mx-auto lg:my-auto"
    >
      <div class="w-full">
        <h2 class="mb-3 text-h2">{{ title }}</h2>
        <p class="mb-7 text-b1 text-gray-body">
          Discover a better way of spendings with us.
        </p>
        <Button intent="ghostAuth" _class="mb-10 " class="text-center">
          <GoogleIcon class="mr-2.5" />
          {{ googleBtnText }}
        </Button>
        <Divider class="mb-8.5" />
        <slot />
        <div class="text-center text-b3 text-blue-dark">
          {{ textQuestion }}
          <span class="font-medium underline">{{ textAnswer }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

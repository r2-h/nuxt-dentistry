<script setup lang="ts">
import InIcon from "~/components/icons/InIcon.vue"
import Button from "~/components/ui/Button.vue"
import Underline from "~/components/icons/Underline.vue"
import SmallUnderline from "~/components/icons/SmallUnderline.vue"
</script>

<template>
  <div
    class="mb-[3.3rem] mt-14 h-full w-full max-w-[34rem] flex-grow lg:max-w-[44.7rem] lg:shrink-0"
  >
    <h1 class="mb-5.5 text-h2 capitalize lg:text-h1">
      Get ready for your best ever
      <span class="relative">
        Dental
        <span class="relative"
          >Experience!
          <SmallUnderline
            class="lg:w-100 absolute left-0 right-0 mx-auto w-56 sm:w-full lg:hidden"
          />
        </span>
        <Underline class="absolute bottom-0 right-5 hidden lg:block" />
      </span>
    </h1>
    <p class="mb-10 max-w-[33.1rem] text-b1 text-gray-body">
      We use only the best quality materials on the market in order to provide
      the best products to our patients, So don’t worry about anything and book
      yourself.
    </p>
    <div class="mb-10 flex items-center">
      <NuxtLink to="/contacts" class="mr-4 w-full max-w-[14.2rem] lg:mr-5.5">
        <Button tag="div" class="w-full">
          <span class="hidden lg:block">Book an appointment</span>
          <span class="block lg:hidden">Get Started</span>
        </Button>
      </NuxtLink>
      <Button
        tag="a"
        href="https://t.me/hareksian"
        target="_blank"
        intent="iconWhite"
        _class="mr-4 group"
      >
        <IconsPhone class="text-blue-mid group-hover:text-blue-mid/90" />
      </Button>
      <div class="shrink-0 space-y-1">
        <p class="text-b3 font-semibold text-blue-mid">Dental 24H Emergency</p>
        <p class="text-b3">0900-78601</p>
      </div>
    </div>
    <div
      class="flex h-[7.3rem] max-w-[24rem] flex-col justify-between rounded-lg px-4 py-3.5 pt-3 shadow-md lg:mb-0"
    >
      <div class="flex items-center">
        <Avatar class="mr-2 size-10" icon="/img/doc1.png" />
        <div class="mr-auto">
          <p class="text-b3 font-medium">Thomas Daniel</p>
          <p class="text-b4">Sr Dental</p>
        </div>

        <InIcon class="text-blue-mid" />
      </div>
      <p class="text-b4">
        Top Quality dental treatment done by field experts,<br />
        Highly Recommended for everyone
      </p>
    </div>
  </div>
</template>

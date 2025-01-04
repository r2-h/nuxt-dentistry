<script setup lang="ts">
import Button from "~/components/ui/Button.vue"
</script>

<template>
  <div
    class="-mx-5 mb-[6.2rem] mt-[7.5rem] flex flex-col items-center justify-between gap-[3.1rem] bg-blue-dark px-5 py-[4.3rem] lg:mx-auto lg:max-w-[66.5rem] lg:flex-row lg:justify-between lg:gap-[4.5rem] lg:rounded-lg2 lg:px-0 lg:py-[3.1rem] lg:pl-[2.8rem] lg:pr-[3.5rem]"
  >
    <div class="flex-1 text-white">
      <h1 class="mb-4 text-h3 font-semibold lg:mb-5 lg:text-h2">
        Dental Website that's gonna shake the game rules up.
      </h1>
      <p class="mb-7.5 text-b1">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </p>
      <Button>Learn More</Button>
    </div>
    <div
      class="h-[18.2rem] w-full max-w-[24.2rem] flex-1 rounded-lg2 lg:max-w-[19rem]"
    >
      <img
        src="/public/img/section-seven.png"
        alt="image"
        class="h-full w-full"
      />
    </div>
  </div>
</template>

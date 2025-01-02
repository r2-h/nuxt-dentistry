<script setup lang="ts">
import SmallUnderline from "~/components/icons/SmallUnderline.vue"
import Carousel from "./carousel/Carousel.vue"
import CarouselSmall from "./carousel/CarouselSmall.vue"
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="flex max-w-[29.9rem] flex-col items-center text-center text-blue-dark"
    >
      <h1 class="relative mb-5 text-h3 lg:text-h2">
        Our Happy Clients<SmallUnderline
          class="absolute bottom-0.5 w-full lg:right-0 lg:w-fit"
        />
      </h1>
      <p class="mb-12 text-b2 lg:mb-20">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </p>
    </div>
  </div>

  <Carousel class="hidden lg:block" />
  <CarouselSmall class="lg:hidden" />
</template>

<script setup lang="ts">
import { SERVICES } from "~/constants"
import Card from "./Card.vue"
import Carousel from "./Carousel.vue"
</script>

<template>
  <section
    class="relative -mx-5 flex flex-grow items-start justify-center gap-[1.5rem] rounded-lg2 bg-blue-light py-[3.1rem] pb-[7.1rem] lg:mx-0 lg:px-[1.5rem] lg:pb-[3.1rem]"
  >
    <Card
      v-for="item in SERVICES"
      :key="item.title"
      class="hidden lg:block"
      :icon="item.icon"
      :title="item.title"
      :description="item.description"
    />
    <Carousel class="lg:hidden " />
  </section>
</template>

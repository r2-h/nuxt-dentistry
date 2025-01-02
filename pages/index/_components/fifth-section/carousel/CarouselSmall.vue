<script setup lang="ts">
import Arrow from "~/components/icons/Arrow.vue"
import Button from "~/components/ui/Button.vue"
import Card from "./Card.vue"
import { HAPPY_CLIENTS } from "../constants"

const containerRef = ref(null)

const swiper = useSwiper(containerRef)
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide v-for="(slide, idx) in HAPPY_CLIENTS" :key="idx">
          <Card
            class="mx-auto mb-10 max-w-[24.3rem]"
            :avatar="slide.avatar"
            :name="slide.name"
            :comment="slide.comment"
          />
        </swiper-slide>
      </swiper-container>
      <div
        class="bottom-[1.8rem] left-0 right-0 flex items-center justify-center gap-5"
      >
        <Button @action="swiper.prev()" intent="iconDarkBlueSquare">
          <Arrow class="pointer-events-none rotate-180 text-white" />
        </Button>
        <Button @action="swiper.next()" intent="iconDarkBlueSquare">
          <Arrow class="pointer-events-none text-white" />
        </Button>
      </div>
    </ClientOnly>
  </div>
</template>

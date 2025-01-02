<script setup lang="ts">
import Arrow from "~/components/icons/Arrow.vue"
import Button from "~/components/ui/Button.vue"
import { HAPPY_CLIENTS } from "../constants"
import Card from "./Card.vue"

const SLIDES_PER_VIEW = 3
const FIRST_SLIDE = 0
const slideIndex = ref(FIRST_SLIDE)

function toNextSlide(direction: "forward" | "back") {
  if (direction === "forward") {
    slideIndex.value = Math.max(
      slideIndex.value + SLIDES_PER_VIEW,
      HAPPY_CLIENTS.length,
    )
    swiper.to(slideIndex.value)
  } else {
    slideIndex.value = Math.min(
      slideIndex.value - SLIDES_PER_VIEW,
      FIRST_SLIDE,
      FIRST_SLIDE,
    )
    swiper.to(slideIndex.value)
  }
}

const containerRef = ref(null)
const slides = ref(HAPPY_CLIENTS)

const swiper = useSwiper(containerRef)
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <swiper-container
        ref="containerRef"
        :slides-per-view="SLIDES_PER_VIEW"
        :slides-per-group="SLIDES_PER_VIEW"
      >
        <swiper-slide v-for="(slide, idx) in slides" :key="idx" class="px-2.5">
          <Card
            class="mb-[3.1rem]"
            :avatar="slide.avatar"
            :name="slide.name"
            :comment="slide.comment"
          />
        </swiper-slide>
      </swiper-container>
      <div
        class="bottom-[1.8rem] left-0 right-0 flex items-center justify-center gap-5"
      >
        <Button
          @action="toNextSlide('back')"
          intent="iconDarkBlueSquare"
          :class="slideIndex <= FIRST_SLIDE && 'cursor-not-allowed'"
        >
          <Arrow class="pointer-events-none rotate-180 text-white" />
        </Button>
        <Button
          @action="toNextSlide('forward')"
          intent="iconDarkBlueSquare"
          :class="slideIndex >= HAPPY_CLIENTS.length && 'cursor-not-allowed'"
        >
          <Arrow class="pointer-events-none text-white" />
        </Button>
      </div>
    </ClientOnly>
  </div>
</template>

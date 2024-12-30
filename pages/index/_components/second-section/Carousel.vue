<script setup lang="ts">
import Arrow from "~/components/icons/Arrow.vue"
import Button from "~/components/ui/Button.vue"
import { SERVICES } from "~/constants"
import Card from "./Card.vue"

const containerRef = ref(null)
const slides = ref(SERVICES)

const swiper = useSwiper(containerRef)
</script>

<template>
  <div class="w-full max-w-[25rem] px-5">
    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide v-for="(slide, idx) in slides" :key="idx">
          <Card
            :icon="slide.icon"
            :title="slide.title"
            :description="slide.description"
          />
        </swiper-slide>
      </swiper-container>
      <div
        class="absolute bottom-[1.8rem] left-0 right-0 flex items-center justify-center gap-5"
      >
        <Button @action="swiper.prev()" intent="iconWhiteSquare">
          <Arrow class="rotate-180" />
        </Button>
        <Button @action="swiper.next()" intent="iconWhiteSquare">
          <Arrow />
        </Button>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import Arrow from "~/components/icons/Arrow.vue"
import Button from "~/components/ui/Button.vue"
import Card from "./Card.vue"
import Teeth2 from "~/components/icons/Teeth2.vue"
import Mouth from "~/components/icons/Mouth.vue"
import Implant from "~/components/icons/Implant.vue"

export type Services = {
  icon: object
  title: string
  description: string
}
const SERVICES = [
  {
    icon: markRaw(Teeth2),
    title: "Root Canal Treatment",
    description:
      "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
  },
  {
    icon: markRaw(Mouth),
    title: "Cosmetic Dentist",
    description:
      "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
  },
  {
    icon: markRaw(Implant),
    title: "Dental Implants",
    description:
      "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
  },
]

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

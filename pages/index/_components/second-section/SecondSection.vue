<script setup lang="ts">
import Card from "./Card.vue"
import Carousel from "./Carousel.vue"
import Teeth2 from "~/components/icons/Teeth2.vue"
import Mouth from "~/components/icons/Mouth.vue"
import Implant from "~/components/icons/Implant.vue"

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
</script>

<template>
  <section
    class="relative -mx-5 flex grow items-start justify-center gap-[1.5rem] rounded-lg2 bg-blue-light py-[3.1rem] pb-[7.1rem] lg:mx-0 lg:px-[1.5rem] lg:pb-[3.1rem]"
  >
    <Card
      v-for="item in SERVICES"
      :key="item.title"
      class="hidden lg:block"
      :icon="item.icon"
      :title="item.title"
      :description="item.description"
    />
    <Carousel class="lg:hidden" />
  </section>
</template>

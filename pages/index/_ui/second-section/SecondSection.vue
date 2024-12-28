<script setup lang="ts">
import Teeth2 from "~/components/icons/Teeth2.vue"
import Mouth from "~/components/icons/Mouth.vue"
import Implant from "~/components/icons/Implant.vue"
import Card from "./ui/Card.vue"

const items = [
  {
    icon: Teeth2,
    title: "Root Canal Treatment",
    description:
      "Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.",
  },
  {
    icon: Mouth,
    title: "Cosmetic Dentist",
    description:
      "Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.",
  },
  {
    icon: Implant,
    title: "Dental Implants",
    description:
      "A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.",
  },
]
</script>

<template>
  <section
    class="flex flex-grow items-center justify-center gap-[1.5rem] rounded-lg2 bg-blue-light px-[2.1rem] py-[3.1rem]"
  >
    <Card
      v-for="item in items"
      :key="item.title"
      :icon="item.icon"
      :title="item.title"
      :description="item.description"
    />
  </section>
</template>

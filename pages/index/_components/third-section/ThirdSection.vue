<script setup lang="ts">
import Button from "~/components/ui/Button.vue"
import Container from "../Container.vue"
import TextSide from "../TextSide.vue"
import PhotoSide from "../PhotoSide.vue"
</script>

<template>
  <Container>
    <TextSide
      class="mt-auto"
      title="We’re welcoming new patients and can’t wait to meet you."
      description="We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself."
    >
      <Button>Book an appointment</Button>
    </TextSide>
    <PhotoSide imageSrc="/img/lending1.png" />
  </Container>
</template>

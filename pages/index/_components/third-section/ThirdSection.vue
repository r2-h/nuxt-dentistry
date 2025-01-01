<script setup lang="ts">
import Button from "~/components/ui/Button.vue"
import Container from "./Container.vue"
import TextSide from "./TextSide.vue"
import PhotoSide from "./PhotoSide.vue"
</script>

<template>
  <Container>
    <TextSide class="mt-auto" />
    <PhotoSide imageSrc="/img/lending1.png" />
  </Container>
</template>

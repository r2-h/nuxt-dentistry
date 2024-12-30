<script setup lang="ts">
import Footer from "~/components/footer/Footer.vue"
import Header from "~/components/header/Header.vue"
</script>

<template>
  <div
    class="mx-auto flex h-full min-h-screen max-w-max flex-col px-5 lg:px-10"
  >
    <Header />
    <main class="flex flex-grow flex-col">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import SmallUnderline from "~/components/icons/SmallUnderline.vue"
import Button from "~/components/ui/Button.vue"
</script>

<template>
  <div class="w-full max-w-[34rem]">
    <h2 class="mb-4.5 text-h2 capitalize">
      We’re
      <span class="relative inline-block">
        welcoming <SmallUnderline class="absolute bottom-0.5 left-0 w-52" />
      </span>
      new patients and can’t wait to meet you.
    </h2>
    <p class="mb-10 text-b1 text-gray-body">
      We use only the best quality materials on the market in order to provide
      the best products to our patients, So don’t worry about anything and book
      yourself.
    </p>
    <Button>Book an appointment</Button>
  </div>
</template>

<script setup lang="ts">
import LineSmallest from "~/components/icons/LineSmallest.vue"
import ShieldDone from "~/components/icons/ShieldDone.vue"
import SmallUnderline from "~/components/icons/SmallUnderline.vue"
import Button from "~/components/ui/Button.vue"
</script>

<template>
  <div
    class="-mx-5 my-[4.4rem] flex flex-col items-center gap-[3.2rem] bg-blue-light px-5 py-[3.43rem] lg:my-[7.5rem] lg:flex-row lg:justify-between lg:gap-0 lg:px-[6.75rem]"
  >
    <div
      class="order-2 h-full max-h-[27.75rem] w-full max-w-[25.88rem] rounded-lg2 bg-red-200 lg:order-1"
    >
      <img src="/img/doc3.png" alt="photo" class="h-full w-full object-cover" />
    </div>

    <div class="order-1 w-full max-w-[32.6rem] lg:order-2">
      <h2 class="mb-5 text-h3 font-semibold capitalize lg:text-h2">
        Why choose
        <span class="relative inline-block">
          Smile
          <LineSmallest class="absolute bottom-0.5 left-0 w-24 lg:w-fit" />
        </span>
        for all your dental treatments?
      </h2>
      <p class="mb-5 text-b1 text-gray-body">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </p>
      <ul class="mb-7.5 space-y-3.5 text-b1 font-medium text-gray-body">
        <li class="flex items-center gap-3">
          <ShieldDone /> Top quality dental team
        </li>
        <li class="flex items-center gap-3">
          <ShieldDone /> State of the art dental services
        </li>
        <li class="flex items-center gap-3">
          <ShieldDone /> Discount on all dental treatment
        </li>
        <li class="flex items-center gap-3">
          <ShieldDone /> Enrollment is quick and easy
        </li>
      </ul>
      <Button>Book an appointment</Button>
    </div>
  </div>
</template>

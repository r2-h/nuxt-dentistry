<script setup lang="ts">
import InIcon from "~/components/icons/InIcon.vue"
import Circle from "./ui/Circle.vue"
import Teeth from "./ui/Teeth.vue"
import Button from "~/components/ui/Button.vue"
import Underline from "~/components/icons/Underline.vue"
import SmallUnderline from "~/components/icons/SmallUnderline.vue"
</script>

<template>
  <section
    class="relative mt-[3.75rem] flex h-full grow flex-col items-center xl:h-[36rem] xl:flex-row xl:items-start"
  >
    <div class="mt-14 shrink-0 flex-grow">
      <h1 class="mb-5.5 w-full max-w-[43rem] text-h2 xl:text-h1">
        Get ready for your best ever
        <span class="relative">
          Dental
          <span class="relative"
            >Experience!
            <SmallUnderline
              class="xl:w-100 absolute left-0 right-0 mx-auto w-56 sm:w-full xl:hidden"
            />
          </span>
          <Underline class="absolute bottom-0 right-5 hidden xl:block" />
        </span>
      </h1>
      <p class="mb-10 max-w-[33.1rem] text-b1 text-gray-body">
        We use only the best quality materials on the market in order to provide
        the best products to our patients, So don’t worry about anything and
        book yourself.
      </p>
      <div class="mb-10 flex items-center">
        <NuxtLink to="/contacts" class="mr-4 w-full max-w-[14.2rem] xl:mr-5.5">
          <Button tag="div" class="w-full">
            <span class="hidden xl:block">Book an appointment</span>
            <span class="block xl:hidden">Get Started</span>
          </Button>
        </NuxtLink>
        <Button
          tag="a"
          href="https://t.me/hareksian"
          target="_blank"
          intent="iconWhite"
          _class="mr-4 group"
        >
          <IconsPhone class="text-blue-mid group-hover:text-blue-mid/90" />
        </Button>
        <div class="shrink-0 space-y-1">
          <p class="text-b3 font-semibold text-blue-mid">
            Dental 24H Emergency
          </p>
          <p class="text-b3">0900-78601</p>
        </div>
      </div>
      <div
        class="mb-16 flex h-[7.3rem] max-w-[24rem] flex-col justify-between rounded-xl px-4 py-3.5 pt-3 shadow-md xl:mb-0"
      >
        <div class="flex items-center">
          <Avatar class="mr-2 size-10" icon="/img/doc1.png" />
          <div class="mr-auto">
            <p class="text-b3">Thomas Daniel</p>
            <p class="text-b4">Sr Dental</p>
          </div>

          <InIcon class="text-blue-mid" />
        </div>
        <p class="text-b4">
          Top Quality dental treatment done by field experts,<br />
          Highly Recommended for everyone
        </p>
      </div>
    </div>

    <div class="relative mx-auto mb-11 aspect-square h-full xl:m-0 xl:mb-0">
      <img
        src="/img/main-picture.png"
        alt="doctor"
        class="-ml-14 h-[26.6rem] object-cover xl:ml-0 xl:h-full"
      />
      <Circle />
      <Teeth
        class="absolute right-12 top-5 size-[2.5rem] rotate-3 xl:right-16 xl:top-5 xl:size-[3rem]"
      />
      <Teeth
        class="absolute right-8 top-32 size-[2rem] -rotate-12 *:w-4 xl:right-5 xl:top-32 xl:size-[2.5rem]"
      />
      <Teeth
        class="absolute hidden size-[2.5rem] xl:-right-8 xl:top-72 xl:grid xl:size-[3rem]"
      />
      <Teeth
        class="absolute left-6 top-24 size-[2.5rem] -rotate-45 xl:left-36 xl:top-36 xl:size-[3rem]"
      />
      <Teeth
        class="absolute hidden size-[2rem] -rotate-45 *:w-4 xl:left-28 xl:top-72 xl:grid xl:size-[2.5rem]"
      />
    </div>
  </section>
</template>

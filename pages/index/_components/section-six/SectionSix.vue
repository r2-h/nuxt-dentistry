<script setup lang="ts">
import PlusInCircle from "~/components/icons/PlusInCircle.vue"
import SmallUnderline from "~/components/icons/SmallUnderline.vue"
import Underline from "~/components/icons/Underline.vue"
</script>

<template>
  <div class="mt-[6.2rem] flex flex-col items-center">
    <div
      class="flex max-w-[29.9rem] flex-col items-center text-center text-blue-dark"
    >
      <h1 class="relative mb-5 text-h3 lg:text-h2">
        <span class="relative inline-block"
          >Frequently
          <SmallUnderline class="absolute -bottom-0.5 w-full lg:hidden" />
        </span>
        Ask Question
        <Underline class="absolute -bottom-1.5 hidden w-full lg:block" />
      </h1>
      <p class="mb-12 text-b2 lg:mb-20">
        We use only the best quality materials on the market in order to provide
        the best products to our patients.
      </p>
    </div>

    <div class="-my-7.5 w-full text-b1 lg:max-w-[39.3rem]">
      <Accordion
        answer="Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim."
        question="How do I import my email address list?"
      />
      <Accordion
        answer="Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim."
        question="Do you offer non-profit discounts?"
      />
      <Accordion
        answer="Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim."
        question="   Can I see who reads my email campaigns?"
      />
      <Accordion
        answer="Lorem ipsum dolor sit amet consectetur. Convallis cras placerat dignissim aliquam massa. Aliquet volutpat rhoncus in convallis consectetur. Cras adipiscing volutpat non hac enim odio enim."
        question="Can I see who reads my email campaigns?"
				last
      />
    </div>
  </div>
</template>

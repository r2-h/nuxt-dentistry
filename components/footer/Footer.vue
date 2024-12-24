<script setup lang="ts">
import { storeToRefs } from "pinia"
import MobileMenu from "../header/MobileMenu.vue"
import BurgerMenuFooterIcon from "../icons/BurgerMenuFooterIcon.vue"
import Facebook from "../icons/Facebook.vue"
import Insta from "../icons/Insta.vue"
import Linkedin from "../icons/Linkedin.vue"
import MainIcon from "../icons/MainIcon.vue"
import Twitter from "../icons/Twitter.vue"
import Youtube from "../icons/Youtube.vue"
import Button from "../ui/Button.vue"
import NavBar from "./NavBar.vue"
import MobileNavBar from "../layout/MobileNavBar.vue"

const store = useNavigationStore()
const { isActiveMobileMenu } = storeToRefs(store)
const { toggle } = store
</script>

<template>
  <div class="w-full md:mb-8">
    <div
      class="pt-6.25rem mb-7.5 flex justify-between border-blue-dark md:mb-9 md:border-b-2 md:pb-[3.12rem] md:pt-0"
    >
      <MainIcon />
      <NavBar class="hidden md:block" />

      <MobileMenu :isActive="isActiveMobileMenu">
        <template #trigger>
          <Button
            :_class="`${isActiveMobileMenu && 'bg-blue-600 '}  z-30`"
            size="icon"
            tag="div"
            @action="toggle"
          >
            <BurgerMenuFooterIcon />
          </Button>
        </template>
        <template #content>
          <MobileNavBar
            class="flex h-full flex-col justify-center gap-y-9"
            @onCloseMobileMenu="toggle"
          />
        </template>
      </MobileMenu>
    </div>
    <p class="mb-7.5 text-b1 text-gray-body md:hidden">
      All our PRO level features at your fingertips.
    </p>
    <p class="mb-2.5 text-b1 font-semibold text-blue-dark md:hidden">
      Follow us on
    </p>

    <div
      class="flex w-fit justify-between border-t border-gray-body md:border-t-0"
    >
      <p class="hidden text-b1 text-gray-body md:block">
        All rights reserved ® dentistry.com | Terms and conditions apply!
      </p>
      <div
        class="mb-[3.56rem] flex justify-between gap-2.5 pt-2.5 md:mb-0 md:gap-5 md:pt-0"
      >
        <NuxtLink to="https://www.facebook.com/" target="_blank">
          <Facebook
            class="size-7.5 text-gray-body md:size-fit md:text-inherit"
          />
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/" target="_blank">
          <Insta class="size-7.5 text-gray-body md:size-fit md:text-inherit" />
        </NuxtLink>
        <NuxtLink to="https://www.youtube.com/" target="_blank">
          <Youtube
            class="size-7.5 text-gray-body md:size-fit md:text-inherit"
          />
        </NuxtLink>
        <NuxtLink to="https://ru.linkedin.com/" target="_blank">
          <Linkedin
            class="size-7.5 text-gray-body md:size-fit md:text-inherit"
          />
        </NuxtLink>
        <NuxtLink to="https://twitter.com/" target="_blank">
          <Twitter
            class="size-7.5 text-gray-body md:size-fit md:text-inherit"
          />
        </NuxtLink>
      </div>
    </div>
    <div
      class="-mx-5 grid h-7.5 place-items-center bg-blue-dark text-b3 text-white md:hidden"
    >
      Dentistry by M.Aze, CopyRights are protected
    </div>
  </div>
</template>

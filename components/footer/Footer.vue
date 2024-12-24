<script setup lang="ts">
import { storeToRefs } from "pinia";
import MobileMenu from "../header/MobileMenu.vue";
import BurgerMenuFooterIcon from "../icons/BurgerMenuFooterIcon.vue";
import Facebook from "../icons/Facebook.vue";
import Insta from "../icons/Insta.vue";
import Linkedin from "../icons/Linkedin.vue";
import MainIcon from "../icons/MainIcon.vue";
import Twitter from "../icons/Twitter.vue";
import Youtube from "../icons/Youtube.vue";
import Button from "../ui/Button.vue";
import NavBar from "./NavBar.vue";

const toggleActive = () => {};
const onCloseMobileMenu = () => {};

const store = useNavigationStore();
const { isActiveMobileMenu } = storeToRefs(store);
const { toggle } = store;
</script>

<template>
  <div class="mb-7 w-full">
    <div
      class="pt-6.25rem mb-9 flex justify-between border-b-2 border-blue-dark pb-[3.12rem] md:pt-0"
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
          <NavBar
            class="flex h-full flex-col justify-center gap-y-9"
            @onCloseMobileMenu="onCloseMobileMenu"
          />
        </template>
      </MobileMenu>
    </div>
    <div class="flex justify-between">
      <p>All rights reserved ® dentistry.com | Terms and conditions apply!</p>
      <div class="flex justify-between gap-5">
        <Facebook /><Insta /><Youtube /><Linkedin /><Twitter />
      </div>
    </div>
  </div>
</template>

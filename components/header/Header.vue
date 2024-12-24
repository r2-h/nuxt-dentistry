<script setup lang="ts">
import MainIcon from "../icons/MainIcon.vue";
import MobileNavBar from "../layout/MobileNavBar.vue";
import Button from "../ui/Button.vue";
import MobileMenu from "./MobileMenu.vue";
import NavBar from "./NavBar.vue";
import UserDropdown from "./UserDropdown.vue";

const isActiveMobileMenu = ref(false);

const toggleActive = () => {
  isActiveMobileMenu.value = !isActiveMobileMenu.value;
};

const onCloseMobileMenu = () => {
  isActiveMobileMenu.value = false;
};
</script>

<template>
  <header
    :class="[
      'z-10 mx-auto mt-12 flex w-full items-center justify-between rounded-lg px-5',
      'md:mt-10 md:bg-blue-light md:px-10 md:py-4.5',
    ]"
  >
    <MainIcon />
    <NavBar class="hidden md:flex" />

    <MobileMenu :isActive="isActiveMobileMenu">
      <template #trigger>
        <Button
          :_class="`${isActiveMobileMenu && 'bg-blue-600 '} p-3 z-30`"
          size="icon"
          tag="div"
          @action="toggleActive"
        >
          <IconsBurgerMenu />
        </Button>
      </template>
      <template #content>
        <MobileNavBar @onCloseMobileMenu="onCloseMobileMenu" />
      </template>
    </MobileMenu>

    <div class="hidden items-center gap-x-5 md:flex">
      <UserDropdown />
      <Button> Book Now </Button>
    </div>
  </header>
</template>

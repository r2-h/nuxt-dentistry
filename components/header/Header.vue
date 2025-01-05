<script setup lang="ts">
import MainIcon from "../icons/MainIcon.vue"
import MobileNavBar from "../layout/MobileNavBar.vue"
import Button from "../ui/Button.vue"
import MobileMenu from "./MobileMenu.vue"
import NavBar from "./NavBar.vue"

const isActiveMobileMenu = ref(false)

const toggleActive = () => {
  isActiveMobileMenu.value = !isActiveMobileMenu.value
}

const onCloseMobileMenu = () => {
  isActiveMobileMenu.value = false
}
</script>

<template>
  <header
    class="z-10 mx-auto mt-12 flex w-full items-center justify-between rounded-lg px-5 lg:mt-10 lg:bg-blue-light lg:px-10 lg:py-4.5"
  >
    <NuxtLink to="/">
      <MainIcon />
    </NuxtLink>
    <NavBar class="hidden lg:flex" />

    <MobileMenu :isActive="isActiveMobileMenu">
      <template #trigger>
        <Button
          :_class="`${isActiveMobileMenu && 'bg-blue-600 '} p-3 z-30`"
          intent="iconBlue"
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

    <div class="hidden items-center gap-x-7 lg:flex">
      <NuxtLink to="/log-in" class="text-b2 font-semibold text-blue-dark">
        Log In
      </NuxtLink>
      <NuxtLink to="/sign-up">
        <Button tag="div"> Sign Up </Button>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import MainIcon from "../icons/MainIcon.vue"
import Button from "../ui/Button.vue"
import MobileMenu from "./MobileMenu.vue"
import NavBar from "./NavBar.vue"
import UserDropdown from "./UserDropdown.vue"

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
    :class="[
      'z-10 max-w-content rounded-lg w-full mx-auto px-5 mt-12 flex items-center justify-between',
      'md:bg-blue-light md:px-10 md:py-4.5 md:mt-10',
    ]"
  >
    <MainIcon />
    <NavBar class="hidden md:flex" />

    <MobileMenu :isActive="isActiveMobileMenu">
      <template #trigger>
        <Button
          class="peer-checked:*:bg-blue-600 z-50 p-3"
          size="icon"
          tag="div"
          @action="toggleActive"
        >
          <IconsBurgerMenu />
        </Button>
      </template>
      <template #content>
        <NavBar
          class="flex-col justify-center flex h-full gap-y-9"
          @onCloseMobileMenu="onCloseMobileMenu"
        />
      </template>
    </MobileMenu>

    <div class="hidden md:flex items-center gap-x-5">
      <UserDropdown />
      <Button> Book Now </Button>
    </div>
  </header>
</template>

<script setup lang="ts">
import ArrowLeft from "../icons/ArrowLeft.vue"
import Button from "../ui/Button.vue"
import NavBar from "./NavBar.vue"
import UserDropdown from "./UserDropdown.vue"
</script>

<template>
  <header
    class="z-10 max-w-content w-full mx-auto px-5 lg:px-10 lg:py-4.5 lg:bg-blue-light rounded-lg my-10 flex atems-center justify-between"
  >
    <IconsMain class="hidden lg:flex" />

    <!-- <DHeaderMobileVision class="lg:hidden" /> -->

    <NavBar class="hidden lg:flex" />

    <div class="hidden lg:flex items-center gap-x-5">
      <UserDropdown />
      <Button :right-node="ArrowLeft"> Book Now </Button>
    </div>

    <!-- <DMobileMenu /> -->
  </header>
</template>

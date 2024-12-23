<script setup lang="ts">
import Facebook from "../icons/Facebook.vue"
import Insta from "../icons/Insta.vue"
import Linkedin from "../icons/Linkedin.vue"
import MainIcon from "../icons/MainIcon.vue"
import Twitter from "../icons/Twitter.vue"
import Youtube from "../icons/Youtube.vue"
import NavBar from "./NavBar.vue"
</script>

<template>
  <div class="max-w-content mx-auto w-full mb-7">
    <div
      class="flex justify-between pb-[3.12rem] mb-9 border-b-2 border-blue-dark"
    >
      <MainIcon class="hidden lg:flex" />
      <NavBar />
    </div>
    <div class="flex justify-between">
      <p>All rights reserved ® dentistry.com | Terms and conditions apply!</p>
      <div class="flex justify-between gap-5">
        <Facebook /><Insta /><Youtube /><Linkedin /><Twitter />
      </div>
    </div>
  </div>
</template>

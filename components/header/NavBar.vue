<script setup lang="ts">
import { navItems } from "../constants"

defineEmits<{
  (e: "onCloseMobileMenu"): void
}>()
</script>

<template>
  <nav>
    <menu class="flex items-center gap-x-9 text-b2" :class="$attrs.class">
      <li v-for="item in navItems" :key="item.id">
        <NuxtLink
          :to="item.route"
          @click="$emit('onCloseMobileMenu')"
          exactActiveClass="font-semibold"
          class="text-blue-dark"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </menu>
  </nav>
</template>

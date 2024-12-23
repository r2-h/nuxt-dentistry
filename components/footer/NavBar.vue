<script setup lang="ts">
import { navItems } from "../constants"
</script>

<template>
  <nav>
    <ul class="flex items-center gap-x-10">
      <li v-for="item in navItems" :key="item.id">
        <NuxtLink :to="item.route" class="text-b2 font-medium text-gray-body">
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

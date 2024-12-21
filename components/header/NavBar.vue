<script setup lang="ts">
const navItems = [
  { id: "1", title: "Home", route: "/" },
  { id: "2", title: "Services", route: "/services" },
  { id: "3", title: "Blogs", route: "/blogs" },
  { id: "4", title: "About", route: "/about" },
  { id: "5", title: "Contacts", route: "/contacts" },
]
</script>

<template>
  <nav>
    <ul class="flex items-center gap-x-9 text-b2">
      <li v-for="item in navItems" :key="item.id">
        <NuxtLink
          :to="item.route"
          exactActiveClass="font-semibold"
          class="text-blue-dark"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<template>
  <aside class="w-64 bg-white h-screen shadow-md fixed left-0 top-0 z-20">
    <div class="p-6 font-bold text-xl">ELEV8</div>
    <nav class="mt-4 px-4 space-y-2 text-sm">
      <RouterLink
        to="/dashboard"
        class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
        :class="{ 'bg-yellow-400 text-white font-semibold': $route.path === '/dashboard' }"
      >
        <span>📊</span>
        Dashboard
      </RouterLink>
      <RouterLink
        to="/reservations"
        class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
        :class="{ 'bg-yellow-400 text-white font-semibold': $route.path === '/reservations' }"
      >
        <span>📅</span>
        Reservations
      </RouterLink>
    </nav>
  </aside>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
</script>

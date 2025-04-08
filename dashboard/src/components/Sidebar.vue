<script setup>
import { RouterLink, useRoute } from "vue-router";
import logo from "../assets/logo.svg";
import { LayoutGrid, Calendar, House, TableOfContents, ShoppingCart, FileCheck2, Check, UserPlus, Settings } from "lucide-vue-next";
</script>

<template>
  <aside class="w-64 bg-white h-screen fixed flex flex-col gap-6 left-0 top-0 p-6 z-20">
    <div class="flex flex-col justify-center items-center">
      <div class="flex justify-center items-center gap-2">
        <div class="font-light font-montserrat text-5xl">ELEV8</div>
        <img :src="logo" alt="" />
      </div>
      <p class="text-sm">your key to seamless hospitality.</p>
    </div>

    <nav class="space-y-2 text-sm">
      <div class="font-bold text-xl">Main</div>
      <RouterLink to="/dashboard" class="flex items-center gap-2 px-3 py-2 rounded" :class="{ 'bg-yellow-400': $route.path === '/dashboard' }">
        <LayoutGrid />
        <p class="font-semibold">Dashboard</p>
      </RouterLink>
      <RouterLink to="/reservations" class="flex items-center gap-2 px-3 py-2 rounded" :class="{ 'bg-yellow-400': $route.path === '/reservations' }">
        <Calendar />
        <p class="font-semibold">Reservations</p>
      </RouterLink>
      <div class="flex items-center gap-2 px-3 py-2 rounded">
        <House />
        <p class="font-semibold">Listings</p>
      </div>
      <div class="flex items-center gap-2 px-3 py-2 rounded">
        <TableOfContents />
        <p class="font-semibold">Orders</p>
      </div>
      <div class="flex items-center gap-2 px-3 py-2 rounded">
        <ShoppingCart />
        <p class="font-semibold">Upsells</p>
      </div>
    </nav>

    <nav class="space-y-2 text-sm">
      <div class="font-bold text-xl">Extras</div>
      <div class="flex items-center gap-2 px-3 py-2 rounded">
        <FileCheck2 />
        <p class="font-semibold">Listings</p>
      </div>
      <div class="flex items-center gap-2 px-3 py-2 rounded">
        <Check />
        <p class="font-semibold">Orders</p>
      </div>
      <div class="flex items-center gap-2 px-3 py-2 rounded">
        <UserPlus />
        <p class="font-semibold">Upsells</p>
      </div>
      <div class="flex items-center gap-2 px-3 py-2 rounded">
        <Settings />
        <p class="font-semibold">Upsells</p>
      </div>
    </nav>
  </aside>
</template>

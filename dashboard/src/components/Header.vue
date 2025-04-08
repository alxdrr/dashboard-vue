<script setup>
import { Bell, MessageSquare, Menu } from "lucide-vue-next";
import avatar from "../assets/avatar.png";
</script>
<template>
  <header class="h-16 bg-white flex justify-between items-center px-6 fixed left-64 right-0 top-0 z-10">
    <Menu />
    <div class="flex items-center gap-4">
      <Bell />
      <MessageSquare />
      <img :src="avatar" alt="" class="rounded-full h-10" />
    </div>
  </header>
</template>

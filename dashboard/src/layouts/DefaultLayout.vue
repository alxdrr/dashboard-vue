<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-1 ml-64">
      <Header />
      <main class="mt-16 p-6 bg-gray-100 min-h-screen">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";
import { RouterView } from "vue-router";
</script>

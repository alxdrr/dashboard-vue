<template>
  <div class="bg-white relative rounded-xl p-4 md:p-6 border border-gray-100">
    <div v-if="title || icon" class="flex items-center justify-between mb-4">
      <h3 class="text-xl font-semibold text-gray-700">{{ title }}</h3>
      <slot name="icon"> </slot>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

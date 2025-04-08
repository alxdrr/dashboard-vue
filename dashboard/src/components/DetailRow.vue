<template>
  <div class="grid grid-cols-2 text-sm">
    <dt class="font-medium text-gray-600">{{ label }}</dt>
    <dd class="text-gray-900 text-right">
      <slot>{{ value }}</slot>
    </dd>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
});
</script>

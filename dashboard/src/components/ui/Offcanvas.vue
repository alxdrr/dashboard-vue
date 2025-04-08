<template>
  <Transition name="slide">
    <div v-if="show" class="fixed w-screen inset-0 z-40 flex justify-end right-0">
      <!-- Overlay (transparan, klik untuk tutup) -->
      <div class="absolute inset-0" @click="$emit('close')"></div>

      <!-- Panel konten -->
      <div class="relative w-full sm:w-[480px] max-w-full bg-white shadow-xl h-full overflow-y-auto p-6">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: Boolean,
});
defineEmits(["close"]);
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>

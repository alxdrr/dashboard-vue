<template>
  <div v-if="data">
    <h2 class="text-xl font-semibold mb-2">Detail Reservation</h2>

    <h3 class="text-2xl font-bold">
      {{ data.name }} <span class="text-gray-400 text-base">+{{ data.guests }} Guests</span>
    </h3>

    <div class="mt-2 text-sm text-gray-600 space-y-1">
      <div class="flex items-center gap-2"><i class="i-lucide-calendar-days" /> {{ data.checkIn }} to {{ data.checkOut }}</div>
      <div class="flex items-center gap-2"><i class="i-lucide-map-pin" /> {{ data.location }}</div>
    </div>

    <hr class="my-4" />

    <div class="space-y-2 text-sm">
      <div class="flex justify-between">
        <span>Status</span><span class="text-green-600 font-semibold">{{ data.status }}</span>
      </div>
      <div class="flex justify-between">
        <span>Reservation ID</span><span>{{ data.reservationId }}</span>
      </div>
      <div class="flex justify-between">
        <span>Email</span><span>{{ data.email }}</span>
      </div>
      <div class="flex justify-between">
        <span>Verify Type</span><span>{{ data.verifyType }}</span>
      </div>
      <div class="flex justify-between">
        <span>Age Group</span><span>{{ data.ageGroup }}</span>
      </div>
      <div class="flex justify-between">
        <span>Country of Origin</span><span>{{ data.origin }}</span>
      </div>
      <div class="flex justify-between">
        <span>Nationality</span><span>{{ data.nationality }}</span>
      </div>
      <div class="flex justify-between">
        <span>Birth Date</span><span>{{ data.birthDate }}</span>
      </div>
      <div class="flex justify-between">
        <span>Reason for Travel</span><span>{{ data.travelReason }}</span>
      </div>
      <div class="flex justify-between">
        <span>Type of ID</span><span>{{ data.idType }}</span>
      </div>
      <div class="flex justify-between">
        <span>ID Number</span><span>{{ data.idNumber }}</span>
      </div>
      <div class="flex justify-between">
        <span>Mode of Transport</span><span>{{ data.transport }}</span>
      </div>
      <div class="flex justify-between">
        <span>Estimated Check-in</span><span>{{ data.estimatedCheckIn }}</span>
      </div>
    </div>

    <div class="mt-6 flex gap-2">
      <button class="bg-yellow-400 text-black px-4 py-2 rounded font-bold">View Guest Guide</button>
      <button class="border border-gray-400 px-4 py-2 rounded" @click="copyToClipboard" title="Copy Reservation ID">
        <i class="i-lucide-copy" />
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});

function copyToClipboard() {
  navigator.clipboard
    .writeText(data.reservationId)
    .then(() => alert("Copied!"))
    .catch(() => alert("Failed to copy"));
}
</script>

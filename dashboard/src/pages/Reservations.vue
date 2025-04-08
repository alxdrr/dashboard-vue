<template>
  <div class="space-y-4">
    <!-- Tabs -->
    <div class="flex gap-4 border-b border-gray-200">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        :class="['pb-2 text-sm font-medium', activeTab === tab ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:text-black']"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Table Card -->
    <Card title="Reservations">
      <template #icon>
        <div class="flex justify-between items-center gap-4">
          <div class="relative w-64">
            <input type="text" placeholder="Search" class="w-full pl-4 pr-4 py-2 bg-neutral-50 rounded-md text-sm" />
            <Search class="absolute right-4 top-2.5 w-4 h-4 text-gray-400" />
          </div>
          <Button variant="outline" class="text-sm">Export CSV</Button>
        </div>
      </template>

      <table class="w-full text-sm text-left">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="px-4 py-2 text-xs">Guest Name</th>
            <th class="px-4 py-2 text-xs">Staying at - From/To date-time</th>
            <th class="px-4 py-2 text-xs">Status</th>
            <th class="px-4 py-2 text-xs">Stripe Payment</th>
            <th class="px-4 py-2 text-xs">Total Orders</th>
            <th class="px-4 py-2 text-xs">Chat with us</th>
            <th class="px-4 py-2 text-xs">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in reservations" :key="index" class="border-b">
            <td class="px-4 py-1 font-medium text-xs">{{ item.name }}</td>
            <td class="px-4 py-1 font-medium text-xs">
              {{ item.location }} <br />
              <span class="text-xs text-gray-400">{{ item.date }}</span>
            </td>
            <td class="px-4 py-1">
              <span
                :class="[
                  'text-xs px-2 py-1 rounded-sm font-medium text-white',
                  item.status === 'Verified' ? 'bg-green-400' : item.status === 'Check in' ? 'bg-orange-400' : 'bg-red-400',
                ]"
              >
                {{ item.status }}
              </span>
            </td>
            <td class="px-4 py-1 text-xs">
              <div class="flex items-center gap-2 border-2 justify-center py-1 rounded-full"><ShoppingCart class="w-4 h-4" /> 0 Payment</div>
            </td>
            <td class="px-4 py-1 text-xs">
              <div class="flex items-center gap-2 border-2 justify-center py-1 rounded-full"><ShoppingCart class="w-4 h-4" /> 0 Order</div>
            </td>
            <td class="px-4 py-1 text-xs">
              <div class="relative flex items-center gap-2 border-2 justify-center py-1 rounded-full">
                <MessageCircle class="w-4 h-4" />
                Chat with us
                <span v-if="item.messages > 0" class="absolute z-10 -top-2 -right-2 ml-2 text-xs text-white bg-green-400 rounded-full w-5 h-5 flex items-center justify-center">{{
                  item.messages
                }}</span>
              </div>
            </td>
            <td class="px-4 py-1">
              <button @click="openDetail(reservation)"><EllipsisVertical class="w-4 h-4 cursor-pointer" /></button>
            </td>
          </tr>
        </tbody>
      </table>
      <Offcanvas :show="showDetail" @close="showDetail = false">
        <!-- Konten detail reservasi di sini -->
        <h2 class="text-lg font-semibold mb-4">Detail Reservation</h2>
        <div class="text-sm space-y-2">
          <p><strong>Name:</strong> {{ selectedReservation?.guestName }}</p>
          <p><strong>Email:</strong> {{ selectedReservation?.email }}</p>
          <!-- dan seterusnya sesuai data -->
        </div>
      </Offcanvas>
      <div class="flex items-center justify-between text-sm text-gray-500 px-4 py-3">
        <span>Showing 10 of 110 Results</span>
        <div class="flex items-center gap-2">
          <ChevronLeft class="w-4 h-4" />
          <div class="flex gap-1">
            <button class="px-2 py-1 rounded bg-yellow-400 text-white">1</button>
            <button class="px-2 py-1">2</button>
            <button class="px-2 py-1">3</button>
            <span class="px-2 py-1">...</span>
            <button class="px-2 py-1">10</button>
          </div>
          <ChevronRight class="w-4 h-4" />
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search, MessageCircle, ShoppingCart, ChevronLeft, ChevronRight, EllipsisVertical } from "lucide-vue-next";
import Button from "../components/ui/Button.vue";
import Card from "../components/Card.vue";
import Offcanvas from "@/components/ui/Offcanvas.vue";

const showDetail = ref(false);
const selectedReservation = ref(null);

function openDetail(reservation) {
  selectedReservation.value = reservation;
  showDetail.value = true;
}

const tabs = ["Ongoing", "Previous", "Cancelled"];
const activeTab = ref("Ongoing");

const reservations = ref([
  {
    name: "Oliver Bennett",
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Verified",
    messages: 2,
  },
  {
    name: "Ethan Clark",
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Verified",
    messages: 2,
  },
  {
    name: "James Wilson",
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Verified",
    messages: 2,
  },
  {
    name: "Lily Martinez",
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Verified",
    messages: 2,
  },
  {
    name: "Sofia Bennett",
    location: "The Oakwood Suites",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Check in",
    messages: 10,
  },
  {
    name: "Masson Torres",
    location: "The Oakwood Suites",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Check in",
    messages: 10,
  },
  {
    name: "Noah Smith",
    location: "The Oakwood Suites",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Check in",
    messages: 10,
  },
  {
    name: "Lucas White",
    location: "The Oakwood Suites",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Check in",
    messages: 10,
  },
  {
    name: "Sophie Lang",
    location: "The Oakwood Suites",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Verify",
    messages: 0,
  },
  {
    name: "Chloe Adams",
    location: "The Oakwood Suites",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Verify",
    messages: 0,
  },
  {
    name: "Isabella Grant",
    location: "The Oakwood Suites",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    status: "Verify",
    messages: 0,
  },
]);
</script>

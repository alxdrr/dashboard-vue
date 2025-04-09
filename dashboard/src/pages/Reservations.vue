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
              <div class="flex items-center gap-2 border-1 justify-center py-1 rounded-full"><ShoppingCart class="w-4 h-4" /> 0 Payment</div>
            </td>
            <td class="px-4 py-1 text-xs">
              <div class="flex items-center gap-2 border-1 justify-center py-1 rounded-full"><ShoppingCart class="w-4 h-4" /> 0 Order</div>
            </td>
            <td class="px-4 py-1 text-xs">
              <div @click="openChat(item)" class="relative flex items-center gap-2 border-1 justify-center py-1 rounded-full cursor-pointer">
                <MessageCircle class="w-4 h-4" />
                Chat with us
                <span v-if="item.messages > 0" class="absolute z-10 -top-2 -right-2 ml-2 text-xs text-white bg-green-400 rounded-full w-5 h-5 flex items-center justify-center">
                  {{ item.messages }}
                </span>
              </div>
            </td>
            <td class="px-4 py-1">
              <button @click="openDetail(item)">
                <EllipsisVertical class="w-4 h-4 cursor-pointer" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Offcanvas :show="showChat" @close="showChat = false">
        <div class="h-full p-4 space-y-4 flex flex-col">
          <div class="relative">
            <button @click="showChat = false" class="absolute -left-6 text-gray-500 hover:text-black text-xl">&times;</button>
            <div>
              <h2 class="text-lg font-semibold">Chat with Us</h2>
            </div>
          </div>

          <div class="rounded-lg p-4 space-y-2 bg-gr ay-50">
            <h3 class="text-md font-semibold">
              {{ selectedChat?.name }} <span class="text-gray-400">+{{ selectedChat?.guestCount - 1 }} Guests</span>
            </h3>
            <p class="text-sm flex items-center gap-1">
              <Calendar size="14" />
              {{ selectedChat?.checkIn }} - {{ selectedChat?.checkOut }}
            </p>
            <p class="text-sm flex items-center gap-1">
              <MapPin size="14" />
              {{ selectedChat?.roomInfo }}
            </p>
          </div>

          <!-- Chat messages -->
          <div class="space-y-3 flex flex-col h-full">
            <div class="bg-yellow-300 text-sm text-black max-w-2/3 p-3 rounded-lg rounded-tr-none self-end">
              Good afternoon Juliantara!, Front office here, is there anything we can do to help you?
            </div>
            <div class="bg-gray-200 text-sm text-black max-w-2/3 p-3 rounded-lg rounded-tl-none w-fit">Yes, where’s the key?</div>
            <div class="bg-yellow-300 text-sm text-black max-w-2/3 p-3 rounded-lg rounded-tr-none w-fit self-end">
              Good afternoon! If you're looking for the property key, please head over to the front desk, and we'll be happy to assist you.
            </div>
          </div>

          <!-- Input -->
          <div class="pt-4 flex flex-col gap-2">
            <input type="text" placeholder="Type a message..." class="flex-1 bg-gray-200 rounded-sm px-3 py-2 text-sm" />
            <div class="flex justify-between">
              <button class="flex justify-center items-center gap-2 py-2 text-gray-600 rounded-sm w-max">
                <Sparkles color="gray" size="14" />
                <p>Generate</p>
              </button>
              <button class="px-12 py-2 bg-gray-200 text-gray-600 rounded-lg">Send</button>
            </div>
          </div>
        </div>
      </Offcanvas>

      <Offcanvas :show="showDetail" @close="showDetail = false">
        <div class="p-4 space-y-6">
          <!-- Header -->
          <div class="relative">
            <button @click="showDetail = false" class="absolute -left-6 text-gray-500 hover:text-black text-xl">&times;</button>
            <div>
              <h2 class="text-lg font-semibold">Detail Reservation</h2>
            </div>
          </div>

          <!-- Nama dan waktu -->
          <div class="space-y-1">
            <h3 class="text-xl font-semibold">
              {{ selectedReservation?.name }}
              <span class="text-gray-400 text-xs font-normal">+{{ selectedReservation?.guestCount - 1 }} Guests</span>
            </h3>

            <p class="text-sm flex items-center gap-1">
              <Calendar size="14" />
              {{ selectedReservation?.checkIn }} - {{ selectedReservation?.checkOut }}
            </p>
            <p class="text-sm flex items-center gap-1">
              <MapPin size="14" />
              {{ selectedReservation?.roomInfo }}
            </p>
            <hr class="border-neutral-200 mt-2" />
          </div>
          <!-- Status dan tombol ubah -->
          <div class="bg-gray-100 rounded-lg p-4 space-y-4">
            <div class="grid grid-cols-2 gap-y-2 text-sm relative">
              <p class="font-medium">Status</p>
              <span
                :class="[
                  'text-xs px-2 py-1 rounded-sm font-medium text-white w-max',
                  selectedReservation?.status === 'Verified' ? 'bg-green-400' : selectedReservation?.status === 'Check in' ? 'bg-orange-400' : 'bg-red-400',
                ]"
              >
                {{ selectedReservation?.status }}
              </span>
              <a href="" class="underline absolute right-2 text-xs">Change status</a>
              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Reservation ID</p>
              <p>{{ selectedReservation?.reservationId }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Email</p>
              <p>{{ selectedReservation?.email }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Verify Type</p>
              <p>{{ selectedReservation?.verifyType }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Age Group</p>
              <p>{{ selectedReservation?.ageGroup }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Country of Origin</p>
              <p>{{ selectedReservation?.originCountry }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Nationality</p>
              <p>{{ selectedReservation?.nationality }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Birth Date</p>
              <p>{{ selectedReservation?.birthDate }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Reason for Travel</p>
              <p>{{ selectedReservation?.travelReason }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Type of ID</p>
              <p>{{ selectedReservation?.idType }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">ID Number</p>
              <p>{{ selectedReservation?.idNumber }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Mode of Transport</p>
              <p>{{ selectedReservation?.transportMode }}</p>

              <hr class="col-span-2 border-neutral-300" />

              <p class="font-medium">Estimated Check-in</p>
              <p>{{ selectedReservation?.estimatedCheckIn }}</p>
            </div>
          </div>

          <!-- Guest Guide -->
          <div class="pt-4 flex gap-4">
            <button class="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-sm font-semibold">View Guest Guide</button>
            <button class="hover:bg-neutral-200 p-2 border-2 border-yellow-500 rounded-sm font-semibold"><Copy /></button>
          </div>
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
import { Search, MessageCircle, ShoppingCart, ChevronLeft, ChevronRight, EllipsisVertical, Calendar, MapPin, Copy, Sparkles } from "lucide-vue-next";
import Button from "../components/ui/Button.vue";
import Card from "../components/Card.vue";
import Offcanvas from "@/components/ui/Offcanvas.vue";

const showDetail = ref(false);
const selectedReservation = ref(null);

function openDetail(reservation) {
  selectedReservation.value = reservation;
  showDetail.value = true;
}

const showChat = ref(false);
const selectedChat = ref(null);

function openChat(guest) {
  selectedChat.value = guest;
  showChat.value = true;
}
const tabs = ["Ongoing", "Previous", "Cancelled"];
const activeTab = ref("Ongoing");

const reservations = ref([
  {
    name: "Oliver Bennett",
    guestCount: 2,
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Maple Grove Residences - Executive Suite",
    status: "Verified",
    reservationId: "resv-001",
    email: "oliver.bennett@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "United Kingdom",
    nationality: "British",
    birthDate: "10 Jun 1985",
    travelReason: "Business",
    idType: "Passport",
    idNumber: "A123456789",
    transportMode: "Plane",
    estimatedCheckIn: "19 May 2025, 02:00 PM",
    messages: 2,
  },
  {
    name: "Ethan Clark",
    guestCount: 3,
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Maple Grove Residences - Deluxe Room",
    status: "Verified",
    reservationId: "resv-002",
    email: "ethan.clark@example.com",
    verifyType: "Group",
    ageGroup: "Adult",
    originCountry: "USA",
    nationality: "American",
    birthDate: "22 Nov 1990",
    travelReason: "Leisure",
    idType: "Driver License",
    idNumber: "DL9847352",
    transportMode: "Car",
    estimatedCheckIn: "19 May 2025, 02:00 PM",
    messages: 2,
  },
  {
    name: "James Wilson",
    guestCount: 1,
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Maple Grove Residences - Studio",
    status: "Verified",
    reservationId: "resv-003",
    email: "james.wilson@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "Australia",
    nationality: "Australian",
    birthDate: "08 Mar 1988",
    travelReason: "Business",
    idType: "Passport",
    idNumber: "AU82947382",
    transportMode: "Plane",
    estimatedCheckIn: "19 May 2025, 02:00 PM",
    messages: 2,
  },
  {
    name: "Lily Martinez",
    guestCount: 2,
    location: "The Maple Grove Residences",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Maple Grove Residences - Cozy Room",
    status: "Verified",
    reservationId: "resv-004",
    email: "lily.martinez@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "Spain",
    nationality: "Spanish",
    birthDate: "18 Dec 1992",
    travelReason: "Leisure",
    idType: "National ID",
    idNumber: "ES93847282",
    transportMode: "Train",
    estimatedCheckIn: "19 May 2025, 02:00 PM",
    messages: 2,
  },
  {
    name: "Sofia Bennett",
    guestCount: 4,
    location: "The Oakwood Suites",
    date: "19 May - 02:00PM - 26 May - 01:30PM",
    checkIn: "19 May - 02:00 PM",
    checkOut: "26 May - 01:30 PM",
    roomInfo: "The Oakwood Suites - Family Suite",
    status: "Check in",
    reservationId: "resv-005",
    email: "sofia.bennett@example.com",
    verifyType: "Group",
    ageGroup: "Adult",
    originCountry: "Indonesia",
    nationality: "Indonesian",
    birthDate: "14 Mar 1999",
    travelReason: "Business",
    idType: "Passport",
    idNumber: "273293938882",
    transportMode: "Plane",
    estimatedCheckIn: "22 Mar 2025, 08:00 AM",
    messages: 10,
  },
  {
    name: "Masson Torres",
    guestCount: 2,
    location: "The R Loft Bali",
    date: "16 Mar - 20 Mar (4 days)",
    checkIn: "16 Mar - 02:00 PM",
    checkOut: "20 Mar - 12:00 PM",
    roomInfo: "The R Loft Bali - Cosy Room incl Breakfast",
    status: "Check in",
    reservationId: "resv-006",
    email: "masson.torres@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "France",
    nationality: "French",
    birthDate: "12 Sep 1984",
    travelReason: "Leisure",
    idType: "Passport",
    idNumber: "FR12934823",
    transportMode: "Plane",
    estimatedCheckIn: "16 Mar 2025, 02:00 PM",
    messages: 1,
  },
  {
    name: "Noah Smith",
    guestCount: 1,
    location: "The R Loft Bali",
    date: "17 Mar - 21 Mar (4 days)",
    checkIn: "17 Mar - 01:00 PM",
    checkOut: "21 Mar - 12:00 PM",
    roomInfo: "The R Loft Bali - Studio with Balcony",
    status: "Verify",
    reservationId: "resv-007",
    email: "noah.smith@example.com",
    verifyType: "Individual",
    ageGroup: "Adult",
    originCountry: "USA",
    nationality: "American",
    birthDate: "03 Jan 1996",
    travelReason: "Business",
    idType: "Driver License",
    idNumber: "US83848572",
    transportMode: "Car",
    estimatedCheckIn: "17 Mar 2025, 01:00 PM",
    messages: 0,
  },
  {
    name: "Lucas White",
    guestCount: 3,
    location: "The R Loft Bali",
    date: "18 Mar - 22 Mar (4 days)",
    checkIn: "18 Mar - 03:00 PM",
    checkOut: "22 Mar - 12:00 PM",
    roomInfo: "The R Loft Bali - Deluxe Garden View",
    status: "Verify",
    reservationId: "resv-008",
    email: "lucas.white@example.com",
    verifyType: "Group",
    ageGroup: "Adult",
    originCountry: "Canada",
    nationality: "Canadian",
    birthDate: "29 May 1990",
    travelReason: "Leisure",
    idType: "Passport",
    idNumber: "CA93848292",
    transportMode: "Plane",
    estimatedCheckIn: "18 Mar 2025, 03:00 PM",
    messages: 4,
  },
]);
</script>

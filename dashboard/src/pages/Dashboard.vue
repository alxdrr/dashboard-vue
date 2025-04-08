<template>
  <aside class="grid grid-cols-4 gap-6">
    <Card title="Total upsells">
      <template #icon>
        <div class="text-green-700 flex gap-2 text-xs justify-center items-center"><TrendingUp color="green" size="12" /> +16.24%</div>
      </template>
      <p class="text-5xl font-medium text-neutral-800 mb-2">20</p>
      <a href="" class="text-yellow-900 underline font-medium text-xs">view all upsells</a>
      <div class="p-4 bg-neutral-100 absolute bottom-4 right-4 rounded-md">$652</div>
    </Card>

    <Card title="Total orders">
      <template #icon>
        <div class="text-green-700 text-xs flex gap-2 justify-center items-center"><TrendingUp color="green" size="12" /> +12.24%</div>
      </template>
      <p class="text-5xl font-medium text-neutral-800 mb-2">17</p>
      <a href="" class="text-yellow-900 underline font-medium text-xs">view all orders</a>
      <div class="p-4 bg-neutral-100 absolute bottom-4 right-4 rounded-md">$4029</div>
    </Card>

    <Card title="Total active properties">
      <p class="text-5xl font-medium text-neutral-800 mb-2">3</p>
      <a href="" class="text-yellow-900 underline font-medium text-xs">View all listings</a>
      <div class="p-4 bg-neutral-100 absolute bottom-4 right-4 rounded-md"><House /></div>
    </Card>

    <Card title="Total customers">
      <template #icon>
        <div class="text-green-700 text-xs flex gap-2 justify-center items-center"><TrendingUp color="green" size="12" /> +11.24%</div>
      </template>
      <p class="text-5xl font-medium text-neutral-800 mb-2">15</p>
      <a href="" class="text-yellow-900 underline font-medium text-xs">View all customers</a>
      <div class="p-4 bg-neutral-100 absolute bottom-4 right-4 rounded-md"><Users /></div>
    </Card>

    <Card title="Sessions by Countries" class="col-span-3">
      <template #icon>
        <div class="text-xs flex gap-2 justify-center items-center">
          <CirclePlus color="gray" size="20" /><CircleMinus color="gray" size="20" /><ZoomIn color="gray" size="20" /><House size="20" /><EllipsisVertical size="20" />
        </div>
      </template>

      <SplineArea />
    </Card>

    <Card title="Current Statistic">
      <template #icon>
        <div class="text-xs flex gap-2 justify-center items-center"><EllipsisVertical size="20" /></div>
      </template>

      <RadialStat />
    </Card>

    <Card title="My Tasks" class="col-span-2">
      <template #icon>
        <div class="text-xs flex gap-2 justify-center items-center">
          <EllipsisVertical size="20" />
        </div>
      </template>

      <table class="w-full text-sm text-left mt-4">
        <thead class="text-gray-600 border-b border-gray-200">
          <tr>
            <th class="px-1 py-1"><input type="checkbox" /></th>
            <th class="px-1 py-1">Listing</th>
            <th class="px-1 py-1">Task Name</th>
            <th class="px-1 py-1">Priority</th>
            <th class="px-1 py-1">Date/Time Report</th>
            <th class="px-1 py-1">Progress</th>
            <th class="px-1 py-1">Assignee</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 divide-y divide-gray-200">
          <tr class="hover:bg-gray-50">
            <td class="px-1 py-1">
              <input type="checkbox" />
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 15</div>
              <div class="text-xs text-gray-500">The R Apartment</div>
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 4330</div>
              <div class="text-xs text-gray-500">Minibar stock report</div>
              <span class="text-[10px] mt-1 inline-block bg-gray-700 text-white px-2 py-[2px] rounded-full">Periodic</span>
            </td>
            <td class="px-1 py-1">
              <span class="bg-orange-400 text-white text-xs font-medium px-2 py-1 rounded">Medium</span>
            </td>
            <td class="px-1 py-1 text-sm text-gray-600">19 Feb - 09:00AM</td>
            <td class="px-1 py-1">
              <div class="flex items-center gap-2">
                <div class="w-12 bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div class="bg-yellow-400 h-1" style="width: 75%"></div>
                </div>
                <span class="text-xs font-medium text-gray-600">75%</span>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-3 text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="text-red-500" /></button>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-1 py-1">
              <input type="checkbox" />
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 15</div>
              <div class="text-xs text-gray-500">The R Apartment</div>
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 4330</div>
              <div class="text-xs text-gray-500">Minibar stock report</div>
              <span class="text-[10px] mt-1 inline-block bg-gray-700 text-white px-2 py-[2px] rounded-full">Periodic</span>
            </td>
            <td class="px-1 py-1">
              <span class="bg-orange-400 text-white text-xs font-medium px-2 py-1 rounded">Medium</span>
            </td>
            <td class="px-1 py-1 text-sm text-gray-600">19 Feb - 09:00AM</td>
            <td class="px-1 py-1">
              <div class="flex items-center gap-2">
                <div class="w-12 bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div class="bg-yellow-400 h-1" style="width: 75%"></div>
                </div>
                <span class="text-xs font-medium text-gray-600">75%</span>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-3 text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="text-red-500" /></button>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-1 py-1">
              <input type="checkbox" />
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 15</div>
              <div class="text-xs text-gray-500">The R Apartment</div>
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 4330</div>
              <div class="text-xs text-gray-500">Minibar stock report</div>
              <span class="text-[10px] mt-1 inline-block bg-gray-700 text-white px-2 py-[2px] rounded-full">Periodic</span>
            </td>
            <td class="px-1 py-1">
              <span class="bg-orange-400 text-white text-xs font-medium px-2 py-1 rounded">Medium</span>
            </td>
            <td class="px-1 py-1 text-sm text-gray-600">19 Feb - 09:00AM</td>
            <td class="px-1 py-1">
              <div class="flex items-center gap-2">
                <div class="w-12 bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div class="bg-yellow-400 h-1" style="width: 75%"></div>
                </div>
                <span class="text-xs font-medium text-gray-600">75%</span>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-3 text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="text-red-500" /></button>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-1 py-1">
              <input type="checkbox" />
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 15</div>
              <div class="text-xs text-gray-500">The R Apartment</div>
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 4330</div>
              <div class="text-xs text-gray-500">Minibar stock report</div>
              <span class="text-[10px] mt-1 inline-block bg-gray-700 text-white px-2 py-[2px] rounded-full">Periodic</span>
            </td>
            <td class="px-1 py-1">
              <span class="bg-orange-400 text-white text-xs font-medium px-2 py-1 rounded">Medium</span>
            </td>
            <td class="px-1 py-1 text-sm text-gray-600">19 Feb - 09:00AM</td>
            <td class="px-1 py-1">
              <div class="flex items-center gap-2">
                <div class="w-12 bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div class="bg-yellow-400 h-1" style="width: 75%"></div>
                </div>
                <span class="text-xs font-medium text-gray-600">75%</span>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-3 text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="text-red-500" /></button>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-1 py-1">
              <input type="checkbox" />
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 15</div>
              <div class="text-xs text-gray-500">The R Apartment</div>
            </td>
            <td class="px-1 py-1">
              <div class="font-semibold">ID: 4330</div>
              <div class="text-xs text-gray-500">Minibar stock report</div>
              <span class="text-[10px] mt-1 inline-block bg-gray-700 text-white px-2 py-[2px] rounded-full">Periodic</span>
            </td>
            <td class="px-1 py-1">
              <span class="bg-orange-400 text-white text-xs font-medium px-2 py-1 rounded">Medium</span>
            </td>
            <td class="px-1 py-1 text-sm text-gray-600">19 Feb - 09:00AM</td>
            <td class="px-1 py-1">
              <div class="flex items-center gap-2">
                <div class="w-12 bg-gray-200 h-1 rounded-full overflow-hidden">
                  <div class="bg-yellow-400 h-1" style="width: 75%"></div>
                </div>
                <span class="text-xs font-medium text-gray-600">75%</span>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-3 text-gray-500">
                <button><Eye size="16" /></button>
                <button><Pencil size="16" /></button>
                <button><Trash size="16" class="text-red-500" /></button>
              </div>
            </td>
          </tr>
          +
        </tbody>
      </table>

      <div class="flex justify-center mt-4">
        <button class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm text-gray-600">Load More</button>
      </div>
    </Card>

    <Card title="Team Members" class="col-span-2">
      <template #icon>
        <div class="text-xs flex gap-2 justify-center items-center">
          <EllipsisVertical size="20" />
        </div>
      </template>

      <table class="w-full text-sm text-left mt-4">
        <thead class="bg-gray-50 text-gray-600">
          <tr>
            <th class="px-4 py-2">Member</th>
            <th class="px-4 py-2">Hours</th>
            <th class="px-4 py-2">Tasks</th>
            <th class="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 divide-y divide-gray-200">
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 flex items-center gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="w-9 h-9 rounded-full object-cover" />
              <div>
                <div class="font-medium">Bessie Cooper</div>
                <div class="text-xs text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="px-4 py-3 font-medium text-gray-700">110h : <span class="text-gray-400 font-normal">150h</span></td>
            <td class="px-4 py-3 font-medium text-gray-700">258</td>
            <td class="px-4 py-3">
              <div class="w-12 h-12 relative">
                <svg class="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F97316" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="50" stroke-linecap="round" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-600">50%</div>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 flex items-center gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="w-9 h-9 rounded-full object-cover" />
              <div>
                <div class="font-medium">Bessie Cooper</div>
                <div class="text-xs text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="px-4 py-3 font-medium text-gray-700">110h : <span class="text-gray-400 font-normal">150h</span></td>
            <td class="px-4 py-3 font-medium text-gray-700">258</td>
            <td class="px-4 py-3">
              <div class="w-12 h-12 relative">
                <svg class="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F97316" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="50" stroke-linecap="round" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-600">50%</div>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 flex items-center gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="w-9 h-9 rounded-full object-cover" />
              <div>
                <div class="font-medium">Bessie Cooper</div>
                <div class="text-xs text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="px-4 py-3 font-medium text-gray-700">110h : <span class="text-gray-400 font-normal">150h</span></td>
            <td class="px-4 py-3 font-medium text-gray-700">258</td>
            <td class="px-4 py-3">
              <div class="w-12 h-12 relative">
                <svg class="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F6BB11" stroke-width="4" stroke-dasharray="96" stroke-dashoffset="75.5" stroke-linecap="round" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-600">25%</div>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 flex items-center gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="w-9 h-9 rounded-full object-cover" />
              <div>
                <div class="font-medium">Bessie Cooper</div>
                <div class="text-xs text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="px-4 py-3 font-medium text-gray-700">110h : <span class="text-gray-400 font-normal">150h</span></td>
            <td class="px-4 py-3 font-medium text-gray-700">258</td>
            <td class="px-4 py-3">
              <div class="w-12 h-12 relative">
                <svg class="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F6BB11" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="25" stroke-linecap="round" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-600">75%</div>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 flex items-center gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="w-9 h-9 rounded-full object-cover" />
              <div>
                <div class="font-medium">Bessie Cooper</div>
                <div class="text-xs text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="px-4 py-3 font-medium text-gray-700">110h : <span class="text-gray-400 font-normal">150h</span></td>
            <td class="px-4 py-3 font-medium text-gray-700">258</td>
            <td class="px-4 py-3">
              <div class="w-12 h-12 relative">
                <svg class="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#10B981" stroke-width="4" stroke-dasharray="113.1" stroke-dashoffset="0" stroke-linecap="round" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-600">100%</div>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 flex items-center gap-3">
              <img src="../assets/avatar-2.png" alt="avatar" class="w-9 h-9 rounded-full object-cover" />
              <div>
                <div class="font-medium">Bessie Cooper</div>
                <div class="text-xs text-gray-500">Product Manager</div>
              </div>
            </td>
            <td class="px-4 py-3 font-medium text-gray-700">110h : <span class="text-gray-400 font-normal">150h</span></td>
            <td class="px-4 py-3 font-medium text-gray-700">258</td>
            <td class="px-4 py-3">
              <div class="w-12 h-12 relative">
                <svg class="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F3F4F6" stroke-width="4" />
                  <circle cx="18" cy="18" r="16" fill="none" stroke="#F97316" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="50" stroke-linecap="round" />
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-600">50%</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex justify-between items-center text-xs text-gray-400 mt-4 px-2">
        <span>Showing 5 of 25 Results</span>
        <div class="flex items-center gap-2">
          <button class="p-1 hover:text-black">&lt;</button>
          <button class="bg-yellow-400 text-white px-2 py-1 rounded">1</button>
          <button class="hover:text-black">2</button>
          <button class="hover:text-black">3</button>
          <span>...</span>
          <button class="hover:text-black">10</button>
          <button class="p-1 hover:text-black">&gt;</button>
        </div>
      </div>
    </Card>
  </aside>
</template>
<script setup>
import Card from "../components/Card.vue";
import RadialStat from "../components/charts/RadialStat.vue";
import SplineArea from "../components/charts/SplineArea.vue";
import { TrendingUp, House, Users, CirclePlus, CircleMinus, ZoomIn, EllipsisVertical, Eye, Pencil, Trash } from "lucide-vue-next";
</script>

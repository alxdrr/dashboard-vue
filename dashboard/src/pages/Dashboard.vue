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
        <div class="text-xs flex gap-2 justify-center items-center"><EllipsisVertical size="20" /></div>
      </template>
    </Card>

    <Card title="Team Members" class="col-span-2">
      <template #icon>
        <div class="text-xs flex gap-2 justify-center items-center"><EllipsisVertical size="20" /></div>
      </template>
    </Card>
  </aside>
</template>
<script setup>
import Card from "../components/Card.vue";
import RadialStat from "../components/charts/RadialStat.vue";
import SplineArea from "../components/charts/SplineArea.vue";
import { TrendingUp, House, Users, CirclePlus, CircleMinus, ZoomIn, EllipsisVertical } from "lucide-vue-next";
</script>

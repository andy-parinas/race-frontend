<script setup>
const states = ["NSW", "NT", "VIC", "QLD", "SA", "TAS", "WA"];
</script>
<template>
    <div
        class="flex items-center justify-center gap-x-2 mb-2 flex-wrap gap-y-2 ring-gray-900/5 ring-1 px-1 py-3"
    >
        <div
            v-for="state in states"
            :key="state"
            class="text-orange-700 ring-orange-600/20 ring-1 ring-inset py-2 text-xs lg:text-sm w-16 text-center rounded hover:bg-orange-100 hover:cursor-pointer"
        >
            {{ state }}
        </div>
    </div>
</template>

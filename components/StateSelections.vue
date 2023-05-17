<script setup>
const states = ["NSW", "NT", "VIC", "QLD", "SA", "TAS", "WA"];

const selectedState = ref("");

function setSelectedState(state) {
    selectedState.value = state;
}
</script>
<template>
    <div
        class="flex items-center justify-center gap-x-2 mb-2 flex-wrap gap-y-2 ring-gray-900/5 ring-1 px-1 py-3"
    >
        <button
            v-for="state in states"
            :key="state"
            @click="setSelectedState(state)"
            :class="[
                selectedState === state
                    ? 'bg-orange-200'
                    : 'hover:bg-orange-200',
                'text-orange-700 ring-orange-600/20 ring-1 ring-inset py-2 text-xs lg:text-sm w-16 text-center rounded  hover:cursor-pointer',
            ]"
        >
            {{ state }}
        </button>
    </div>
</template>

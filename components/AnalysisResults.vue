<script setup>
const props = defineProps(["results"]);
</script>
<template>
    <ul
        role="list"
        class="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
        <li
            v-for="result in results"
            :key="result.id"
            class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 hover:cursor-pointer sm:px-6"
        >
            <AnalysisResultList :result="result" />
        </li>
    </ul>
</template>

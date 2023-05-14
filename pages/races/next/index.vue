<script setup>
const {
    data: races,
    pending,
    refresh,
} = useFetch("https://6460a8a7ca2d89f7e75c3518.mockapi.io/api/v1/races");

// setInterval(() => {
//     refresh();
// }, 60000);
</script>
<template>
    <div>
        <header
            class="flex items-center justify-between border-b border-white/5 px-4 pb-2 lg:pb-2 sm:px-6 sm:py-6 lg:px-8 pr"
        >
            <h1 class="text-base font-semibold leading-7">
                <span v-if="pending">Loading </span> <span>Next Race</span>
                <span v-if="pending">... </span>
            </h1>
            <NuxtLink class="text-sm text-blue-600" to="/races/all">
                Show More
            </NuxtLink>
        </header>
        <!-- <pre>{{ races }}</pre> -->
        <NextRaceList v-if="races" :races="races" />
        <div v-else>Loading</div>
    </div>
</template>

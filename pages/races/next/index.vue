<script setup>
function getCurrentDateTime() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}-${hours}-${minutes}`;
}

function getEndDateTime() {
    const currentDate = new Date();
    var futureDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
    const year = futureDate.getFullYear();
    const month = String(futureDate.getMonth() + 1).padStart(2, "0");
    const day = String(futureDate.getDate()).padStart(2, "0");
    const hours = String(futureDate.getHours()).padStart(2, "0");
    const minutes = String(futureDate.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}-${hours}-${minutes}`;
}

const currentDateTime = ref(getCurrentDateTime());
const endDateTime = ref(getEndDateTime());

const {
    data: races,
    pending,
    refresh,
} = useFetch(
    `http://127.0.0.1:8000/races/?datetime=${currentDateTime.value}&datetime_end=${endDateTime.value}&date_filter=bet`
);

// setInterval(() => {
//     refresh();
// }, 60000);
</script>
<template>
    <div>
        <pre>{{ currentDateTime }} {{ endDateTime }}</pre>
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
        <!-- <pre>{{ races.races }}</pre> -->
        <NextRaceList v-if="races" :races="races.races" />
        <div v-else>Loading</div>
    </div>
</template>

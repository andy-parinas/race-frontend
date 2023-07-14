<script setup>
import { getCurrentDate, getNextDate } from "../../../utils/dateformat";

const selectedDate = ref(null);
// const selectedDate = ref(new Date().toLocaleDateString());
const selectedState = ref(null);

const races = ref([]);
const meetings = ref([]);

// const { data: races, refresh } = await useFetch(
//     `https://6460a8a7ca2d89f7e75c3518.mockapi.io/api/v1/races?date=${selectedDate.value}`
// );

function dateChanged(date) {
    selectedDate.value = date;
    // refresh();
}

function stateChanged(state) {
    selectedState.value = state;
}

watch(
    [selectedDate, selectedState],
    async ([newDate, newState], [oldDate, oldState]) => {
        if (selectedDate.value) {
            let url = `http://127.0.0.1:8000/meetings/?date=${selectedDate.value}`;

            if (selectedState.value) {
                url = url + `&state=${selectedState.value}`;
            }

            const response = await $fetch(url);
            meetings.value = response.meetings;
        }
    }
);

onMounted(() => {
    selectedDate.value = getCurrentDate();
});
</script>
<template>
    <div>
        <header
            className="flex items-center justify-between border-b border-white/5 px-4 pb-2 lg:pb-2 sm:px-6 sm:py-6 lg:px-8 pr"
        >
            <h1 className="text-base font-semibold leading-7">All Races</h1>
        </header>
        <DaysSelection @on-day-change="(date) => dateChanged(date)" />
        <StateSelections @on-state-change="(state) => stateChanged(state)" />
        <div v-if="meetings.length > 0">
            <AllRaceList :meetings="meetings" />
        </div>
        <div v-else>
            No Races found for the selected date and state. Please try again.
        </div>
        <!-- <pre>{{ meetings }}</pre> -->
    </div>
</template>

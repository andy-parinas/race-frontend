<script setup>
const meetings = [
    {
        id: 1,
        name: "Gold Coast",
        state: "QLD",
        track: "G",
        races: [
            {
                id: 1,
                name: "Race 1",
                raceNumber: 1,
                status: "12:30 PM",
            },
            {
                id: 2,
                name: "Race 2",
                raceNumber: 2,
                status: "12:30 PM",
            },
            {
                id: 3,
                name: "Race 3",
                raceNumber: 3,
                status: "6:30 PM",
            },
            {
                id: 3,
                name: "Race 4",
                raceNumber: 4,
                status: "7:00 PM",
            },

            {
                id: 5,
                name: "Race 5",
                raceNumber: 5,
                status: "8:00 PM",
            },
            {
                id: 6,
                name: "Race 6",
                raceNumber: 6,
                status: "12:30 PM",
            },
            {
                id: 7,
                name: "Race 7",
                raceNumber: 7,
                status: "6:30 PM",
            },
            {
                id: 8,
                name: "Race 8",
                raceNumber: 8,
                status: "7:00 PM",
            },
            {
                id: 9,
                name: "Race 9",
                raceNumber: 9,
                status: "8:00 PM",
            },
            {
                id: 10,
                name: "Race 10",
                raceNumber: 10,
                status: "8:00 PM",
            },
            {
                id: 11,
                name: "Race 11",
                raceNumber: 11,
                status: "8:00 PM",
            },
            {
                id: 12,
                name: "Race 12",
                raceNumber: 12,
                status: "8:00 PM",
            },
        ],
    },
    {
        id: 2,
        name: "Sunshine Coast",
        state: "QLD",
        track: "G",
        races: [
            {
                id: 1,
                name: "Race 1",
                raceNumber: 1,
                status: "12:30 PM",
            },
            {
                id: 2,
                name: "Race 2",
                raceNumber: 2,
                status: "12:30 PM",
            },
            {
                id: 3,
                name: "Race 3",
                raceNumber: 3,
                status: "6:30 PM",
            },
            {
                id: 3,
                name: "Race 4",
                raceNumber: 4,
                status: "7:00 PM",
            },

            {
                id: 5,
                name: "Race 5",
                raceNumber: 5,
                status: "8:00 PM",
            },
            {
                id: 6,
                name: "Race 6",
                raceNumber: 6,
                status: "12:30 PM",
            },
            {
                id: 7,
                name: "Race 7",
                raceNumber: 7,
                status: "6:30 PM",
            },
            {
                id: 8,
                name: "Race 8",
                raceNumber: 8,
                status: "7:00 PM",
            },
            {
                id: 9,
                name: "Race 9",
                raceNumber: 9,
                status: "8:00 PM",
            },
            {
                id: 10,
                name: "Race 10",
                raceNumber: 10,
                status: "8:00 PM",
            },
            {
                id: 11,
                name: "Race 11",
                raceNumber: 11,
                status: "8:00 PM",
            },
            {
                id: 12,
                name: "Race 12",
                raceNumber: 12,
                status: "8:00 PM",
            },
        ],
    },
    {
        id: 3,
        name: "Warwick Farm",
        state: "NSW",
        track: "G",
        races: [
            {
                id: 1,
                name: "Race 1",
                raceNumber: 1,
                status: "12:30 PM",
            },
            {
                id: 2,
                name: "Race 2",
                raceNumber: 2,
                status: "12:30 PM",
            },
            {
                id: 3,
                name: "Race 3",
                raceNumber: 3,
                status: "6:30 PM",
            },
            {
                id: 3,
                name: "Race 4",
                raceNumber: 4,
                status: "7:00 PM",
            },

            {
                id: 5,
                name: "Race 5",
                raceNumber: 5,
                status: "8:00 PM",
            },
            {
                id: 6,
                name: "Race 6",
                raceNumber: 6,
                status: "12:30 PM",
            },
            {
                id: 7,
                name: "Race 7",
                raceNumber: 7,
                status: "6:30 PM",
            },
            {
                id: 8,
                name: "Race 8",
                raceNumber: 8,
                status: "7:00 PM",
            },
            {
                id: 9,
                name: "Race 9",
                raceNumber: 9,
                status: "8:00 PM",
            },
            {
                id: 10,
                name: "Race 10",
                raceNumber: 10,
                status: "8:00 PM",
            },
            {
                id: 11,
                name: "Race 11",
                raceNumber: 11,
                status: "8:00 PM",
            },
            {
                id: 12,
                name: "Race 12",
                raceNumber: 12,
                status: "8:00 PM",
            },
        ],
    },
    {
        id: 4,
        name: "Rosehill Gardens",
        state: "NSW",
        track: "G",
        races: [
            {
                id: 1,
                name: "Race 1",
                raceNumber: 1,
                status: "12:30 PM",
            },
            {
                id: 2,
                name: "Race 2",
                raceNumber: 2,
                status: "12:30 PM",
            },
            {
                id: 3,
                name: "Race 3",
                raceNumber: 3,
                status: "6:30 PM",
            },
            {
                id: 3,
                name: "Race 4",
                raceNumber: 4,
                status: "7:00 PM",
            },

            {
                id: 5,
                name: "Race 5",
                raceNumber: 5,
                status: "8:00 PM",
            },
            {
                id: 6,
                name: "Race 6",
                raceNumber: 6,
                status: "12:30 PM",
            },
            {
                id: 7,
                name: "Race 7",
                raceNumber: 7,
                status: "6:30 PM",
            },
            {
                id: 8,
                name: "Race 8",
                raceNumber: 8,
                status: "7:00 PM",
            },
            {
                id: 9,
                name: "Race 9",
                raceNumber: 9,
                status: "8:00 PM",
            },
            {
                id: 10,
                name: "Race 10",
                raceNumber: 10,
                status: "8:00 PM",
            },
            {
                id: 11,
                name: "Race 11",
                raceNumber: 11,
                status: "8:00 PM",
            },
            {
                id: 12,
                name: "Race 12",
                raceNumber: 12,
                status: "8:00 PM",
            },
        ],
    },
];

const selectedDate = ref(null);
// const selectedDate = ref(new Date().toLocaleDateString());
const selectedState = ref(null);

const races = ref([]);

// const { data: races, refresh } = await useFetch(
//     `https://6460a8a7ca2d89f7e75c3518.mockapi.io/api/v1/races?date=${selectedDate.value}`
// );

function dateChanged(date) {
    selectedDate.value = date;
    // refresh();
}

watch(
    [selectedDate, selectedState],
    async ([newDate, newState], [oldDate, oldState]) => {
        if (selectedDate.value || selectedState.value) {
            const response = await $fetch(
                `https://6460a8a7ca2d89f7e75c3518.mockapi.io/api/v1/races?date=${selectedDate.value}`
            );
            console.log("call API here", response);
            races.value = response;
        }
    }
);

onMounted(() => {
    selectedDate.value = new Date().toLocaleDateString();
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
        <StateSelections />
        <div v-if="races.length > 0">
            <AllRaceList :meetings="meetings" />
        </div>
        <div v-else>
            No Races found for the selected date and state. Please try again.
        </div>
    </div>
</template>

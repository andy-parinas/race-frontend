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
</script>
<template>
    <div>
        <header
            className="flex items-center justify-between border-b border-white/5 px-4 pb-2 lg:pb-2 sm:px-6 sm:py-6 lg:px-8 pr"
        >
            <h1 className="text-base font-semibold leading-7">All Races</h1>
        </header>
        <DaysSelection />
        <StateSelections />
        <AllRaceList :meetings="meetings" />
    </div>
</template>

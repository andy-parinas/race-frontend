<script setup>
const races = [
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
];

const horsesForms = [
    {
        name: "Horse 1",
        forms: [
            { name: "career", title: "Career", value: "5 0-1-1" },
            { name: "track", title: "Track", value: "5 0-1-1" },
            { name: "distance", title: "Distance", value: "5 0-1-1" },
            {
                name: "distance_track",
                title: "Trk/Dist",
                value: "5 0-1-1",
            },
            { name: "good", title: "Good", value: "5 0-1-1" },
            { name: "soft", title: "Soft", value: "5 0-1-1" },
            { name: "synthetic", title: "Synthetic", value: "5 0-1-1" },
            { name: "first_up", title: "First Up", value: "5 0-1-1" },
            { name: "second_up", title: "Second Up", value: "5 0-1-1" },
        ],
    },
    {
        name: "Horse 2",
        forms: [
            { name: "career", title: "Career", value: "5 0-1-1" },
            { name: "track", title: "Track", value: "5 0-1-1" },
            { name: "distance", title: "Distance", value: "5 0-1-1" },
            {
                name: "distance_track",
                title: "Trk/Dist",
                value: "5 0-1-1",
            },
            { name: "good", title: "Good", value: "5 0-1-1" },
            { name: "soft", title: "Soft", value: "5 0-1-1" },
            { name: "synthetic", title: "Synthetic", value: "5 0-1-1" },
            { name: "first_up", title: "First Up", value: "5 0-1-1" },
            { name: "second_up", title: "Second Up", value: "5 0-1-1" },
        ],
    },
    {
        name: "Horse 3",
        forms: [
            { name: "career", title: "Career", value: "5 0-1-1" },
            { name: "track", title: "Track", value: "5 0-1-1" },
            { name: "distance", title: "Distance", value: "5 0-1-1" },
            {
                name: "distance_track",
                title: "Trk/Dist",
                value: "5 0-1-1",
            },
            { name: "good", title: "Good", value: "5 0-1-1" },
            { name: "soft", title: "Soft", value: "5 0-1-1" },
            { name: "synthetic", title: "Synthetic", value: "5 0-1-1" },
            { name: "first_up", title: "First Up", value: "5 0-1-1" },
            { name: "second_up", title: "Second Up", value: "5 0-1-1" },
        ],
    },
    {
        name: "Horse 4",
        forms: [
            { name: "career", title: "Career", value: "5 0-1-1" },
            { name: "track", title: "Track", value: "5 0-1-1" },
            { name: "distance", title: "Distance", value: "5 0-1-1" },
            {
                name: "distance_track",
                title: "Trk/Dist",
                value: "5 0-1-1",
            },
            { name: "good", title: "Good", value: "5 0-1-1" },
            { name: "soft", title: "Soft", value: "5 0-1-1" },
            { name: "synthetic", title: "Synthetic", value: "5 0-1-1" },
            { name: "first_up", title: "First Up", value: "5 0-1-1" },
            { name: "second_up", title: "Second Up", value: "5 0-1-1" },
        ],
    },
    {
        name: "Horse 5",
        forms: [
            { name: "career", title: "Career", value: "5 0-1-1" },
            { name: "track", title: "Track", value: "5 0-1-1" },
            { name: "distance", title: "Distance", value: "5 0-1-1" },
            {
                name: "distance_track",
                title: "Trk/Dist",
                value: "5 0-1-1",
            },
            { name: "good", title: "Good", value: "5 0-1-1" },
            { name: "soft", title: "Soft", value: "5 0-1-1" },
            { name: "synthetic", title: "Synthetic", value: "5 0-1-1" },
            { name: "first_up", title: "First Up", value: "5 0-1-1" },
            { name: "second_up", title: "Second Up", value: "5 0-1-1" },
        ],
    },
    {
        name: "Horse 6",
        forms: [
            { name: "career", title: "Career", value: "5 0-1-1" },
            { name: "track", title: "Track", value: "5 0-1-1" },
            { name: "distance", title: "Distance", value: "5 0-1-1" },
            {
                name: "distance_track",
                title: "Trk/Dist",
                value: "5 0-1-1",
            },
            { name: "good", title: "Good", value: "5 0-1-1" },
            { name: "soft", title: "Soft", value: "5 0-1-1" },
            { name: "synthetic", title: "Synthetic", value: "5 0-1-1" },
            { name: "first_up", title: "First Up", value: "5 0-1-1" },
            { name: "second_up", title: "Second Up", value: "5 0-1-1" },
        ],
    },
];
</script>
<template>
    <div>
        <header
            className="flex items-center justify-between border-b border-white/5 px-4 pb-2 lg:pb-2 sm:px-6 sm:py-6 lg:px-8 pr"
        >
            <h1 className="text-base font-semibold leading-7">
                Gold Coast - Races Details
            </h1>
        </header>
        <div
            class="flex items-center justify-start w-full gap-x-5 mt-3 overflow-auto pb-4 lg:pb-1"
        >
            <div
                v-for="race in races"
                :key="race.id"
                class="flex flex-col justify-center items-center gap-y-2"
            >
                <div
                    class="h-11 w-11 rounded-full text-center flex justify-center items-center text-gray-800 text-xs ring-gray-600/20 ring-1 ring-inset hover:bg-slate-200 hover:cursor-pointer"
                >
                    <span class="text-xs"> R{{ race.raceNumber }} </span>
                </div>
                <!-- <div class="text-xs leading-4 flex flex-col items-center mb-2">
                    <div>16:30</div>
                    <div>1600m</div>
                </div> -->
            </div>
        </div>
        <div>Race Selected Details here</div>
        <ul
            role="list"
            class="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
        >
            <li
                v-for="horse in horsesForms"
                class="mt-2 flex flex-col px-4 py-3 rounded-md gap-y-2"
            >
                <div class="text-sm flex items-center justify-between">
                    <div>{{ horse.name }}</div>
                    <div class="flex gap-x-2">
                        <div class="text-xs text-gray-500">Jockey Name</div>
                        <div class="text-xs text-gray-500">Trainer Name</div>
                    </div>
                </div>
                <div class="flex flex-1 gap-x-4">
                    <div class="bg-red-600 w-20 h-20 hidden lg:block"></div>
                    <!-- Form List here -->
                    <FormList :forms="horse.forms" />
                </div>
            </li>
        </ul>
    </div>
</template>

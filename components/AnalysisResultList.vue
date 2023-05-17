<script setup>
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["result"]);

const showAllForms = ref(false);

const forms = [
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
];

const selectedForms = [
    {
        name: "first_up",
        title: "First Up",
        value: "5 0-1-1",
        secondary: "42x11x223x",
    },
    {
        name: "distance_track",
        title: "Trk/Dist",
        value: "5 0-1-1",
        secondary: "EAF - 1200m",
    },
    {
        name: "current_jockey",
        title: "Horse/Jock",
        value: "5 0-1-1",
        secondary: "Andy Parinas",
    },
    {
        name: "synthetic",
        title: "Synthetic",
        value: "5 0-1-1",
        secondary: "Synthetic",
    },
];
</script>
<template>
    <div class="flex flex-col flex-1">
        <div class="flex items-center gap-x-3">
            <div
                class="text-xs lg:text-sm leading-6 text-gray-900 w-48 lg:w-1/3"
            >
                {{ result.horseName }}
            </div>

            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                    class="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0.5 leading-none rounded-full"
                    :style="{ width: result.rating + '%' }"
                >
                    {{ result.rating }}
                </div>
            </div>
        </div>
        <div
            class="mt-1.5 flex items-center gap-x-2 text-xs leading-5 text-gray-500"
        >
            <p class="whitespace-nowrap">{{ result.meeting }}</p>
            <p class="truncate">{{ result.race }}</p>
        </div>
        <!-- Selected Form Here -->
        <FormListSelected :selectedForms="selectedForms" />
        <div class="mt-2 flex items-center justify-between">
            <div>
                <!-- <img class="w-12 lg:w-16" src="{colours}" /> -->
            </div>
            <BrokerList />
        </div>
        <div class="mt-1">
            <button
                @click="showAllForms = !showAllForms"
                class="text-xs text-blue-700 font-medium"
            >
                <span>{{
                    showAllForms ? "Hide Forms" : "Show All Forms"
                }}</span>
                <!-- <ChevronDoubleRightIcon class="h-4 w-4 inline-block" /> -->
            </button>
        </div>
        <div v-if="showAllForms" class="mt-2">
            <FormList :forms="forms" />
        </div>
    </div>
</template>

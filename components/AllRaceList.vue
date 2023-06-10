<script setup>
import { ChevronDoubleRightIcon } from "@heroicons/vue/20/solid";

const props = defineProps(["meetings"]);
</script>
<template>
    <ul
        role="list"
        class="divide-y divide-gray-100 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
        <li
            v-for="meeting in meetings"
            :key="meeting.id"
            class="relative flex flex-col justify-between gap-x-6 px-4 py-5 hover:bg-slate-50 sm:px-6"
        >
            <div class="flex-1 overflow-auto">
                <div class="flex justify-between items-center gap-x-2">
                    <div class="flex items-center gap-x-1">
                        <p
                            class="text-xs lg:text-sm font-medium text-gray-800 uppercase px-2 py-1"
                        >
                            {{ meeting.track.state }}
                        </p>
                        <p
                            class="text-xs lg:text-sm font-medium text-gray-800 uppercase px-2 py-1"
                        >
                            {{ meeting.track.name }}
                        </p>
                        <p
                            class="text-xs text-gray-700 bg-gray-50 rounded ring-gray-600/20 ring-1 ring-inset px-2 py-1"
                        >
                            Track: {{ meeting.track_surface }}
                        </p>
                    </div>
                    <div
                        class="flex items-center gap-x-3 leading-5 text-gray-500"
                    >
                        <button
                            type="button"
                            class="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-500 shadow-sm ring-1 ring-inset ring-blue-300 hover:bg-blue-100 uppercase leading-3"
                        >
                            Select All
                        </button>
                    </div>
                </div>
                <div
                    class="flex items-center justify-start w-full gap-x-5 mt-3 overflow-auto"
                >
                    <div
                        v-for="race in meeting.races"
                        :key="race.id + meeting.id"
                        class="flex flex-col justify-center items-center gap-y-2"
                    >
                        <div
                            class="h-11 w-11 rounded-full text-center flex justify-center items-center text-gray-800 text-xs ring-gray-600/20 ring-1 ring-inset hover:bg-slate-200 hover:cursor-pointer"
                        >
                            <span class="text-xs">
                                R{{ race.race_number }}
                            </span>
                        </div>
                        <div
                            class="text-xs leading-4 flex flex-col items-center mb-2"
                        >
                            <div>
                                {{
                                    new Date(race.date_time).toLocaleTimeString(
                                        "en-US",
                                        {
                                            hour: "numeric",
                                            minute: "numeric",
                                            hour12: false,
                                        }
                                    )
                                }}
                            </div>
                            <div>{{ race.distance }}m</div>
                        </div>
                    </div>
                </div>
            </div>
            <NuxtLink
                :to="`/races/all/details/${meeting.id}`"
                class="flex items-center text-xs lg:text-sm text-orange-500 hover:text-orange-700 mt-3 w-fit"
            >
                Details
                <ChevronDoubleRightIcon class="h-4 w-4" />
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
const props = defineProps(["races"]);

const prefs = ["good", "heavy", "first_up", "current_jockey"];

const prefsQuery = computed(() => {
    return prefs.map((pref) => `prefs=${pref}`).join("&");
});

const timeOptions = ref({
    hour: "numeric",
    minute: "numeric",
    hour12: true,
});
</script>
<template>
    <ul
        role="list"
        class="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
        <li
            v-for="race in props.races"
            :key="race.id"
            class="relative flex justify-between"
        >
            <NuxtLink
                :to="`/races/next/results/${race.id}?`"
                class="flex-1 gap-x-6 px-4 py-5 hover:bg-gray-50 hover:cursor-pointer sm:px-6"
            >
                <div class="flex-1 flex items-center justify-between gap-x-3">
                    <div class="flex gap-x-3 items-center">
                        <p class="text-xs lg:text-sm leading-6 text-gray-900">
                            Race {{ race.race_number }}
                        </p>
                        <p>-</p>
                        <p class="text-xs lg:text-sm leading-6 text-gray-900">
                            {{ race.name }}
                        </p>
                    </div>
                    <p
                        class="text-green-700 bg-green-50 ring-green-600/20 rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                    >
                        {{
                            new Date(race.date_time).toLocaleTimeString(
                                "en-AU",
                                timeOptions
                            )
                        }}
                    </p>
                </div>
                <div
                    class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500"
                >
                    <p class="whitespace-nowrap">
                        Track: {{ race.meeting.track.name }}
                    </p>
                    <p>-</p>
                    <p class="truncate">
                        Surface: {{ race.meeting.track_surface }}
                    </p>
                </div>
            </NuxtLink>
            <!-- <div class="flex items-center gap-x-4">
                <ChevronRightIcon
                    class="h-5 w-5 flex-none text-grey-400"
                    aria-hidden="true"
                />
            </div> -->
        </li>
    </ul>
</template>

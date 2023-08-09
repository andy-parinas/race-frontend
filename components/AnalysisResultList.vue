<script setup>
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";
import { usePreferenceStore } from "~/stores/preferences";

const props = defineProps(["result"]);

const showAllForms = ref(false);

const prefStore = usePreferenceStore();

const selectedForms = computed(() => {
    return props.result.details.horse.stats.filter((stat) =>
        prefStore.selectedPreference.includes(stat.stat)
    );
});
</script>
<template>
    <div
        class="flex flex-col flex-1 border mb-5 border-gray-300 rounded-md px-4 py-5 shadow-md"
    >
        <div class="flex flex-col">
            <div class="flex items-center gap-x-3">
                <div class="flex items-center w-40 lg:w-1/3">
                    <div class="hidden sm:block">
                        <img
                            class="w-6 lg:w-8"
                            :src="result.details.horse_race_info.colours_pic"
                        />
                    </div>
                    <div class="ml-0 lg:ml-4">
                        <div
                            class="text-sm lg:text-base leading-6 text-gray-900 font-medium"
                        >
                            {{ result.details.horse.horse_name }}
                        </div>
                        <div
                            class="flex items-center gap-x-2 text-sm leading-5 text-gray-700"
                        >
                            <p class="whitespace-nowrap">
                                {{ result.details.race.meeting.track.name }}
                            </p>
                            <p class="truncate">
                                R{{ result.details.race.race_number }}
                            </p>
                        </div>
                        <div class="text-xs text-gray-500">
                            {{ result.details.horse_race_info.last_starts }}
                        </div>
                    </div>
                </div>

                <div class="flex-1 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                        class="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0.5 leading-none rounded-full"
                        :style="{ width: result.rating * 100 + '%' }"
                    >
                        {{ Math.floor(result.rating * 100) }}
                    </div>
                </div>
            </div>
        </div>
        <!-- Selected Form Here -->
        <div>
            <FormListSelected :selectedForms="selectedForms" />
        </div>
        <div class="mt-2">
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
            <FormList :forms="result.details.horse.stats" />
        </div>
    </div>
</template>

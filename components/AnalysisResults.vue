<script setup>
import { ChevronDoubleRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps(["results"]);
</script>
<template>
    <ul
        role="list"
        class="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
        <li
            v-for="result in results"
            :key="result.id"
            class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 hover:cursor-pointer sm:px-6"
        >
            <div class="flex flex-col flex-1">
                <div class="flex items-center gap-x-3">
                    <div
                        class="text-xs lg:text-sm leading-6 text-gray-900 w-48 lg:w-1/3"
                    >
                        {{ result.horseName }}
                    </div>

                    <div
                        class="w-full bg-gray-200 rounded-full dark:bg-gray-700"
                    >
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
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
                        <circle cx="{1}" cy="{1}" r="{1}" />
                    </svg>
                    <p class="truncate">{{ result.race }}</p>
                </div>
                <div
                    class="mt-2 flex items-center justify-between gap-x-2 text-xs leading-5 text-gray-500"
                >
                    <div class="flex-1 text-center flex flex-col gap-y-1">
                        <div
                            class="font-medium text-gray-500 text-xs leading-5"
                        >
                            1st Up
                        </div>
                        <div
                            class="bg-orange-100 text-orange-700 ring-orange-600/20 ring-1 ring-inset rounded"
                        >
                            5 : 2-2-0
                        </div>
                        <div>42x11x223x</div>
                    </div>
                    <div class="flex-1 text-center flex flex-col gap-y-1">
                        <div
                            class="font-medium text-gray-500 text-xs leading-5"
                        >
                            Trk/Dist
                        </div>
                        <div
                            class="bg-orange-100 text-orange-700 ring-orange-600/20 ring-1 ring-inset roundedt"
                        >
                            3 : 1-2-1
                        </div>
                        <span>EAF - 1200m</span>
                        <!-- <DotSeparated word1="EAF" word2="1200m" /> -->
                    </div>
                    <div class="flex-1 text-center flex flex-col gap-y-1">
                        <div
                            class="font-medium text-gray-500 text-xs leading-5"
                        >
                            Horse/Jockey
                        </div>
                        <div
                            class="bg-orange-100 text-orange-700 ring-orange-600/20 ring-1 ring-inset roundedt"
                        >
                            5 : 2-2-1
                        </div>
                        <div class="truncate">Amdy Parinas</div>
                    </div>
                    <div class="flex-1 text-center flex flex-col gap-y-1">
                        <div
                            class="font-medium text-gray-500 text-xs leading-5"
                        >
                            Synth
                        </div>
                        <div
                            class="bg-orange-100 text-orange-700 ring-orange-600/20 ring-1 ring-inset roundedt"
                        >
                            9 : 1-2-1
                        </div>
                        <div class="truncate">Synthetic</div>
                    </div>
                </div>
                <div class="mt-2 flex items-center justify-between">
                    <div>
                        <!-- <img class="w-12 lg:w-16" src="{colours}" /> -->
                    </div>
                    <div class="flex gap-x-1">
                        <div
                            class="bg-green-500 p-4 rounded-md text-white text-xs"
                        >
                            Tab
                        </div>
                        <div
                            class="bg-orange-500 p-4 rounded-md text-white text-xs"
                        >
                            Neds
                        </div>
                        <div
                            class="bg-blue-400 p-4 rounded-md text-white text-xs"
                        >
                            RaceBet
                        </div>
                    </div>
                </div>
                <div class="mt-1">
                    <NuxtLink to="/" class="text-xs text-blue-700 font-medium">
                        <span>All Forms</span>
                        <ChevronDoubleRightIcon class="h-4 w-4 inline-block" />
                    </NuxtLink>
                </div>
            </div>
        </li>
    </ul>
</template>

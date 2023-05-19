<script setup>
import { MinusSmallIcon } from "@heroicons/vue/20/solid";

const props = defineProps(["selectedPreferences"]);
</script>
<template>
    <div>
        <div v-if="selectedPreferences.length > 0">
            <ul
                role="list"
                class="divide-y divide-gray-200 overflow-hidden bg-white shadow-md ring-1 ring-gray-900/5 sm:rounded-xl"
            >
                <li
                    v-for="pref in selectedPreferences"
                    :key="pref.name"
                    class="relative flex justify-between gap-x-6 px-4 py-4 hover:bg-gray-50 sm:px-6"
                >
                    <div class="flex gap-x-4">
                        <div class="min-w-0 flex-auto">
                            <p
                                class="text-xs lg:text-sm leading-6 text-gray-900"
                            >
                                {{ pref.title }}
                            </p>
                        </div>
                    </div>
                    <button
                        @click="$emit('remove', pref.name)"
                        class="flex items-center gap-x-4"
                    >
                        <MinusSmallIcon
                            class="h-5 w-5 flex-none text-red-400 hover:text-red-800"
                            aria-hidden="true"
                        />
                    </button>
                </li>
            </ul>
        </div>
        <div
            v-else
            class="text-xs lg:text-sm text-center text-gray-400 px-2 py-7 bg-gray-100"
        >
            Please Select Preferences
        </div>
    </div>
</template>

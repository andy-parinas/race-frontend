<script setup>
import { MinusSmallIcon } from "@heroicons/vue/20/solid";

const selectedPreferences = ref([
    {
        id: 1,
        name: "Preference 1",
    },
    {
        id: 2,
        name: "Preference 2",
    },
    {
        id: 3,
        name: "Preference 3",
    },
]);
</script>
<template>
    <ul
        role="list"
        class="divide-y divide-gray-200 overflow-hidden bg-white shadow-md ring-1 ring-gray-900/5 sm:rounded-xl"
    >
        <li
            v-for="pref in selectedPreferences"
            :key="pref.id"
            class="relative flex justify-between gap-x-6 px-4 py-4 hover:bg-gray-50 sm:px-6"
        >
            <div class="flex gap-x-4">
                <div class="min-w-0 flex-auto">
                    <p class="text-xs lg:text-sm leading-6 text-gray-900">
                        {{ pref.name }}
                    </p>
                </div>
            </div>
            <button class="flex items-center gap-x-4">
                <MinusSmallIcon
                    class="h-5 w-5 flex-none text-red-400 hover:text-red-800"
                    aria-hidden="true"
                />
            </button>
        </li>
    </ul>
</template>

<script setup>
import draggable from "vuedraggable";
import { MinusSmallIcon } from "@heroicons/vue/20/solid";
import { usePreferenceStore } from "~/stores/preferences";

const props = defineProps(["selectedPreferences"]);

const preferences = ref(props.selectedPreferences);

const preferenceStore = usePreferenceStore();

function formatCurrentJockey(str) {
    // Split the string by underscores
    const words = str.split("_");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );

    // Join the words with a space in between
    const formattedString = capitalizedWords.join(" ");

    return formattedString;
}

function itemDrop() {
    console.log(preferenceStore.selectedPreference);
}
</script>
<template>
    <div>
        <div v-if="selectedPreferences.length > 0">
            <ul
                role="list"
                class="divide-y divide-gray-200 overflow-hidden bg-white shadow-md ring-1 ring-gray-900/5 sm:rounded-xl"
            >
                <draggable
                    v-model="preferenceStore.selectedPreference"
                    tag="li"
                    item-key="name"
                    @end="() => itemDrop()"
                    :options="{ group: 'preferences', animation: 150 }"
                >
                    <template #item="{ element: preference }">
                        <li
                            class="relative flex justify-between gap-x-6 px-4 py-4 hover:bg-gray-50 sm:px-6"
                        >
                            <div class="flex gap-x-4">
                                <div class="min-w-0 flex-auto">
                                    <p
                                        class="text-xs lg:text-sm leading-6 text-gray-900"
                                    >
                                        {{ preference }}
                                    </p>
                                </div>
                            </div>
                            <button
                                @click="$emit('remove', preference)"
                                class="flex items-center gap-x-4"
                            >
                                <MinusSmallIcon
                                    class="h-5 w-5 flex-none text-red-400 hover:text-red-800"
                                    aria-hidden="true"
                                />
                            </button>
                        </li>
                    </template>
                </draggable>

                <!-- <li
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
                </li> -->
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

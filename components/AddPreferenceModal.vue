<script setup>
import { snakeCaseToTitleCase } from "~/utils/wordformat";
const props = defineProps(["open", "preferences", "selectedCount"]);

const selected = ref([]);
const emit = defineEmits(["add"]);

function onAddPreference() {
    emit("add", selected.value);
    selected.value = [];
}

onMounted(() => {
    console.log("Modal Mounted");
});
</script>
<template>
    <ModalComponent :open="open" @close="$emit('close')">
        <div>
            <fieldset>
                <legend class="text-base font-semibold leading-6 text-gray-900">
                    Preferences
                </legend>
                <div
                    class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200"
                >
                    <!-- {{ preferences }} -->
                    <div
                        v-for="pref in preferences"
                        :key="pref"
                        class="relative flex items-start py-4"
                    >
                        <div class="min-w-0 flex-1 text-sm leading-6">
                            <label
                                :for="pref"
                                class="select-none font-medium text-gray-900"
                                >{{ snakeCaseToTitleCase(pref) }}</label
                            >
                        </div>
                        <div class="ml-3 flex h-6 items-center">
                            <input
                                v-model="selected"
                                :id="pref"
                                :name="pref"
                                :value="pref"
                                :disabled="
                                    selected.length + selectedCount >= 4 &&
                                    !selected.includes(pref)
                                "
                                type="checkbox"
                                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
        <template #action>
            <button
                type="button"
                :disabled="selected.length === 0"
                class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400"
                @click="onAddPreference"
            >
                Add
            </button>
        </template>
    </ModalComponent>
</template>

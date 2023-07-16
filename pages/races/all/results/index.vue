<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { usePreferenceStore } from "~/stores/preferences";
import { useRaceStore } from "~/stores/races";

const prefStore = usePreferenceStore();
const raceStore = useRaceStore();

const config = useRuntimeConfig();

const results = ref([]);

async function getAnalysis() {
    const data = {
        race_ids: raceStore.selectedRaceIds,
        preferences: prefStore.selectedPreference,
        preference_type: "balance",
    };

    const response = await $fetch(`${config.public.apiBase}/analysis/`, {
        method: "POST",
        body: data,
    });

    console.log(response);
    results.value = response;
}

onMounted(async () => {
    if (raceStore.selectedRaceIds.length > 0) {
        await getAnalysis();
    }
});
</script>
<template>
    <div>
        <header
            class="flex items-center gap-x-5 border-b border-white/5 px-4 pb-2 lg:pb-2 sm:px-6 sm:py-6 lg:px-8 pr"
        >
            <NuxtLink class="text-sm text-blue-600" to="/races/all">
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </NuxtLink>
            <h1 class="text-base font-semibold leading-7">Analysis Results</h1>
        </header>

        <AnalysisResults :results="results" />
    </div>
</template>

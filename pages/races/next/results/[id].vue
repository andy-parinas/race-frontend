<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { usePreferenceStore } from "~/stores/preferences";

const route = useRoute();

const prefStore = usePreferenceStore();

const results = ref([]);

async function getAnalysis() {
    const data = {
        race_ids: [route.params.id],
        preferences: prefStore.selectedPreference,
        preference_type: "balance",
    };

    const response = await $fetch(`http://localhost:8000/analysis/`, {
        method: "POST",
        body: data,
    });

    console.log(response);
    results.value = response;
}

onMounted(async () => {
    console.log("mounted");
    await getAnalysis();
});

// const results = ref([
//     {
//         id: 1,
//         horseName: "horsewithalongname",
//         race: "Race 1",
//         meeting: "Gold Coast",
//         rating: 65,
//     },
//     {
//         id: 2,
//         horseName: "Horse 2",
//         race: "Race 3",
//         meeting: "Gold Coast",
//         rating: 30,
//     },
//     {
//         id: 3,
//         horseName: "Horse 3",
//         race: "Race 4",
//         meeting: "Gold Coast",
//         rating: 25,
//     },
//     {
//         id: 4,
//         horseName: "Horse 4",
//         race: "Race 7",
//         meeting: "Gold Coast",
//         rating: 15,
//     },
// ]);
</script>

<template>
    <div>
        <header
            class="flex items-center gap-x-5 border-b border-white/5 px-4 pb-2 lg:pb-2 sm:px-6 sm:py-6 lg:px-8 pr"
        >
            <NuxtLink class="text-sm text-blue-600" to="/races/next">
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
            </NuxtLink>
            <h1 class="text-base font-semibold leading-7">Analysis Results</h1>
        </header>

        <AnalysisResults :results="results" />
    </div>
</template>

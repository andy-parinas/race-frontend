<script setup>
import { storeToRefs } from "pinia";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { usePreferenceStore } from "~/stores/preferences";

const route = useRoute();

const prefStore = usePreferenceStore();

const results = ref([]);

const config = useRuntimeConfig();

async function getAnalysis() {
    const data = {
        race_ids: [route.params.id],
        preferences: prefStore.selectedPreference,
        preference_type: "weighted",
    };

    const response = await $fetch(`${config.public.apiBase}/analysis/`, {
        method: "POST",
        body: data,
    });

    console.log(response);
    results.value = response;
}

onMounted(async () => {
    await getAnalysis();
});

const { preferenceTrigger } = storeToRefs(prefStore);

watch(preferenceTrigger, async (newValue, oldValue) => {
    console.log("Change Analysis");
    await getAnalysis();
});
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
        <!-- <pre>{{ results }}</pre> -->
        <AnalysisResults :results="results" />
    </div>
</template>

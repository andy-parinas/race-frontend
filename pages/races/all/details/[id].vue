<script setup>
const route = useRoute();

const { data: meeting } = await useFetch(
    `http://127.0.0.1:8000/meetings/${route.params.id}`
);

const selectedRaceId = ref(null);
const selectedRace = ref(null);

watch(selectedRaceId, async (newId, oldId) => {
    if (newId) {
        const response = await $fetch(`http://localhost:8000/races/${newId}`);
        selectedRace.value = response;
        console.log(selectedRace.value);
    }
});

onMounted(() => {
    if (meeting.value && meeting.value.races.length > 0) {
        selectedRaceId.value = meeting.value.races[0].id;
        console.log(selectedRaceId.value);
    }
});

async function selectRace(raceId) {
    selectedRaceId.value = raceId;
}

const timeOptions = ref({
    hour: "numeric",
    minute: "numeric",
    hour12: true,
});
</script>
<template>
    <div>
        <header
            class="flex items-center justify-between border-b border-white/5 px-4 pb-2 lg:pb-2 sm:px-6 sm:py-6 lg:px-8 pr"
        >
            <div class="flex-1 flex justify-between items-center">
                <h1 class="text-base font-semibold leading-7">
                    {{ meeting.track.state }} {{ meeting.track.name }}
                </h1>

                <span class="text-gray-700 text-sm">
                    {{ new Date(meeting.date).toLocaleDateString("en-AU") }}
                </span>
            </div>
        </header>
        <div
            class="flex items-center justify-start w-full gap-x-5 mt-3 overflow-auto pb-4 lg:pb-1"
        >
            <div
                v-for="race in meeting.races"
                :key="race.id"
                class="flex flex-col justify-center items-center gap-y-2"
            >
                <div
                    @click="selectRace(race.id)"
                    :class="[
                        'h-11 w-11 rounded-full text-center flex justify-center items-center text-gray-800 text-xs ring-gray-600/20 ring-1 ring-inset hover:bg-slate-200 hover:cursor-pointer',
                        selectedRaceId === race.id ? 'bg-slate-200' : '',
                    ]"
                >
                    <span class="text-xs"> R{{ race.race_number }} </span>
                </div>
            </div>
        </div>
        <div v-if="selectedRace">
            <div
                class="text-sm flex items-center justify-between text-gray-500 my-2"
            >
                <span>{{ selectedRace.name }}</span>
                <div class="flex items-center justify-between">
                    <span class="mr-5">{{ selectedRace.distance }}m</span>
                    <span>{{
                        new Date(selectedRace.date_time).toLocaleTimeString(
                            "en-AU",
                            timeOptions
                        )
                    }}</span>
                </div>
            </div>
            <ul
                role="list"
                class="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
            >
                <li
                    v-for="horse in selectedRace.horses"
                    class="mt-2 flex flex-col px-4 py-3 rounded-md gap-y-2"
                >
                    <div class="text-sm flex items-center justify-between">
                        <div>{{ horse.horse_name }}</div>
                        <div class="flex gap-x-2">
                            <div class="text-xs text-gray-500">
                                Jockey: {{ horse.infos[0].jockey }}
                            </div>
                            <div class="text-xs text-gray-500">
                                Trainer: {{ horse.infos[0].trainer }}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-1 gap-x-4">
                        <div class="w-20 h-20 hidden lg:block">
                            <img :src="horse.infos[0].colours_pic" alt="" />
                        </div>
                        <!-- Form List here -->
                        <FormList :forms="horse.stats" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

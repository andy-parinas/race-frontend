<script setup>
import { PlusIcon, ArrowPathIcon } from "@heroicons/vue/20/solid";
import { getCurrentDate, getNextDate } from "../../../utils/dateformat";
import { useRaceStore } from "~/stores/races";

const selectedDate = ref(null);
// const selectedDate = ref(new Date().toLocaleDateString());
const selectedState = ref(null);

const races = ref([]);
const meetings = ref([]);
const meetingDate = ref('');

const config = useRuntimeConfig();
// const { data: races, refresh } = await useFetch(
//     `https://6460a8a7ca2d89f7e75c3518.mockapi.io/api/v1/races?date=${selectedDate.value}`
// );

function dateChanged(date) {
    selectedDate.value = date;
    meetingDate.value = '';

    // refresh();
}

function stateChanged(state) {
    selectedState.value = state;
}

const router = useRouter();

function showResults() {
    router.push({ path: "/races/all/results/" });
}

const raceStore = useRaceStore();

function resetRaceSelection() {
    raceStore.clearAll();
    meetingDate.value = '';
}

async function getMeeting(url){

  const response = await $fetch(url);
  return response.meetings

}


watch(
    [selectedDate, selectedState],
    async ([newDate, newState], [oldDate, oldState]) => {
      if (selectedDate.value) {
        raceStore.setMeetingDate(selectedDate.value)
        let url = `${config.public.apiBase}/meetings/?date=${selectedDate.value}`;

        if (selectedState.value && selectedState.value !== 'ALL') {
          url = url + `&state=${selectedState.value}`;
        }

        const response = await $fetch(url);
        meetings.value = response.meetings;
      }
    }
);



onMounted(() => {
    selectedDate.value = getCurrentDate();
});
</script>
<template>
    <div>
        <header
            class="flex items-center justify-between border-b
            border-white/5 px-4 pb-2 lg:pb-2 sm:px-6 sm:py-6 lg:px-8 pr"
        >
          <div class="flex items-center">
            <h1 class="text-base font-semibold leading-7 mr-5">All Races</h1>
            <div>

            </div>
          </div>
          <div  class="flex items-center">
            <div>
              <input v-model="selectedDate"
                     class="block w-full rounded-md border-0 py-1.5 px-2
                  text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-100 focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="you@example.com"
                     type="date" name="date-select" id="date-select">
            </div>
            <button
                @click="resetRaceSelection"
                type="button"
                class="inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm
                      font-semibold text-green-600 hover:text-green-500 focus-visible:outline
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              <ArrowPathIcon class="h-5 w-5" aria-hidden="true" />
            </button>

          </div>

        </header>
        <DaysSelection @on-day-change="(date) => dateChanged(date)" :meeting-date="selectedDate" />
        <StateSelections @on-state-change="(state) => stateChanged(state)" />
        <div v-if="meetings.length > 0">
            <AllRaceList :meetings="meetings" />
        </div>
        <div v-else>
            No Races found for the selected date and state. Please try again.
        </div>
        <button
            @click="showResults"
            class="fixed z-50 bottom-20 right-4 bg-red-600 text-sm lg:text-base flex justify-center
            items-center text-white hover:bg-red-700
            drop-shadow-xl hover:drop-shadow-2xl hover:animate-pulse duration-100 px-4 py-2 rounded-3xl"
        >
            <!-- <CheckIcon className="h-5 w-5" aria-hidden="true" /> -->
            Show Results
        </button>
    </div>
</template>

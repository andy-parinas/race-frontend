<script setup>
import { DateTime } from "luxon";
// import { emit } from "vue";
const days = ref([]);

const {meetingDate} = defineProps(['meetingDate'])

function generateDays() {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const abbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const today = new Date();
    const dates = [];

    for (let i = 0; i < 7; i++) {
        const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
        const dayOfWeek =
            i === 0
                ? "Today"
                : i === 1
                ? "Tomorrow"
                : abbreviations[date.getDay()];
        const fullDayName =
            i === 0 || i === 1 ? dayOfWeek : days[date.getDay()];

        const luxonDate = DateTime.fromJSDate(date);

        dates.push({
            day: dayOfWeek,
            fullDayName: fullDayName,
            date: luxonDate.toFormat("yyyy-MM-dd"),
        });
    }

    return dates;
}


const selectedDay = ref({
    day: "Today",
    fullDayName: "Today",
    date: DateTime.fromJSDate(new Date()).toFormat("yyyy-MM-dd"),
});


onMounted(() => {
    days.value = generateDays();
    // selectedDay.value = days.value[0];
});

const emit = defineEmits(["onDayChange"]);

function setSectedDay(day) {
    selectedDay.value = day;
    emit("onDayChange", day.date);
}
</script>
<template>
    <div>
        <div class="flex items-center justify-between">
            <div class="mr-10 lg:mr-0 text-xs uppercase flex items-center">
              <div v-if="selectedDay.date === meetingDate" class="mr-3">{{ selectedDay.fullDayName }}'s Races</div>
              <div v-else class="mr-3">{{ (new Date(meetingDate)).toLocaleDateString() }} Races</div>
            </div>
            <div
                class="flex gap-x-1 items-center justify-start lg:justify-end mt-4 mb-2 px-1 py-2 flex-nowrap overflow-auto"
            >
                <button
                    v-for="day in days"
                    :key="day.date"
                    @click="setSectedDay(day)"
                    :class="[
                        selectedDay.date == day.date && selectedDay.date === meetingDate
                            ? 'bg-gray-300'
                            : 'bg-gray-100 hover:bg-gray-300 hover:cursor-pointer',
                        'uppercase text-xs text-center  text-gray-700 px-3 py-2 rounded',
                    ]"
                >
                    {{ day.day }}
                </button>
            </div>
        </div>
    </div>
</template>

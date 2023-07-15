<script setup>
const props = defineProps(["selectedForms"]);
</script>
<template>
    <div
        class="mt-2 flex items-center justify-between gap-x-2 text-xs leading-5 text-gray-500"
    >
        <div
            v-for="form in selectedForms"
            :key="form.stat"
            class="flex-1 text-center flex flex-col gap-y-1"
        >
            <div class="font-medium text-gray-500 text-xs leading-5">
                {{ form.stat }}
            </div>
            <div
                class="bg-orange-100 text-orange-700 ring-orange-600/20 ring-1 ring-inset rounded"
            >
                {{ form.total }} {{ form.first }}-{{ form.second }}-{{
                    form.third
                }}
            </div>
            <div>{{ form.secondary }}</div>
        </div>
    </div>
</template>

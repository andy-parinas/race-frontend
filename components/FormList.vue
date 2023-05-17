<script setup>
const props = defineProps(["forms"]);
</script>
<template>
    <div
        class="flex-1 grid grid-cols-2 lg:grid-cols-3 items-center flex-wrap gap-x-2 gap-y-2"
    >
        <div
            v-for="form in forms"
            :key="form.name"
            class="uppercase text-center rounded-md text-xs py-1 bg-slate-300 shadow-sm ring-1 ring-inset ring-gray-600/20"
        >
            {{ form.title }}: {{ form.value }}
        </div>
    </div>
</template>

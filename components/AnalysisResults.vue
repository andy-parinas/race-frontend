<script setup>
const props = defineProps(["results"]);
</script>
<template>
    <div>
        <div v-for="result in results" :key="result.id" class="relative">
            <AnalysisResultList :result="result" v-if="result.rating > 0" />
        </div>
    </div>
</template>

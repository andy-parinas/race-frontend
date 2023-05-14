<script setup>
const route = useRoute();
</script>

<template>
    <div>
        <h1>Results Details</h1>
        <pre>{{ route.query }}</pre>
    </div>
</template>

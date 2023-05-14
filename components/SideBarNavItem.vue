<script setup>
const route = useRoute();

const props = defineProps(["nav"]);

// function isRouteActive(){
//     const routeString = route.path;
//     const substring = "/races/next";
//     const regex = new RegExp(substring);
//     const containsSubstring =
//         myString.includes(substring) || regex.test(myString);

//     return containsSubstring;
// }

const isRouteActive = computed(() => {
    const routeString = route.path;
    const navString = props.nav.href;
    const regex = new RegExp(navString);
    const containsSubstring =
        routeString.includes(navString) || regex.test(routeString);

    return containsSubstring;
});
</script>
<template>
    <NuxtLink
        :to="nav.href"
        class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:bg-indigo-700 text-indigo-200 hover:text-white"
        :class="{ 'bg-indigo-700 text-white': isRouteActive }"
    >
        <AppIcon
            :icon="isRouteActive ? nav.activeIcon : nav.icon"
            class="text-white h-6 w-6 shrink-0"
        />
        {{ nav.title }}
    </NuxtLink>
</template>

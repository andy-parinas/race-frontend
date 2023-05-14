<script setup lang="ts">
import { navigations } from "~/utils/navigation";

const route = useRoute();
</script>
<template>
    <ul role="list" className="-mx-2 space-y-1">
        <li v-for="nav in navigations" :key="nav.title">
            <SideBarNavItem :nav="nav" />
            <!-- <NuxtLink
                :to="nav.href"
                class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:bg-indigo-700 text-indigo-200 hover:text-white"
            >
                <AppIcon
                    :icon="nav.href === route.path ? nav.activeIcon : nav.icon"
                    class="text-white h-6 w-6 shrink-0"
                />
                {{ nav.title }}
            </NuxtLink> -->
        </li>
    </ul>
</template>
<style scoped>
/* .router-link-exact-active {
    @apply bg-indigo-700 text-white;
} */
</style>

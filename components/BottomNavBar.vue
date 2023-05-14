<script setup>
import { navigations } from "~/utils/navigation";
const route = useRoute();
</script>
<template>
    <footer
        class="bottom-0 sticky z-41 flex items-center border-t shadow-sm sm:px-6 lg:hidden bg-white"
    >
        <NuxtLink
            v-for="nav in navigations"
            :key="nav.name"
            :to="nav.href"
            class="px-5 py-3 flex-1 flex flex-col items-center justify-center"
        >
            <AppIcon
                :icon="nav.name === route.name ? nav.activeIcon : nav.icon"
                :class="[
                    nav.name === route.name ? 'text-blue-600' : 'text-gray-400',
                    'h-6 w-6',
                ]"
            />
            <span
                :class="[
                    nav.name === route.name ? 'text-blue-950' : 'text-gray-600',
                    'text-xs font-semibold mt-1',
                ]"
            >
                {{ nav.title }}
            </span>
        </NuxtLink>
    </footer>
</template>

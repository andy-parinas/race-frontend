<script setup>
import {
    ArrowRightOnRectangleIcon as LoginIcon,
    UserIcon,
} from "@heroicons/vue/24/outline";
</script>
<template>
    <div class="flex items-center py-1 text-sm font-semibold leading-6">
        <button
            type="button"
            class="inline-flex items-center gap-x-1 rounded-md bg-indigo-600 px-1.5 py-1.5 mr-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            <LoginIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
            <span class="text-xs">Login</span>
        </button>

        <button
            type="button"
            class="inline-flex items-center gap-x-1 rounded-md bg-indigo-600 px-1.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
            <UserIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
            <span class="text-xs">Register</span>
        </button>
    </div>
</template>

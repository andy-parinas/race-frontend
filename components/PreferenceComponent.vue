<script setup>
import { PlusIcon, ArrowPathIcon } from "@heroicons/vue/20/solid";
</script>
<template>
    <aside
        class="px-6 pb-6 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5"
    >
        <header
            class="flex items-center justify-between border-b border-white/5 px-4 pb-2 sm:px-6 lg:px-8"
        >
            <h2 class="text-base font-semibold leading-7">Preferences</h2>
            <div class="flex items-center gap-x-1">
                <button
                    type="button"
                    class="inline-flex items-center gap-x-1.5 rounded-md text-blue-600 px-2.5 py-1.5 text-sm font-semibold hover:text-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    <PlusIcon class="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                    type="button"
                    class="inline-flex items-center gap-x-1.5 rounded-md px-2.5 py-1.5 text-sm font-semibold text-green-600 hover:text-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                    <ArrowPathIcon class="h-5 w-5" aria-hidden="true" />
                </button>
            </div>
        </header>
        <PreferenceList />
    </aside>
</template>

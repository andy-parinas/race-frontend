<script setup></script>
<template>
    <div
        class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
        <div
            class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6"
        >
            <div class="flex h-16 shrink-0 items-center">
                <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=white"
                    alt="Your Company"
                />
            </div>
            <nav class="flex flex-1 flex-col">
                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                        <SideBarNav />
                    </li>
                    <li class="mx-6 mt-auto mb-6">
                        <AuthComponent />
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

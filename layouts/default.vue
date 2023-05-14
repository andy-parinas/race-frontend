<script setup></script>
<template>
    <div>
        <!-- Static sidebar for desktop. Will hide on Mobile  -->
        <SideBar />

        <!-- Static TopBar for mobile  -->
        <TopBar />

        <main class="py-10 lg:pl-72 min-h-screen lg:min-h-full">
            <div class="px-4 sm:px-6 lg:px-8">
                <slot />
            </div>
        </main>

        <!-- <Footer /> -->

        <!-- Static BottomNavBar for mobile -->
        <BottomNavBar />
    </div>
</template>

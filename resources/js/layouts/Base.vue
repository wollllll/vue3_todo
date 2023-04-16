<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
    <div class="antialiased bg-white">
        <div class="md:w-3/5 mx-auto">
            <Header />
            <main class="h-screen bg-base-content">
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>

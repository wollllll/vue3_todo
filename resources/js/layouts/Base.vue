<script setup>
import Header from "@/layouts/Header.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
    <div class="antialiased">
        <div class="md:w-3/5 mx-auto">
            <Header />
            <main class="h-screen p-6">
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>

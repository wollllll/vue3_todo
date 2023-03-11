<script setup>
import Example from "@/components/Example.vue"
import Image from "@/../assets/images/test.png"
</script>

<template>
    <Example />
    <img :src="Image" alt=""/>
</template>

<script setup>
import Loading from "@/components/Loading.vue";
import {computed} from "vue";

// axios.get("api/users")
//     .then(response => {
//         store.dispatch("setUser", response.data.user)
//     })

// const isLoading = computed(() => store.getters["isLoading"])
</script>

<template>
    <router-view />
    <Loading v-if="true"/>
</template>

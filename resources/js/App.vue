<script setup>
import {useStoreAuth} from "@/store/auth";
import {storeToRefs} from "pinia";

const storeAuth = useStoreAuth();
const { setAuth } = storeAuth;
</script>

<template>
    <router-view />
<!--    <Loading v-if="is_loading"/>-->
</template>

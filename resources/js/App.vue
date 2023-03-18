<script setup>
import {useStoreAuth} from "@/store/auth";
import {storeToRefs} from "pinia";

const storeAuth = useStoreAuth();
const { setAuth } = storeAuth;

axios.get("api/users")
    .then(response => {
        setAuth(response.data.users[0])
    })
</script>

<template>
    <router-view />
<!--    <Loading v-if="is_loading"/>-->
</template>

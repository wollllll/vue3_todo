<script setup>
import Loading from "./components/Loading.vue";
import {useStoreAuth} from "@/store/auth";
import {ref} from "vue";

const storeAuth = useStoreAuth();
const { setAuth } = storeAuth;
const isLoading = ref(true);

(async () => {
    const response = await axios.get('api/user')
        .catch(error => console.log(error))

    setAuth(response.data.auth)

    isLoading.value = false
})();
</script>

<template>
    <Loading v-if="isLoading"/>
    <router-view v-else />
</template>

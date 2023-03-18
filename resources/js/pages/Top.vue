<script setup>
import { useStoreAuth } from '@/store/auth';
import {storeToRefs} from "pinia";
import Footer from "@/components/Footer.vue";

const storeAuth = useStoreAuth();
const { auth } = storeToRefs(storeAuth);
</script>

<template>
    <h1>Pinia入門</h1>
    <div>
         <router-link :to="{name: 'users.index'}">go users</router-link>
    </div>
    <div>
        {{ auth.name }}
    </div>
    <Footer user="test"/>
</template>

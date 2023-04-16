<script setup>
// import { useStoreAuth } from '@/store/auth';
// import {storeToRefs} from "pinia";
//
// const storeAuth = useStoreAuth();
// const { auth } = storeToRefs(storeAuth);
</script>

<template>
    <Base>
        <div class="p-6 grid grid-cols-4 gap-4">
            <div v-for="card in 10" class="card bg-base-100 shadow-md">
                <div class="card-body p-3">
                    <p>adwadawdw</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-ghost btn-sm">完d了</button>
                    </div>
                </div>
            </div>
        </div>
    </Base>
</template>

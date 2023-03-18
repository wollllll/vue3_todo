import { defineStore } from 'pinia';

export const useLoadStore = defineStore('load', {
    state: () => ({
        is_loading: true
    }),
    actions: {
        setIsLoading(bool) {
            this.is_loading = bool
        },
    },
});

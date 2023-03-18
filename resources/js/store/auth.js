import { defineStore } from 'pinia';

export const useStoreAuth = defineStore('auth', {
    state: () => ({ auth: {} }),
    actions: {
        setAuth(auth) {
            this.auth = auth
        },
        setUser(user) {
            this.user = user
        }
    },
});

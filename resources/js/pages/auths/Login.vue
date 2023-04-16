<script setup>
import {reactive} from "vue";

const form = reactive({
    inputs: {
        email: 'kato@valeur3.com',
        password: 'valeur0873'
    }
})

const submit = async () => {
    const response = await axios.post('login', form.inputs)
        .catch(error => console.log(error))

    const userResponse = await axios.get('api/user')
        .catch(error => console.log(error))

    console.log(userResponse)
}
</script>

<template>
    <Base>
        <form @submit.prevent="submit">
            <div class="form-control w-full">
                <label for="email" class="label">
                    <span class="label-text">メールアドレス</span>
                </label>
                <input id="email" type="email" v-model="form.inputs.email" class="input input-bordered w-full" />
            </div>
            <div class="form-control w-full">
                <label for="password" class="label">
                    <span class="label-text">パスワード</span>
                </label>
                <input id="password" type="password" v-model="form.inputs.password" class="input input-bordered w-full" />
            </div>
            <button type="submit" class="btn">ログイン</button>
        </form>
    </Base>
</template>

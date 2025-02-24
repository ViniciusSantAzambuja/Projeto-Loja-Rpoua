<template>
    <div class="user-login">
        <h2 class="user-login--header">Login de usuário</h2>
        <div class="user-login--field">
            <VInputField
                v-model="username"
                type="text" 
                placeholder="Digite seu nome de usuário" 
                name="username"
                label="Nome de usuário *"
                :required="true"
            />

            <VInputField 
                v-model="password"
                type="password" 
                placeholder="Digite sua senha" 
                name="password"
                label="Senha *"
                :required="true"
            />

            <VButtonVue @click="login"/>
        </div>
    </div>
</template>

<script>
import VInputField from '@/components/VInputField.vue'
import VButtonVue from '@/components/VButtonVue.vue';
export default {
    components: {
        VInputField,
        VButtonVue
    },
    data: () => {
        return {
            username: "",
            password: "",
        }
    },
    computed: {},
    methods: {
        login(){
            console.log(this.username)
            console.log(this.password)
        }
    }
}
</script>

<style scoped> 
.user-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 1rem;

    .user-login--header {
        font-family: 'Open Sans', sans-serif;;
        color: #121212;
        font-size: 22px;
        font-weight: 600;
    }
    
    .user-login--field {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.5rem 4rem;
        border: 4px solid #121212; 
        border-radius: 4px
    }

    .button {
        width: 50%;
        height: 30px;
        margin-top: 1rem
    }
}
</style>
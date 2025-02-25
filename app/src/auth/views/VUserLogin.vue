<template>
    <div class="user-login">
        <VLoading :is-open="isLoading" />
        <h2 class="user-login--header">Login de usuário</h2>
        <VUserLoginForm @login="login"/>
    </div>
</template>

<script>
import VUserLoginForm from '../components/VUserLoginForm.vue';
import VLoading from '@/components/VLoading.vue';
export default {
    components: {
        VUserLoginForm,
        VLoading
    },
    data: () => {
        return {
            isLoading: false,
        }
    },
    methods: {
        login(user){
            console.log(user)
        },
    }
}
</script>

<style scoped> 
.user-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
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
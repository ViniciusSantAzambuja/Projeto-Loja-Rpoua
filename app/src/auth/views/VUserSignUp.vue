<template>
    <div class="signup-container">
        <VLoading :is-open="isLoading"/>
        <VUserSingupForm @signup="createUser"/>
    </div>
</template>

<script>
import VLoading from '@/components/VLoading.vue';
import VUserSingupForm from '../components/VUserSingupForm.vue';
export default {
    components: {
        VUserSingupForm,
        VLoading
    },
    data: () => {
        return {
            isLoading: false
        }
    },
    methods: {
        createUser(user) {
            console.log(user)
        }
    }
}
</script>

<style scoped>
.signup-container{
    margin-top: 48px;
    height: 70vh;
}
</style>
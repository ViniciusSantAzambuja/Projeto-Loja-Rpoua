<template>
<div class="user-login--field">
            <VInputField
                v-model="user.email.value"
                type="text" 
                placeholder="Digite seu nome de usuário" 
                name="email"
                label="Email de usuário *"
                :required="true"
                :error="user.email.error"
                :error-message="user.email.errorMessage"
            />

            <VInputField 
                v-model="user.password.value"
                type="password" 
                placeholder="Digite sua senha" 
                name="password"
                label="Senha *"
                :required="true"
                :error="user.password.error"
                :error-message="user.password.errorMessage"
            />

            <VButtonVue
                text="Entrar" 
                @click="login"
            />
                
            <VButtonVue
                style-btn="secondary"
                text="Criar conta" 
                @click="goToSignUp"
            />
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
            user: {
                email: {
                    value: "",
                    error: false,
                    errorMessage: ""
                },
                password: {
                    value: "",
                    error: false,
                    errorMessage: ""
                }
            },
        }
    },
    computed: {
        validCretentials() {
            return !this.user.email.error && !this.user.password.error
        }
    },
    methods: {
        login(){
            this.verifyCredentials()
            if(this.validCretentials) {
                this.$emit('login', {...this.user})
            }
        },
        verifyCredentials() {
            if(this.user.email.value && this.user.password.value){
                this.user.email.error = false
                this.user.password.error = false
                return 
            }

            if(!this.user.email.value) {
                this.user.email.error = true
                this.user.email.errorMessage = "Campo obrigatório"
            }

            if(!this.user.password.value) {
                this.user.password.error = true
                this.user.password.errorMessage = "Campo obrigatório"
            }
        },
        goToSignUp() {
            this.$router.push({ name: 'signup' })
        }
    }
}
</script>

<style scoped>
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
</style>
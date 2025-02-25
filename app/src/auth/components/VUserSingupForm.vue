<template>
    <div class="user-container">
        <div class="user-form">
            <div class="user-input">
                <VInputField 
                    v-model="username.value"
                    name="username"
                    type="text"
                    label="Nome de usuário *"
                    placeholder="Digite seu nome de usuário"
                    :required="true"
                    :error="username.error"
                    :error-message="username.errorMessage"
                />
                <VInputField 
                    v-model="email.value"
                    name="email"
                    type="text"
                    label="Email de usuário *"
                    placeholder="Exemplo: jorge@gmail.com"
                    :required="true"
                    :error="email.error"
                    :error-message="email.errorMessage"
                />
                <VInputField 
                    v-model="cpf.value"
                    name="cpf"
                    type="Digite seu cpf"
                    label="Cpf *"
                    placeholder="Digite seu cpf"
                    :required="true"
                    :error="cpf.error"
                    :error-message="cpf.errorMessage"
                />
                <VInputField 
                    v-model="cellphone.value"
                    name="cellphone"
                    type="text"
                    label="Telefone celular *"
                    placeholder="Digite seu telefone"
                    :required="true"
                    :error="cellphone.error"
                    :error-message="cellphone.errorMessage"
                />
                <VInputField 
                    v-model="password.value"
                    name="password"
                    type="password"
                    label="Senha *"
                    placeholder="Digite sua senha"
                    :required="true"
                    :error="password.error"
                    :error-message="password.errorMessage"
                />
                <VInputField 
                    v-model="confirmPassword.value"
                    name="confirm-password"
                    type="password"
                    label="Confirmar senha *"
                    placeholder="Digite novamente sua senha"
                    :required="true"
                    :disabled="!password.value"
                    :error="confirmPassword.error"
                    :error-message="confirmPassword.errorMessage"
                />
            </div>
            <VButtonVue text="Cadrastrar" @click="signup"/>
        </div>
    </div>
</template>

<script>
import VInputField from '@/components/VInputField.vue';
import VButtonVue from '@/components/VButtonVue.vue';
export default {
    components: {
        VInputField,
        VButtonVue
    },
    data: () => {
        return {
                username: {
                    value: "",
                    error: false,
                    errorMessage: "",
                },
                email: {
                    value: "",
                    error: false,
                    errorMessage: "",
                },
                cpf: {
                    value: "",
                    error: false,
                    errorMessage: "",
                },
                password: {
                    value: "",
                    error: false,
                    errorMessage: "",
                },
                confirmPassword: {
                    value: "",
                    error: false,
                    errorMessage: "",
                },
                cellphone: {
                    value: "",
                    error: false,
                    errorMessage: "",
                }
        }
    },
    computed: {
        getPasswordValue() {
            return this.password.value
        }
    },
    watch: {
        'username.value': {
            handler(newVal) {
                if(newVal) {
                    this.username.error = false
                    return
                }

                this.username.error = true
                this.username.errorMessage = "Campo Obrigatório"
            },
            deep: true
        },

        'email.value': {
            handler(newVal) {
                if(newVal) {
                    this.email.error = false
                    return
                }

                this.email.error = true
                this.email.errorMessage = "Campo Obrigatório"
            },
            deep: true
        },

        'cpf.value': {
            handler(newVal) {
                if(newVal) {
                    this.cpf.error = false
                    return
                }

                this.cpf.error = true
                this.cpf.errorMessage = "Campo Obrigatório"
            },
            deep: true
        },

        'cellphone.value': {
            handler(newVal) {
                if(newVal) {
                    this.cellphone.error = false
                    return
                }

                this.cellphone.error = true
                this.cellphone.errorMessage = "Campo Obrigatório"
            },
            deep: true
        },

        'password.value': {
            handler(newVal) {
                if(newVal) {
                    this.password.error = false
                    return
                }

                this.password.error = true
                this.password.errorMessage = "Campo Obrigatório"
                
                this.confirmPassword.error = false
            },
            deep: true
        },

        'confirmPassword.value': {
            handler(newVal) {
                if(!this.getPasswordValue && !newVal) {
                    this.confirmPassword.error = true
                    this.confirmPassword.errorMessage = "Campo Obrigatório"
                }

                if(this.getPasswordValue != this.confirmPassword.value ) {
                    this.confirmPassword.error = true
                    this.confirmPassword.errorMessage = "As senhas devem ser iguais"
                    return 
                }

                this.confirmPassword.error = false
            },
            deep: true
        }
    },
    methods: {
        signup() {
            this.verifyCredentials()
            const user = { username: this.username, email: this.email, cellphone: this.cellphone, cpf: this.cpf, password: this.password }
            this.$emit('signup', {...user})
        },

        verifyCredentials() {
            this.validateUsername()
            this.validateEmail()
            this.validateCpf()
            this.validateCellphone()
            this.validatePassword()
        },

        validateUsername() {
            if(!this.username.value) {
                this.username.error = true
                this.username.errorMessage = "Campo obrigatório"
                return
            }
            
            this.username.error = false
        },
        

        validateEmail() {
            if(!this.email.value) {
                this.email.error = true
                this.email.errorMessage = "Campo obrigatório"
                return
            }

            this.email.error = false
        },

        validateCpf() {
            if(!this.cpf.value) {
                this.cpf.error = true
                this.cpf.errorMessage = "Campo obrigatório"
                return
            }
            
            this.cpf.error = false
        },

        validateCellphone() {
            if(!this.cellphone.value) {
                this.cellphone.error = true
                this.cellphone.errorMessage = "Campo obrigatório"
                return 
            }

            this.cellphone.error = false
        },

        validatePassword() {
            this.confirmPassword.error = false 
            
            if(!this.password.value) {
                this.password.error = true
                this.password.errorMessage = "Campo obrigatório"
                return 
            }
            
            if(this.password.value && !this.confirmPassword.value) {
                this.confirmPassword.error = true
                this.confirmPassword.errorMessage = "Campo obrigatório"
                return 
            }
            
            if(!this.password.value.includes(this.confirmPassword.value)) {
                this.confirmPassword.error = true
                this.confirmPassword.errorMessage = "As senhas devem ser iguais"
                return 
            }

            this.password.error = false
        }
        
    }
}
</script>

<style scoped>
.user-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: 100%;

    .user-form {
        display: inherit;
        flex-direction: column;
        align-items: center;
        box-shadow: -7px 5px rgba(12, 12, 12, 0.1);
        background-color: #F8F8FF;
        border-radius: 4px;
        padding: 1rem;
    }
    
    .user-input {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 0.25rem;
        column-gap: 0.5rem;
        padding: 1rem;
    }

    .button {
        width: 200px;
        height: 40px;
        margin-top: 1rem;
    }
}
</style>
<template>
    <div class="input-field">
        <label :for="name">{{ label }}</label>
        <input
            :class="['input', error ? 'input-error' : '', disabled ? 'input-disabled' : ''] "
            :name="name"
            :type="type"
            :placeholder="disabled ? '' : placeholder"
            :disabled="disabled"
            :required="required"
            :value="modelValue"
            @input="e => $emit('update:modelValue', e.target.value)"
        />
        <span v-if="error" class="input-error--message">{{ errorMessage }}</span>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'input'
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: [String, Number],
            default: ""
        },
        error: {
            type: Boolean,
            default: false
        },
        errorMessage: {
            type: String,
            default: "Erro"
        }
    },
}
</script>

<style scoped>
.input-field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin: 1rem;

    label {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 14px;
        color: #444
    }

    .input {
        padding: 0.5rem;
        height: 100%;
        width: 200px;
        border-radius: 4px;
        border-color: #121212;
        border: 2px solid #121212;
        outline: none;
        transition: all 0.25s ease-in-out;
        height: 20px;
    }
    
    .input:focus {
        border: 2px solid #4169E1
    }

    .input-error, .input-error:focus {
        border: 2px solid #FF2400;
    }

    .input-error--message{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #FF2400;
        transition: all 350 ease-in;
    }

    .input-disabled {
        background-color: #F8F8F8 !important;
        border: 2px solid #121212;
    }
}
</style>
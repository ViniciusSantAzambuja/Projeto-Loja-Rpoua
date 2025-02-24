<template>
    <div class="input-field">
        <label :for="name">{{ label }}</label>
        <input
            class="input"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :value="modelValue"
            @input="e => $emit('update:modelValue', e.target.value)"
        />
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
    }
}
</style>
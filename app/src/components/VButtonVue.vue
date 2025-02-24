<template>
    <button class="button">
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "Ok"
        }
    },
}
</script>

<style scoped>
    .button {
        border-radius: 0.25rem;
        border: 1px solid #4169E1;
        width: 100%;
        height: 40px;
        color: #F8F8FF;
        background-color: #4169E1;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.5s ease-in;
    }

    .button:hover {
        background-color: #F8F8FF;
        color: #4169E1;
    }
</style>
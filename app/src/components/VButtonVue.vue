<template>
    <button :class="`button button--${styleBtn}`">
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            default: "Ok"
        },
        styleBtn: {
            type: String,
            default: "primary"
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
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.5s ease-in;
    }

    /* estilo primário */
    .button--primary {
        color: #F8F8FF;
        background-color: #4169E1;
    }

    .button--primary:hover{
        background-color: #F8F8FF;
        color: #4169E1;
    }

    /* estilo secundário */
    .button--secondary {
        background-color: #F8F8FF;
        color: #4169E1;
    }

    .button--secondary:hover{
        color: #F8F8FF;
        background-color: #4169E1;
    }
</style>
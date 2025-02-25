<template>
<div :class="['load', isOpen ? 'open' : 'hide']">
    <fontAwesome class="icon" icon="spinner" spin color="#121212"/>
    <span>{{ text }}</span>
</div>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: "Carregando..."
        }
    }
}
</script>

<style scoped>
.load {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 48px;
    width: 100%;
    height: 100vh;
    background-color: rgba(100, 100, 100, 0.8);
    z-index: 1;

    .icon {
        font-size: 40px;
    }

    span {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #121212
    }
}

.open {
    visibility: visible;
}

.hide {
    visibility: hidden;
    display: none !important;
}
</style>
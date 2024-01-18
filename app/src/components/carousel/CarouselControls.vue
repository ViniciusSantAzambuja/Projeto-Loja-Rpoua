<template>
    <button  id="btn-banner-esquerda" class="button-banner esquerda" type="button" @click="$emit('prev')"><img src="../../assets/right-arrow.png"></button>
    <button  id="btn-banner-direita" class="button-banner direita" type="button" @click="$emit('next')"><img src="../../assets/right-arrow.png"></button>
</template>

<script>
export default{
    emits:["prev", "next"],
}
</script>

<style scoped>
button{
    background: transparent;
    border:none;
    cursor: pointer;
}
.direita {
    margin-left: -1rem;
}

.esquerda{
    margin-right: -1rem;
}

.esquerda img{
    transform: rotate(180deg);
}

.button-banner img{
    height: 1.2rem;
    width: 1.2rem;
}
</style>
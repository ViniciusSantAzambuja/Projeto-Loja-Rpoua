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
    color: #121212;
}
.direita {
    right: 0;
}

.esquerda{
   left: 0;
}

.esquerda img{
    transform: rotate(180deg);
}

.button-banner{
    display: inline-block;
    position: absolute;
    height: 600px;
}

.button-banner img{
    height: 1.2rem;
    width: 1.2rem;
}
</style>
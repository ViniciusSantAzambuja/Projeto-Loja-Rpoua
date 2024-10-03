<template>   
<div class="item" v-for="items in itemObjTest.roupas" :key="items.name" @click="viewItem(items)">
    <RouterLink :to="`/${items.dressType}/${items.name}`">     
     <div class="item-head">
        <img src="@/assets/9586688.jpg" alt="Camiseta vermelha com um jogador de beisebol em um fundo azul claro estampado nela"/>
    </div>
    <div class="item-content">
        <div class="item-description">
            <h3 class="name-item">{{ items.name }}</h3>
            <h3 class="price-item">R${{ items.preco }}</h3>
            <h3 class="parcela-item">Em até 4x de R${{ items.preco/4 }} sem juros no cartão.</h3>
        </div>
    </div>
    <div class="item-footer">
                                
    </div>
    </RouterLink>       
</div>
<RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
export default{
    props: ["itemObjTest"],
    components: { RouterLink, RouterView },
    methods: { viewItem(item){
        this.$router.push({
            path: `/${item.dressType}/${item.name}`,
            query:{
                preco: item.preco,
                dressType: item.dressType,
                available: item.available,
            },
        });
    }
 }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, a{
    text-decoration: none;
    font-family: 'Rubik', sans-serif;   
}

.item{
    height: 100%;
    width: 100%;
    cursor: pointer;
    transition: all 50ms ease-in-out;
}

.item:hover{
}

.item-head{
    display: flex;
    justify-content: center;
    top: 1rem;
}

.item-head img{
    padding: 10px;
    height: 200px;
    width: 200px;
}

.item-content{
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-flow: column wrap;
    top: 1.35rem;
}

.item-content .item-description{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 0.5rem;
    color: #121212;
    line-height: 1.2;
}

.item-content .item-description .name-item{
    font-size: 16px;
    word-break: keep-all;
    text-align: center;
    color: #121212;
}

.item-content .item-description .price-item{
    margin-top: 1.5rem;
    color: #FF2400;
}

.item-content .item-description .parcela-item{
    margin-top: 1.2rem;
    font-size: 14px;
}

.item-content .item-description h3{
    font-size: 1.2rem;
    font-weight: 400;
}
</style>
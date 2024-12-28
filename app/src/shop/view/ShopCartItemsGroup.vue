<template>
<main>
    <span class="ShopCartItemList-line"></span>
    <div class="ShopCartItemList">
        <ShopCartSingleItem v-if="getProducts.length > 0" :products="getProducts"></ShopCartSingleItem>
        <div v-else class="empty-shop-cart">
            <fontAwesome icon="cart-shopping" class="cart-shopping-icon"/> 
            <h1>Seu carinho está vazio</h1>
            <RouterLink to="/"><span>Clique aqui para voltar a página principal</span></RouterLink>
        </div>
    </div>
    <span class="ShopCartItemList-line"></span>
</main>
</template>

<script>
import ShopCartSingleItem from '@/shop/components/ShopCartSingleItem.vue';
import { mapGetters } from 'vuex';
export default{
    components:{ShopCartSingleItem},
    computed: {
        ...mapGetters(["getProducts"])
    }
}
</script>

<style scoped>
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
}
.ShopCartItemList{
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
    position: relative;
    top: 5px;

    .empty-shop-cart{
        display: flex;
        align-items: center;
        flex-flow: column wrap;
    }

    .empty-shop-cart img{
        width: 3rem;
        height: 3rem;
    }

    .empty-shop-cart .cart-shopping-icon{
        width: 3rem;
        height: 3rem;
    }

    .empty-shop-cart h1{
    font-size: 1.2rem;
    font-weight: bolder;
    color: #2c2c2c;
    }

    .empty-shop-cart a{
        font-size: 1rem;
        font-weight: bolder;
        text-decoration: none;
        color: #2c2c2c;
        border: 0.1rem solid #d9d99b;
        padding: 0.2rem;
        margin-top: 0.5rem;
        transition: all 300ms ease-in-out;
    }

    .empty-shop-cart a:hover{
        border: 0.1rem solid #2c2c2c;
        color: #d9d99b;
    }
}
.ShopCartItemList-line{
    width: 100%;
    height: 8px;
    position: absolute;
}
</style>
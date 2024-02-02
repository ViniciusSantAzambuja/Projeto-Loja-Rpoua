<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
    <div class="shop-cart-main" >
        <div class="empty-shop-cart" v-if="products.length === 0" @click="setProducts()">
            <fontAwesome icon="cart-shopping" class="cart-shopping-icon"/> 
            <h1>{{ emptyShopCartText }}</h1>
            <RouterLink to="/"><span>Clique aqui para voltar a página principal</span></RouterLink>
        </div>
        <div class="shopCartWithItens" v-if="products.length > 0">
            <ShopCartItemsGroup></ShopCartItemsGroup>
        </div>
    </div>


</template>


<script>
import ShopCartItemsGroup from './ShopCartItemsGroup.vue'
export default{
components: { ShopCartItemsGroup },
data: () =>({
     emptyShopCartText : "Seu carinho está vazio",
     products: [],
}),
methods: {
    setProducts(){
        this.products.push(this.testeDeRota)
        console.log(this.products);
    }
},
computed: {
    testeDeRota(){
        if(this.$route.query !== undefined){
            return {name: this.$route.query.name, size: this.$route.query.size, quantity: this.$route.query.quantity, price: this.$route.query.price}
        }
        return this.products
    }
},
watch:{
    name(){
       if(this.name !== undefined){
            this.testeDeRota()
            this.verifyIfnameIsUndefined = true
       }
    },
}
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0;
}

h1, h2, h3, h4, h5, a{
    font-family: 'Rubik', sans-serif;    
}

.shop-cart-main{
    max-width: 120rem;
    height: 100vh;    
    background-color: #F8F8D9;
}

.empty-shop-cart{
    display: flex;
    align-items: center;
    justify-content: center center;
    flex-flow: column wrap;
    position: relative;
    bottom: -17rem;
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
    background-color: #2c2c2c;
    color: #d9d99b;
}
</style>
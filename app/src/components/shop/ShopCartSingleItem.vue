<template>
    <div class="shopCart-item" v-for="product in products" :key="product.name">
        <div class="shopCart-item-head">
            <img src="../../assets/9586688.jpg">
            <h1>{{product.name}}</h1>
            <h2>{{product.size}}</h2>
        </div>
        <div class="shopCart-item-body">
            <button @click="decreaseProductQuantity(product)"><fontAwesome icon="circle-minus"></fontAwesome></button>
            <input type="text" :value="product.quantity">
            <button @click="increaseProductQuantity(product)"><fontAwesome icon="circle-plus"></fontAwesome></button>
            <button @click="removeProductFormShopCart(product)"><fontAwesome icon="trash"></fontAwesome></button>
            <h3>R${{ getTotalProductPrice(product) }}</h3>
        </div>
    </div>
</template>

<script>
export default{
   data: ()  => ({
        products: [{name: "produto 1", size: "P", quantity: 1, price: 80}, {name: "produto 2", size: "M", quantity: 3, price: 200}]
   }),
   methods:{
        getTotalProductPrice(product){
            return product.price*product.quantity
        },
        increaseProductQuantity(product){
            product.quantity++
        },
        decreaseProductQuantity(product){
            if( product.quantity - 1 >= 1){
                product.quantity--
            }else{
                product.quantity = 1
            }
        },
        removeProductFormShopCart(productToRemove){
            this.products = this.products.filter((product) => {return product !== productToRemove})
        }
   }
}
</script>

<style scoped>
.shopCart-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.shopCart-item .shopCart-item-head{
    display: flex;
    flex-direction: row;
}
.shopCart-item .shopCart-item-head img{
    width: 250px;
    height: 250px;
}
.shopCart-item .shopCart-item-body{
    display: flex;
}
</style>
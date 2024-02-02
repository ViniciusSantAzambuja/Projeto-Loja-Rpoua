<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
    <div class="shopCart-item" v-for="product in products" :key="product.name">
        <div class="shopCart-item-head">
            <img src="../../assets/9586688.jpg">
            <div class="shopCart-item-head-text">
                <h1>{{product.name.toUpperCase()}}</h1>
                <h2>TAMANHO {{product.size}}</h2>
            </div>
        </div>
        <div class="shopCart-item-body">
            <button @click="decreaseProductQuantity(product)"><fontAwesome icon="circle-minus" class="iconProductModifier"></fontAwesome></button>
            <input type="text" :value="product.quantity" readonly>
            <button @click="increaseProductQuantity(product)"><fontAwesome icon="circle-plus" class="iconProductModifier"></fontAwesome></button>
            <button @click="removeProductFormShopCart(product)"><fontAwesome icon="trash" class="iconProductModifier"></fontAwesome></button>
            <span>R${{ getTotalProductPrice(product) }}</span>
        </div>
    </div>
    <!--Passar isso aqui para o carrinho, já que ele que lida com os preços ou fazer algo prórpio para isso-->
    <div class="payment-check">
            <span>TOTAL DO PEDIDO - <span>R${{ getTotalOrderPrice() }}</span>
            </span>
    </div>
</template>

<script>
export default{
   data: ()  => ({
        products: [{name: "produto 1", size: "P", quantity: 1, price: 80}, {name: "produto 2", size: "M", quantity: 3, price: 200}, 
        {name: "produto 3", size: "G", quantity: 2, price: 160}, {name: "produto 4", size: "GG", quantity: 10, price: 80},]
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
        },
        getTotalOrderPrice(){
            return this.products.reduce((totalPrice, product) => totalPrice +=  product.price*product.quantity, 0)
        }
   }
}
</script>

<style scoped>
h1, h2, h3, h4, h5, h6, span{
    font-family: 'Open Sans', sans-serif;
}
button{
    background: none;
    border: none;
    cursor: pointer;
}
.iconProductModifier{
    width: 20px;
    height: 20px;
}
.shopCart-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.shopCart-item .shopCart-item-head{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-wrap: wrap;
    margin-top: 30px;
    position: relative;
    right: 200px;
}
.shopCart-item .shopCart-item-head img{
    width: 80px;
    height: 80px;
    padding-right: 50px;
}
.shopCart-item .shopCart-item-head .shopCart-item-head-text{
    margin-left: 5px;
    line-height: 0.5;
}
.shopCart-item .shopCart-item-head .shopCart-item-head-text h1{
    font-size: 20px;
    font-weight: 600;
}
.shopCart-item .shopCart-item-head .shopCart-item-head-text h2{
    font-size: 15px;
    font-weight: normal;
}
.shopCart-item .shopCart-item-body{
    position: relative;
    display: flex;
}
.shopCart-item .shopCart-item-body span{
    position: absolute;
    left: 500px;
    font-size: 20px;
}
.shopCart-item .shopCart-item-body input{
    cursor: default;
    outline: none;
    border: 1px solid #DDD;
    width: 40px;
    padding-left: 30px;
}
.payment-check{
    position: relative;
    top: 100px;
    display: flex;
    align-items: center;
    justify-content: right;
    right: -490px;
}
.payment-check span{
    font-size: 20px;
    font-weight: bold;
 }
 .payment-check span>span{
    margin-left: 5px;
 }
</style>
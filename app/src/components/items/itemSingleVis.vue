<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
<main class="main-bg">
   <div class="main-single-item">
        <div class="infos-item">
        <div class="infos-left-side">
                <CarouselSingleItem :slides="slides" interval="5000"  controls indicators />
        </div>
           <div class="infos-right-side">
            <div class="infos-head">
                <h2>{{ $route.params.name }}</h2>
                <h3>Disponíveis: {{ $route.query.available }}</h3>
            </div>
            <div class="tamanho">
                <ul>
                    <li v-for="(size, index) in sizes" :key="index" :class="{ selected: currentIndex === index }" @click="setCurrentIndex(index)">{{ size }}</li>
                </ul>
            </div>
            <div class="infos-pay-options">
                <h3>R${{ $route.query.preco }}</h3>
                <span>Em até 4x de R${{ $route.query.preco/4 }} sem juros no cartão.</span>
                <button type="button" @click="addItemToShopCart"><span>COMPRAR <fontAwesome icon="cart-plus"></fontAwesome></span></button>
            </div>
           </div>
        </div>
    </div>
</main>
</template>

<script>
import CarouselSingleItem from './carouselSingleVis/CarouselSingleItem.vue'
export default{
    components: { CarouselSingleItem },
    data: () => ({
        slides: ["https://picsum.photos/id/1033/500/500", "https://picsum.photos/id/1035/500/500", "https://picsum.photos/id/1031/500/500"],
        sizes: ['P', 'M', 'G', 'GG', 'XG'],
        currentIndex: -1, 
        item:{}
    }),
    methods: {
        setCurrentIndex(index){
            this.currentIndex = index;
        },
        showSizeCurrentIndex(){
            let currentSize = this.getSelectedSize
            console.log(currentSize);
        },
        //acho melhor tentar de outra forma ou so usar assim msm até eu aprender a usar o vuex 
        addItemToShopCart(){
        this.$router.push({
            path: "/carrinho",
            query: {
                    price: this.$route.query.preco,
                    name: this.$route.params.name,
                    quantity: 1,
                    size: this.getSelectedSize,
                }
            })
        }
    },
    computed:{
        getSelectedSize(){
            return this.sizes[this.currentIndex];
        }
    },
    props:["name"]
    
}
</script>

<style scoped>
*{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6, span{
    font-family: 'Open Sans', sans-serif;
}
.main-bg{
    background-color: #d9d99b;
    height: 100vh;
}
.main-single-item{
    position: relative;
    max-width: 1200px;
    top: 100px;
}
.infos-item{
    display: flex;
    position: relative;
}
.infos-left-side{
   display: flex;
   position: relative;
   flex-flow: column wrap;
   align-items: center;
   justify-content: center;
   right: 170px;
}
.infos-left-side img{
    width: 55%;
    position: relative;
    border-radius: 5px;
    margin: 0;
}
.infos-right-side{
    position: relative;
    top: 30px;
    right: 155px;
}
.infos-head{
    width: 350px;
    margin-bottom: 30px;
}
.infos-head h2{
    font-size: 35px;
}
.infos-head h3{
    font-size: 20px;
}
.tamanho{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    position: relative;
    left: -82px;
    margin-bottom: 30px;
}
.tamanho ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none; 
}
.tamanho ul li{
    position: relative;
    margin-right: 15px;
    font-size: 20px; 
    font-family: 'Rubik', sans-serif;   
    cursor: pointer;
}

.tamanho ul li::after{
    content: '';
    position: absolute;
    padding: 1px;
    width: 120%;
    height: 100%;
    left: -3px;
    border: 1px solid #d9d99b;
    border-radius: 20%;
}
.selected{
    color: #8b0000;
}
.tamanho ul li.selected::after{
    content: '';
    border: 2px solid #8b0000;
}

.infos-pay-options{
    display: flex;
    flex-flow:column wrap ;
    align-items: center;
    justify-content: center;
    width: 350px;
}
.infos-pay-options h3{
    font-weight: 400;
    margin: 0;
    position: relative;
    right: 125px;
    font-size: 22px;
    margin-bottom: 5px;
}
.infos-pay-options span{
    margin: 0;
    font-size: 18px;
    margin-bottom: 15px;
}
.infos-pay-options button{
    background-color: #d9d99b;
    border: 1px solid #d9d99b;
    border-radius: 1px;
    width: 100%;
    height: 35px; 
    cursor: pointer;   
    transition: all 200ms ease-in-out;
}

.infos-pay-options button:hover{
    background-color: #000;
    border: 1px solid #000;
    border-radius: 1px; 
    cursor: pointer;   
    color: #d9d99b;
}
.infos-pay-options button span{
    font-size: 20px;
    margin-left: 5px;
}
</style>
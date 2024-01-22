<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
   <div class="main-single-item">
        <div class="infos-item">
        <div class="infos-left-side">
                <CarouselSingleItem :slides="slides" interval="5000"  controls indicators />
        </div>
           <div class="infos-right-side">
            <div class="infos-head">
                <h2 @click="aumentaQtde">{{ $route.params.name }}</h2>
                <h3>Disponíveis: {{ itemQtde }}</h3>
            </div>
            <div class="tamanho">
                <ul>
                    <li v-for="(size, index) in sizes" :key="index" :class="{ selected: currentIndex === index }" @click="setCurrentIndex(index)">{{ size }}</li>
                </ul>
            </div>
            <div class="infos-pay-options">
                <h3>{{ $route.query.preco }}</h3>
                <span>{{$route.query.textoParcela}}</span>
                <button type="button"><span>COMPRAR</span></button>
            </div>
           </div>
        </div>
    </div>
</template>

<script>
import CarouselSingleItem from './carouselSingleVis/CarouselSingleItem.vue'
export default{
    components: { CarouselSingleItem },
    data: () => ({
        slides: ["https://picsum.photos/id/1033/500/500", "https://picsum.photos/id/1035/500/500", "https://picsum.photos/id/1031/500/500"],
        itemQtde: 50,  
        sizes: ['P', 'M', 'G', 'GG', 'XG'],
        currentIndex: -1, 
    }),
    methods: {
        aumentaQtde(){
            console.log(this.itemQtde);
            this.itemQtde++;
        },
        setCurrentIndex(index){
            this.currentIndex = index;
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
.main-single-item{
    max-width: 1200px;
    margin-top: 200px;
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
}
</style>
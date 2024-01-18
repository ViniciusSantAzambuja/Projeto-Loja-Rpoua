<template>
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
 <main class="main-bg"> 
        <section class="main-content">
            
            <carousel-main :slides="slides" interval="3000"  controls indicators></carousel-main> 
            <img />
            
            <div class="list-items view-main">
                <div class="items-header"><h2>NOVIDADES</h2></div>
                <div class="items">
                        <div class="item" v-for="items in itemObjTest.camisas" :key="items.name">
                            <div class="item-head">
                                <img src="@/assets/9586688.jpg" alt="Camiseta vermelha com um jogador de beisebol em um fundo azul claro estampado nela"/>
                            </div>
                            <div class="item-content">
                                <div class="item-description">
                                    <h3 class="name-item">{{ items.name }}</h3>
                                    <h3 class="price-item">{{ items.preco }}</h3>
                                    <h3 class="parcela-item">{{ items.textoParcela }}</h3>
                                </div>
                            </div>
                            <div class="item-footer">
                                
                            </div>
                        </div>
                </div>
            </div>
        </section>
        <router-view></router-view>
    </main>
</template>



<script>
import { ref } from 'vue';
import CarouselMain from "../carousel/CarouselMain.vue"
export default {
    components: { CarouselMain },
    name: 'MainPage',
    setup(){

        const slides = [
        "../../../dist/3038640.jpg",
        "../../../dist/8917889_3981670.jpg",
        "../../../dist/homem-com-telefone-celular-ao-lado-do-guarda-roupa.jpg",
        ]

        const imgBanner = ref(document.querySelectorAll(".slider"));
        let imgIndex = ref(0);
  
        const hideSlide = () => { imgBanner.value.forEach( element => {
            element.classList.remove('on')
        });}

        const showSlide = () => { imgBanner.value.item(imgIndex).classList.add('on') }

        
        const nextSlide = () =>{
            hideSlide();
            console.log(imgBanner.value.length);
            console.log(imgBanner);
            if(imgIndex.value === imgBanner.value.length -1){
                imgIndex.value = 0;
            }else{
                imgIndex.value++;
            }
            showSlide();
        }

        const prevSlide = () =>{
            hideSlide();
            console.log(imgBanner.value.length);
            console.log(imgBanner);
            if(imgIndex.value === 0){
                imgIndex.value = imgBanner.value.length - 1;
            }else{
                imgIndex.value--;
            }
            showSlide();
        }
        
        const itemObjTest = ref( { camisas: [
        {
            name: 'Camisa vermelha padrão',
            preco: 80,
            textoParcela: "Em até 4x de R$20 sem juros no cartão.",
        }, 
        {
            name: 'Camisa vermelha',
            preco: 120,
            textoParcela: "Em até 4x de R$30 sem juros no cartão.",
        },
        {
            name: 'Camisa vermelha diferenciada',
            preco: 160,
            textoParcela: "Em até 4x de R$40 sem juros no cartão.",
        }
        ]})
         
        

            return{
                itemObjTest, nextSlide, prevSlide, slides,
            }
        },
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
    font-family: 'Rubik', sans-serif;   
}

.main-content{
    max-width: 120rem;
    margin: 0 auto;
}

.main-bg{
    background-color: #d9d99b 
}

.view-main{
    height: 100vh;
}

button{
    background: transparent;
    border:none;
    cursor: pointer;
}

.banner-capa{
    display: flex;
    justify-content: center ;
    align-items: center;
    position: relative;
    top: -5rem;
}

.slider-div{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slider{
    display: none;
    transition: display 320ms;
}

.on{
    display: flex;
}

.banner-capa img{
    max-width: 100%;
    height: 39rem;
    border-radius: .5rem;
}

.banner-capa .direita {
    margin-left: -1rem;
}

.banner-capa .esquerda{
    margin-right: -1rem;
}

.banner-capa .esquerda img{
    transform: rotate(180deg);
}

.banner-capa .button-banner img{
    height: 1.2rem;
    width: 1.2rem;
}

.list-items{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    flex-flow: column wrap;
    top: -15rem
}

.list-items .items-header h2{
    color: #8b0000;
    transition: all 320ms ease-in-out;
    cursor: initial;
}

.list-items .items-header{
    margin-bottom: 1rem;
}

.items{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
}

.item{
    height: 30rem;
    width: 20rem;
    cursor: pointer;
    transition: all 50ms ease-in-out;
}

.item:hover{
    border: 0.1rem solid #2C2C2C;
}

.item-head{
    display: flex;
    justify-content: center;
    position: relative;
    top: 0.2rem;
}

.item-head img{
    height: 15rem;
    widows: 15rem;
}

.item-content{
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-flow: column wrap;
    top: 0.35rem;
}

.item-content .item-description{
    margin-left: 0.5rem;
    color: #8b0000;
    line-height: 1.2;
}

.item-content .item-description .price-item{
    margin-top: 1.5rem;
}

.item-content .item-description .parcela-item{
    margin-top: 1.2rem;
}

.item-content .item-description h3{
    font-size: 1.2rem;
    font-weight: 400;
}


</style>
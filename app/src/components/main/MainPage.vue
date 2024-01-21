<template>
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
 <main class="main-bg"> 
        <section class="main-content">
            
            <carousel-main :slides="slides" interval="3000"  controls indicators></carousel-main> 
            <div class="items-header">
                <h2>NOVIDADES</h2>
            </div>
            <items-group :itemObjTest="itemObjTest"></items-group>
        </section>
        <router-view></router-view>
    </main>
</template>



<script>
import { ref } from 'vue';
import CarouselMain from '../carousel/CarouselMain.vue'
import itemsGroup from '../items/itemsGroup.vue'
export default {
    components: { CarouselMain, itemsGroup },
    name: 'MainPage',
    setup(){

        const slides = [
        "../../../dist/3038640.jpg",
        "../../../dist/8917889_3981670.jpg",
        "../../../dist/homem-com-telefone-celular-ao-lado-do-guarda-roupa.jpg",
        "https://picsum.photos/id/1033/1200/600",
        "https://picsum.photos/id/1031/1200/600",
        ]

        
        
        const itemObjTest = ref( { roupas: [
        {
            name: 'Camisa vermelha padrão',
            preco: `R$ ${80}`,
            textoParcela: "Em até 4x de R$20 sem juros no cartão.",
        }, 
        {
            name: 'Camisa vermelha',
            preco: `R$ ${120}`,
            textoParcela: "Em até 4x de R$30 sem juros no cartão.",
        },
        {
            name: 'Camisa vermelha diferenciada',
            preco: `R$ ${160}`,
            textoParcela: "Em até 4x de R$40 sem juros no cartão.",
        },
        {
            name: 'Camisa vermelha diferenciada 2.0',
            preco: `R$ ${200}`,
            textoParcela: "Em até 4x de R$50 sem juros no cartão.",
        }
        ]})
         
        

            return{
                itemObjTest, slides,
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
    background-color: #d9d99b; 
}

.view-main{
    height: 100vh;
}

button{
    background: transparent;
    border:none;
    cursor: pointer;
}


.items-header h2{
    color: #8b0000;
    transition: all 320ms ease-in-out;
    cursor: initial;
    left: 50rem;
}

.items-header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -12rem;
    margin-top: -5rem;
}




</style>
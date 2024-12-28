<template>
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
 <main class="main-bg"> 
        <section class="main-content">
            
            <carousel-main :slides="slides" :interval="3000"  controls indicators></carousel-main> 
           
            <div class="newness-items">
                <div class="items-header">
                    <h2>NOVIDADES</h2>
                </div>
                <items-group :itemObjTest="itemObjTest"></items-group>
            </div>

            <div class="banner">
                <div class="header">
                    <span>PRIMAVERA 2025</span>
                    <h3>COLEÇÕES IMPERDIVEIS!!!</h3>
                    <p>Para se manter atualizado com a nova estação que está chegando.</p>
                    <button class="shop-btn">COMPRE AGORA</button>
                </div>
                <img src="../assets/hero-cover-1.svg" alt="">
            </div>

            <div class="most-sold-items">
                <div class="items-header">
                    <h2>MAIS VENDIDOS</h2>
                </div>
                <items-group :itemObjTest="itemObjTest"></items-group>
            </div>
        </section>
    </main>
</template>



<script>
import { ref } from 'vue';
import CarouselMain from '@/components/carousel/CarouselMain.vue'
import itemsGroup from '@/components/items/itemsGroup.vue'
export default {
    components: { CarouselMain, itemsGroup },
    name: 'MainPage',
    setup(){

        const slides = [
        "https://picsum.photos/id/1033/1200/600",
        "https://picsum.photos/id/1033/1200/600",
        "https://picsum.photos/id/1033/1200/600",
        "https://picsum.photos/id/1033/1200/600",
        "https://picsum.photos/id/1031/1200/600",
        ]

        
        const itemObjTest = ref( { roupas: [
        {
            name: 'Camisa vermelha padrão',
            dressType: 'camiseta',
            preco: 80,
            available: 34,
        }, 
        {
            name: 'Camisa vermelha',
            dressType: 'camiseta',
            preco: 120,
            available: 54,
        },
        {
            name: 'Camisa vermelha diferenciada',
            dressType: 'camiseta',
            preco: 160,
            available: 12,
        },
        {
            name: 'Camisa vermelha diferenciada 2.0',
            dressType: 'camiseta',
            preco: 200,
            available: 32,
        },
        {
            name: 'Camisa adasdasd',
            dressType: 'camiseta',
            preco: 200,
            available: 32,
        },
        {
            name: 'Camisa asdasdasd',
            dressType: 'camiseta',
            preco: 200,
            available: 32,
        },
        {
            name: 'Camisa vermelha dadasdasd',
            dressType: 'camiseta',
            preco: 200,
            available: 32,
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    max-width: 120rem;
    margin: 0 auto;
    margin-top: 3.5rem;
}

.banner{
    background-color: #4169E1;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    border-radius: 8px;
    padding: 0 20px;


    img{
        position: relative;
        left: 3%;
    }

    .header{
        position: relative;
        left: 10%;
        display: flex;
        align-items: flex-start;
        width: 100%;
        flex-flow: column wrap;
        gap: 1.5rem;

        span {
            font-size: 20px;
            font-family: 'Open sans', sans-serif; 
            color: #F8F8FF
        }

        h3 {
            font-size: 42px;
            color: #121212;
        }

        p {
            word-break: break-word;
            font-size: 20px;
            font-family: 'Open sans', sans-serif; 
            color: #cccccc;
            width: 50%;
        }

        .shop-btn {
            font-size: 25px;
            font-weight: 600;
            font-family: 'Open sans', sans-serif;
            background-color: #F8F8FF;
            width: 40%;
            padding: 0.5rem;
            border-radius: 0.5rem;
        }
    }
}

button{
    background: transparent;
    border:none;
    cursor: pointer;
}

.newness-items, .most-sold-items{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.items-header h2{
    color: #4169E1;
    transition: all 320ms ease-in-out;
    cursor: initial;
    left: 50rem;
    font-size: 20px;
    font-weight: 400px;
}

.items-header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

</style>
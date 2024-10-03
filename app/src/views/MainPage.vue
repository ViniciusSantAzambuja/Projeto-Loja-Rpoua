<template>
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
 <main class="main-bg"> 
        <section class="main-content">
            
            <carousel-main :slides="slides" interval="3000"  controls indicators></carousel-main> 
           
            <div class="newness-items">
                <div class="items-header">
                    <h2>NOVIDADES</h2>
                </div>
                <items-group :itemObjTest="itemObjTest"></items-group>
            </div>

            <div class="most-sold-items">
                <div class="items-header">
                    <h2>MAIS VENDIDOS</h2>
                </div>
                <items-group :itemObjTest="itemObjTest"></items-group>
            </div>
        </section>
        <router-view></router-view>
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
    gap: 5rem;
    max-width: 120rem;
    margin: 0 auto;
    margin-top: 3.5rem;
}

.main-bg{
}

.view-main{
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
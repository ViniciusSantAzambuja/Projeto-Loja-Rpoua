<template>
    <main class="main-bg">
        <itemsGroup :itemObjTest="itemObjTest"></itemsGroup>
    </main>    
</template>

<script>
import { ref } from "vue";
import itemsGroup from '@/components/items/itemsGroup.vue';
export default{
    components: { itemsGroup },
    setup(){
        const itemObjTest = ref( { roupas: [
        {
            
            name: 'Camisa vermelha padrão',
            dressType: 'camiseta',
            preco: 80,
            available: 12,
        }, 
        {
            name: 'Camisa vermelha',
            dressType: 'camiseta',
            preco: 120,
            available: 23,
        },
        {
            name: 'Camisa vermelha diferenciada',
            dressType: 'camiseta',
            preco: 160,
            available: 42,
        },
        {
            name: 'Camisa vermelha diferenciada 2.0',
            dressType: 'camiseta',
            preco: 200,
            available: 43,
        }
        ]})
        return{
            itemObjTest
        }
    }
}
</script>

<style scoped>
.main-bg{
    margin-top: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: start;
}

</style>
<template>
    <main class="main-bg">
        <itemsGroup :itemObjTest="itemObjTest"></itemsGroup>
    </main> 
</template>

<script>
import { ref } from "vue"; 
import itemsGroup from '@/components/items/itemsGroup.vue';
export default{
    components:{ itemsGroup },
    setup(){
        const itemObjTest = ref( { roupas: [
        {
            
            name: 'Calça jeans azul escuro',
            dressType: 'camiseta',
            preco: 80,
            available: 84,
        }, 
        {
            name: 'Calça jeans branca',
            dressType: 'camiseta',
            preco:120,
            available: 20,
        },
        {
            name: 'Calça de sarja preta',
            dressType: 'camiseta',
            preco:160,
            available: 62,
        },
        {
            name: 'Calça de sarja verde oliva',
            dressType: 'camiseta',
            preco:200,
            available: 45,
        },
        {
            name: 'Calça de sarja azul',
            dressType: 'camiseta',
            preco:220,
            available: 35,
        },
        {
            name: 'Calça cargo preta',
            dressType: 'camiseta',
            preco: 240,
            available: 56,
        },
        {
            name: 'Calça cargo cinza',
            dressType: 'camiseta',
            preco: 280,
            available: 67,
        },
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
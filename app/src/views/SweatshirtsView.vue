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
            
            name: 'Moletom verde',
            dressType: 'camiseta',
            preco: 80,
            available: 76,
        }, 
        {
            name: 'Moletom Azul e Preto',
            dressType: 'camiseta',
            preco: 120,
            available: 23,
        },
        {
            name: 'Moletom listrado',
            dressType: 'camiseta',
            preco: 160,
            available: 54,
        },
        {
            name: 'Moletom Azul Marinho',
            dressType: 'camiseta',
            preco: 200,
            available: 20,
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
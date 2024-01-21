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
            itemObjTest
        }
    }
}
</script>

<style scoped>
.main-bg{
    background-color: #d9d99b;
}

</style>
<template>
    <div class="ShopCartItemList">
        <ShopCartSingleItem></ShopCartSingleItem>
    </div>
</template>

<script>
import ShopCartSingleItem from './ShopCartSingleItem.vue';
export default{
    components:{ShopCartSingleItem}
}
</script>

<style scoped>
.ShopCartItemList{
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
    position: relative;
    top: 50px
}
</style>
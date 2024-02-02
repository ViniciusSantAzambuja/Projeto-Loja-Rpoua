<template>
<main>
    <span class="ShopCartItemList-line"></span>
    <div class="ShopCartItemList">
        <ShopCartSingleItem></ShopCartSingleItem>
    </div>
    <span class="ShopCartItemList-line"></span>
</main>
</template>

<script>
import ShopCartSingleItem from './ShopCartSingleItem.vue';
export default{
    components:{ShopCartSingleItem}
}
</script>

<style scoped>
main{
    width: 100%;
    position: relative;
    top: 50px;
    background-color: #F8F8D9;
}
.ShopCartItemList{
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
    position: relative;
    top: 5px;
}
.ShopCartItemList-line{
    width: 100%;
    height: 8px;
    background-color: #d9d99b;
    position: absolute;
}
</style>
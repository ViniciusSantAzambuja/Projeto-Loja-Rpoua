<template>
 
<div class="list-items">
    <div class="items">
       <itemsInside :itemObjTest="itemObjTest"></itemsInside>
    </div>
</div>

</template>

<script>
import itemsInside from './itemsInside.vue'
export default{
    props: ["itemObjTest"],
    components: { itemsInside },

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

.list-items{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    flex-flow: column wrap;
    padding: 0.5rem;
}

.items{
    display: grid;
    grid-template-columns: repeat(4, 200px);
    gap: 1rem;
}


</style>
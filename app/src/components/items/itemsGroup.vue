<template>
 
<div class="list-items view-main">
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

.view-main{
    height: 100vh;
}

.list-items{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    flex-flow: column wrap;
}

.items{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
}


</style>
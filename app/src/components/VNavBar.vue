<template>
    <aside class="menu main-content" v-if="getShowNavBar">  
            <section class="menu-content"> 
                <h1><router-link to="/">LOGO</router-link></h1>
                <nav>
                    <ul>
                        <li><router-link to="/camisetas">CAMISETAS</router-link></li>
                        <li><router-link to="/moletons">MOLETONS</router-link></li>
                        <li><router-link to="/calças">CALÇAS</router-link></li>
                    </ul>
                </nav>
                <nav class="menu-icons">
                    <VSearchBar placeholder="Pesquisar produtos"/>
                    <router-link  to="/login">
                        <fontAwesome icon="user" class="cart-shopping-icon"/>
                    </router-link  >
                    <router-link to="/carrinho">
                        <fontAwesome icon="cart-shopping" class="cart-shopping-icon"/> 
                    </router-link>
                </nav>
            </section>
        </aside> 
</template>

<script>
import { mapGetters } from 'vuex';
import VSearchBar from './VSearchBar.vue';
export default {
    components: {
        VSearchBar 
    },
    mounted(){
        console.log(this.getShowNavBar)
    },
    computed: {
        ...mapGetters(['getShowNavBar'])
    }
}
</script>

<style scoped>
.main-content{
    max-width: 120rem;
    margin: 0 auto;
}

.main-bg{
    background-color: #121212;
}

.view-main{
    height: 150vh;
}

.menu{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    width: 100%;
    height: 3rem;
    box-shadow: 0 -0.6rem 1.3rem #000;
    font-family: sans-serif;
    z-index: 2;
    background-color: #121212;
}

.menu-content{
    display: flex;
    align-items: center;
    max-width: 100%;
    height: 100%;
    justify-content: space-around;
    padding: 0 1rem;
}

.menu-content h1{
    color: #4169E1;
}

.menu-content ul{
    display: flex;
    list-style: none;
    padding-left: 10rem;
}

.menu-content li{
    padding-left: 2rem;     
}

.menu-content a{
    text-decoration: none;    
    color: #4169E1;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    position: relative;
}

.menu-content ul li a::after{
    content: ' ';
    top: 1.15rem;
    left: 2%;
    position: absolute;
    width: 0%;
    height: 0.15rem;
    transition: all 320ms ease-in-out;
    background-color: #4169E1;
}

.menu-content ul li a:hover::after{
    width: 100%;
    left: 0.1rem;
}

.menu-icons{
    display: flex;
    align-items: center;    
}

.menu-icons a {
    margin-left: 1.5rem;
}

button{
    background: transparent;
    border:none;
    cursor: pointer;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}

</style>
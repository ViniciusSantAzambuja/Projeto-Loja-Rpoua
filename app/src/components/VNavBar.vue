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
                <div class="search-bar-container">
                        <input type="text" name="search-area" id="search-area" placeholder="O que você está procurando hoje?">
                        <router-link  to="/">
                            <fontAwesome icon="magnifying-glass" class="cart-shopping-icon" />
                        </router-link>
                </div>
                <nav class="menu-icons">
                    <router-link  to="/">
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
export default {
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
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin-left: 10rem; 
    margin-right: 10rem;
    margin-top: 0.5rem;

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

.menu-content .search-bar-container{
    display: flex;
    top: -0.16rem;
    align-items: center;
    margin-left: 20rem;
}

.menu-content .search-bar-container .cart-shopping-icon{
    margin-top: 0.11rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.3rem;
    transition: all 320ms ease-in-out;
    color: #4169E1;
}

.menu-content .search-bar-container input{
    width: 17rem;
    height: 1.7rem;
    margin-bottom: 0.1rem;
    padding-left: 0.1rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
}

.menu-content .search-bar-container input:focus{
    outline: none;
    border: 2px solid #4169E1;
    transition: ease-in-out ;
}

.menu-content .search-bar-container input::placeholder{
   padding-left: 0.35rem;
   color: #2C2C2C;
   font-weight: 600;
   font-family: Avenir, Helvetica, Arial, sans-serif;
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
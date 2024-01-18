<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
  <aside class="menu main-content">  
            <section class="menu-content"> 
                <h1><router-link to="/">LOGO</router-link></h1>
                <nav>
                    <ul>
                        <li><router-link to="/">CAMISETAS</router-link></li>
                        <li><router-link to="/">MOLETONS</router-link></li>
                        <li><router-link to="/">CALÇAS</router-link></li>
                    </ul>
                </nav>
                <div class="search-bar-container">
                        <input type="text" name="search-area" id="search-area" placeholder="O que você está procurando hoje?">
                        <router-link  to="/">
                            <fontAwesome icon="magnifying-glass" class="cart-shopping-icon" />
                        </router-link>
                </div>
                <div class="menu-icons">
                    <router-link  to="/">
                        <fontAwesome icon="user" class="cart-shopping-icon"/>
                    </router-link  >
                    <router-link to="/carrinho">
                        <fontAwesome icon="cart-shopping" class="cart-shopping-icon"/> 
                    </router-link>
                </div>
            </section>
        </aside> 
       <MainPage />
       <RouterView></RouterView>
 </template>
 
 
 
 <script>
  import MainPage from '@/components/main/MainPage.vue'
  export default{
    components: MainPage, 
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

.main-content{
    max-width: 120rem;
    margin: 0 auto;
}

.main-bg{
    background-color: #d9d99b; 
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
    background: #F8F8D9;
    font-family: sans-serif;
    z-index: 1;
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
    color:  #800000;
    
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
    color:  #800000;
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
    background-color: #d9d99b;
    transition: all 320ms ease-in-out;
}

.menu-content ul li a:hover::after{
    width: 100%;
    left: 0.1rem;
}

.menu-icons{
    display: flex;
    position: relative;
    
}

.menu-icons a{
    margin-left: 1.5rem;
}

.menu-icons img{
    width: 2.1rem;
    height: 2.1rem;
    padding: 0.3rem;
}

.menu-icons .cart-shopping-icon{
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    top: .35rem;
    color: #2c2c2c;
}
.menu-content .search-bar-container{
    display: flex;
    top: -0.16rem;
    position: relative;
    align-items: center;
    height: 1.9rem;
    margin-left: 20rem;
    border-bottom: 0.1rem solid #d9d99b;
}

.menu-content .search-bar-container .cart-shopping-icon{
    margin-top: 0.11rem;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.3rem;
    transition: all 320ms ease-in-out;
    color: #2C2C2C;
}

.menu-content .search-bar-container input{
    width: 17rem;
    height: 1.7rem;
    margin-bottom: 0.1rem;
    padding-left: 0.1rem;
    border: 0.1rem solid #F8F8D9;
    border-bottom: none;
    background-color: #F8F8D9;
    outline: none;
}

.menu-content .search-bar-container input:focus{
    outline: none;

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

 </style>
<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Rubik:wght@300;400&display=swap" rel="stylesheet">
   <div class="main-single-item">
        <div class="infos-item">
           <div class="infos-rigth-side">
            <div class="infos-head">
                <h2 @click="aumentaQtde">item-name</h2>
                <h3>Disponíveis: {{ itemQtde }}</h3>
            </div>
            <div class="tamanho">
                <ul>
                    <li v-for="(size, index) in sizes" :key="index" :class="{ selected: currentIndex === index }" @click="setCurrentIndex(index)">{{ size }}</li>
                </ul>
            </div>
            <div class="infos-pay-options">
                <h3>R$120,78</h3>
                <h3>Em ate 4x de R$37,8 no cartão de crédito</h3>
                <input type="text" value="1">
                <button type="button"><span>COMPRAR</span></button>
            </div>
           </div>
        </div>
    </div>
</template>

<script>
export default{
    data: () => ({
        itemQtde: 50,  
        sizes: ['P', 'M', 'G', 'GG', 'XG'],
        currentIndex: -1, 
    }),
    methods: {
        aumentaQtde(){
            console.log(this.itemQtde);
            this.itemQtde++;
        },
        setCurrentIndex(index){
            this.currentIndex = index;
        }
    },
    computed:{
        
    }
   
}
</script>

<style scoped>
*{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
}
.main-single-item{
    max-width: 1200px;
    margin-top: 200px;
}
.infos-item{
    display: flex;
    position: relative;
}
.infos-head{
    margin-bottom: 30px;
}
.tamanho{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    position: relative;
    left: -82px;
    margin-bottom: 30px;
}
.tamanho ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none; 
}
.tamanho ul li{
    position: relative;
    margin-right: 15px;
    font-size: 20px; 
    font-family: 'Rubik', sans-serif;   
    cursor: pointer;
}

.tamanho ul li::after{
    content: '';
    position: absolute;
    padding: 1px;
    width: 120%;
    height: 100%;
    left: -3px;
    border: 1px solid #d9d99b;
    border-radius: 20%;
}
.selected{
    color: #8b0000;
}
.tamanho ul li.selected::after{
    content: '';
    border: 2px solid #8b0000;
}

.item-pay-options{
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
}

.infos-pay-options input{
    outline: none;
    border: 1px solid #8b0000;
    border-radius: 2px;
}

.infos-pay-options button{
    background-color: #d9d99b;
    border: 1px solid #d9d99b;
    border-radius: 1px;
    width: 50%; 
    cursor: pointer;   
    transition: all 200ms ease-in-out;
}

.infos-pay-options button:hover{
    background-color: #000;
    border: 1px solid #000;
    border-radius: 1px;
    width: 50%; 
    cursor: pointer;   
    color: #d9d99b;
}
</style>
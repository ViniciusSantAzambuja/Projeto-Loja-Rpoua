import { createStore } from 'vuex'

const store = createStore({
    state: {
       products: [{name: "produto 1", size: "P", quantity: 1, price: 80}, {name: "produto 2", size: "M", quantity: 3, price: 200}, 
       {name: "produto 3", size: "G", quantity: 2, price: 160}, {name: "produto 4", size: "GG", quantity: 10, price: 80}]
    },
    mutations:{
        addProductsToShopCart(state, product){
            state.products.push(product);

            console.log("OLHA O ARRAY:", state.products);

        },
        clearArray(state){
            state.products.pop()
        },
        removeProductFormShopCart(state, productToRemove){
            state.products = state.products.filter((product) => {return product !== productToRemove})
        }
    },
    getters:{
        getTotalOrderPrice(state){
            return state.products.reduce((totalPrice, product) => totalPrice +=  product.price*product.quantity, 0)
        },
        getProducts(state){
            return state.products
        }
    },
})


export default store
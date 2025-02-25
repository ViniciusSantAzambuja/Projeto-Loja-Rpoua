import { createStore } from 'vuex'
import auth from "@/auth/store/store"
import shop from "@/shop/store/store"

const store = createStore({
    state: {
        products: [{name: "produto 1", size: "P", quantity: 1, price: 80}, {name: "produto 2", size: "M", quantity: 3, price: 200}, 
        {name: "produto 3", size: "G", quantity: 2, price: 160}, {name: "produto 4", size: "GG", quantity: 10, price: 80}],
        hasNavBar: true,
    },
    mutations:{
        addProductsToShopCart(state, product){
            state.products.push(product);

            console.log("OLHA O ARRAY AQUI:", state.products);

        },
        clearArray(state){
            state.products.pop()
        },
        removeProductFormShopCart(state, productToRemove){
            state.products = state.products.filter((product) => {return product !== productToRemove})
        },
    },
    getters:{
        getTotalOrderPrice(state){
            return state.products.reduce((totalPrice, product) => totalPrice +=  product.price*product.quantity, 0)
        },
        getProducts(state){
            return state.products
        },
        getShowNavBar(state){
            return state.hasNavBar
        },
    },
})

store.registerModule('auth', auth)
store.registerModule('shop', shop)

export default store
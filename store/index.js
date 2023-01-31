import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import products from "../data/product.json";
Vue.use(Vuex)
axios.defaults.baseURL='http://127.0.0.1:8000/'
 
export const state = () => ({
    products: products,
    cart: [],
    wishlist: [],
    compare: [],
    token: '',
    isAuth : false,
    pack:[],
    selectedPack:{},
})


// your root getters
export const getters = {
    getToken(state) {
        return state.token
    },
    getisAuth(state) {
        return state.isAuth
    },
    getProducts(state) {
        return state.products
    },

    getCart: state => {
        return state.cart
    },

    cartItemCount: state => {
        return state.cart.length
    },

    getWishlist: state => {
        return state.wishlist
    },

    getCompare: state => {
        return state.compare
    },

    wishlistItemCount: state => {
        return state.wishlist.length
    },

    compareItemCount: state => {
        return state.compare.length
    },

    getTotal: state => {
        let total = 0;
        state.cart.forEach(item => {
            let price = item.discount ? item.price - (item.price *(item.discount)/100) : item.price;
            total += price * item.cartQuantity
        })

        return total;
    },

    getNewProducts: state => {
        return state.products.filter(item => {
            return item.new
        })
    },

    getBestProducts: state => {
        return state.products.filter(item => {
            return item.best
        })
    },

    getSaleProducts: state => {
        return state.products.filter(item => {
            return item.discount
        })
    },

    categoryList: state => {
        return ["all categories",...new Set(state.products.map((list) => list.category).flat())]
    },

    tagList: state => {
        return [...new Set(state.products.map((list) => list.tag).flat())]
    },

    sizeList: state => {
        return ["all sizes",...new Set(state.products.map((list) => list.variation?.sizes).flat())].filter(Boolean)
    },

    colorList: state => {
        return ["all colors",...new Set(state.products.map((list) => list.variation?.color).flat())].filter(Boolean)
    },
}


// contains your mutations
export const mutations = {
    SET_PRODUCT(state, product) {
        state.products = product
    },
    updatePack(state,pack) {
        return state.pack=pack
    },
    updateSelectedPack(state,pack) {
        return state.selectedPack=pack
    },
    UPDATE_CART(state, payload) {
        const item = state.cart.find(el => payload.id === el.id)
        if (item) {
            const price = item.price;
            item.cartQuantity = item.cartQuantity + payload.cartQuantity
            item.total = item.cartQuantity * price
        } else {
            const price =  payload.price;
            state.cart.push({...payload, cartQuantity: payload.cartQuantity, total: price })
            
            localStorage.setItem("cart", JSON.stringify(state.cart))
        }
    },
    localCart(state,cart){
        return state.cart=cart
    },
    REMOVE_PRODUCT_FROM_CART(state, product) {
        const accounts = JSON.parse(localStorage.getItem('cart'));
        const filtered = accounts.filter(item => item.id !== product.id);
        localStorage.setItem('cart', JSON.stringify(filtered));
        state.cart = state.cart.filter(item => {
            return product.id !== item.id
        });
    },

    DECREASE_PRODUCT(state, payload) {
        const found = state.cart.find(el => payload.id === el.id)
        const price = payload.price;
        found.cartQuantity = found.cartQuantity - payload.cartQuantity
        found.total = found.cartQuantity * price
    },

    CLEAR_CART(state) {
        state.cart = []
    },

    ADD_TO_WISHLIST(state, product) {
        const item = state.wishlist.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.wishlist.push(product)
        }
    },

    REMOVE_PRODUCT_FROM_WISHLIST(state, product) {
        state.wishlist = state.wishlist.filter(item => {
            return product.id !== item.id
        });
    },

    ADD_TO_COMPARE(state, product) {
        const item = state.compare.find(el => product.id === el.id)
        if(item) {
            return
        } {
            state.compare.push(product)
        }
    },

    REMOVE_FROM_COMPARE(state, product) {
        state.compare = state.compare.filter(item => {
            return product.id !== item.id
        });
    },
    REGISTER(state) {
        this.$auth.$storage.setState('loggedIn', true)
     },
    LOGIN(state) {
        this.$auth.$storage.setState('loggedIn', true)
     },
}


// contains your actions
export const actions = {
    async registerUser({commit}, payload) {
        const ip = await this.$axios.$post('api/clientregister',payload.prod,payload.requestOptions)
        .then(data => {
            commit('REGISTER', data)
         })
         .catch(error => {
            Vue.notify({
                group: 'register',
                title: "Warning",
                text: error.response.data.message,
                type: 'error'
              })
         })
    },
    async loginUser({commit}, payload) {
        const ip = await this.$axios.$post('api/loginregister',payload.prod,payload.requestOptions)
        .then(data => {
            commit('LOGIN', ip)
         })
         .catch(error => {
            Vue.notify({
                group: 'foo',
                title: error.response.data.message,
                text: 'Email or Password incorrect!',
                type: 'error'
              })
         })     
    },
    addToCartItem({commit}, payload) {
        commit('UPDATE_CART', payload)
    },

    removeProductFromCart({commit}, product) {
        
        commit('REMOVE_PRODUCT_FROM_CART', product)
    },

    decreaseProduct({ commit }, product) {
        commit('DECREASE_PRODUCT', product)
    },

    addToWishlist({commit}, payload) {
        commit('ADD_TO_WISHLIST', payload)
    },

    addToCompare({commit}, payload) {
        commit('ADD_TO_COMPARE', payload)
    },

    removeProductFromWishlist({commit}, product) {
        commit('REMOVE_PRODUCT_FROM_WISHLIST', product)
    },

    removeFromCompare({commit}, product) {
        commit('REMOVE_FROM_COMPARE', product)
    },
}


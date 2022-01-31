import axios from 'axios'
import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: [],
    categories: [],
    tva: [],
    cart: [],
    items: 0,
    url: 'http://localhost:5000/api'
  },
  mutations: {
    getProducts(state, products) {
      state.products = products
    },
    getCategories(state, categories) {
      state.categories = categories
    },
    getTva(state, tva) {
      state.tva = tva
    },
  },
  actions: {
    getTvaAction({
      commit
    }) {
      axios.get('http://localhost:5000/api/tva/getall').then(res => {
        commit('getTva', res.data)
      })
    },
    getProductsAction({
      commit
    }) {
      axios('https://fakestoreapi.com/products').then(res => {
        commit('getProducts', res.data)
      })
      // axios.get(state.url + '/products/getall').then(res => {
      //   commit('getProducts', res.data)
      // })
    },
    getCategoriesAction({
      commit
    }) {
      axios.get(this.state.url + '/category/getall').then(res => {
        commit('getCategories', res.data)
      })
    },
  },
  modules: {}
})
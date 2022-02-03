import axios from 'axios'

let user = localStorage.getItem('user');
if (!user) {
  user = {
    userId: -1,
    token: '',
  };
} else {
  try {
    user = JSON.parse(user);
    instance.defaults.headers.common['Authorization'] = user.token;
  } catch (ex) {
    user = {
      userId: -1,
      token: '',
    };
  }
}

import {
  createStore
} from 'vuex'

import VueJwtDecode from 'vue-jwt-decode'

export default createStore({
  state: {
    products: [],
    categories: [],
    tva: [],
    cart: [],
    items: 0,
    url: 'http://localhost:5000/api',
    login: false,
    user: [],
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
    getInfos(state, user) {
      state.user = user
    },
  },
  actions: {
    getTvaAction({
      commit
    }) {
      axios.get(this.state.url + '/tva/getall').then(response => {
        commit('getTva', response.data)
      })
    },
    getProductsAction({
      commit
    }) {
      // axios('https://fakestoreapi.com/products').then(res => {
      //   commit('getProducts', res.data)
      // })
      axios.get(this.state.url + '/product/getall').then(res => {
        commit('getProducts', res.data)
      })
    },
    getCategoriesAction({
      commit
    }) {
      axios.get(this.state.url + '/category/getall').then(res => {
        commit('getCategories', res.data)
      })
    },
    getUserInfos({
      commit
    }) {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user == null) {
        this.state.login = false;
        // this.$route.push('Home')
      } else {
        console.log(user);
        const infoUser = VueJwtDecode.decode(user.token);
        commit('getInfos', infoUser);
        console.log(infoUser);
        this.state.login = true;
      }
    }


  },

  modules: {}
})
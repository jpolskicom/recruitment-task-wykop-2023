import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    methods: {
      countries: 'https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json'
    },
    order: {
      items: [
        {name: 'Apple Watch Spot', price: 580, tax: 0, currency: '$'},
        {name: 'Modern Buckle', price: 380, tax: 0, currency: '$'}
      ],
      user: {},
      payment: {}
    },
    countries: []
  },
  getters: {
    getOrderItems: (state) => state.order.items,
    getOrderTotals: (state) => {
      let totals = {totalPurchases: 0, estiamtedTax: 0, total: 0, currency: '$' };

      state.order.items.forEach(item => {
        totals.totalPurchases += item.price;
        totals.estiamtedTax += item.tax;
        totals.total += item.tax + item.price
      });

      return totals;
    },
    getOrderRequest: (state) => state.order,
    getCountries: (state) => state.countries
  },
  mutations: {
    setCountries: (state,payload) => state.countries = payload,
    setOrderUser: (state,payload) => state.order.user = payload,
    setOrderPayment: (state,payload) => state.order.payment = payload,
  },
  actions: {
    async fetchCountries({state, commit}) {
      const response = await axios.get(state.methods.countries)
      commit('setCountries',response.data)
    }
  }
})

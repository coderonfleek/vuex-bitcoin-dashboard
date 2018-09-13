import Vue from "vue";
import Vuex from "vuex";
import prices from "./prices";

//Configure Vuex for modules
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    prices: prices
  },
  getters: {
    currentPrice: state => {
      return state.prices.concat().sort((a, b) => (b.timestamp - a.timestamp))[0];
    },
    previousPrice: state => {
      return state.prices.concat().sort((a, b) => (b.timestamp - a.timestamp))[1];
    },
    percentageIncrease: (state, getters) => {
      return (
        ((getters.currentPrice.amount - getters.previousPrice.amount) /
          getters.previousPrice.amount) *
        100
      ).toFixed(2);
    },
    difference: (state, getters) => {
      return (
        getters.currentPrice.amount - getters.previousPrice.amount
      ).toFixed(2);
    }
  },
  mutations: {
    UPDATE_PRICE(state, payload) {
      let newPricing = payload;
      //Remove the oldest price
      state.prices.shift();
      //add the new price
      state.prices = [...state.prices, newPricing];
    }
  }
});

export default store;
export { default as actions } from "./actions";

<template>
  <div id="app" class="container">
    <div class="row">
      <h1>Dashboard</h1>
    </div>
    <div class="row">
      <div class="col-md-5">
        <Coinprice />
      </div>

      <div class="col-md-5 offset-md-1">
        <Percentchange />
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
         <div class="card-header">
          Bitcoin Pricing History
         </div>
         <ul class="list-group list-group-flush">
          <Priceitem v-bind:key="price.timestamp" v-for="price in prices" v-bind:price="price" />
         </ul>
       </div>
      </div>
    </div>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
//Libraries
import _ from "lodash";
//Components
import Coinprice from "./components/Coinprice.vue";
import Percentchange from "./components/Percentchange.vue";
import Priceitem from "./components/Priceitem.vue";

//Store
import store from "./store";
import { actions } from "./store";

export default {
  name: "app",
  components: {
    Coinprice,
    Percentchange,
    Priceitem
  },
  store,
  computed: {
    prices() {
      return _.orderBy(store.state.prices, ["timestamp"], ["desc"]);
    }
  },
  created: function() {
    console.log(store.state.prices);
    setInterval(this.triggerNewPrice, 3000);
  },
  methods: {
    triggerNewPrice: () => {
      const randomNewPrice =
        store.getters.currentPrice.amount +
        (Math.random() - Math.random()) * 10;
      store.commit(actions.UPDATE_PRICE, {
        amount: randomNewPrice,
        timestamp: +new Date()
      });
    }
  }
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.pd-10 {
  padding: 10px;
}
</style>

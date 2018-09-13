<template>
  <div id="app" class="container">
    <div class="row">
      <h1>Dashboard</h1>
    </div>
    <div class="row">
      <div class="col-md-5">
        <CoinPrice/>
      </div>

      <div class="col-md-5 offset-md-1">
        <PercentChange/>
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
            <PriceItem v-bind:key="price.timestamp" v-for="price in prices" v-bind:price="price"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  //Libraries
  import _ from "lodash";
  //Components
  import CoinPrice from "./components/CoinPrice.vue";
  import PercentChange from "./components/PercentChange.vue";
  import PriceItem from "./components/PriceItem.vue";

  //Store
  import store from "./store";
  import {actions} from "./store";

  export default {
    name: "app",
    components: {
      CoinPrice,
      PercentChange,
      PriceItem
    },
    store,
    computed: {
      prices() {
        return _.orderBy(store.state.prices, ["timestamp"], ["desc"]);
      }
    },
    created: function () {
      setInterval(this.triggerNewPrice, 3000);
    },
    methods: {
      triggerNewPrice: () => {
        const diff = (Math.random() - Math.random()) * 10;
        const randomNewPrice = store.getters.currentPrice.amount + diff;
        store.commit(actions.UPDATE_PRICE, {
          amount: randomNewPrice,
          timestamp: Date.now()
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
</style>

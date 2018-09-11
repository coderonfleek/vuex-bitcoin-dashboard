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
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Coinprice from "./components/Coinprice.vue";
import Percentchange from "./components/Percentchange.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Coinprice,
    Percentchange
  }
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.pd-10 {
  padding: 10px;
}
</style>

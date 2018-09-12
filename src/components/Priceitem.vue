<template>
  <li class="list-group-item">
    <div class="row">
        <div class="col-md-8">${{formatPrice(price.amount)}}<!--<sup>{{price.decimals}}</sup>--></div> 
        <div class="col-md-4 text-right">{{formatTimestamp(price.timestamp)}}</div>
    </div>
    
  </li>
</template>



<script>
import moment from "moment";

export default {
  name: "Priceitem",
  props: {
    price: Object
  },
  methods: {
    formatTimestamp: timestamp => {
      return moment(timestamp).fromNow();
    },
    formatPrice: price => {
      return price.toFixed(2);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

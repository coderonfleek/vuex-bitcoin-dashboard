<template>
    <div id="counter" class="row bg-danger text-white">
        <div class="col-md-2 pd-10">
            <i class="fas fa-dollar-sign fa-4x"></i>
        </div>
        <div class="col-md-10 text-right">
            <div class="counter-count">
                {{format(price.amount)}}
                <!--<sup>{{price.decimals}}</sup>-->
            </div>
            <div>
                ${{difference}}
            </div>
        
        </div>
    </div>
</template>

<script>
export default {
  name: "Coinprice",
  computed: {
    price() {
      return this.$store.getters.currentPrice;
    },
    difference() {
      return this.$store.getters.difference;
    }
  },
  methods: {
    format: price => {
      return price.toFixed(2);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#counter {
  height: 100px;
}

.counter-count {
  font-size: 42px;
}
</style>

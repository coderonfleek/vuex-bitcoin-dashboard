<template>
    <div id="counter" class="row bg-warning text-white">
        <div class="col-md-2 pd-10"><i class="fas fa-percent fa-4x"></i></div>
        <div class="col-md-10 text-right">
            <div class="counter-count">
                {{percentageIncrease}}<sup>%</sup>  
            </div>
            <div>
                {{formatTimestamp(currentPrice.timestamp)}}
            </div>
        
        </div>
    </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Percentchange",
  computed: {
    percentageIncrease() {
      return this.$store.getters.percentageIncrease;
    },
    currentPrice() {
      return this.$store.getters.currentPrice;
    }
  },
  methods: {
    formatTimestamp: timestamp => {
      return moment(timestamp).fromNow();
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

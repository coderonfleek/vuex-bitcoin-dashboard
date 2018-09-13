<template>
  <div id="counter" class="row bg-warning text-white">
    <div class="col-2 p-3"><i class="fas fa-percent fa-4x"></i></div>
    <div class="col-10 text-right">
      <div class="counter-count">
        {{percentageIncrease}}
        <small>%</small>
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
    name: "PercentChange",
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

<style scoped>
  #counter {
    height: 100px;
  }

  .counter-count {
    font-size: 42px;
  }
</style>

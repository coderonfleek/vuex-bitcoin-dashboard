<template>
    <div id="counter" class="row bg-danger text-white">
        <div class="col-md-2 pd-10">
            <i class="fas fa-dollar-sign fa-4x"></i>
        </div>
        <div class="col-md-10 text-right">
            <div class="counter-count">
                6,325<sup>.66</sup>  
            </div>
            <div>
                -$20<sup>.54</sup>
            </div>
        
        </div>
    </div>
</template>

<script>
export default {
  name: "Coinprice",
  props: {
    msg: String
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

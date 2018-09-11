<template>
    <div id="counter" class="row bg-warning text-white">
        <div class="col-md-2 pd-10"><i class="fas fa-percent fa-4x"></i></div>
        <div class="col-md-10 text-right">
            <div class="counter-count">
                10<sup>%</sup>  
            </div>
            <div>
                3minutes ago
            </div>
        
        </div>
    </div>
</template>

<script>
export default {
  name: "Percentchange",
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

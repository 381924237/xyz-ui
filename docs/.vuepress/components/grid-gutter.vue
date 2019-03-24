<template>
  <div>
    <y-row class="demo-row" gutter="20">
      <y-col span="8">
        <div class="demo">8</div>
      </y-col>
      <y-col span="8">
        <div class="demo">8</div>
      </y-col>
      <y-col span="8">
        <div class="demo">8</div>
      </y-col>
    </y-row>

    <y-row class="demo-row" gutter="20">
      <y-col span="6">
        <div class="demo">6</div>
      </y-col>
      <y-col span="5" offset="1">
        <div class="demo">5</div>
      </y-col>
      <y-col span="4" offset="2">
        <div class="demo">4</div>
      </y-col>
      <y-col span="3" offset="3">
        <div class="demo">3</div>
      </y-col>
    </y-row>
  </div>

</template>


<script>
import Row from "../../../src/layout/grid/row";
import Col from "../../../src/layout/grid/col";

export default {
  components: {
    "y-row": Row,
    "y-col": Col
  }
};
</script>

<style lang='scss' scoped>
* {
  box-sizing: border-box;
}
.demo-row{
  margin: 10px 0;
  .demo {
    background: #ddd;
    min-height: 25px;
    display: flex;
    justify-content: center;
  }
}

</style>
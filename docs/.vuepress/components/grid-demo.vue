<template>
  <div>
    <y-row class="demo-row">
      <y-col span="24">
        <div class="demo">24</div>
      </y-col>
    </y-row>

    <y-row class="demo-row">
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

    <y-row class="demo-row">
      <y-col span="4">
        <div class="demo">4</div>
      </y-col>
      <y-col span="4">
        <div class="demo">4</div>
      </y-col>
      <y-col span="4">
        <div class="demo">4</div>
      </y-col>
      <y-col span="4">
        <div class="demo">4</div>
      </y-col>
      <y-col span="4">
        <div class="demo">4</div>
      </y-col>
      <y-col span="4">
        <div class="demo">4</div>
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
    border: 1px solid #aaa;
    min-height: 25px;
    display: flex;
    justify-content: center;
  }
}

</style>
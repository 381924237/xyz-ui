<template>
  <y-row class="demo-row" gutter="10">
    <y-col span="24" :ipad="{span:12}" :npc="{span:8}" :pc="{span:6}" :wpc={span:4}>
      <div class="demo">4</div>
    </y-col>
    <y-col span="24" :ipad="{span:12}" :npc="{span:8}" :pc="{span:6}" :wpc={span:4}>
      <div class="demo">4</div>
    </y-col>
    <y-col span="24" :ipad="{span:12}" :npc="{span:8}" :pc="{span:6}" :wpc={span:4}>
      <div class="demo">4</div>
    </y-col>
    <y-col span="24" :ipad="{span:12}" :npc="{span:8}" :pc="{span:6}" :wpc={span:4}>
      <div class="demo">4</div>
    </y-col>
    <y-col span="24" :ipad="{span:12}" :npc="{span:8}" :pc="{span:6}" :wpc={span:4}>
      <div class="demo">4</div>
    </y-col>
    <y-col span="24" :ipad="{span:12}" :npc="{span:8}" :pc="{span:6}" :wpc={span:4}>
      <div class="demo">4</div>
    </y-col>
  </y-row>
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
    margin: 10px 0;
    background: #ddd;
    min-height: 25px;
    display: flex;
    justify-content: center;
  }
}

</style>
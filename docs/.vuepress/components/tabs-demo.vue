<template>
<y-tabs :selected="selectedTab">
  <y-tabs-head>
    <y-tabs-item name="sports">
      体育
    </y-tabs-item>
    <y-tabs-item name="finance">
      财经
    </y-tabs-item>
    <y-tabs-item name="game">
      游戏
    </y-tabs-item>
    <y-tabs-item name="disabled" disabled>
      禁用
    </y-tabs-item>
  </y-tabs-head>
  <y-tabs-body>
    <y-tabs-pane name="sports">
      体育资讯
    </y-tabs-pane>
    <y-tabs-pane name="finance">
      财经资讯
    </y-tabs-pane>
    <y-tabs-pane name="game">
      游戏资讯
    </y-tabs-pane>
    <y-tabs-pane name="disabled">
      禁用的内容
    </y-tabs-pane>
  </y-tabs-body>
</y-tabs>
  
</template>


<script>
import Tabs from '../../../src/navigation/tabs/tabs'
import TabsHead from '../../../src/navigation/tabs/tabs-head'
import TabsItem from '../../../src/navigation/tabs/tabs-item'
import TabsBody from '../../../src/navigation/tabs/tabs-body'
import TabsPane from '../../../src/navigation/tabs/tabs-pane'

export default {
  components: {
    'y-tabs': Tabs,
    'y-tabs-head': TabsHead,
    'y-tabs-item': TabsItem,
    'y-tabs-body': TabsBody,
    'y-tabs-pane': TabsPane
  },
  data(){
    return {
      selectedTab: 'sports'
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
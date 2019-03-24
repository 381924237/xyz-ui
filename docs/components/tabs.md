---
title: Tabs 标签
---

# Tabs 标签

### 使用方法

---

<tabs-demo/>

```
data(){
  return {
    selectedTab: 'sports'
  }
}

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
```

---

### tabs 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----:|
|  selected     | 当前选中的标签名，可用.sync修饰符绑定，必填   | String,Number |  ——  | —— |

### tabs-item 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----:|
|  name     | item标签名，唯一且必填   | String,Number |  ——  | —— |
|  disabled     | 标签禁用状态   | Boolean |  ——  | false |

### tabs-pane 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----:|
|  name     | pane标签名，必填且与item标签名一致   | String,Number |  ——  | —— |



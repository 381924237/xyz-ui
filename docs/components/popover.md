---
title: Popover 弹出框
---

# Popover 弹出框

### 使用方法

---

<popover-demo/>

```
<y-popover>
  <template slot="content">
    <div>内容1</div>
  </template>
  <y-button>Top</y-button>
</y-popover>
<y-popover position="bottom">
  <template slot="content">
    <div>内容2</div>
  </template>
  <y-button>Bottom</y-button>
</y-popover>
<y-popover position="left">
  <template slot="content">
    <div>内容3</div>
  </template>
  <y-button>Left</y-button>
</y-popover>
<y-popover position="right">
  <template slot="content">
    <div>内容4</div>
  </template>
  <y-button>Right</y-button>
</y-popover>

<y-popover trigger="hover">
  <template slot="content">
    <div>内容5</div>
  </template>
  <y-button>Hover</y-button>
</y-popover>
```

---

### 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|-----|:-----|
|  position    | 弹框位置         | String |  top , right , left , bottom  | top |
|  trigger     | 弹框触发方式      | String |  click , hover   | click |

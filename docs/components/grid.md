---
title: Grid 网格布局
---

# Grid 网格布局

---
### 基本使用
<grid-demo></grid-demo>

```
<y-row>
  <y-col span="24">
    <div class="demo">24</div>
  </y-col>
</y-row>

<y-row>
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

<y-row>
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
```


---
### 设置间隙 / 空隙
<grid-gutter></grid-gutter>

```
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
```

---

### 响应式布局
<grid-media></grid-media>

```
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
```

---

### row 参数
| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----:|
|  gutter       | 栅格的间隙      | String,Number |  ——  | —— |
|  align        | 栅格内部元素水平排列方向| String | left,right,center | left |

### col 参数
| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----:|
|  span         | 栅格占据的列数    | String,Number |  ——  | —— |
|  offset       | 栅格左侧的间隔格数| String,Number | ——  |  —— |
|  ipad         | ≥577px  响应式栅格数    | Object (例子：{span: 4, offset: 4}) | —— |  ——  |
|  npc          | ≥769px  响应式栅格数    | Object (例子：{span: 4, offset: 4}) | —— |  ——  |
|  pc           | ≥993px  响应式栅格数    | Object (例子：{span: 4, offset: 4}) | —— |  ——  |
|  wpc          | ≥1201px 响应式栅格数   | Object (例子：{span: 4, offset: 4}) | —— |  ——  |

---
title: ButtonGroup 按扭组合
---

# ButtonGroup 按扭组合

### 使用方法

---

<button-group-demo></button-group-demo>

```
<y-button-group>
  <y-button icon="left">Last</y-button>
  <y-button>Option</y-button>
  <y-button icon="right" position="right">Next</y-button>
</y-button-group>
```

---

### 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|-----|:-----|
|  icon         | 图标名          | String |  ——  | —— |
|  position     | 图标位置        | String |  left , right   | left |
|  loading      | 有loading效果的按钮，点击之后出现loading，再次点击恢复正常| Boolean | —— | false |

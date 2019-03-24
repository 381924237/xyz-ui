---
title: Collapse 折叠面板
---

# Collapse 折叠面板

### 使用方法

---

<collapse-demo/>

```
data(){
  return {
    selectedItem: ['1']
  }
}

<y-collapse :selected.sync="selectedItem">
  <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
  <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
  <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
</y-collapse>
```

---

### collapse 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----:|
|  selected     | 当前展开 item 的 name 组成的数组,可用 .sync 修饰符绑定 | Array |  ——  | —— |
|  single       | 只允许同时展开一个 item  | Boolean |  ——   | false |

### collapse-item 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----:|
|  title      | item 的标题   | String |  ——  | —— |
|  name       | item 标签名，唯一且必填  | String |  ——   | —— |
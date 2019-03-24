---
title: Input 输入框
---

# Input 输入框

### 使用方法

---

<input-demo></input-demo>

```
<y-input value="Default"></y-input>
<y-input value="Disabled" disabled></y-input>
<y-input value="Readonly" readonly></y-input>
<y-input value="Error" error="Error Message"></y-input>
<y-input v-model="message"></y-input>
```

---

### 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值  |
|:------------- |:---------------|:-----|-----|:-----|
|  value         | 输入框占位文本  | String |  ——  | —— |
|  disabled     | 禁用状态         | Boolean | —— | false |
|  readonly      | 只读状态        | Boolean | —— | false |
|  error        |  设置错误状态的提示信息 | String  | ——  |  ——  |

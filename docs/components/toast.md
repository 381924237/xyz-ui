---
title: Toast 信息弹出
---

# Toast 信息弹出

### 使用方法

---

<toast-demo-1/>

```
<y-button @click="showToast1">自动关闭</y-button>
<y-button @click="showToast2">上方弹出</y-button>
<y-button @click="showToast3">下方弹出</y-button>
<y-button @click="showToast4">中间弹出</y-button>

methods: {
  showToast1(){
    this.$toast({
      autoClose: 2
    })
  },
  showToast2(){
    this.$toast({
      closeButton: true,
      message: '这是一条消息'
    })
  },
  showToast3(){
    this.$toast({
      closeButton: true,
      position: 'bottom'
    })
  },
  showToast4(){
    this.$toast({
      closeButton: true,
      position: 'middle'
    })
  }
}
```

---

### 参数

| 参数           | 说明           | 类型  | 可选值      | 默认值     |
|:------------- |:---------------|:-----|:-----:|:-----|
|  autoClose    | 是否自动关闭，可设置自动关闭的时间  | Number,Boolean |  ——  | 2 |
|  closeButton  | 是否有关闭按钮        | Boolean | ——   | false |
|  message      | 弹出信息内容          | String | —— | This is message |
|  position     | 弹出信息的位置        | String  | top,bottom,middle| top |



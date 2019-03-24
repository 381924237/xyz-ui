---
title: Container 布局
---

# Container 布局

### 三栏布局

---

<container-demo-1/>


```
<y-container class="container">
  <y-header class="header">
    header
  </y-header>
  <y-main class="main">
    main
  </y-main>
  <y-footer class="footer">
    footer
  </y-footer>
</y-container>
```

---

### 三栏布局，主体部分有侧边栏

---

<container-demo-2/> 


```
<y-container class="container">
  <y-header class="header">
    header
  </y-header>
  <y-main class="main">
    <y-container>
      <y-sider class="sider">sider</y-sider>
      <y-main>main</y-main>
    </y-container>
  </y-main>
  <y-footer class="footer">
    footer
  </y-footer>
</y-container>
```

---

### 三栏布局，侧边栏在最外面

---

<container-demo-3/> 


```
<y-container class="container">
  <y-sider class="sider">sider</y-sider>
  <y-container>
    <y-header class="header">
      header
    </y-header>
    <y-main class="main">
      main
    </y-main>
    <y-footer class="footer">
      footer
    </y-footer>
  </y-container>
</y-container>
```

---




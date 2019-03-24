<template>
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
</template>


<script>
import Container from "../../../src/layout/container/container"
import Header from "../../../src/layout/container/header"
import Main from "../../../src/layout/container/main"
import Sider from "../../../src/layout/container/sider"
import Footer from "../../../src/layout/container/footer"
import Icon from '../../../src/icon/icon'

export default {
  components: {
    'y-container': Container,
    'y-header': Header,
    'y-main': Main,
    'y-sider': Sider,
    'y-footer': Footer,
    'y-icon': Icon
  }
}
</script>

<style lang='scss' scoped>
.container{
  color: #000;
  text-align: center;
  .header{
    height: 50px;
    background: rgba(0, 179, 134,.6);
  }
  .main{
    height: 100px;
    background: #fff;
  }
  .footer{
    height: 50px;
    background: rgba(0, 179, 134,.6);
  }
  .sider{
    background: #ddd;
    width: 100px;
  }
}

</style>
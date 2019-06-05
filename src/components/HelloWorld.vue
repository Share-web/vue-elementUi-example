Navbar.vue<template>
  <div class="app">

    <el-container class="app-header">
      <!--头部-->
      <el-header class="nav-header">
        <!-- LOGO -->
        <!-- <navbar></navbar> -->

        <!-- admin -->
        <nav-chunk></nav-chunk>
      </el-header>
    </el-container>

    <el-container class="app-body">
      <!--侧边-->
      <el-aside class="con-aside" width="300px">
        <tree-chunk @routerKey="keyrouter"></tree-chunk>
        <!-- <left-menu></left-menu> -->
      </el-aside>
      <el-main class="con-main">
      <!--主体-->
        <transition name="fade" mode="out-in">
          <div>

            <el-button type="text" class="route-font">{{$route.name}}</el-button>

            <router-view/>

            <!-- <AppFooter/> -->
          </div>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import TreeChunk from './tree-chunk'
  import NavChunk from './nav-chunk'
  import LeftMenu from './left-menu'
  import navbar from './Navbar'
  export default {
    name: 'hello',
    components: {
      TreeChunk,
      NavChunk,
      navbar,
      LeftMenu,
    },
    data() {
      return {

      }
    },
    methods: {
      keyrouter(a){
        this.$router.push('/'+a)
      },
      mobileSidebarToggle(e){
        // console.log(e,111)
          e.preventDefault()
          document.body.classList.toggle('sidebar-mobile-show')
      },
      sidebarMinimize(a){
        console.log(a,222)
      },
    },
    mounted(){
      // this.$router.push('/FormalignChunk')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/css/config";

  .nav-header {
    background: #fafafa;
    background: yellowgreen;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
  }
  .con-aside {
    float: left;
    // background: red;
    // height: 100%;
  }
  .con-main {
    float: right;
  }
  .route-font{
    /*margin-bottom: 30px;*/
  }
</style>

<template>
  <div class="tree-chunk">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>

    <el-menu
             unique-opened
             class="el-menu-vertical-mydemo"
             @open="handleOpen"
             @close="handleClose"
             @select="handleSelect"
             style="height: 450px"
             :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>常规</span>
        </template>
        <el-menu-item-group>
          <el-submenu index="1-1">
            <span slot="title">基础类</span>
            <el-menu-item index="BasisiconChunk">Icon图标</el-menu-item>
            <el-menu-item index="BasisbuttonChunk">Button按钮</el-menu-item>
            <el-menu-item index="BasisradioChunk">Radio单选框</el-menu-item>
            <el-menu-item index="BasischeckboxChunk">Checkbox多选框</el-menu-item>
            <el-menu-item index="BasisinputChunk">Input输入框</el-menu-item>
            <el-menu-item index="BasisnumberChunk">计数器</el-menu-item>
            <el-menu-item index="BasisselectChunk">Select选择器</el-menu-item>
            <el-menu-item index="BasiscascaderChunk">Cascader级联选择器</el-menu-item>
            <el-menu-item index="BasistransferChunk">穿梭器</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <span slot="title">时间选择器</span>
            <el-menu-item index="BasistimeChunk">时间选择器</el-menu-item>
            <el-menu-item index="BasisdateChunk">日期选择器</el-menu-item>
            <el-menu-item index="BasisdatetimeChunk">日期时间选择器</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <span slot="title">消息提示</span>
            <el-menu-item index="BasisalertChunk">Alert警告框</el-menu-item>
            <el-menu-item index="BasismessageChunk">Message提示框</el-menu-item>
            <el-menu-item index="BasismessageboxChunk">MessageBox弹框</el-menu-item>
            <el-menu-item index="BasisnotificationChunk">Notification通知</el-menu-item>
            <el-menu-item index="BasisdialogChunk">Dialog对话框</el-menu-item>
            <el-menu-item index="BasistooltipChunk">文字提示</el-menu-item>
            <el-menu-item index="BasispopoverChunk">Popover弹出框</el-menu-item>
          </el-submenu>
          <el-submenu index="1-4">
            <span slot="title">Other</span>
            <el-menu-item index="BasisswitchChunk">Switch开关</el-menu-item>
            <el-menu-item index="BasissliderChunk">Slider滑块</el-menu-item>
            <el-menu-item index="BasisupdataChunk">Updata上传</el-menu-item>
            <el-menu-item index="BasisrateChunk">评分</el-menu-item>
            <el-menu-item index="BasiscolorChunk">颜色选择器</el-menu-item>
            <el-menu-item index="BasistagChunk">标签</el-menu-item>
            <el-menu-item index="BasisprogressChunk">Progress进度条</el-menu-item>
            <el-menu-item index="BasisbadgeChunk">Badge标记</el-menu-item>
            <el-menu-item index="BasisloadingChunk">Loading</el-menu-item>
            <el-menu-item index="BasisbreadChunk">面包屑导航</el-menu-item>
            <el-menu-item index="BasisstepsChunk">步骤条</el-menu-item>
            <el-menu-item index="BasiscardChunk">Card卡片</el-menu-item>
            <el-menu-item index="BasiscarousetChunk">Carouset走马灯</el-menu-item>
            <el-menu-item index="BasiscollapseChunk">Collapse折叠面板</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>进阶</span>
        </template>
        <el-submenu index="2-1">
          <span slot="title">表单</span>
          <el-menu-item index="FormalignChunk">表单对齐方式</el-menu-item>
          <el-menu-item index="FormvalidatorChunk">表单验证</el-menu-item>
          <el-menu-item index="FormselfvalidatorChunk">表单自定义验证</el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <span slot="title">表格</span>
          <el-menu-item index="TablestandardChunk">标准表格</el-menu-item>
          <el-menu-item index="TablefluidChunk">流体表格</el-menu-item>
          <el-menu-item index="TablemoreheadChunk">多级表头</el-menu-item>
          <el-menu-item index="TablecheckboxChunk">多选表格</el-menu-item>
          <el-menu-item index="TableexpandChunk">展开表格</el-menu-item>
          <el-menu-item index="TablemergeChunk">合并表格</el-menu-item>
        </el-submenu>
        <el-submenu index="2-3">
          <span slot="title">Tree</span>
          <el-menu-item index="TreebasisChunk">Tree基础</el-menu-item>
          <el-menu-item index="TreelazyChunk">Tree懒加载</el-menu-item>
          <el-menu-item index="TreedisableChunk">Tree禁用</el-menu-item>
          <el-menu-item index="TreebymyselfChunk">Tree自定义</el-menu-item>
          <el-menu-item index="TreefilterChunk">Tree过滤节点</el-menu-item>
        </el-submenu>
        <el-submenu index="2-4">
          <span slot="title">菜单</span>
          <el-menu-item index="MenunavChunk">menuNav</el-menu-item>
          <el-menu-item index="MenutabChunk">menuTab</el-menu-item>
          <el-menu-item index="MenudropChunk">下拉菜单</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>高阶</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="CreateChunk">动画</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "tree-chunk",
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key,keyPath){
        this.$emit('routerKey',key)
      }
    }
  }
</script>

<style scoped lang="less">
  .tree-chunk{
    margin-top: 30px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

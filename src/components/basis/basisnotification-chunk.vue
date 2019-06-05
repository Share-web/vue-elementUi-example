<template>
  <div class="basisnotification-chunk">
    <el-row class="boxChunk">
      <el-col class="childChunk">
        <el-button
          plain
          type="success"
          @click="open1">
          成功
        </el-button>
        <el-button
          plain
          type="warning"
          @click="open2">
          警告
        </el-button>
        <el-button
          plain
          type="info"
          @click="open3">
          消息
        </el-button>
        <el-button
          plain
          type="danger"
          @click="open4">
          消息
        </el-button>
      </el-col>
      <el-col class="childChunk">
        <el-button
          plain
          @click="open5">
          右上角
        </el-button>
        <el-button
          plain
          @click="open6">
          右下角
        </el-button>
        <el-button
          plain
          @click="open7">
          左下角
        </el-button>
        <el-button
          plain
          @click="open8">
          左上角
        </el-button>
        <el-button
          plain
          @click="open9">
          偏移的消息
        </el-button>
        <el-button
          plain
          @click="open10">
          隐藏关闭按钮
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basisnotification-chunk",
    data() {
      return {}
    },
    methods: {
      open1() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },
      open2() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },
      open3() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },
      open4() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      },
      open5() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },
      open6() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },
      open7() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },
      open8() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      },
      open9() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        });
      },
      open10() {
        this.$notify({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .boxChunk {
    margin: 20px 0;
    .childChunk {
      margin-bottom: 10px;
    }
  }
</style>

<template>
  <div class="basisalert-chunk">
    <el-row class="boxChunk">
      <el-col>
        <el-alert
          class="childChunk"
          title="不可关闭的 alert"
          type="success"
          :closable="false">
        </el-alert>

        <el-alert
          class="childChunk"
          title="自定义 close-text"
          type="info"
          close-text="知道了">
        </el-alert>

        <el-alert
          class="childChunk"
          title="设置了回调的 alert"
          type="warning"
          @close="hello">
        </el-alert>

        <el-alert
          class="childChunk"
          title="带icon的 alert"
          type="error"
          show-icon>
        </el-alert>

        <el-alert
          class="childChunk"
          title="文字居中的 alert"
          type="success"
          center
          show-icon>
        </el-alert>

        <el-alert
          class="childChunk"
          title="带辅助性文字介绍"
          type="info"
          show-icon
          description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basisalert-chunk",
    data() {
      return {}
    },
    methods:{
      hello() {
        this.$message({
          type: 'warning',
          message: '警告哦，这是一条警告消息',
        })
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

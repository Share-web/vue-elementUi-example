<template>
  <div class="basisloading-chunk">
    <el-row class="boxChunk">
      <el-col>
        <el-button
          type="info"
          @click="openFullScreen"
          v-loading.fullscreen.lock="fullscreenLoading">
          模式一
        </el-button>
        <el-button
          type="primary"
          @click="openFullScreen2">
          模式二
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basisloading-chunk",
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods:{
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: '拼命加载中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
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

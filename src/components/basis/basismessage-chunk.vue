<template>
  <div class="basismessage-chunk">
    <el-row>
      <el-col>
        <el-button :plain="true" @click="open1" type="primary">消息</el-button>
        <el-button :plain="true" @click="open2" type="success">成功</el-button>
        <el-button :plain="true" @click="open3" type="warning">警告</el-button>
        <el-button :plain="true" @click="open4" type="danger">错误</el-button>
        <el-button :plain="true" @click="open5" type="">居中</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basismessage-chunk",
    data() {
      return {}
    },
    methods:{
      open1() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
      },
      open2() {
        this.$message({
          type:'success',
          showClose: true,
          message: '这是一条消息提示'
        });
      },
      open3() {
        this.$message({
          type:'warning',
          showClose: true,
          message: '这是一条消息提示'
        });
      },
      open4() {
        this.$message({
          type:'error',
          showClose: true,
          message: '这是一条消息提示'
        });
      },
      open5() {
        this.$message({
          iconClass:'myIcon',
          center:true,
          showClose: false,
          message: '这是一条消息提示'
        });
      },
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
  .myIcon{
    display: none;
  }
</style>

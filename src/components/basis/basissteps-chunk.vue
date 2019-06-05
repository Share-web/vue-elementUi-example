<template>
  <div class="basissteps-chunk">
    <el-row>
      <el-col>
        <el-steps :active="active" :process-status="processStatus" finish-status="success" align-center>
          <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>

        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basissteps-chunk",
    data() {
      return {
        active: 0,
        processStatus:'finish'
      }
    },
    methods:{
      next() {
        if (this.active++ > 2) this.active = 0;
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

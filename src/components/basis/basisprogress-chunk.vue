<template>
  <div class="basisprogress-chunk">
    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">基础</p>
        <el-progress
          :percentage="0">
        </el-progress>
        <el-progress
          :percentage="70">
        </el-progress>
        <el-progress
          :percentage="100"
          status="success">
        </el-progress>
        <el-progress
          :percentage="50"
          status="exception">
        </el-progress>
      </el-col>
    </el-row>

    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">线型</p>
        <el-progress
          class="strokeWidth"
          :text-inside="textInside"
          :stroke-width="strokeWidth"
          :percentage="0">
        </el-progress>
        <el-progress
          class="strokeWidth"
          :text-inside="textInside"
          :stroke-width="strokeWidth"
          :percentage="70">
        </el-progress>
        <el-progress
          class="strokeWidth"
          :text-inside="textInside"
          :stroke-width="strokeWidth"
          :percentage="100"
          status="success">
        </el-progress>
        <el-progress
          class="strokeWidth"
          :text-inside="textInside"
          :stroke-width="strokeWidth"
          :percentage="50"
          status="exception">
        </el-progress>
      </el-col>
    </el-row>

    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">环型</p>
        <el-progress
          :type="circle"
          :percentage="0">
        </el-progress>
        <el-progress
          :type="circle"
          :percentage="25">
        </el-progress>
        <el-progress
          :type="circle"
          :percentage="100"
          status="success">
        </el-progress>
        <el-progress
          :type="circle"
          :percentage="50"
          status="exception">
        </el-progress>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basisprogress-chunk",
    data() {
      return {
        textInside:true,
        strokeWidth:18,
        circle:'circle',
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
  .strokeWidth{
    margin-bottom: 10px;
  }
</style>

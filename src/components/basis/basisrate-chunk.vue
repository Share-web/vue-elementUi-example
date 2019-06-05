<template>
  <div class="basisrate-chunk">
    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">基础</p>
        <el-rate
          v-model="value1"
          show-text
          :texts="text1"
          :colors="color1">
        </el-rate>
      </el-col>
    </el-row>

    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">不同图标</p>
        <el-rate
          v-model="value2"
          :icon-classes="icon"
          void-icon-class="el-icon-picture"
          :colors="color1">
        </el-rate>
      </el-col>
    </el-row>

    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">只读</p>
        <el-rate
          v-model="value3"
          disabled
          show-score
          allow-half
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basisrate-chunk",
    data() {
      return {
        value1:null,
        value2:null,
        value3:3,
        color1:[
          '#bbb',
          '#EAFF01',
          '#F7BA2A'
        ],
        text1:['滚', '不爽', '差', '一般', '还行'],
        icon:['el-icon-picture-outline', 'el-icon-picture-outline','el-icon-picture-outline'],
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

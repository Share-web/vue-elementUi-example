<template>
  <div class="basiscolor-chunk">
    <el-row class="boxChunk">
      <el-col :span="span">
        <p class="childChunk">基础</p>
        <el-color-picker
          v-model="color"
          @change="changeColor"
          @active-change="activeChangeColor"
          show-alpha>
        </el-color-picker>
      </el-col>

      <el-col :span="span">
        <p class="childChunk">禁用</p>
        <el-color-picker
          v-model="color1"
          disabled>
        </el-color-picker>
      </el-col>

      <el-col :span="span">
        <p class="childChunk">尺寸</p>
        <el-color-picker
          v-model="color2"
          size="medium">
        </el-color-picker>
        <el-color-picker
          v-model="color3"
          size="small">
        </el-color-picker>
        <el-color-picker
          v-model="color4"
          size="mini">
        </el-color-picker>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basiscolor-chunk",
    data() {
      return {
        span:3,
        color:'red',
        color1:'',
        color2:'',
        color3:'',
        color4:'',
      }
    },
    methods:{
      changeColor(val){
        console.log(val)
      },
      activeChangeColor(val){
        console.log(val)
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

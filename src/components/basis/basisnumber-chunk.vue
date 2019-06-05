<template>
  <div class="basisnumber-chunk">
    <div class="boxChunk">
      <p class="childChunk">基础</p>
      <el-input-number
        v-model="num1"
        @change="handleChange"
        :min="min"
        :max="max"
        label="描述文字">
      </el-input-number>
    </div>

    <div class="boxChunk">
      <p class="childChunk">禁用</p>
      <el-input-number
        v-model="num2"
        disabled
        :min="min"
        :max="max"
        label="描述文字">
      </el-input-number>
    </div>

    <div class="boxChunk">
      <p class="childChunk">自定义跳步</p>
      <el-input-number
        v-model="num3"
        :min="min"
        :max="max"
        :step="step"
        label="描述文字">
      </el-input-number>
    </div>

    <div class="boxChunk">
      <p class="childChunk">按钮位置调节</p>
      <el-input-number
        v-model="num4"
        :min="min"
        :max="max"
        controls-position="right"
        label="描述文字">
      </el-input-number>
    </div>

    <div class="boxChunk">
      <p class="childChunk">尺寸</p>
      <el-row>
        <el-col :span="span">
          <el-input-number
            v-model="num5"
            :min="min"
            :max="max"
            controls-position="right"
            label="描述文字">
          </el-input-number>
        </el-col>
        <el-col :span="span">
          <el-input-number
            v-model="num6"
            :min="min"
            :max="max"
            size="medium"
            controls-position="right"
            label="描述文字">
          </el-input-number>
        </el-col>
        <el-col :span="span">
          <el-input-number
            v-model="num7"
            :min="min"
            :max="max"
            size="small"
            controls-position="right"
            label="描述文字">
          </el-input-number>
        </el-col>
        <el-col :span="span">
          <el-input-number
            v-model="num8"
            :min="min"
            :max="max"
            size="mini"
            controls-position="right"
            label="描述文字">
          </el-input-number>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "basisnumber-chunk",
    data() {
      return {
        min:1,
        max:10,
        span:5,
        step:2,
        num1:'',
        num2:'',
        num3:'',
        num4:'',
        num5:'',
        num6:'',
        num7:'',
        num8:''
      }
    },
    methods:{
      handleChange(val){
        // console.log(val)
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

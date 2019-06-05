<template>
  <div class="basisslider-chunk">
    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">基础</p>
        <el-slider
          v-model="value1"
          @change="changeSlider">
        </el-slider>
      </el-col>

      <el-col>
        <p class="childChunk">隐藏Tip</p>
        <el-slider
          v-model="value2"
          :show-tooltip="false">
        </el-slider>
      </el-col>

      <el-col>
        <p class="childChunk">自定义</p>
        <el-slider
          v-model="value3"
          :format-tooltip="formatTooltip">
        </el-slider>
      </el-col>

      <el-col>
        <p class="childChunk">禁用</p>
        <el-slider
          v-model="value4"
          disabled>
        </el-slider>
      </el-col>

      <el-col>
        <p class="childChunk">固定step/hide</p>
        <el-slider
          v-model="value5"
          :step="step">
        </el-slider>
      </el-col>

      <el-col>
        <p class="childChunk">固定step/show</p>
        <el-slider
          v-model="value6"
          show-stops
          :step="step">
        </el-slider>
      </el-col>

      <el-col>
        <p class="childChunk">可输入</p>
        <el-slider
          v-model="value7"
          :show-input-controls="staus"
          debounce
          show-input>
        </el-slider>
      </el-col>

      <el-col>
        <p class="childChunk">范围控制</p>
        <el-slider
          v-model="value8"
          range
          :max="100">
        </el-slider>
      </el-col>

      <el-col>
        <p class="childChunk">竖立</p>
        <el-slider
          v-model="value9"
          vertical
          height="200px">
        </el-slider>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basisslider-chunk",
    data() {
      return {
        staus:true,
        step:10,
        value1:15,
        value2:0,
        value3:20,
        value4:50,
        value5:20,
        value6:30,
        value7:20,
        value8:[20,40],
        value9:44
      }
    },
    methods:{
      formatTooltip(val) {
        return val / 100;
      },
      changeSlider(val){
        console.log(val)
      }
    },
    computed:{

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

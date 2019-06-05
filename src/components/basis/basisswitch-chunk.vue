<template>
  <div class="basisswitch-chunk">
    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">基础</p>
        <el-switch
          v-model="value1"
          @change="changeSwitch"
          :active-color="activeColor"
          :inactive-color="inactiveColor"
          active-text="开"
          inactive-text="关">
        </el-switch>
      </el-col>
    </el-row>

    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">文字提示</p>
        <el-tooltip :content="'Switch value: ' + value2" placement="top">
          <el-switch
            v-model="value2"
            @change="changeSwitch"
            :active-color="activeColor"
            :inactive-color="inactiveColor"
            active-value="100"
            inactive-value="0">
          </el-switch>
        </el-tooltip>
      </el-col>
    </el-row>

    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">禁用</p>
        <el-switch
          v-model="value3"
          disabled>
        </el-switch>
        <el-switch
          v-model="value4"
          disabled>
        </el-switch>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basisswitch-chunk",
    data() {
      return {
        value1: false,
        value2:'',
        value3:true,
        value4:false,
        activeColor:"#13ce66",
        inactiveColor:"#ddd"
      }
    },
    methods:{
      changeSwitch(val){
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

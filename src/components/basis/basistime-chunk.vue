<template>
  <div class="basistime-chunk">
    <el-row>
      <el-col class="boxChunk">
        <p class="childChunk">基础</p>
        <el-time-select
          v-model="value1"
          :picker-options="timeObj"
          :disabled="disabled"
          placeholder="选择时间">
        </el-time-select>
        <el-button
          type="primary"
          @click="disabledFlase">
          启用
        </el-button>
        <el-button
          type="danger"
          @click="disabledTrue">
          禁用
        </el-button>
      </el-col>

      <el-col class="boxChunk">
        <p class="childChunk">任意时间点</p>
        <el-time-picker
          v-model="value2"
          :picker-options="timeObj2"
          placeholder="任意时间点">
        </el-time-picker>
      </el-col>

      <el-col class="boxChunk">
        <p class="childChunk">开始时间-结束时间</p>
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="timeObj">
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="timeObj3">
        </el-time-select>
      </el-col>

      <el-col class="boxChunk">
        <p class="childChunk">开始时间-结束时间/任意时间</p>
        <el-time-picker
          is-range
          v-model="value3"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
        </el-time-picker>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basistime-chunk",
    data() {
      return {
        disabled:false,
        timeObj:{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        },
        timeObj2:{
          selectableRange: '00:30:00 - 20:30:00'
        },
        value1:'',
        value2:'',
        value3:'',
        startTime:'',
        endTime:''
      }
    },
    methods:{
      disabledTrue(){
        this.disabled=true
      },
      disabledFlase(){
        this.disabled=false
      }
    },
    computed:{
      timeObj3(){
        return {
          start: '08:30',
          step: '00:15',
          end: '18:30',
          minTime:this.startTime
        }
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

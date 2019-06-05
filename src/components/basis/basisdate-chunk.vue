<template>
  <div class="basisdate-chunk">
    <el-row class="boxChunk">
      <el-col :span="span">
        <p class="childChunk">基础</p>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-col>

      <el-col :span="span">
        <p class="childChunk">带快捷按钮</p>
        <el-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions1">
        </el-date-picker>
      </el-col>
    </el-row>

    <el-row class="boxChunk">
      <el-col :span="span">
        <p class="childChunk">范围日期</p>
        <el-date-picker
          v-model="value3"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-col>

      <el-col :span="span">
        <p class="childChunk">范围日期带快捷键</p>
        <el-date-picker
          v-model="value4"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </el-col>
    </el-row>

    <el-row class="boxChunk">
      <el-col :span="span2">
        <p class="childChunk">选择周</p>
        <el-date-picker
          v-model="value5"
          type="week"
          format="yyyy 第 WW 周"
          placeholder="选择周">
        </el-date-picker>
      </el-col>

      <el-col :span="span2">
        <p class="childChunk">选择月</p>
        <el-date-picker
          v-model="value6"
          type="month"
          placeholder="选择月">
        </el-date-picker>
      </el-col>

      <el-col :span="span2">
        <p class="childChunk">选择年</p>
        <el-date-picker
          v-model="value7"
          align="right"
          type="year"
          placeholder="选择年">
        </el-date-picker>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basisdate-chunk",
    data() {
      return {
        span: 10,
        span2:7,
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6:'',
        value7:'',
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [
            {
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            },
            {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            },
            {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }
          ]
        },
        pickerOptions2: {
          shortcuts: [
            {
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            },
            {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            },
            {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }
          ]
        },
      };
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

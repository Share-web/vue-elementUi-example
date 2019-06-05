<template>
  <div class="basispopover-chunk">
    <el-row>
      <el-col :span="span">
        <el-popover
          ref="popover1"
          placement="top-start"
          title="标题"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        </el-popover>
        <el-button v-popover:popover1>hover 激活</el-button>
      </el-col>
      <el-col :span="span">
        <el-popover
          ref="popover2"
          placement="bottom"
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        </el-popover>
        <el-button v-popover:popover2>click 激活</el-button>
      </el-col>
      <el-col :span="span">
        <el-popover
          placement="right"
          title="标题"
          width="200"
          trigger="focus"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          <el-button slot="reference">focus 激活</el-button>
        </el-popover>
      </el-col>
      <el-col :span="span">
        <el-popover
          ref="popover4"
          placement="right"
          width="400"
          trigger="click">
          <el-table :data="gridData">
            <el-table-column width="150" property="date" label="日期"></el-table-column>
            <el-table-column width="100" property="name" label="姓名"></el-table-column>
            <el-table-column width="300" property="address" label="地址"></el-table-column>
          </el-table>
        </el-popover>
        <el-button v-popover:popover4>click 表格</el-button>
      </el-col>
      <el-col :span="span">
        <el-popover
          ref="popover5"
          placement="top"
          width="160"
          v-model="visible">
          <p>确定删除吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
          </div>
        </el-popover>

        <el-button v-popover:popover5>删除</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basispopover-chunk",
    data() {
      return {
        span: 3,
        visible: false,
        gridData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ]
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

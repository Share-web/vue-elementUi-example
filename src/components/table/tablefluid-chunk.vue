<template>
  <el-table
    :data="tableData4"
    highlight-current-row
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      :align="Align"
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      :align="Align"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="six"
      :align="Align"
      label="性别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="age"
      :align="Align"
      label="年龄"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      :align="Align"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      :align="Align"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      :align="Align"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      :align="Align"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      :align="Align"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "tablefluid-chunk",
    data() {
      return {
        tableData4: [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            six: "男",
            age: 20
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            six: "男",
            age:20
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            six: "男",
            age:20
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            six: "男",
            age:20
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            six: "男",
            age:20
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            six: "男",
            age:20
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            six: "男",
            age:20
          }],
        Align: 'center'
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    }
  }
</script>

<style scoped>

</style>

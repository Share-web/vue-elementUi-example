<template>
  <div class="tablestandard-chunk">
    <el-table
      :data="tableData"
      stripe
      boder
      highlight-current-row
      :default-sort="{prop: 'date', order: 'descending'}"
      @current-change="handleCurrentRowChange"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        :align="Align"
        width="80">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        :align="Align"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        :align="Align"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        :align="Align"
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <el-pagination
      class="my-block"
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "tablestandard-chunk",
    data() {
      return {
        Data:[
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-05',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-09',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-08',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-10',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-11',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-13',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-12',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-14',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-15',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-17',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-16',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-18',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-20',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-19',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        Align: "center",
        currentPage:1,
        pageSize:5,//每页条数默认为5：点击进行切换10-20
        pageSizes:[5,10,20],//固定分页
        total:0,//总页码：根据返回调整
      }
    },
    computed:{
      tableData(){
        let multiple=(this.currentPage-1)*this.pageSize;
        return this.Data.slice(multiple,multiple+this.pageSize);
      }
    },
    methods: {
      handleCurrentRowChange(currentRow, oldCurrentRow) {
        console.log(currentRow, oldCurrentRow)
      },
      handleSizeChange(val){
        this.pageSize=val;
      },
      handleCurrentChange(val){
        this.currentPage=val;
      }
    }
  }
</script>

<style scoped>
.my-block{
  margin-top: 8px;
}
</style>

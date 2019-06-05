<template>
  <div class="treebasis-chunk">
    <el-row class="boxChunk">
      <el-col>
        <el-tree
          :data="data"
          :props="defaultProps"
          accordion
          @node-click="handleNodeClick">
        </el-tree>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "treebasis-chunk",
    data() {
      return {
        data: [
          {
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          },
          {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            },
              {
                label: '二级 2-2',
                children: [{
                  label: '三级 2-2-1'
                }]
              }]
          },
          {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            },
              {
                label: '二级 3-2',
                children: [{
                  label: '三级 3-2-1'
                }]
              }]
          }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
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

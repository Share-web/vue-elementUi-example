<template>
  <div class="treedisable-chunk">
    <el-row>
      <el-col>
        <el-tree
          :data="datas"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[2, 3]"
          :default-checked-keys="[5]"
          :props="defaultProps">
        </el-tree>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "treedisable-chunk",
    data() {
      return {
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        datas: [
          {
            id: 1,
            label: '一级 2',
            children: [
              {
                id: 3,
                label: '二级 2-1',
                children: [
                  {
                    id: 4,
                    label: '三级 3-1-1'
                  },
                  {
                    id: 5,
                    label: '三级 3-1-2',
                    disabled: true
                  }
                ]
              },
              {
                id: 2,
                label: '二级 2-2',
                disabled: true,
                children: [
                  {
                    id: 6,
                    label: '三级 3-2-1',
                    disabled: true
                  },
                  {
                    id: 7,
                    label: '三级 3-2-2',
                    disabled: true
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>

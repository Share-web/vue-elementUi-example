<template>
  <div class="menutab-chunk">
    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">基础</p>
        <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <el-radio-button label="top">top</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="bottom">bottom</el-radio-button>
          <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>

        <el-tabs :tab-position="tabPosition" style="height: 200px;">
          <el-tab-pane label="用户管理">
            <el-button>span</el-button>
          </el-tab-pane>
          <el-tab-pane label="配置管理">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row class="boxChunk">
      <p class="childChunk">其它样式</p>
      <el-col :span="span">
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="span">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
            我的行程
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-bell"></i> 消息中心</span>
            消息中心
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-service"></i> 角色管理</span>
            角色管理
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-time"></i> 定时任务补偿</span>
            定时任务补偿
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
    <el-row class="boxChunk">
      <el-col>
        <el-button
          class="childChunk"
          size="small"
          @click="addTab(editableTabsValue2)">
          add tab
        </el-button>

        <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
          <el-tab-pane
            v-for="(item, index) in editableTabs2"
            :key="item.name"
            :label="item.title"
            :name="item.name">
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "menutab-chunk",
    data() {
      return {
        span: 12,
        tabPosition: 'top',
        activeName2: 'first',
        editableTabsValue2: '2',
        editableTabs2: [
          {
            title: 'Tab 1',
            name: '1',
            content: 'Tab 1 content'
          },
          {
            title: 'Tab 2',
            name: '2',
            content: 'Tab 2 content'
          }
        ],
        tabIndex: 2
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
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

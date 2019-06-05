<template>
  <div class="menudrop-chunk">
    <el-row>
      <el-col>
        <el-dropdown trigger="click">
          <el-button type="primary">
            click<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown split-button type="primary" @click="handleClick" @command="handleCommand">
          hover
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
            <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
            <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="双皮奶" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="蚵仔煎" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown split-button type="primary" @click="handleClick" @command="handleCommand" size="medium"
                     placement="bottom-start">
          中单
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
            <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
            <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="双皮奶" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="蚵仔煎" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown split-button type="primary" @click="handleClick" @command="handleCommand" size="small">
          小
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
            <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
            <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="双皮奶" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="蚵仔煎" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown split-button type="primary" @click="handleClick" @command="handleCommand" size="mini">
          超小
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
            <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
            <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="双皮奶" disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item command="蚵仔煎" divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "menudrop-chunk",
    data() {
      return {}
    },
    methods: {
      handleClick() {
        this.$message('button click');
      },
      handleCommand(command) {
        this.$message({
          type: 'success',
          message: 'click on ' + command
        });
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

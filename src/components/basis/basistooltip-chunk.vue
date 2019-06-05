<template>
  <div class="basistooltip-chunk">
    <el-row class="boxChunk">
      <el-col>
        <div class="box">
          <div class="top">
            <el-tooltip class="item" effect="light" placement="top-start">
              <div slot="content">多行信息<br/>第二行信息</div>
              <el-button>Top left</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
              <el-button>上边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="light" content="Top Right 提示文字" placement="top-end">
              <el-button>上右</el-button>
            </el-tooltip>
          </div>
          <div class="left">
            <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
              <el-button>左上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="light" content="Left Center 提示文字" placement="left">
              <el-button>左边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
              <el-button>左下</el-button>
            </el-tooltip>
          </div>
          <div class="right">
            <el-tooltip class="item" effect="light" content="Right Top 提示文字" placement="right-start">
              <el-button>右上</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
              <el-button>右边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="light" content="Right Bottom 提示文字" placement="right-end">
              <el-button>右下</el-button>
            </el-tooltip>
          </div>
          <div class="bottom">
            <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
              <el-button>下左</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="light" content="Bottom Center 提示文字" placement="bottom">
              <el-button>下边</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
              <el-button>下右</el-button>
            </el-tooltip>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="boxChunk">
      <el-col>
        <el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
          <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basistooltip-chunk",
    data() {
      return {
        disabled:true
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

  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>

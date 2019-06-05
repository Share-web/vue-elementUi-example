<template>
  <div class="basisradio-chunk">
    <div class="PChunk">
      <p class="childChunk">基础单选</p>
      <el-radio v-model="radio" label="男" @change="changeBtn">男</el-radio>
      <el-radio v-model="radio" label="女" @change="changeBtn">女</el-radio>
    </div>

    <div class="PChunk">
      <p class="childChunk">禁用单选</p>
      <el-radio disabled v-model="radio1" label="男" @change="changeBtn">男</el-radio>
      <el-radio disabled v-model="radio1" label="女" @change="changeBtn">女</el-radio>
    </div>

    <div class="PChunk">
      <p class="childChunk">单选组</p>
      <el-radio-group v-model="radio2" @change="changeBtn">
        <el-radio label="男">男</el-radio>
        <el-radio label="女">女</el-radio>
        <el-radio label="人妖">人妖</el-radio>
      </el-radio-group>
    </div>

    <div class="PChunk">
      <p class="childChunk">按钮样式</p>
      <p class="childChunk">
        <el-radio-group v-model="radio3" @change="changeBtn">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </p>
      <p class="childChunk">
        <el-radio-group v-model="radio4" size="medium" @change="changeBtn">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </p>
      <p class="childChunk">
        <el-radio-group v-model="radio5" size="small" @change="changeBtn">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </p>
      <p class="childChunk">
        <el-radio-group v-model="radio6" disabled size="mini" @change="changeBtn">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </p>
    </div>

    <div class="PChunk">
      <p class="childChunk">带边框的单选框</p>
      <p class="childChunk">
        <el-radio v-model="radio7" label="1" border>男</el-radio>
        <el-radio v-model="radio7" label="2" border>女</el-radio>
      </p>
      <p class="childChunk">
        <el-radio v-model="radio8" label="1" border size="medium">男</el-radio>
        <el-radio v-model="radio8" label="2" border size="medium">女</el-radio>
      </p>
      <p class="childChunk">
        <el-radio-group v-model="radio9" size="small">
          <el-radio label="1" border>男</el-radio>
          <el-radio label="2" border disabled>女</el-radio>
        </el-radio-group>
      </p>
      <div class="childChunk">
        <el-radio-group v-model="radio10" size="mini" disabled>
          <el-radio label="1" border>男</el-radio>
          <el-radio label="2" border>女</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "basisradio-chunk",
    data() {
      return {
        radio: "",
        radio1: '',
        radio2: "",
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海',
        radio7:'',
        radio8:'',
        radio9:'',
        radio10:''
      }
    },
    methods:{
      changeBtn(val){
        console.log(val)
      }
    }
  }
</script>

<style scoped>
  .PChunk {
    margin: 20px 0;
  }

  .childChunk {
    margin-bottom: 10px;
  }
</style>

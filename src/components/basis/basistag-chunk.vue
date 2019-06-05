<template>
  <div class="basistag-chunk">
    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">基础</p>
        <el-tag
          class="tagbox"
          v-for="tag in tags"
          :key="tag.name"
          closable
          @close="closeTag(tag)"
          :type="tag.type"
          :size="tag.size">
          {{tag.name}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "basistag-chunk",
    data() {
      return {
        tags:[
          { name: '标签一', type: '', size:''},
          { name: '标签二', type: 'success', size:'medium'},
          { name: '标签三', type: 'info', size:'medium'},
          { name: '标签四', type: 'warning', size:'small'},
          { name: '标签五', type: 'danger', size:'mini'}
        ],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods:{
      closeTag(tag){
        this.tags.splice(this.tags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.tags.push({
            name:inputValue,
            type:'',
            size:''
          });
        }
        this.inputVisible = false;
        this.inputValue = '';
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
    .tagbox{
      margin-right: 10px;
    }
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

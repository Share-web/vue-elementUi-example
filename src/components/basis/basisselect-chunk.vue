<template>
  <div class="basisselect-chunk">
    <div class="boxChunk">
      <p class="childChunk">基础</p>
      <el-select
        v-model="value1"
        @change="changeSelect"
        @visible-change="visibleChangeSelect"
        placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-select v-model="value7" placeholder="请选择" style="margin-left: 20px;">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>

      <el-select v-model="value8" placeholder="请选择" style="margin-left: 20px;">
        <el-option-group
          v-for="group in options2"
          :key="group.label"
          :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
    </div>

    <div class="boxChunk">
      <p class="childChunk">禁用某些选项</p>
      <el-select v-model="value2" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>

    <div class="boxChunk">
      <p class="childChunk">禁用选择器</p>
      <el-select v-model="value3" placeholder="请选择" disabled>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="boxChunk">
      <p class="childChunk">可清除选择器</p>
      <el-select v-model="value4" placeholder="请选择" clearable>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="boxChunk">
      <p class="childChunk">可多选选择器</p>
      <el-select v-model="value5" multiple placeholder="请选择" @remove-tag="removeTagSelect">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-select
        v-model="value6"
        multiple
        collapse-tags
        style="margin-left: 20px;"
        placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-select
        v-model="value10"
        multiple
        filterable
        allow-create
        default-first-option
        style="margin-left: 20px;"
        placeholder="请选择文章标签">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div class="boxChunk">
      <p class="childChunk">输入搜索</p>
      <el-select
        v-model="value9"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import isProdUrl from '../../assets/js/createApi'

  export default {
    name: "basisselect-chunk",
    data() {
      return {
        value1: '',
        value2:'',
        value3:'',
        value4:'',
        value5:'',
        value6:'',
        value7:'',
        value8:'',
        value9:'',
        value10:'',
        options:'',
        options2:'',
        options3:'',
        list:'',
        loading:false
      }
    },
    methods:{
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options3 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options3 = [];
        }
      },
      changeSelect(val){
        console.log(val)
      },
      visibleChangeSelect(val){
        console.log(val)
      },
      removeTagSelect(val){
        console.log(val)
      }
    },
    mounted(){
      let urlfood=isProdUrl('/food.json');
      let urlcitys=isProdUrl('/citys.json');
      let urlletter=isProdUrl('/letter.json');

      axios
        .get(urlfood)
        .then((response)=>{
          this.options=response.data
        })
        .catch((err)=>{
          console.log(err)
        });

      axios
        .get(urlcitys)
        .then((response)=>{
          this.options2=response.data
        })
        .catch((err)=>{
          console.log(err)
        });

      axios
        .get(urlletter)
        .then((response)=>{
          this.list=response.data.map(item => {
            return { value: item, label: item };
          })
        })
        .catch((err)=>{
          console.log(err)
        })
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

<template>
  <div class="basischeckbox-chunk">
    <div class="boxChunk">
      <p class="childChunk">基础checkbox</p>
      <el-checkbox v-model="checked" @change="changeBtn">姓名</el-checkbox>
    </div>

    <div class="boxChunk">
      <p class="childChunk">checkbox组</p>
      <el-checkbox-group v-model="checkList" @change="changeBtn">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="boxChunk">
      <p class="childChunk">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      </p>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="boxChunk">
      <p class="childChunk">限制选择数量</p>
      <el-checkbox-group
        v-model="checkedCities2"
        :min="minNum"
        :max="maxNum">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="boxChunk">
      <p class="childChunk">按钮样式</p>
      <p class="childChunk">
        <el-checkbox-group v-model="checkboxGroup1">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </p>
      <p class="childChunk">
        <el-checkbox-group v-model="checkboxGroup2" size="medium">
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </p>
      <p class="childChunk">
        <el-checkbox-group v-model="checkboxGroup3" size="small">
          <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </p>
      <p class="childChunk">
        <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
          <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </p>
    </div>

    <div class="boxChunk">
      <p class="childChunk">带边框的多选框</p>
      <p class="childChunk">
        <el-checkbox v-model="checked2" label="姓名" border></el-checkbox>
        <el-checkbox v-model="checked3" label="年龄" border></el-checkbox>
      </p>
      <p class="childChunk">
        <el-checkbox v-model="checked4" label="姓名" border size="medium"></el-checkbox>
        <el-checkbox v-model="checked5" label="年龄" border size="medium"></el-checkbox>
      </p>
      <p class="childChunk">
        <el-checkbox-group v-model="checkboxGroup5" size="small">
          <el-checkbox label="姓名" border></el-checkbox>
          <el-checkbox label="年龄" border disabled></el-checkbox>
        </el-checkbox-group>
      </p>
      <p class="childChunk">
        <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
          <el-checkbox label="姓名" border></el-checkbox>
          <el-checkbox label="年龄" border></el-checkbox>
        </el-checkbox-group>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "basischeckbox-chunk",
    data() {
      return {
        checked: true,
        checked2:false,
        checked3:false,
        checked4:false,
        checked5:false,
        checkList:['复选框 A', '选中且禁用'],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        checkedCities2:['上海', '广州'],
        checkboxGroup1:['上海', '北京'],
        checkboxGroup2:['上海', '北京'],
        checkboxGroup3:['上海', '北京'],
        checkboxGroup4:['上海', '北京'],
        checkboxGroup5:[],
        checkboxGroup6:[],
        cities: ['上海', '北京', '广州', '深圳'],
        isIndeterminate: true,
        minNum:1,
        maxNum:2
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? this.cities : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      changeBtn(val){
        console.log(val)
      }
    }
  }
</script>

<style scoped>
  .boxChunk {
    margin: 20px 0;
  }

  .childChunk {
    margin-bottom: 10px;
  }
</style>

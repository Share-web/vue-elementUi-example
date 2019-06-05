<template>
  <div class="basistransfer-chunk">
    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">基础</p>
        <el-transfer
          filterable
          :filter-method="filterMethod"
          filter-placeholder="请输入城市拼音"
          v-model="value2"
          :data="data2">
        </el-transfer>
      </el-col>
    </el-row>

    <el-row class="boxChunk">
      <el-col>
        <p class="childChunk">自定义</p>
        <el-transfer
          v-model="value3"
          filterable
          :left-default-checked="[2, 3]"
          :right-default-checked="[1]"
          :render-content="renderFunc"
          :titles="['Source', 'Target']"
          :button-texts="['到左边', '到右边']"
          :format="{
                     noChecked: '${total}',
                     hasChecked: '${checked}/${total}'
                    }"
          @change="handleChange"
          :data="data">
        </el-transfer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  const generateData = _ => {
    const data = [];
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${ i }`,
        disabled: i % 4 === 0
      });
    }
    return data;
  };

  const generateData2 = _ => {
    const data = [];
    const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
    const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
    cities.forEach((city, index) => {
      data.push({
        label: city,
        key: index,
        pinyin: pinyin[index]
      });
    });
    return data;
  };

  export default {
    name: "basistransfer-chunk",
    data() {
      return {
        data2: generateData2(),
        value2: [],
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
        data: generateData(),
        value3: [1],
        renderFunc(h, option) {
          console.log(option)
          return <span>{ option.key } - { option.label }</span>;
        }
      }
    },
    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
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

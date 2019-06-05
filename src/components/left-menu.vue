<template>
    <el-tabs :tab-position="tabPosition" class="kp-asider-el-tabs" @tab-click="handleAppClick" v-model="activeName">
        <el-tab-pane name="app">
            <span slot="label"><i class="fa fa-tasks"></i>&nbsp;应用</span>应用
            <!-- app -->
        </el-tab-pane>
        <el-tab-pane name="step">
            <span slot="label"><i class="fa fa-puzzle-piece"></i>&nbsp;组件</span>
            <el-row class="kp-asider-tabs-item">
                <el-input prefix-icon="el-icon-search" placeholder="请输入关键字搜索" v-model="inputStep" size="mini" :disabled="true" clearable></el-input>
            </el-row>
            <!-- 自定义组件 -->
        </el-tab-pane>
        <el-tab-pane name="feature">
            <span slot="label"><i class="fa fa-tags"></i>&nbsp;特征</span>特征
            <!-- feature -->
        </el-tab-pane>
        <el-tab-pane name="data">
            <span slot="label"><i class="fa fa-database"></i>&nbsp;数据</span>数据
            <!-- data -->
        </el-tab-pane>
        <el-tab-pane name="jar">
            <span slot="label"><i class="fa fa-coffee"></i>&nbsp;JAR</span>JAR
            <!-- JAR -->

        </el-tab-pane>
        <el-tab-pane name="custom">
            <span slot="label"><i class="fa fa-gears"></i>&nbsp;扩展</span>扩展
            <!-- 扩展 -->
        </el-tab-pane>
    </el-tabs>
</template>
<script>
// import appContextMenuTree from "./components/appContextMenuTree.vue";//app
// import stepContextMenuTree from "./components/stepContextMenuTree.vue";
// import featureContextMenuTree from "./components/featureContextMenuTree.vue";
// import dataContextMenuTree from "./components/dataContextMenuTree.vue";
// import jarContextMenuTree from "./components/jarContextMenuTree.vue";
// import customContextMenuTree from "./components/customContextMenuTree.vue";
// import searchTree from "../../components/contextMenuTree/searchTree.vue";//搜索
// import contextMenuTree from "../../components/contextMenuTree/contextMenuTree.vue";//菜单
export default {
    components: {
        // appContextMenuTree,
        // stepContextMenuTree,
        // featureContextMenuTree,
        // dataContextMenuTree,
        // jarContextMenuTree,
        // customContextMenuTree,
        // searchTree,//搜索
        // contextMenuTree,//菜单
    },
    created() {
        // if (this.$route.path.indexOf("/app") != -1) {
        //     this.activeName = "app";
        // } else if (this.$route.path.indexOf("/step") != -1) {
        //     this.activeName = "step";
        // } else if (this.$route.path.indexOf("/feature") != -1) {
        //     this.activeName = "feature";
        // } else if (this.$route.path.indexOf("/data") != -1) {
        //     this.activeName = "data";
        // } else if (this.$route.path.indexOf("/jar") != -1) {
        //     this.activeName = "jar";
        // } else if (this.$route.path.indexOf("/custom") != -1) {
        //     this.activeName = "custom";
        // }
    },
    data() {
        return {
            labelName: '新建xxx',
            placeholderName: '请输入xxx名称',
            labelPosition: 'left',
            labelWidth: '100px',
            selectOptions: [{id:1,label:"a"},{id:2,label:"b"}],
            tabPosition: 'left',//标签页
            activeName: 'app',//默认选中tap
            inputStep: '',//搜索框
            asyncTreeLoading: false,
            asyncTreeData: [],
            deepIcon: ["el-icon-search"],
        };
    },
    methods: {
        handleAppClick(tab, event) {
            console.log(tab, event, 1111);
            console.log(this.$route.params, 2222);
            // if (this.$route.path.indexOf("flowChart/") != -1) {
            //     // this.$router.push({ path: '/index/' + tab.name });
            // }else{
            //     this.$router.push({ path: '/index/' + tab.name });
            // }
        },
    }
}
</script>

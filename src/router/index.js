import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormalignChunk from '@/components/form/formalign-chunk'
import FormvalidatorChunk from '@/components/form/formvalidator-chunk'
import FormselfvalidatorChunk from '@/components/form/formselfvalidator-chunk'
import TablestandardChunk from '@/components/table/tablestandard-chunk'
import TablefluidChunk from '@/components/table/tablefluid-chunk'
import TablemoreheadChunk from '@/components/table/tablemorehead-chunk'
import TablecheckboxChunk from '@/components/table/tablecheckbox-chunk'
import TableexpandChunk from '@/components/table/tableexpand-chunk'
import TablemergeChunk from '@/components/table/tablemerge-chunk'
import BasisiconChunk from '@/components/basis/basisicon-chunk'
import BasisbuttonChunk from '@/components/basis/basisbutton-chunk'
import BasisradioChunk from '@/components/basis/basisradio-chunk'
import BasischeckboxChunk from '@/components/basis/basischeckbox-chunk'
import BasisinputChunk from '@/components/basis/basisinput-chunk'
import BasisnumberChunk from '@/components/basis/basisnumber-chunk'
import BasisselectChunk from '@/components/basis/basisselect-chunk'
import BasiscascaderChunk from '@/components/basis/basiscascader-chunk'
import BasisswitchChunk from '@/components/basis/basisswitch-chunk'
import BasissliderChunk from '@/components/basis/basisslider-chunk'
import BasistimeChunk from '@/components/basis/basistime-chunk'
import BasisdateChunk from '@/components/basis/basisdate-chunk'
import BasisdatetimeChunk from '@/components/basis/basisdatetime-chunk'
import BasisupdataChunk from '@/components/basis/basisupdata-chunk'
import BasisrateChunk from '@/components/basis/basisrate-chunk'
import BasiscolorChunk from '@/components/basis/basiscolor-chunk'
import BasistransferChunk from '@/components/basis/basistransfer-chunk'
import BasistagChunk from '@/components/basis/basistag-chunk'
import BasisprogressChunk from '@/components/basis/basisprogress-chunk'
import BasisbadgeChunk from '@/components/basis/basisbadge-chunk'
import BasisalertChunk from '@/components/basis/basisalert-chunk'
import BasisloadingChunk from '@/components/basis/basisloading-chunk'
import BasismessageChunk from '@/components/basis/basismessage-chunk'
import BasismessageboxChunk from '@/components/basis/basismessagebox-chunk'
import BasisnotificationChunk from '@/components/basis/basisnotification-chunk'
import BasisbreadChunk from '@/components/basis/basisbread-chunk'
import BasisstepsChunk from '@/components/basis/basissteps-chunk'
import BasisdialogChunk from '@/components/basis/basisdialog-chunk'
import BasistooltipChunk from '@/components/basis/basistooltip-chunk'
import BasispopoverChunk from '@/components/basis/basispopover-chunk'
import BasiscardChunk from '@/components/basis/basiscard-chunk'
import BasiscarousetChunk from '@/components/basis/basiscarouset-chunk'
import BasiscollapseChunk from '@/components/basis/basiscollapse-chunk'
import TreebasisChunk from '@/components/tree/treebasis-chunk'
import TreelazyChunk from '@/components/tree/treelazy-chunk'
import TreedisableChunk from '@/components/tree/treedisable-chunk'
import TreebymyselfChunk from '@/components/tree/treebymyself-chunk'
import TreefilterChunk from '@/components/tree/treefilter-chunk'
import MenunavChunk from '@/components/menu/menunav-chunk'
import MenutabChunk from '@/components/menu/menutab-chunk'
import MenudropChunk from '@/components/menu/menudrop-chunk'
import CreateChunk from '@/components/Animation/create-chunk'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: HelloWorld,
      children:[
        {
          path:'/FormalignChunk',
          name:'表单对齐方式',
          component:FormalignChunk
        },
        {
          path:'/FormvalidatorChunk',
          name:'表单验证',
          component:FormvalidatorChunk
        },
        {
          path:'/FormselfvalidatorChunk',
          name:'表单自定义验证',
          component:FormselfvalidatorChunk
        },
        {
          path:'/TablestandardChunk',
          name:'标准表格',
          component:TablestandardChunk
        },
        {
          path:'/TablefluidChunk',
          name:'流体表格',
          component:TablefluidChunk
        },
        {
          path:'/TablemoreheadChunk',
          name:'多级表头',
          component:TablemoreheadChunk
        },
        {
          path:'/TablecheckboxChunk',
          name:'多选表格',
          component:TablecheckboxChunk
        },
        {
          path:'/TableexpandChunk',
          name:'展开表格',
          component:TableexpandChunk
        },
        {
          path:'/TablemergeChunk',
          name:'合并表格',
          component:TablemergeChunk
        },
        {
          path:'/BasisiconChunk',
          name:'Icon图标',
          component:BasisiconChunk
        },
        {
          path:'/BasisbuttonChunk',
          name:'Button按钮',
          component:BasisbuttonChunk
        },
        {
          path:'/BasisradioChunk',
          name:'Radio单选框',
          component:BasisradioChunk
        },
        {
          path:'/BasischeckboxChunk',
          name:'Checkbox多选框',
          component:BasischeckboxChunk
        },
        {
          path:'/BasisinputChunk',
          name:'Input输入框',
          component:BasisinputChunk
        },
        {
          path:'/BasisnumberChunk',
          name:'计数器',
          component:BasisnumberChunk
        },
        {
          path:'/BasisselectChunk',
          name:'Select选择器',
          component:BasisselectChunk
        },
        {
          path:'/BasiscascaderChunk',
          name:'Cascader级联选择器',
          component:BasiscascaderChunk
        },
        {
          path:'/BasisswitchChunk',
          name:'Switch开关',
          component:BasisswitchChunk
        },
        {
          path:'/BasissliderChunk',
          name:'Slider滑块',
          component:BasissliderChunk
        },
        {
          path:'/BasistimeChunk',
          name:'时间选择器',
          component:BasistimeChunk
        },
        {
          path:'/BasisdateChunk',
          name:'日期选择器',
          component:BasisdateChunk
        },
        {
          path:'/BasisdatetimeChunk',
          name:'日期时间选择器',
          component:BasisdatetimeChunk
        },
        {
          path:'/BasisupdataChunk',
          name:'Updata上传',
          component:BasisupdataChunk
        },
        {
          path:'/BasisrateChunk',
          name:'评分',
          component:BasisrateChunk
        },
        {
          path:'/BasiscolorChunk',
          name:'颜色选择器',
          component:BasiscolorChunk
        },
        {
          path:'/BasistransferChunk',
          name:'穿梭器',
          component:BasistransferChunk
        },
        {
          path:'/BasistagChunk',
          name:'标签',
          component:BasistagChunk
        },
        {
          path:'/BasisprogressChunk',
          name:'Progress进度条',
          component:BasisprogressChunk
        },
        {
          path:'/BasisbadgeChunk',
          name:'Badge标记',
          component:BasisbadgeChunk
        },
        {
          path:'/TreebasisChunk',
          name:'Tree基础',
          component:TreebasisChunk
        },
        {
          path:'/TreelazyChunk',
          name:'Tree懒加载',
          component:TreelazyChunk
        },
        {
          path:'/TreedisableChunk',
          name:'Tree禁用',
          component:TreedisableChunk
        },
        {
          path:'/TreebymyselfChunk',
          name:'Tree自定义',
          component:TreebymyselfChunk
        },
        {
          path:'/TreefilterChunk',
          name:'Tree过滤节点',
          component:TreefilterChunk
        },
        {
          path:'/BasisalertChunk',
          name:'Alert警告框',
          component:BasisalertChunk
        },
        {
          path:'/BasisloadingChunk',
          name:'Loading',
          component:BasisloadingChunk
        },
        {
          path:'/BasismessageChunk',
          name:'Message提示框',
          component:BasismessageChunk
        },
        {
          path:'/BasismessageboxChunk',
          name:'MessageBox弹框',
          component:BasismessageboxChunk
        },
        {
          path:'/BasisnotificationChunk',
          name:'Notification通知',
          component:BasisnotificationChunk
        },
        {
          path:'/MenunavChunk',
          name:'menuNav',
          component:MenunavChunk
        },
        {
          path:'/MenutabChunk',
          name:'menuTab',
          component:MenutabChunk
        },
        {
          path:'/BasisbreadChunk',
          name:'面包屑导航',
          component:BasisbreadChunk
        },
        {
          path:'/MenudropChunk',
          name:'下拉菜单',
          component:MenudropChunk
        },
        {
          path:'/BasisstepsChunk',
          name:'步骤条',
          component:BasisstepsChunk
        },
        {
          path:'/BasisdialogChunk',
          name:'Dialog对话框',
          component:BasisdialogChunk
        },
        {
          path:'/BasistooltipChunk',
          name:'文字提示',
          component:BasistooltipChunk
        },
        {
          path:'/BasispopoverChunk',
          name:'Popover弹出框',
          component:BasispopoverChunk
        },
        {
          path:'/BasiscardChunk',
          name:'Card卡片',
          component:BasiscardChunk
        },
        {
          path:'/BasiscarousetChunk',
          name:'Carouset走马灯',
          component:BasiscarousetChunk
        },
        {
          path:'/BasiscollapseChunk',
          name:'Collapse折叠面板',
          component:BasiscollapseChunk
        },
        {
          path:'/CreateChunk',
          name:'动画',
          component:CreateChunk
        },
      ]
    }
  ]
})

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c2da520"],{"0838":function(e,t,o){"use strict";o("99af");var a=o("b775"),n="center",i="democode";t["a"]={getList:function(){return Object(a["a"])({url:"/".concat(n,"/").concat(i),method:"get"})},search:function(e,t,o){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/search/").concat(e,"/").concat(t),method:"post",data:o})},save:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i),method:"post",data:e})},findById:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"delete"})},findAllByVulnId:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/vuln/").concat(e),method:"get"})},deleteAllByIds:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/deleteids"),method:"post",data:e})}}},"69e8":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("br"),o("el-form",{ref:"searchform",attrs:{inline:"",size:"small",model:e.searchMap}},[o("el-form-item",{attrs:{prop:"categorysecondid",label:"二级分类"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getCategorysecondList,loading:e.searchLoading},model:{value:e.searchMap.categorysecondid,callback:function(t){e.$set(e.searchMap,"categorysecondid",t)},expression:"searchMap.categorysecondid"}},e._l(e.categorysecondList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),o("el-form-item",{attrs:{prop:"name",label:"名称"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getNameList,loading:e.searchLoading},model:{value:e.searchMap.name,callback:function(t){e.$set(e.searchMap,"name",t)},expression:"searchMap.name"}},e._l(e.nameList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),o("el-form-item",{attrs:{prop:"description",label:"描述"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getDescriptionList,loading:e.searchLoading},model:{value:e.searchMap.description,callback:function(t){e.$set(e.searchMap,"description",t)},expression:"searchMap.description"}},e._l(e.descriptionList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.description,value:e.description}})})),1)],1),o("el-form-item",{attrs:{prop:"risk",label:"风险"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getRiskList,loading:e.searchLoading},model:{value:e.searchMap.risk,callback:function(t){e.$set(e.searchMap,"risk",t)},expression:"searchMap.risk"}},e._l(e.riskList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.risk,value:e.risk}})})),1)],1),o("el-form-item",{attrs:{prop:"refer",label:"参考"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getReferList,loading:e.searchLoading},model:{value:e.searchMap.refer,callback:function(t){e.$set(e.searchMap,"refer",t)},expression:"searchMap.refer"}},e._l(e.referList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.refer,value:e.refer}})})),1)],1),o("el-form-item",{attrs:{prop:"impactscope",label:"影响范围"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getImpactscopeList,loading:e.searchLoading},model:{value:e.searchMap.impactscope,callback:function(t){e.$set(e.searchMap,"impactscope",t)},expression:"searchMap.impactscope"}},e._l(e.impactscopeList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.impactscope,value:e.impactscope}})})),1)],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.fetchData()}}},[e._v("查询")]),o("el-button",{attrs:{type:"info"},on:{click:function(t){return e.resetForm("searchform")}}},[e._v("重置")])],1),o("el-form-item",[o("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"默认名字：报告",clearable:"","prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),o("el-button",{attrs:{loading:e.downloadLoading,type:"success",icon:"el-icon-document"},on:{click:e.handleDownload}},[e._v("导出")])],1),o("el-form-item",[o("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.handleDeleteAll}},[e._v("删除")])],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleEdit("")}}},[e._v("新增")])],1)],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",align:"center"}}),o("el-table-column",{attrs:{label:"序号",type:"index",index:1,align:"center",width:"50"}}),o("el-table-column",{attrs:{sortable:"",prop:"categorysecondid",label:"二级分类"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.getCategorysecondById(t.row.categorysecondid))+" ")]}}])}),o("el-table-column",{attrs:{sortable:"",prop:"name",label:"名称"}}),o("el-table-column",{attrs:{sortable:"",prop:"description",label:"描述"}}),o("el-table-column",{attrs:{sortable:"",prop:"risk",label:"风险"}}),o("el-table-column",{attrs:{sortable:"",prop:"refer",label:"参考"}}),o("el-table-column",{attrs:{sortable:"",prop:"impactscope",label:"影响范围"}}),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(o){return e.handleEdit(t.row.id)}}}),o("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(o){return e.handleDelete(t.row.id)}}})]}}])})],1),o("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,200,500,1e3],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.fetchData}}),o("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisible,width:"50%",center:"","before-close":e.cleanCache},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-form",{attrs:{"label-width":"100px"}},[null==e.pojo.id?o("span",[o("el-form-item",{attrs:{required:"",label:"二级分类"}},[o("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":e.getCategorysecondList,loading:e.searchLoading},model:{value:e.pojo.categorysecondid,callback:function(t){e.$set(e.pojo,"categorysecondid",t)},expression:"pojo.categorysecondid"}},e._l(e.categorysecondList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1):o("span",[o("el-form-item",{attrs:{required:"",label:"二级分类"}},[o("span",[e._v(e._s(e.getCategorysecondById(e.pojo.categorysecondid)))])])],1),o("el-form-item",{attrs:{prop:"name",label:"名称"}},[o("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getNameList,loading:e.searchLoading},model:{value:e.pojo.name,callback:function(t){e.$set(e.pojo,"name",t)},expression:"pojo.name"}},e._l(e.nameList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),o("el-form-item",{attrs:{label:"描述"}},[o("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.pojo.description,callback:function(t){e.$set(e.pojo,"description",t)},expression:"pojo.description"}})],1),o("el-form-item",{attrs:{label:"风险"}},[o("el-radio-group",{attrs:{size:"mini"},model:{value:e.pojo.risk,callback:function(t){e.$set(e.pojo,"risk",t)},expression:"pojo.risk"}},[o("el-radio-button",{attrs:{label:"信息"}}),o("el-radio-button",{attrs:{label:"低危"}}),o("el-radio-button",{attrs:{label:"中危"}}),o("el-radio-button",{attrs:{label:"高危"}}),o("el-radio-button",{attrs:{label:"严重"}}),o("el-radio-button",{attrs:{label:"致命"}})],1)],1),o("el-form-item",{attrs:{label:"参考"}},[o("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.pojo.refer,callback:function(t){e.$set(e.pojo,"refer",t)},expression:"pojo.refer"}})],1),o("el-form-item",{attrs:{label:"影响范围"}},[o("el-input",{attrs:{clearable:"",autosize:"",type:"textarea"},model:{value:e.pojo.impactscope,callback:function(t){e.$set(e.pojo,"impactscope",t)},expression:"pojo.impactscope"}})],1),e.pojo.id?o("span",[o("el-form",[o("el-form-item",{attrs:{label:"新增示例代码"}},[o("el-button",{attrs:{type:"info",size:"mini",icon:"el-icon-circle-plus-outline",circle:""},on:{click:function(t){return e.handleEditDemocode("")}}})],1)],1),o("el-table",{attrs:{data:e.democodeList,fit:""}},[o("el-table-column",{attrs:{prop:"democode",label:"漏洞示例代码"}}),o("el-table-column",{attrs:{prop:"poc",label:"漏洞poc"}}),o("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(o){return e.handleEditDemocode(t.row.id)}}}),o("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(o){return e.handleDeleteDemocode(t.row.id)}}})]}}],null,!1,511865155)})],1),o("span",{attrs:{hidden:""}},[e._v(e._s(e.democodePojo.vulnid=e.pojo.id))]),o("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisibleDemocode,"append-to-body":"",width:"40%"},on:{"update:visible":function(t){e.dialogFormVisibleDemocode=t}}},[o("el-form",{attrs:{"label-width":"100px"}},[o("el-form-item",{attrs:{label:"漏洞示例代码"}},[o("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.democodePojo.democode,callback:function(t){e.$set(e.democodePojo,"democode",t)},expression:"democodePojo.democode"}})],1),o("el-form-item",{attrs:{label:"漏洞poc"}},[o("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.democodePojo.poc,callback:function(t){e.$set(e.democodePojo,"poc",t)},expression:"democodePojo.poc"}})],1),o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSaveDemocode()}}},[e._v("保存")]),o("el-button",{on:{click:function(t){return e.closeDialogFormSecond()}}},[e._v("关闭")])],1)],1),o("el-form",[o("el-form-item",{attrs:{label:"新增解决方案"}},[o("el-button",{attrs:{type:"info",size:"mini",icon:"el-icon-circle-plus-outline",circle:""},on:{click:function(t){return e.handleEditSolution("")}}})],1)],1),o("el-table",{attrs:{data:e.solutionList,fit:""}},[o("el-table-column",{attrs:{prop:"solution",label:"修复方案"}}),o("el-table-column",{attrs:{prop:"codedemo",label:"修复代码示例"}}),o("el-table-column",{attrs:{prop:"configdemo",label:"修复配置示例"}}),o("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(o){return e.handleEditSolution(t.row.id)}}}),o("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(o){return e.handleDeleteSolution(t.row.id)}}})]}}],null,!1,3932928611)})],1),o("span",{attrs:{hidden:""}},[e._v(e._s(e.solutionPojo.vulnid=e.pojo.id))]),o("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisibleSolution,"append-to-body":"",width:"40%"},on:{"update:visible":function(t){e.dialogFormVisibleSolution=t}}},[o("el-form",{attrs:{"label-width":"100px"}},[o("el-form-item",{attrs:{label:"修复方案"}},[o("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.solutionPojo.solution,callback:function(t){e.$set(e.solutionPojo,"solution",t)},expression:"solutionPojo.solution"}})],1),o("el-form-item",{attrs:{label:"修复代码示例"}},[o("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.solutionPojo.codedemo,callback:function(t){e.$set(e.solutionPojo,"codedemo",t)},expression:"solutionPojo.codedemo"}})],1),o("el-form-item",{attrs:{label:"修复配置示例"}},[o("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.solutionPojo.configdemo,callback:function(t){e.$set(e.solutionPojo,"configdemo",t)},expression:"solutionPojo.configdemo"}})],1),o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSaveSolution()}}},[e._v("保存")]),o("el-button",{on:{click:function(t){return e.closeDialogFormSecond()}}},[e._v("关闭")])],1)],1)],1):o("span",[o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("漏洞保存后才能新增示例代码和解决方案")])]),o("br")],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSave()}}},[e._v("保存")]),o("el-button",{on:{click:function(t){return e.closeDialogForm()}}},[e._v("关闭")])],1)],1)],1)},n=[],i=(o("a4d3"),o("e01a"),o("4de4"),o("c975"),o("d81d"),o("b0c0"),o("4ec9"),o("d3b7"),o("ac1f"),o("3ca3"),o("841c"),o("1276"),o("ddb0"),o("dce3")),c=o("92d9"),l=o("0838"),r=o("7fcb"),s={data:function(){return{list:[],total:0,currentPage:1,pageSize:10,searchMap:{},dialogFormVisible:!1,dialogFormVisibleDemocode:!1,dialogFormVisibleSolution:!1,searchLoading:!1,pojo:{},id:"",filename:"",listLoading:!0,multipleSelection:[],downloadLoading:!1,categorysecondMap:new Map,categorysecondIds:[],categorysecondIdAndNameList:[],categorysecondList:[],nameList:[],descriptionList:[],riskList:[],referList:[],impactscopeList:[],democodeId:"",democodePojo:{},democodeList:[],solutionId:"",solutionPojo:{},solutionList:[],tempId:""}},created:function(){this.fetchData()},methods:{cleanCache:function(){this.closeDialogForm()},closeDialogFormSecond:function(){this.dialogFormVisibleDemocode=!1,this.dialogFormVisibleSolution=!1},handleSaveSolution:function(){var e=this;r["a"].update(this.solutionId,this.solutionPojo).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.handleEdit(e.id)})),this.closeDialogFormSecond()},handleEditSolution:function(e){var t=this;this.solutionId=e,this.dialogFormVisibleSolution=!0,""!==e?r["a"].findById(e).then((function(e){e.flag&&(t.solutionPojo=e.data)})):this.solutionPojo={}},handleDeleteSolution:function(e){var t=this;this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){r["a"].deleteById(e).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.handleEdit(t.id)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},handleSaveDemocode:function(){var e=this;l["a"].update(this.democodeId,this.democodePojo).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.handleEdit(e.id)})),this.closeDialogFormSecond()},handleEditDemocode:function(e){var t=this;this.democodeId=e,this.dialogFormVisibleDemocode=!0,""!==e?l["a"].findById(e).then((function(e){e.flag&&(t.democodePojo=e.data)})):this.democodePojo={}},handleDeleteDemocode:function(e){var t=this;this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){l["a"].deleteById(e).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.handleEdit(t.id)}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},getDescriptionList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,i["a"].search(1,10,{description:e}).then((function(o){t.descriptionList=o.data.rows.filter((function(t){return t.description.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.descriptionList=[]},getRiskList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,i["a"].search(1,10,{risk:e}).then((function(o){t.riskList=o.data.rows.filter((function(t){return t.risk.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.riskList=[]},getReferList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,i["a"].search(1,10,{refer:e}).then((function(o){t.referList=o.data.rows.filter((function(t){return t.refer.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.referList=[]},getImpactscopeList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,i["a"].search(1,10,{impactscope:e}).then((function(o){t.impactscopeList=o.data.rows.filter((function(t){return t.impactscope.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.impactscopeList=[]},getNameList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,i["a"].search(1,10,{name:e}).then((function(o){t.nameList=o.data.rows.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.nameList=[]},getCategorysecondList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,c["a"].search(1,10,{name:e}).then((function(o){t.categorysecondList=o.data.rows.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.categorysecondList=[]},getCategorysecond:function(){var e=this;this.categorysecondIds=[];for(var t=0;t<this.list.length;t++)this.categorysecondIds.push(this.list[t].categorysecondid);c["a"].findByIds(this.categorysecondIds).then((function(t){e.categorysecondIdAndNameList=t.data;for(var o=0;o<e.categorysecondIdAndNameList.length;o++)e.categorysecondMap.set(e.categorysecondIdAndNameList[o].split("-")[0],e.categorysecondIdAndNameList[o].split("-")[1])}))},getCategorysecondById:function(e){return this.categorysecondMap.get(e)},closeDialogForm:function(){this.dialogFormVisible=!1,this.democodeList=[],this.solutionList=[],this.categorysecondList=[]},handleDeleteAll:function(){var e=this;this.multipleSelection&&this.multipleSelection.length?this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){for(var t=[],o=0;o<e.multipleSelection.length;o++)t.push(e.multipleSelection[o].id);i["a"].deleteAllByIds(t).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})})):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},handleSelectionChange:function(e){this.multipleSelection=e},handleDownload:function(){var e=this;this.multipleSelection&&this.multipleSelection.length?(this.downloadLoading=!0,Promise.all([o.e("chunk-3c2d6792"),o.e("chunk-19d17be9")]).then(o.bind(null,"4bf8")).then((function(t){for(var o=["二级分类","名称","描述","风险","参考","影响范围"],a=["categorysecondid","name","description","risk","refer","impactscope"],n=e.multipleSelection,i=0;i<n.length;i++)n[i].categorysecondid=e.getCategorysecondById(n[i].categorysecondid);var c=e.formatJson(a,n);t.export_json_to_excel({header:o,data:c,filename:e.filename}),e.$refs.multipleTable.clearSelection(),e.downloadLoading=!1})),this.fetchData()):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},resetForm:function(e){this.$refs[e].resetFields(),this.searchMap={},this.categorysecondList=[],this.nameList=[],this.descriptionList=[],this.riskList=[],this.referList=[],this.impactscopeList=[],this.$message({message:"已清空搜索条件",type:"info"})},handleSizeChange:function(e){this.pageSize=e,this.fetchData()},formatBoolean:function(e){return e?"是":""},fetchData:function(){var e=this;this.listLoading=!0,i["a"].search(this.currentPage,this.pageSize,this.searchMap).then((function(t){e.list=t.data.rows,e.total=t.data.total,e.listLoading=!1})).then((function(){e.getCategorysecond()}))},handleSave:function(){var e=this;i["a"].update(this.id,this.pojo).then((function(t){e.tempId=t.data,e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()})).then((function(){e.tempId?e.handleEdit(e.tempId):e.closeDialogForm()}))},handleEdit:function(e){var t=this;this.id=e,this.dialogFormVisible=!0,""!==e?i["a"].findById(e).then((function(e){e.flag&&(t.pojo=e.data,l["a"].findAllByVulnId(t.id).then((function(e){t.democodeList=e.data})),r["a"].findAllByVulnId(t.id).then((function(e){t.solutionList=e.data})))})):this.pojo={}},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除已选记录, 包括 [漏洞, 示例代码, 解决方案], 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){i["a"].deleteById(e).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.fetchData()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},d=s,u=o("2877"),m=Object(u["a"])(d,a,n,!1,null,null,null);t["default"]=m.exports},"7fcb":function(e,t,o){"use strict";o("99af");var a=o("b775"),n="center",i="solution";t["a"]={getList:function(){return Object(a["a"])({url:"/".concat(n,"/").concat(i),method:"get"})},search:function(e,t,o){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/search/").concat(e,"/").concat(t),method:"post",data:o})},save:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i),method:"post",data:e})},findById:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"delete"})},findAllByVulnId:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/vuln/").concat(e),method:"get"})},deleteAllByIds:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/deleteids"),method:"post",data:e})}}},"92d9":function(e,t,o){"use strict";o("99af");var a=o("b775"),n="center",i="categorysecond";t["a"]={getList:function(){return Object(a["a"])({url:"/".concat(n,"/").concat(i),method:"get"})},search:function(e,t,o){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/search/").concat(e,"/").concat(t),method:"post",data:o})},save:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i),method:"post",data:e})},findById:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"delete"})},findByIds:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/ids"),method:"post",data:e})},deleteAllByIds:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/deleteids"),method:"post",data:e})}}},dce3:function(e,t,o){"use strict";o("99af");var a=o("b775"),n="center",i="vuln";t["a"]={getList:function(){return Object(a["a"])({url:"/".concat(n,"/").concat(i),method:"get"})},search:function(e,t,o){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/search/").concat(e,"/").concat(t),method:"post",data:o})},save:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i),method:"post",data:e})},findById:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/").concat(e),method:"delete"})},findByIds:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/ids"),method:"post",data:e})},deleteAllByIds:function(e){return Object(a["a"])({url:"/".concat(n,"/").concat(i,"/deleteids"),method:"post",data:e})}}},e01a:function(e,t,o){"use strict";var a=o("23e7"),n=o("83ab"),i=o("da84"),c=o("5135"),l=o("861d"),r=o("9bf2").f,s=o("e893"),d=i.Symbol;if(n&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof m?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};s(m,d);var p=m.prototype=d.prototype;p.constructor=m;var f=p.toString,h="Symbol(test)"==String(d("test")),g=/^Symbol\((.*)\)[^)]+$/;r(p,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=f.call(e);if(c(u,e))return"";var o=h?t.slice(7,-1):t.replace(g,"$1");return""===o?void 0:o}}),a({global:!0,forced:!0},{Symbol:m})}}}]);
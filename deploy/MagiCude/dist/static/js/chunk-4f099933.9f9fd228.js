(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f099933"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var a=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"35e8":function(e,t,n){"use strict";n("99af");var a=n("b775"),i="center",o="vulnpluginconfig";t["a"]={getList:function(){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"get"})},search:function(e,t,n){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/search/").concat(e,"/").concat(t),method:"post",data:n})},save:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"post",data:e})},findById:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(e),method:"get"})},findByPluginId:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/plugin/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(e),method:"delete"})},deleteByPluginId:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/plugin/").concat(e),method:"delete"})},deleteAllByIds:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/deleteids"),method:"post",data:e})}}},"5ad6":function(e,t,n){"use strict";n("99af");var a=n("b775"),i="center",o="pluginconfig";t["a"]={getList:function(){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"get"})},search:function(e,t,n){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/search/").concat(e,"/").concat(t),method:"post",data:n})},save:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"post",data:e})},findById:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(e),method:"delete"})},deleteAllByIds:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/deleteids"),method:"post",data:e})}}},"841c":function(e,t,n){"use strict";var a=n("d784"),i=n("825a"),o=n("1d80"),c=n("129f"),l=n("14c3");a("search",1,(function(e,t,n){return[function(t){var n=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var o=i(e),r=String(this),u=o.lastIndex;c(u,0)||(o.lastIndex=0);var s=l(o,r);return c(o.lastIndex,u)||(o.lastIndex=u),null===s?-1:s.index}]}))},9263:function(e,t,n){"use strict";var a=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,c=String.prototype.replace,l=o,r=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],d=r||s||u;d&&(l=function(e){var t,n,i,l,d=this,f=u&&d.sticky,p=a.call(d),g=d.source,h=0,m=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),m=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,h++),n=new RegExp("^(?:"+g+")",p)),s&&(n=new RegExp("^"+g+"$(?!\\s)",p)),r&&(t=d.lastIndex),i=o.call(f?n:d,m),f?i?(i.input=i.input.slice(h),i[0]=i[0].slice(h),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:r&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),s&&i&&i.length>1&&c.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=l},"9f7f":function(e,t,n){"use strict";var a=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var a=n("23e7"),i=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),i=n("d039"),o=n("b622"),c=n("9263"),l=n("9112"),r=o("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var g=o(e),h=!i((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=h&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[r]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!h||!m||"replace"===e&&(!u||!s||f)||"split"===e&&!p){var b=/./[g],v=n(g,""[e],(function(e,t,n,a,i){return t.exec===c?h&&!i?{done:!0,value:b.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=v[0],y=v[1];a(String.prototype,e,x),a(RegExp.prototype,g,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&l(RegExp.prototype[g],"sham",!0)}},dce3:function(e,t,n){"use strict";n("99af");var a=n("b775"),i="center",o="vuln";t["a"]={getList:function(){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"get"})},search:function(e,t,n){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/search/").concat(e,"/").concat(t),method:"post",data:n})},save:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"post",data:e})},findById:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(e),method:"delete"})},findByIds:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/ids"),method:"post",data:e})},deleteAllByIds:function(e){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/deleteids"),method:"post",data:e})}}},ddae:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"5px"}},[n("br"),n("el-form",{ref:"searchform",attrs:{inline:"",size:"small",model:e.searchMap}},[n("el-form-item",{attrs:{prop:"vulnid",label:"漏洞"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":e.getVulnNameList,loading:e.searchLoading},model:{value:e.searchMap.vulnid,callback:function(t){e.$set(e.searchMap,"vulnid",t)},expression:"searchMap.vulnid"}},e._l(e.vulnNameList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{prop:"pluginconfigid",label:"插件"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":e.getPluginConfigNameList,loading:e.searchLoading},model:{value:e.searchMap.pluginconfigid,callback:function(t){e.$set(e.searchMap,"pluginconfigid",t)},expression:"searchMap.pluginconfigid"}},e._l(e.pluginConfigNameList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.fetchData()}}},[e._v("查询")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){return e.resetForm("searchform")}}},[e._v("重置")])],1),n("el-form-item",[n("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"默认名字：报告",clearable:"","prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),n("el-button",{attrs:{loading:e.downloadLoading,type:"success",icon:"el-icon-document"},on:{click:e.handleDownload}},[e._v("导出")])],1),n("el-form-item",[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.handleDeleteAll}},[e._v("删除")])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleEdit("")}}},[e._v("新增")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",align:"center"}}),n("el-table-column",{attrs:{label:"序号",type:"index",index:1,align:"center",width:"50"}}),n("el-table-column",{attrs:{sortable:"",prop:"vulnid",label:"漏洞"}}),n("el-table-column",{attrs:{sortable:"",prop:"pluginconfigid",label:"插件"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(n){return e.handleEdit(t.row.id)}}}),n("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(n){return e.handleDelete(t.row.id)}}})]}}])})],1),n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,200,500,1e3],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.fetchData}}),n("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisible,width:"50%",center:"","before-close":e.cleanCache},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{prop:"vulnid",label:"漏洞"}},[e._v(" "+e._s(e.vulName)+" "),n("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":e.getVulnNameList,loading:e.searchLoading},model:{value:e.pojo.vulnid,callback:function(t){e.$set(e.pojo,"vulnid",t)},expression:"pojo.vulnid"}},e._l(e.vulnNameList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),n("el-form-item",{attrs:{prop:"pluginconfigid",label:"插件"}},[e._v(" "+e._s(e.pluginName)+" "),n("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":e.getPluginConfigNameList,loading:e.searchLoading},model:{value:e.pojo.pluginconfigid,callback:function(t){e.$set(e.pojo,"pluginconfigid",t)},expression:"pojo.pluginconfigid"}},e._l(e.pluginConfigNameList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSave()}}},[e._v("保存")]),n("el-button",{on:{click:function(t){return e.closeDialogForm()}}},[e._v("关闭")])],1)],1)],1)},i=[],o=(n("4de4"),n("c975"),n("d81d"),n("b0c0"),n("d3b7"),n("ac1f"),n("841c"),n("35e8")),c=n("5ad6"),l=n("dce3"),r={data:function(){return{list:[],total:0,currentPage:1,pageSize:10,searchMap:{},dialogFormVisible:!1,pojo:{},id:"",searchLoading:!1,filename:"",listLoading:!0,multipleSelection:[],downloadLoading:!1,pluginConfigNameList:[],vulnNameList:[],vulName:"",pluginName:""}},created:function(){this.fetchData()},methods:{cleanCache:function(){this.closeDialogForm()},closeDialogForm:function(){this.dialogFormVisible=!1,this.vulName="",this.pluginName=""},getVulnNameList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,l["a"].search(1,10,{name:e}).then((function(n){t.vulnNameList=n.data.rows.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.vulnNameList=[]},getPluginConfigNameList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,c["a"].search(1,10,{name:e}).then((function(n){t.pluginConfigNameList=n.data.rows.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.pluginConfigNameList=[]},handleDeleteAll:function(){var e=this;this.multipleSelection&&this.multipleSelection.length?this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){for(var t=[],n=0;n<e.multipleSelection.length;n++)t.push(e.multipleSelection[n].id);o["a"].deleteAllByIds(t).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})})):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},handleSelectionChange:function(e){this.multipleSelection=e},handleDownload:function(){var e=this;this.multipleSelection&&this.multipleSelection.length?(this.downloadLoading=!0,Promise.all([n.e("chunk-4e233b59"),n.e("chunk-353ebe98")]).then(n.bind(null,"4bf8")).then((function(t){var n=["漏洞","插件"],a=["vulnid","pluginconfigid"],i=e.multipleSelection,o=e.formatJson(a,i);t.export_json_to_excel({header:n,data:o,filename:e.filename}),e.$refs.multipleTable.clearSelection(),e.downloadLoading=!1})),this.fetchData()):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},resetForm:function(e){this.$refs[e].resetFields(),this.searchMap={},this.vulnNameList=[],this.pluginConfigNameList=[],this.$message({message:"已清空搜索条件",type:"info"})},handleSizeChange:function(e){this.pageSize=e,this.fetchData()},formatBoolean:function(e){return e?"是":""},fetchData:function(){var e=this;this.listLoading=!0,o["a"].search(this.currentPage,this.pageSize,this.searchMap).then((function(t){e.list=t.data.rows,e.total=t.data.total,e.listLoading=!1}))},handleSave:function(){var e=this;o["a"].update(this.id,this.pojo).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()})),this.closeDialogForm()},handleEdit:function(e){var t=this;this.id=e,this.dialogFormVisible=!0,""!==e?o["a"].findById(e).then((function(e){e.flag&&(t.pojo=e.data),l["a"].findById(t.pojo.vulnid).then((function(e){t.vulName=e.data.name})),c["a"].findById(t.pojo.pluginconfigid).then((function(e){t.pluginName=e.data.name}))})):this.pojo={}},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){o["a"].deleteById(e).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.fetchData()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},u=r,s=n("2877"),d=Object(s["a"])(u,a,i,!1,null,null,null);t["default"]=d.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-455bdd50"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"14c3":function(e,t,n){var a=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"694c":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{padding:"5px"}},[n("br"),n("el-form",{ref:"searchform",attrs:{inline:"",size:"small",model:e.searchMap}},[n("el-form-item",{attrs:{prop:"useragent",label:"ua"}},[n("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",remote:"","allow-create":"","default-first-option":"",clearable:"",placeholder:"请输入关键词","remote-method":e.getUseragentList,loading:e.searchLoading},model:{value:e.searchMap.useragent,callback:function(t){e.$set(e.searchMap,"useragent",t)},expression:"searchMap.useragent"}},e._l(e.useragentList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.useragent,value:e.useragent}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.fetchData()}}},[e._v("查询")]),n("el-button",{attrs:{type:"info"},on:{click:function(t){return e.resetForm("searchform")}}},[e._v("重置")])],1),n("el-form-item",[n("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"默认名字：报告",clearable:"","prefix-icon":"el-icon-document"},model:{value:e.filename,callback:function(t){e.filename=t},expression:"filename"}}),n("el-button",{attrs:{loading:e.downloadLoading,type:"success",icon:"el-icon-document"},on:{click:e.handleDownload}},[e._v("导出")])],1),n("el-form-item",[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.handleDeleteAll}},[e._v("删除")])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleEdit("")}}},[e._v("新增")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",align:"center"}}),n("el-table-column",{attrs:{label:"序号",type:"index",index:1,align:"center",width:"50"}}),n("el-table-column",{attrs:{sortable:"",prop:"useragent",label:"ua"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(n){return e.handleEdit(t.row.id)}}}),n("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(n){return e.handleDelete(t.row.id)}}})]}}])})],1),n("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,200,500,1e3],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"size-change":e.handleSizeChange,"current-change":e.fetchData}}),n("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisible,width:"50%",center:"","before-close":e.cleanCache},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{label:"useragent"}},[n("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:e.pojo.useragent,callback:function(t){e.$set(e.pojo,"useragent",t)},expression:"pojo.useragent"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSave()}}},[e._v("保存")]),n("el-button",{on:{click:function(t){return e.closeDialogForm()}}},[e._v("关闭")])],1)],1)],1)},i=[],o=(n("4de4"),n("c975"),n("d81d"),n("d3b7"),n("ac1f"),n("841c"),n("99af"),n("b775")),r="center",l="useragent",c={getList:function(){return Object(o["a"])({url:"/".concat(r,"/").concat(l),method:"get"})},search:function(e,t,n){return Object(o["a"])({url:"/".concat(r,"/").concat(l,"/search/").concat(e,"/").concat(t),method:"post",data:n})},save:function(e){return Object(o["a"])({url:"/".concat(r,"/").concat(l),method:"post",data:e})},findById:function(e){return Object(o["a"])({url:"/".concat(r,"/").concat(l,"/").concat(e),method:"get"})},update:function(e,t){return null===e||""===e?this.save(t):Object(o["a"])({url:"/".concat(r,"/").concat(l,"/").concat(e),method:"put",data:t})},deleteById:function(e){return Object(o["a"])({url:"/".concat(r,"/").concat(l,"/").concat(e),method:"delete"})},deleteAllByIds:function(e){return Object(o["a"])({url:"/".concat(r,"/").concat(l,"/deleteids"),method:"post",data:e})}},s={data:function(){return{list:[],total:0,currentPage:1,pageSize:10,searchMap:{},dialogFormVisible:!1,pojo:{},id:"",filename:"",listLoading:!0,multipleSelection:[],downloadLoading:!1,useragentList:[],searchLoading:!1}},created:function(){this.fetchData()},methods:{cleanCache:function(){this.closeDialogForm()},getUseragentList:function(e){var t=this;""!==e&&e?(this.searchLoading=!0,setTimeout((function(){t.searchLoading=!1,c.search(1,10,{useragent:e}).then((function(n){t.useragentList=n.data.rows.filter((function(t){return t.useragent.toLowerCase().indexOf(e.toLowerCase())>-1}))}))}),200)):this.useragentList=[]},closeDialogForm:function(){this.dialogFormVisible=!1},handleDeleteAll:function(){var e=this;this.multipleSelection&&this.multipleSelection.length?this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){for(var t=[],n=0;n<e.multipleSelection.length;n++)t.push(e.multipleSelection[n].id);c.deleteAllByIds(t).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})})):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},handleSelectionChange:function(e){this.multipleSelection=e},handleDownload:function(){var e=this;this.multipleSelection&&this.multipleSelection.length?(this.downloadLoading=!0,Promise.all([n.e("chunk-4e233b59"),n.e("chunk-353ebe98")]).then(n.bind(null,"4bf8")).then((function(t){var n=["ua"],a=["useragent"],i=e.multipleSelection,o=e.formatJson(a,i);t.export_json_to_excel({header:n,data:o,filename:e.filename}),e.$refs.multipleTable.clearSelection(),e.downloadLoading=!1})),this.fetchData()):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},resetForm:function(e){this.$refs[e].resetFields(),this.searchMap={},this.useragentList=[],this.$message({message:"已清空搜索条件",type:"info"})},handleSizeChange:function(e){this.pageSize=e,this.fetchData()},formatBoolean:function(e){return e?"是":""},fetchData:function(){var e=this;this.listLoading=!0,c.search(this.currentPage,this.pageSize,this.searchMap).then((function(t){e.list=t.data.rows,e.total=t.data.total,e.listLoading=!1}))},handleSave:function(){var e=this;c.update(this.id,this.pojo).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()})),this.closeDialogForm()},handleEdit:function(e){var t=this;this.id=e,this.dialogFormVisible=!0,""!==e?c.findById(e).then((function(e){e.flag&&(t.pojo=e.data)})):this.pojo={}},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){c.deleteById(e).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.fetchData()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}}},u=s,d=n("2877"),f=Object(d["a"])(u,a,i,!1,null,null,null);t["default"]=f.exports},"841c":function(e,t,n){"use strict";var a=n("d784"),i=n("825a"),o=n("1d80"),r=n("129f"),l=n("14c3");a("search",1,(function(e,t,n){return[function(t){var n=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,n):new RegExp(t)[e](String(n))},function(e){var a=n(t,e,this);if(a.done)return a.value;var o=i(e),c=String(this),s=o.lastIndex;r(s,0)||(o.lastIndex=0);var u=l(o,c);return r(o.lastIndex,s)||(o.lastIndex=s),null===u?-1:u.index}]}))},9263:function(e,t,n){"use strict";var a=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,r=String.prototype.replace,l=o,c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||s;d&&(l=function(e){var t,n,i,l,d=this,f=s&&d.sticky,g=a.call(d),h=d.source,p=0,m=e;return f&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),m=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,p++),n=new RegExp("^(?:"+h+")",g)),u&&(n=new RegExp("^"+h+"$(?!\\s)",g)),c&&(t=d.lastIndex),i=o.call(f?n:d,m),f?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:c&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),u&&i&&i.length>1&&r.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=l},"9f7f":function(e,t,n){"use strict";var a=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var a=n("23e7"),i=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),i=n("d039"),o=n("b622"),r=n("9263"),l=n("9112"),c=o("species"),s=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),g=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var h=o(e),p=!i((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),m=p&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!p||!m||"replace"===e&&(!s||!u||f)||"split"===e&&!g){var x=/./[h],b=n(h,""[e],(function(e,t,n,a,i){return t.exec===r?p&&!i?{done:!0,value:x.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),v=b[0],y=b[1];a(String.prototype,e,v),a(RegExp.prototype,h,2==t?function(e,t){return y.call(e,this,t)}:function(e){return y.call(e,this)})}d&&l(RegExp.prototype[h],"sham",!0)}}}]);
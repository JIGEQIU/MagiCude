(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d7e1384"],{"10dd":function(t,i,l){"use strict";var a=l("ec3b"),e=l.n(a);e.a},ec3b:function(t,i,l){},ef46:function(t,i,l){"use strict";l.r(i);var a=function(){var t=this,i=t.$createElement,l=t._self._c||i;return l("div",{staticStyle:{padding:"100px 200px 0"}},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("魔方-MagiCude ")])]),l("el-link",{attrs:{underline:!1},on:{click:function(i){return t.handleDrawer()}}},[l("b",[t._v("v2.0.20")])]),l("el-link",{staticStyle:{float:"right"},attrs:{href:"https://github.com/er10yi/MagiCude",target:"_blank"}},[t._v("GitHub")])],1),l("div",{staticClass:"text"},[l("ol",[l("li",[t._v("高效获取服务器IP, 端口信息, web信息, url链接, 漏洞等资产信息")]),l("li",[t._v("对资产进行有效的安全管理")]),l("li",[t._v("建立漏洞wiki并自动闭环漏洞, 减少安全部门与业务部门的沟通")]),l("li",[t._v("即时漏洞提醒")]),l("li",[t._v("定时发送资产报告和漏洞报告")]),l("li",[t._v("及时发送资产信息和处理结果给负责人进行整改并自动确认整改完成")]),l("li",[t._v("有效获取DHCP的办公机IP与用户关联")]),l("li",[t._v("丰富的图表统计")]),l("li",[t._v("POC框架")])])]),l("div",{staticClass:"item"},[t._v(" Copyrights © 2018-"+t._s(t.getYear())+" "),l("el-link",{attrs:{type:"info",href:"https://github.com/er10yi",target:"_blank"}},[t._v("贰拾壹.")]),t._v("All Rights Reserved. ")],1)]),l("el-drawer",{attrs:{title:"ChangeLog",visible:t.drawer,direction:"rtl",size:"60%"},on:{"update:visible":function(i){t.drawer=i}}},[l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("v2.0.20 - 20201028")])]),l("div",{staticClass:"text"},[l("ol",[l("li",[t._v("优化多表数据显示逻辑")]),l("li",[t._v("优化任务和子任务显示，默认不显示子任务，无子任务不能打开子任务的Drawer，子任务数量移到任务名称前显示")]),l("li",[t._v("任务，cron任务删除移到类型列")]),l("li",[t._v("任务及web信息增加 增加显示，可以按需选择显示的列")]),l("li",[t._v("任务新增渐变色的进度百分比显示")]),l("li",[t._v("任务编辑，新增cron表达式模拟解析")]),l("li",[t._v("优化侧边栏，部分菜单二级收纳")]),l("li",[t._v("项目信息添加负责人显示，可直接新增部门和负责人")]),l("li",[t._v("检测结果新增ip、端口、漏洞名称方式搜索（三者是或的关系）")]),l("li",[t._v("web信息新增ip、端口方式搜索（两者是或的关系）")]),l("li",[t._v("任务端口，新增任务名称方式搜索，用于导出单次任务的端口扫描结果（暂缓方式，后续优化）")]),l("li",[t._v("资产ip，新增统计列，方便查看当前ip的漏洞数量和端口数量")]),l("li",[t._v("资产ip，新增漏洞数目")]),l("li",[t._v("批量导入-项目信息ip，移除如果ip不存在，会新增")]),l("li",[t._v("批量导入-ip端口，增加无端口信息的ip导入（避免使用新增C段甚至B段的格式，会导致整个C段或B段的ip都导入数据库）")]),l("li",[t._v("批量导入-ip主机名，修复主机名重复时，导入失败问题")]),l("li",[t._v("nmap模式增加域名扫描、-sn(ping)结果解析")]),l("li",[t._v("启动任务前，发一次agent心跳包监控，防止agent掉线漏任务")])])])])]),l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("v2.0.2 - 20201011")])]),l("div",{staticClass:"text"},[l("ol",[t._v(" 部署脚本： "),l("li",[t._v("日志提示增加字体颜色")]),l("li",[t._v("增加卸载脚本")]),l("li",[t._v("center部署无需本地手动修改前端api地址和agent.yml中的地址，只需部署时选择即可")]),l("li",[t._v("agent分布式部署无需本地手动修改agent.yml中的地址，只需部署时输入部署center的ip地址即可")]),l("li",[t._v("优化判断依赖是否存在的方式")])])])])]),l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("v2.0.1 - 20201009")])]),l("div",{staticClass:"text"},[l("ol",[t._v(" 部署脚本： "),l("li",[t._v("增加部署脚本执行目录判断（issues #3 建议判断或约束一下安装脚本执行目录）")]),l("li",[t._v("增加agent.yml内容是否已经修改判断")]),l("li",[t._v("增加center和agent所需文件判断")]),l("li",[t._v("增加前端api地址是否修改判断")]),l("li",[t._v("增加操作系统判断")]),l("li",[t._v("修复多次重新部署的时候，环境变量会写入多次")]),l("li",[t._v("优化脚本日志输出，屏蔽非脚本错误输出，优化所有脚本")]),l("li",[t._v("Python升级到3.9.0")]),l("li",[t._v("部署脚本运行结束时，增加信息和错误提示")]),l("li",[t._v("移除agentDependency，nmap更新到7.90")])])])])]),l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("正式版 v2.0 - 20200925")])]),l("div",{staticClass:"text"},[l("ol",[t._v(" 正式版发布，同时开源 ")])])])]),l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("公测版 v1.3.25 - 20200913")])]),l("div",{staticClass:"text"},[l("ol",[t._v(" 前端： "),l("li",[t._v("修复 子任务Drawer，调整分页无效的问题")]),l("li",[t._v("优化 用code标签显示代码")]),l("li",[t._v("新增 插件页面新增插件代码高亮，python3的selfd插件可前端新增(已知bug，第一次进入插件页面，新增或编辑需要打开两次代码高亮插件才会正常显示，第二次保存才能正常添加代码)")]),l("li",[t._v("新增 设置-批量导入，新增python3的selfd插件配置导入，主要用于python3的selfd插件配置及代码导入")]),l("li",[t._v("新增 新增各个类型任务的demo")]),t._v(" 后端： "),l("li",[t._v("修复 nse类型任务，获取状态时不显示PID信息")]),l("li",[t._v("修复 nse、selfd、httpp任务，资产库无对应的信息时，任务也会发给agent")]),l("li",[t._v("修复 无资产ip时，目标ip为ipNoPort，unknownPortSerVer，ipAllPort，任务也会发给agent")]),l("li",[t._v("修复 修复插件未设置服务和版本时，启动任务会开启所有插件 ")]),l("li",[t._v("优化 优化新增自定义插件，插件核心增加Jep方式调用python代码，可前端直接新增python3的selfd自定义类型的插件（重要更新，TDL的一半，优化新增自定义插件并丰富插件）")]),l("li",[t._v("优化 优化全部批量删除")]),l("li",[t._v("新增 新增python3的selfd插件配置导入接口")]),l("li",[t._v("新增 agent新增python插件import检测，如模块未安装，则会自动安装")]),l("li",[t._v("新增 插件配置新增http、dns辅助验证，用于插件辅助验证无回显漏洞（TDL 增加无回显插件检测）")]),l("li",[t._v("新增 增加HTTP json插件解析")]),l("li",[t._v("修改 随机获取ua的方式修改，存入redis进行随机")]),t._v(" 数据库： "),l("li",[t._v("新增 插件配置新增plugincode字段，用于保存插件代码")]),l("li",[t._v("新增 插件配置新增validatetype字段，用于开启插件http辅助验证或dns辅助验证")]),t._v(" 配置文件： "),l("li",[t._v("新增 agent.yml新增jep节点，用于保存JEP本地库的绝对路径")]),l("li",[t._v("新增 agent.yml新增center节点，用于插件辅助验证时传递http接口和dns的ip地址")]),t._v(" 部署脚本: "),l("li",[t._v("增加 新增Python3.8编译安装")]),l("li",[t._v("移除 移除jre14，修改成jdk15（JEP编译需要）")]),t._v(" 文档： "),l("li",[t._v("优化 优化快速上手及说明文档")]),l("li",[t._v("增加 新增Readme文档")]),l("li",[t._v("增加 新增插件编写说明")])])])])]),l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("公测版 v1.2.2 - 20200722")])]),l("div",{staticClass:"text"},[l("ol",[l("li",[t._v("优化center部署脚本，增加判断是否已经运行过部署脚本，避免误操作二次运行部署脚本（如果已经部署，则需要用户交互），优化docker服务运行状态检测")]),l("li",[t._v("优化initDataAndStart.sh，增加脚本复制和执行成功的判断")]),l("li",[t._v("修改center.yml，token过期时间设置成一小时")]),l("li",[t._v("优化任务插件显示，将插件启用状态体现到操作中，优化插件启用禁用")]),l("li",[t._v("新增子任务展开Drawer")]),l("li",[t._v("about页面版本上增加changelog的Drawer，增加更新日志及TDL")]),l("li",[t._v("前端依赖更新到最新")])])])])]),l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("公测版 v1.2.1 - 20200715")])]),l("div",{staticClass:"text"},[l("ol",[t._v(" 前端： "),l("li",[t._v("增加about页面")]),l("li",[t._v("增加菜单栏显示与隐藏的Collapse，涉及的页面：任务、资产ip、资产端口、主机、检测结果、web信息、web信息和url")]),l("li",[t._v("优化资产ip，去除编辑页面显示ip所有信息，修改成Drawer方式显示，并增加url超链接")]),l("li",[t._v("优化资产端口，去除编辑页面显示端口所有信息，修改成Drawer方式显示，并增加http和https链接打开，增加url超链接")]),l("li",[t._v("优化新建任务的数量前端样式，将input修改成number模式")]),l("li",[t._v("优化检测类型任务，将input修改成单选模式")]),l("li",[t._v("优化web信息中ip的显示，增加打开http和https链接的Popover")]),l("li",[t._v("首页四个折线图修改成显示最新数据的10%")]),l("li",[t._v("修改设置-通知设置中的风险等级编辑样式，从input改成单选模式")]),l("li",[t._v("修改cron表达式解析结果的样式，改成表格")])])])])]),l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("公测版 v1.2.0 - 20200706")])]),l("div",{staticClass:"text"},[l("ol",[t._v(" 公开公测开启 ")])])])]),l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("内测版 v1.1 - 20200615")])]),l("div",{staticClass:"text"},[l("ol",[l("li",[t._v("优化部署步骤，修改部署脚本成一键部署")]),l("li",[t._v("部署脚本增加系统源修改判断和docker镜像源修改判断（需要用户交互）")]),l("li",[t._v("部署脚本增加判断，提高安装部署成功率")]),l("li",[t._v("前端增加web信息功能，后端优化部分代码")]),l("li",[t._v("文档增加Q/A章节、微信公众号、项目的目录结构说明，为公测做准备")]),l("li",[t._v("增加公测宣传文档")]),l("li",[t._v("增加magicude执行脚本，便于查看系统状态及操作系统（0624）")])])])])]),l("el-card",{staticClass:"box-card"},[l("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[l("span",[l("b",[t._v("内测版 v1.0 - 20200528")])]),l("div",{staticClass:"text"},[l("ol",[t._v(" 公开内测开启 ")])])])])],1)],1)},e=[],s={data:function(){return{drawer:!1}},methods:{handleDrawer:function(){this.drawer=!0},handleDrawerClose:function(){this.drawer=!1},getYear:function(){var t=new Date;return this.year=t.getFullYear(),this.year}}},v=s,r=(l("10dd"),l("2877")),_=Object(r["a"])(v,a,e,!1,null,null,null);i["default"]=_.exports}}]);
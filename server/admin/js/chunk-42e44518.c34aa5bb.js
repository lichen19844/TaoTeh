(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42e44518"],{"4d79":function(e,a,t){"use strict";var o=t("b9d5"),r=t.n(o);r.a},"79d9":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}]},[e._m(0),o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[e._l(e.formList[0],(function(a,t){return[o("el-form-item",{key:t,attrs:{label:a.value}},["avatar"==a.key?[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","auto-upload":!1,"show-file-list":!1,"on-change":e.avatarUpload}},[e.avatar["url"]||e.form.avatar?o("img",{attrs:{src:e.avatar["url"]||e.form.avatar}}):o("i",{staticClass:"el-icon-user"})])]:"upload_type"==a.key?[o("el-radio-group",{model:{value:e.form.upload_type,callback:function(a){e.$set(e.form,"upload_type",a)},expression:"form.upload_type"}},[o("el-radio",{attrs:{label:"服务器"}}),o("el-radio",{attrs:{label:"阿里云OSS"}})],1),"阿里云OSS"==e.form.upload_type?[e._l(e.formList[3],(function(a,t){return[o("el-input",{key:t,staticStyle:{"margin-top":"10px"},attrs:{placeholder:"domain"==a?"自定义图片域名, 需解析至oss (http://img.baidu.com)":a},model:{value:e.form["upload_oss"][a],callback:function(t){e.$set(e.form["upload_oss"],a,t)},expression:"form['upload_oss'][item]"}})]}))]:e._e()]:[o("el-input",{attrs:{placeholder:a.placeholder},model:{value:e.form[a.key],callback:function(t){e.$set(e.form,a.key,t)},expression:"form[item.key]"}})]],2)]})),e._l(e.formList[1],(function(a,t){return[a.show?e._e():o("el-form-item",{key:t+999,attrs:{label:a.value}},["mode"==a.key?[o("el-radio-group",{model:{value:e.form.email["mode"],callback:function(a){e.$set(e.form.email,"mode",a)},expression:"form.email['mode']"}},[o("el-radio",{attrs:{label:"QQ"}}),o("el-radio",{attrs:{label:"163"}})],1)]:"comment"==a.key?[o("el-switch",{on:{change:e.emailChange},model:{value:e.form.email["comment"],callback:function(a){e.$set(e.form.email,"comment",a)},expression:"form.email['comment']"}})]:"subscribe"==a.key?[o("el-switch",{on:{change:e.emailChange},model:{value:e.form.email["subscribe"],callback:function(a){e.$set(e.form.email,"subscribe",a)},expression:"form.email['subscribe']"}})]:[o("el-input",{attrs:{placeholder:a.placeholder},model:{value:e.form.email[a.key],callback:function(t){e.$set(e.form.email,a.key,t)},expression:"form.email[item.key]"}})]],2)]})),o("h2",{staticClass:"tit hint-tit"},[e._v("首屏效果 "),o("el-popover",{attrs:{placement:"top-start",width:"300",trigger:"hover"}},[o("p",[e._v("背景颜色请选择类似图片颜色的透明度")]),o("img",{attrs:{src:t("f5a3")}}),o("span",{attrs:{slot:"reference"},slot:"reference"},[e._v("(view)")])])],1),e._l(e.formList[2],(function(a,t,r){return[o("el-form-item",{key:r+22,attrs:{label:a}},["image"==t?[o("el-upload",{staticClass:"cover",attrs:{action:"","auto-upload":!1,"show-file-list":!1,"on-change":e.coverUpload}},[e.cover["url"]||e.form.cover["image"]?o("img",{attrs:{src:e.cover["url"]||e.form.cover["image"]}}):o("i",{staticClass:"el-icon-plus"})]),o("span",{staticClass:"upload-image-size"},[e._v("(1920*1080)")])]:"link"==t?[o("el-input",{attrs:{placeholder:"必填, 前台才能正常访问"},model:{value:e.form["cover"][t],callback:function(a){e.$set(e.form["cover"],t,a)},expression:"form['cover'][k]"}})]:"color"==t?[o("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.form["cover"]["color"],callback:function(a){e.$set(e.form["cover"],"color",a)},expression:"form['cover']['color']"}})]:"icp_txt"==t||"icp_link"==t?[o("el-input",{attrs:{placeholder:"网站的备案信息, 有则填写"},model:{value:e.form["cover"][t],callback:function(a){e.$set(e.form["cover"],t,a)},expression:"form['cover'][k]"}})]:[o("el-input",{attrs:{placeholder:"必填, 前台才能正常访问"},model:{value:e.form["cover"][t],callback:function(a){e.$set(e.form["cover"],t,a)},expression:"form['cover'][k]"}})]],2)]})),o("h2",{staticClass:"tit"},[e._v("页面音乐")]),e._l(e.formList[4],(function(a,t,r){return[o("el-form-item",{key:r+222,attrs:{label:a}},[o("el-input",{attrs:{placeholder:"各个页面的背景音乐链接地址"},model:{value:e.form["bg"][t],callback:function(a){e.$set(e.form["bg"],t,a)},expression:"form['bg'][k]"}})],1)]})),o("h2",{staticClass:"tit"},[e._v("修改密码")]),o("el-form-item",{attrs:{label:"原密码"}},[o("el-input",{model:{value:e.password.one,callback:function(a){e.$set(e.password,"one",a)},expression:"password.one"}})],1),o("el-form-item",{attrs:{label:"新密码"}},[o("el-input",{model:{value:e.password.two,callback:function(a){e.$set(e.password,"two",a)},expression:"password.two"}})],1),o("el-form-item",[o("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即保存")]),o("span",{staticClass:"hint"},[o("i",{staticClass:"el-icon-warning"}),e._v("信息需填写完整才能正常使用")])],1)],2)],1)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"header"},[t("h2",{staticClass:"tit"},[e._v("网站信息")])])}],s=t("9f3a"),l={data(){return{avatar:{},cover:{},formList:[[{key:"avatar",value:"管理员头像"},{key:"name",value:"管理员昵称"},{key:"web_name",value:"网站昵称",placeholder:"前台网站的网站名"},{key:"address",value:"网站地址",placeholder:"网站的域名, 例如 http://baidu.com"},{key:"web_describe",value:"网站描述"},{key:"web_seo",value:"SEO关键词"},{key:"upload_type",value:"文件上传"}],[{key:"mode",value:"邮箱类型",placeholder:"管理员评论的邮箱, 必填"},{key:"address",value:"评论邮箱",placeholder:"管理员评论的邮箱, 必填"},{key:"name",value:"评论昵称",placeholder:"管理员评论的昵称, 必填"},{key:"mark",value:"评论标识",placeholder:"前台评论的管理员标识, 必填"},{key:"comment",value:"评论通知",placeholder:"与评论邮箱一致的PASS, 只支持QQ邮箱"},{key:"subscribe",value:"订阅通知",placeholder:"与评论邮箱一致的PASS, 只支持QQ邮箱"},{key:"pass",value:"邮箱PASS",placeholder:"与邮箱一致的码, 在邮箱设置开启SMTP服务器可获取 (必填)",show:!0}],{image:"封面图",title:"标题",describe:"描述",date:"时间",link:"链接",color:"色调",icp_txt:"备案号",icp_link:"备案链接"},["bucket","region","endPoint","accessKeySecret","accessKeyId","domain"],{bg_mood:"文章列表",bg_letter:"短语列表",bg_subscribe:"订阅页面",bg_about:"个人介绍"}],form:{cover:{},upload_oss:{},upload_type:"服务器",bg:{},email:{}},fullscreenLoading:!1,password:{}}},watch:{$info:{handler(e){Object.keys(this.$info).length>0&&this.update()},immediate:!0}},computed:{...Object(s["b"])(["$data"]),$info(){return Object.keys(this.$data).length>0?this.$data.info:{}}},methods:{update(){for(let a in this.$info)this.$set(this.form,a,this.$info[a]);const e=["comment","subscribe"].some(e=>1==this.$info.email[e]);this.formList[1][6].show=!e},async onSubmit(){if(Object.keys(this.password).length>0){if(!this.password["one"])return void this.$message.error("请输入原密码!");if(!this.password["two"])return void this.$message.error("请填写新密码!");this.fullscreenLoading=!0;const e=await this.$http.post("/password",{password:this.password});if(2===e.data.status)return this.fullscreenLoading=!1,void this.$message.error("原密码输入有误!")}this.fullscreenLoading=!0;const e=["avatar","cover"],a=e.reduce((e,a)=>(this[a].url&&e.push(new Promise((e,t)=>{this[a]["formData"].append("type",this.form.upload_type),this[a]["formData"].append("upload_oss",JSON.stringify(this.form.upload_oss)),this.$http.post("/upload",this[a].formData).then(o=>{100==o.data.status?(this[a]={},e({type:a,url:o.data.url})):t()}).catch(e=>{t(e)})})),e),[]);Promise.all(a).then(e=>{e.length>0&&e.map(e=>{"avatar"===e.type?this.form["avatar"]=e.url:this.form.cover["image"]=e.url}),this.$http.post("/info",this.form).then(e=>{1===e.data.status&&setTimeout(()=>{this.$message({message:"更新成功",type:"success"}),this.$store.commit("updataInfo",e.data.body),this.fullscreenLoading=!1,this.$router.push("/")},500)})}).catch(e=>{this.fullscreenLoading=!1,this.$message.error("图片上传失败，请检查网络是否正常 or OSS信息是否填写正确!")})},emailChange(e){const a=["comment","subscribe"].some(e=>1==this.form.email[e]);this.formList[1][6].show=!a},upload(e,a){if(!a.raw.type.includes("image"))return void this.$message.error("请选择图片格式的文件!");const t=new FormData;t.append("file",a.raw),this[e]={url:URL.createObjectURL(a.raw),formData:t},"avatar"===e?this.form["avatar"]=URL.createObjectURL(a.raw):this.form["cover"]["image"]=URL.createObjectURL(a.raw)},avatarUpload(e){this.upload("avatar",e)},coverUpload(e){this.upload("cover",e)}}},i=l,c=(t("4d79"),t("9ca4")),n=Object(c["a"])(i,o,r,!1,null,"3724e8f7",null);a["default"]=n.exports},b9d5:function(e,a,t){},f5a3:function(e,a,t){e.exports=t.p+"img/cover.b5d33f25.png"}}]);
//# sourceMappingURL=chunk-42e44518.c34aa5bb.js.map
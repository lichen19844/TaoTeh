(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c4116b4"],{2172:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"phrase"},[a("h2",{staticClass:"tit"},[t._v("订阅通知 ("+t._s(t.data.length)+")")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.data,height:"calc(800px - 240px)"}},[a("el-table-column",{attrs:{label:"Title"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v(t._s(e.row.email))])]}}])}),a("el-table-column",{attrs:{label:"Date",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.time.month.en)+" "+t._s(e.row.time.day.on)+", "+t._s(e.row.time.year))])]}}])}),a("el-table-column",{attrs:{label:"Status",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"#ff7b7b"}},[t._v(t._s(e.row.active))])]}}])}),a("el-table-column",{attrs:{label:"options",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:"Delete",placement:"top"}},[a("i",{staticClass:"el-icon-delete",on:{click:function(a){return t.remove(e.row)}}})])]}}])})],1)],1)},n=[],i={data(){return{data:[],loading:""}},created(){this.load()},methods:{async load(){this.loading=this.$loading({target:".container"});const t=await this.$http.get("/subscribe");setTimeout(()=>{this.data=t.data,this.loading.close()},500)},remove(t){this.$confirm("删除该文章, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$http.delete("subscribe/"+t._id).then(t=>{setTimeout(()=>{this.load(),this.$message({type:"success",message:"删除成功!"}),this.$infoUpdate()},1e3)})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})}}},o=i,l=(a("f2c7"),a("9ca4")),c=Object(l["a"])(o,s,n,!1,null,"66968d04",null);e["default"]=c.exports},f2c7:function(t,e,a){"use strict";var s=a("f519"),n=a.n(s);n.a},f519:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4c4116b4.1cf4d9c9.js.map
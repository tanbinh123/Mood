(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16f25194"],{"01be":function(t,e,a){"use strict";var s=a("936e"),n=a.n(s);n.a},1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data>0?a("el-pagination",{attrs:{background:"","page-size":10,"pager-count":5,total:t.data,"current-page":t.page,layout:"prev, pager, next"},on:{"current-change":t.load}}):t._e()},n=[],i={props:{data:{type:Number,default:0},page:{type:Number,default:1}},methods:{load(t){this.$emit("update",t)}}},o=i,r=a("2877"),c=Object(r["a"])(o,s,n,!1,null,null,null);e["a"]=c.exports},4546:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[a("div",{staticClass:"header"},[a("h1",[t._v(" 评论列表 ("+t._s(t.total)+") "),t.unread?a("span",{staticClass:"read-btn",on:{click:t.onRead}},[a("i",{staticClass:"el-icon-refresh"}),t._v(" 一键已读 ("+t._s(t.unread)+") ")]):t._e()])]),a("el-table",{attrs:{data:t.data}},[a("el-table-column",{attrs:{label:"Name",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return a("p",{},[1==e.row.status?a("span",{staticClass:"read"},[t._v("1")]):t._e(),t._v(" "+t._s(e.row.name)+" ")])}}])}),a("el-table-column",{attrs:{label:"Content"},scopedSlots:t._u([{key:"default",fn:function(e){return a("p",{},[t._v(t._s(e.row.content))])}}])}),a("el-table-column",{attrs:{label:"Date",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return a("span",{},[t._v(" "+t._s(t.$getDate(e.row.time))+" ")])}}])}),a("el-table-column",{attrs:{label:"options",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.options,(function(s,n){return a("el-tooltip",{key:n,staticClass:"item",attrs:{effect:"dark",content:s.text,placement:"top"}},[a("i",{class:s.icon,on:{click:function(a){return t.option(e.row,n)}}})])}))}}])})],1),a("Pagination",{attrs:{data:t.total,page:t.page},on:{update:t.load}}),a("Comment",{ref:"comment",attrs:{message:t.replyData},on:{Load:t.load}})],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment-form",class:t.showClass},[a("div",{staticClass:"content"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.avatarURL}})]),a("p",{staticClass:"name"},[t._v("回复："+t._s(t.message.name))]),a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"请输入内容"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),a("div",{staticClass:"bottom-btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交评论")]),t._m(0)],1),a("i",{staticClass:"el-icon-circle-close",on:{click:t.close}})],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",{staticClass:"el-icon-phone-outline"}),t._v(" 文明用语, 弘扬中华文明传统美德")])}],r={name:"Comment",props:["message"],data(){return{content:"",isShow:!1}},computed:{info(){return this.$store.state.$data.info},showClass(){return this.isShow?"active":""},avatarURL(){return this.info?this.info.base.adminAvatar:""}},methods:{submit(){if(!this.content)return void this.$message.error("请填写回复的内容");const t=t=>this.info.administrator[t],e={name:t("name"),email:t("email"),content:this.content,time:this.$dateFormat(),image:1,status:2,topic_id:this.message.topic_id,reply_name:this.message.name,reply_email:this.message.email,parent_id:this.message.parent_id||this.message.id,type:1==this.message.type?2:3,admin:!0},a={name:e.reply_name,email:e.reply_email,isEmail:t("comment"),url:`${this.info.base["address"]}/${e.topic_id}`};this.$request(()=>this.$http.post("comment",{data:e,email:a}).then(t=>{1===t.data.status&&(this.$message({message:"评论发表成功",type:"success"}),this.$emit("Load")),this.close()}).catch(t=>{this.$message.error("出错了，刷新重试一下"),this.close()}))},close(){this.content="",this.isShow=!this.isShow}}},c=r,l=(a("01be"),a("2877")),m=Object(l["a"])(c,i,o,!1,null,"b355e05e",null),d=m.exports,u=a("1799"),p={components:{Comment:d,Pagination:u["a"]},data(){return{data:[],total:0,page:1,replyData:"",options:[{icon:"el-icon-view",text:"View Article"},{icon:"el-icon-chat-line-round",text:"Reply"},{icon:"el-icon-delete",text:"Delete"}]}},computed:{unread(){return this.$store.state.$data.unread}},created(){this.load()},methods:{load(t){this.$request(()=>this.$http.get("/comment",{params:{page:t}}).then(t=>{["data","total","page"].map(e=>this[e]=t.data.body[e])}))},option(t,e){const a={0:()=>{window.open(`${window.location.origin}/${t.topic_id}`)},1:()=>{this.replyData=t,this.$refs.comment.close()},2:()=>{const e=t.parent_id?"删除该评论, 是否继续?":"当前为一级评论, 会连同子评论一块删除哦~";this.$confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$request(()=>this.$http.delete("/comment",{params:{id:t.id,parent_id:t.parent_id}}).then(t=>{1===t.data.status?(this.load(),this.$message.success("删除成功!")):this.$message.error(t.data.body.message)}))}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})}};a[e]()},onRead(){this.$http.post("comment_read").then(t=>{1===t.data.status?(this.load(),this.$store.commit("updateUnread")):this.$message.error(t.data.body.message)})}}},h=p,f=(a("de10"),Object(l["a"])(h,s,n,!1,null,"38710025",null));e["default"]=f.exports},"5d7c":function(t,e,a){},"936e":function(t,e,a){},de10:function(t,e,a){"use strict";var s=a("5d7c"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-16f25194.e80ad474.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8a48812"],{"4ead":function(t,e,a){"use strict";var s=a("71d6"),n=a.n(s);n.a},"71d6":function(t,e,a){},dd8b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"tit"},[t._v("个人信息页，来让陌生人认识一下自己吧！！")]),a("mavon-editor",{ref:"markdown",staticStyle:{height:"69vh"},attrs:{subfield:!1},on:{imgAdd:t.$imgAdd,imgDel:t.$imgDel},model:{value:t.data.content,callback:function(e){t.$set(t.data,"content",e)},expression:"data.content"}}),a("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:t.submit}},[t._v("SUBMIT")])],1)},n=[],o=a("b2d8"),i=(a("64e1"),{components:{mavonEditor:o["mavonEditor"]},data(){return{data:{content:"",contentHtml:""},markdownImage:[]}},computed:{uploadType(){return this.$store.state.$data.info.base.uploadType}},mounted(){this.$http.get("myself").then(t=>{1==t.data.status?this.data=t.data.body||{}:this.$message.error(t.data.body.message)})},methods:{$imgAdd(t,e){const a=this.$formData({file:e,type:this.uploadType});this.markdownImage.push({index:t,form:a})},$imgDel(t){this.markdownImage.splice(t,1)},async submit(){const t=this.$refs.markdown,e={contentHtml:t.d_render,content:t.d_value};for(let s in e)this.data[s]=e[s];const a=this.markdownImage;for(let s=0;s<a.length;s++){const e=await this.$http.post("/upload",a[s]["form"]),n=e.data.body;if(1!=e.data.status){this.fullscreenLoading=!1,this.$message.error(n.message);break}t.$img2Url(s+1,n.url)}this.$request(()=>this.$http.post("myself",this.data).then(t=>{this.$message.success("success")}))}}}),d=i,r=(a("4ead"),a("2877")),m=Object(r["a"])(d,s,n,!1,null,"649a4217",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-a8a48812.3626cd5b.js.map
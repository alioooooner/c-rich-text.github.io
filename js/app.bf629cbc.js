(function(e){function n(n){for(var o,i,l=n[0],a=n[1],u=n[2],d=0,f=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);s&&s(n);while(f.length)f.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,l=1;l<t.length;l++){var a=t[l];0!==c[a]&&(o=!1)}o&&(r.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},c={app:0},r=[];function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var s=a;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0065":function(e,n,t){"use strict";t("74fc")},4421:function(e,n){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./sw.js",{scope:"./"}).then((function(e){console.log("注册成功，作用域为"+e.scope)})).catch((function(e){console.log("注册失败，失败原因"+e)}))}))},"4b01":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23");function c(e,n,t,c,r,i){var l=Object(o["m"])("c-rich-editor");return Object(o["h"])(),Object(o["b"])(l)}var r={class:"c-rich-editor"},i={class:"row"},l=["disabled"],a=["disabled"];function u(e,n,t,c,u,s){var d=Object(o["m"])("tool-bar");return Object(o["h"])(),Object(o["c"])("div",r,[Object(o["d"])("div",{onMouseleave:n[4]||(n[4]=function(){return c.hidden&&c.hidden.apply(c,arguments)})},[Object(o["e"])(d,{showDialogType:e.showDialogType,isBold:e.isBold,fontColor:e.fontColor,onShow:c.show,onChangeBold:c.changeBold,onHidden:c.hidden},null,8,["showDialogType","isBold","fontColor","onShow","onChangeBold","onHidden"]),Object(o["d"])("div",i,[Object(o["d"])("div",{class:"editor",contenteditable:"true",onInput:n[0]||(n[0]=function(){return c.print&&c.print.apply(c,arguments)}),onClick:n[1]||(n[1]=function(){return c.getSelDetail&&c.getSelDetail.apply(c,arguments)}),onKeypress:n[2]||(n[2]=function(){return c.getSelDetail&&c.getSelDetail.apply(c,arguments)}),ref:"editorRef"},null,544),Object(o["d"])("div",{class:"content",onClick:n[3]||(n[3]=function(){return c.hidden&&c.hidden.apply(c,arguments)})},Object(o["n"])(e.html),1)])],32),Object(o["d"])("button",{class:Object(o["f"])(["storage-btn",[e.isOffLine?"disabled-btn":"enable-btn"]]),onClick:n[5]||(n[5]=function(){return c.editContent&&c.editContent.apply(c,arguments)}),disabled:e.isOffLine}," 存储 ",10,l),Object(o["d"])("button",{class:Object(o["f"])(["storage-btn",[e.isOffLine?"enable-btn":"disabled-btn"]]),disabled:!e.isOffLine,onClick:n[6]||(n[6]=function(){return c.saveOffContent&&c.saveOffContent.apply(c,arguments)})}," 离线存储 ",10,a),Object(o["d"])("button",{class:"storage-btn enable-btn",onClick:n[7]||(n[7]=function(){return c.clearContent&&c.clearContent.apply(c,arguments)})},"清空")])}var s=t("5530"),d=t("1da1"),f=(t("96cf"),t("e9c4"),{class:"tool-bar"}),b={class:"nav__img iconfont icon-image"};function p(e,n,t,c,r,i){return Object(o["h"])(),Object(o["c"])("div",f,[Object(o["d"])("button",{class:Object(o["f"])(["iconfont icon-bold",[t.isBold?"display-bold":""]]),onClick:n[0]||(n[0]=function(e){return c.execCommand("bold")})},null,2),Object(o["d"])("button",{class:"iconfont icon-list-unordered",onClick:n[1]||(n[1]=function(e){return c.execCommand("insertUnorderedList")})}),Object(o["d"])("button",{class:"iconfont icon-list-ordered",onClick:n[2]||(n[2]=function(e){return c.execCommand("insertOrderedList")})}),Object(o["d"])("button",{class:"iconfont icon-heading",onClick:n[3]||(n[3]=function(e){return c.show("heading")})}),Object(o["d"])("button",{class:Object(o["f"])(["iconfont icon-font",["blue"===t.fontColor?"display-blue":"","yellow"===t.fontColor?"display-yellow":"","red"===t.fontColor?"display-red":""]]),onClick:n[4]||(n[4]=function(e){return c.show("fontcolor")})},null,2),Object(o["d"])("button",{class:"iconfont icon-text",onClick:n[5]||(n[5]=function(e){return c.show("fontsize")})}),Object(o["d"])("button",{class:"iconfont icon-link",onClick:n[6]||(n[6]=function(){return c.createLink&&c.createLink.apply(c,arguments)})}),Object(o["d"])("button",b,[Object(o["d"])("input",{type:"file",accept:"image/gif, image/jpeg, image/png",onChange:n[7]||(n[7]=function(){return c.insertImg&&c.insertImg.apply(c,arguments)})},null,32)]),Object(o["d"])("button",{class:"iconfont icon-strikethrough-2",onClick:n[8]||(n[8]=function(e){return c.execCommand("strikeThrough")})}),Object(o["d"])("button",{class:"iconfont icon-underline",onClick:n[9]||(n[9]=function(e){return c.execCommand("underline")})}),Object(o["d"])("button",{class:"iconfont icon-undo-circle",onClick:n[10]||(n[10]=function(e){return c.execCommand("undo")})}),Object(o["d"])("button",{class:"iconfont icon-redo-circle",onClick:n[11]||(n[11]=function(e){return c.execCommand("redo")})}),Object(o["d"])("div",{class:Object(o["f"])(["selected-options selected-heading",["heading"===t.showDialogType?"":"display-none"]])},[Object(o["d"])("button",{onClick:n[12]||(n[12]=function(e){return c.execCommand("formatBlock","<h1>")})},"H1"),Object(o["d"])("button",{onClick:n[13]||(n[13]=function(e){return c.execCommand("formatBlock","<h2>")})},"H2"),Object(o["d"])("button",{onClick:n[14]||(n[14]=function(e){return c.execCommand("formatBlock","<h3>")})},"H3"),Object(o["d"])("button",{onClick:n[15]||(n[15]=function(e){return c.execCommand("formatBlock","<h4>")})},"H4"),Object(o["d"])("button",{onClick:n[16]||(n[16]=function(e){return c.execCommand("formatBlock","<h5>")})},"H5"),Object(o["d"])("button",{onClick:n[17]||(n[17]=function(e){return c.execCommand("formatBlock","<h6>")})},"H6"),Object(o["d"])("button",{onClick:n[18]||(n[18]=function(e){return c.execCommand("formatBlock","<p>")})},"正文")],2),Object(o["d"])("div",{class:Object(o["f"])(["selected-options selected-fontcolor",["fontcolor"===t.showDialogType?"":"display-none"]])},[Object(o["d"])("button",{onClick:n[19]||(n[19]=function(e){return c.execCommand("foreColor","black")})},"黑"),Object(o["d"])("button",{onClick:n[20]||(n[20]=function(e){return c.execCommand("foreColor","red")})},"红"),Object(o["d"])("button",{onClick:n[21]||(n[21]=function(e){return c.execCommand("foreColor","yellow")})},"黄"),Object(o["d"])("button",{onClick:n[22]||(n[22]=function(e){return c.execCommand("foreColor","blue")})},"蓝")],2),Object(o["d"])("div",{class:Object(o["f"])(["selected-options selected-fontsize",["fontsize"===t.showDialogType?"":"display-none"]])},[Object(o["d"])("button",{onClick:n[23]||(n[23]=function(e){return c.changeSelectFontSize(10)})},"10px"),Object(o["d"])("button",{onClick:n[24]||(n[24]=function(e){return c.changeSelectFontSize(13)})},"13px"),Object(o["d"])("button",{onClick:n[25]||(n[25]=function(e){return c.changeSelectFontSize(16)})},"16px"),Object(o["d"])("button",{onClick:n[26]||(n[26]=function(e){return c.changeSelectFontSize(18)})},"18px"),Object(o["d"])("button",{onClick:n[27]||(n[27]=function(e){return c.changeSelectFontSize(24)})},"24px"),Object(o["d"])("button",{onClick:n[28]||(n[28]=function(e){return c.changeSelectFontSize(32)})},"32px"),Object(o["d"])("button",{onClick:n[29]||(n[29]=function(e){return c.changeSelectFontSize(48)})},"48px")],2)])}t("d3b7"),t("159b");var g={props:{showDialogType:{type:String,default:"",required:!0},isBold:{type:Boolean,default:!1,required:!0},fontColor:{type:String,default:"black",required:!0}},setup:function(e,n){var t=Object(o["k"])({boldFlag:!1});function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;"bold"===e?n.emit("changeBold"):"formatBlock"!==e&&"foreColor"!==e||n.emit("hidden"),document.execCommand(e,!1,t)}function r(){var e=window.prompt("请输入链接地址");e&&c("createLink",e)}function i(e){var n=new FileReader,t=e.target.files[0];n.onload=function(){var e=n.result;c("insertImage",e),document.querySelector(".nav__img input").value=""},n.readAsDataURL(t)}function l(e){c("styleWithCss",!0),c("fontSize",5);var o=document.querySelector(".editor"),r=o.querySelectorAll("span");console.log(t.fontSize),r.forEach((function(n){var t=n.style.fontSize;console.log(t),"x-large"===t&&(n.style.fontSize=e+"px")})),n.emit("hidden")}function a(e){n.emit("show",e)}return Object(s["a"])({show:a,createLink:r,execCommand:c,insertImg:i,changeSelectFontSize:l},Object(o["o"])(t))}},h=(t("8cb1"),t("6b0d")),m=t.n(h);const O=m()(g,[["render",p],["__scopeId","data-v-47fe5d6d"]]);var C=O,v=t("bc3a"),j=t.n(v),y="http://localhost:7001";function w(e){return j.a.get("/contents/findById/".concat(e))}function k(e){return j.a.put("contents/edit",e)}j.a.defaults.baseURL=y;var S={addHandler:function(e,n,t){e.addEventListener?(console.log(1),e.addEventListener(n,t,!1)):e.attachEvent?(console.log(2),e.attachEvent("on"+n,t)):(console.log(3),e["on"+n]=t)}},x={components:{ToolBar:C},setup:function(){var e=new o["l"](null),n=Object(o["k"])({html:"",showDialogType:"",isBold:!1,fontColor:"black",isSaveOffLine:!1,isOffLine:!1});function t(){n.html=document.querySelector(".editor").innerHTML}function c(){n.showDialogType=""}function r(e){n.showDialogType=e}function i(){return l.apply(this,arguments)}function l(){return l=Object(d["a"])(regeneratorRuntime.mark((function t(){var o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,w("1645414530651");case 2:o=t.sent,c=o.data,200==c.code?(n.html=c.data.text,e.value.innerHTML=c.data.text,localStorage.setItem("rich-text-storage",JSON.stringify(c.data.text)),console.log(c)):(n.html="",e.value.innerHTML="");case 5:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function a(){return u.apply(this,arguments)}function u(){return u=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.html="",e.value.innerHTML="",f();case 3:case"end":return t.stop()}}),t)}))),u.apply(this,arguments)}function f(){return b.apply(this,arguments)}function b(){return b=Object(d["a"])(regeneratorRuntime.mark((function t(){var o,c,r,i=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=i.length>0&&void 0!==i[0]?i[0]:"",o=e.value.innerHTML,t.next=4,k({id:"1645414530651",text:o});case 4:c=t.sent,r=c.data,200==r.code&&(localStorage.setItem("rich-text-storage",JSON.stringify(e.value.innerHTML)),n.isSaveOffLine?window.alert("远程数据同步成功!"):window.alert("操作成功！"),n.isSaveOffLine=!1);case 7:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}function p(){n.isSaveOffLine&&f(JSON.parse(localStorage.getItem("rich-text-storage")))}function g(){c();var e=window.getSelection(),t=e.getRangeAt(0),o=t.startContainer.parentElement.nodeName,r=t.startContainer.parentElement.color;if(n.isBold="b"===o.toLowerCase(),t.startOffset<t.endOffset){var i;switch(r){case"#ff0000":i="red";break;case"#ffff00":i="yellow";break;case"#0000ff":i="blue";break;default:i="black"}n.fontColor=i,console.log(n.fontColor)}else n.fontColor="black"}function h(){n.isBold=!n.isBold}function m(){if(!0===window.navigator.onLine)console.log("首次连接"),i(),localStorage.setItem("rich-text-storage",JSON.stringify(n.html));else if(console.log("离线状态"),n.isOffLine=!0,localStorage.getItem("rich-text-storage")){var t=JSON.parse(localStorage.getItem("rich-text-storage"));e.value.innerHTML=t,n.html=t}else e.value.innerHTML="",n.html="";S.addHandler(window,"online",(function(){console.log("online"),p(),n.isOffLine=!1,window.alert("网络回来了！")})),S.addHandler(window,"offline",(function(){n.isOffLine=!0,window.alert("掉线了，可以使用离线存储到本地！")}))}function O(){n.isSaveOffLine=!0,localStorage.setItem("rich-text-storage",JSON.stringify(n.html)),window.alert("离线存储成功")}return Object(o["g"])((function(){m()})),Object(s["a"])(Object(s["a"])({print:t,hidden:c,show:r},Object(o["o"])(n)),{},{clearContent:a,editContent:f,getSelDetail:g,changeBold:h,saveOffContent:O,editorRef:e})}};t("0065");const L=m()(x,[["render",u]]);var B=L,T={name:"App",components:{CRichEditor:B}};t("dbf1");const H=m()(T,[["render",c]]);var D=H;t("be35"),t("4421");Object(o["a"])(D).mount("#app")},"74fc":function(e,n,t){},"8cb1":function(e,n,t){"use strict";t("4b01")},9462:function(e,n,t){},be35:function(e,n,t){},dbf1:function(e,n,t){"use strict";t("9462")}});
//# sourceMappingURL=app.bf629cbc.js.map
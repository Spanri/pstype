(function(t){function e(e){for(var n,s,u=e[0],i=e[1],c=e[2],p=0,v=[];p<u.length;p++)s=u[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&v.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"023f":function(t,e,r){},"5c0b":function(t,e,r){"use strict";var n=r("e332"),a=r.n(n);a.a},"9a4b":function(t,e,r){},a13d:function(t,e,r){"use strict";var n=r("023f"),a=r.n(n);a.a},cd49:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[this.$store.getters.isAuthenticated&&this.$store.getters.auth?r("div",[r("Auth")],1):this.$store.getters.auth?r("div",{staticClass:"load"},[r("div"),r("div",{staticClass:"loadText"},[t._m(0),r("svg",{staticClass:"loadSvg",attrs:{version:"1.1",viewBox:"0 0 16 16","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[r("path",{attrs:{d:"M14,8c-0.609,0-0.898,0.43-1,0.883C12.635,10.516,11.084,13,8,13c-0.757,0-1.473-0.172-2.114-0.474L6.414,12  C6.773,11.656,7,11.445,7,11c0-0.523-0.438-1-1-1H3c-0.609,0-1,0.492-1,1v3c0,0.541,0.428,1,1,1c0.484,0,0.688-0.273,1-0.594  l0.408-0.407C5.458,14.632,6.685,15,8,15c4.99,0,7-4.75,7-5.938C15,8.336,14.469,8,14,8z M3,7.117C3.365,5.485,4.916,3,8,3  c0.757,0,1.473,0.171,2.114,0.473L9.586,4C9.227,4.344,9,4.555,9,5c0,0.523,0.438,1,1,1h3c0.609,0,1-0.492,1-1V2  c0-0.541-0.428-1-1-1c-0.484,0-0.688,0.273-1,0.594l-0.408,0.407C10.542,1.368,9.315,1,8,1C3.01,1,1,5.75,1,6.938  C1,7.664,1.531,8,2,8C2.609,8,2.898,7.57,3,7.117z"}})])]),r("div")]):r("main",{staticClass:"authenticated"},[r("router-view")],1)])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Система"),r("br"),t._v("загружается")])}],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"auth-parent"},[r("p",{staticClass:"title"},[t._v("Авторизация")]),r("div",{staticClass:"auth"},[r("div",{staticClass:"input"},[r("p",[t._v("Логин")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{id:"username",type:"text",placeholder:"Введите логин"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),r("div",{staticClass:"input"},[r("p",[t._v("Пароль")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{id:"password",type:"password",placeholder:"Введите пароль"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("button",{on:{click:function(e){return t.login()}}},[t._v("ОК")])]),r("div",{attrs:{id:"error"}},[t._v(" "+t._s(t.error))])])},u=[],i=r("bc3a"),c=r.n(i),l="http://localhost:3000",p={name:"Auth",data:function(){return{error:"",username:"",password:""}},methods:{login:function(t){var e=this;this.error="",console.log(l),c.a.post(l+"/api/v1/signin",{username:this.username,password:this.password}).then(function(t){sessionStorage.setItem("token",t.data.token),e.$router.push({path:"/home"})}).catch(function(t){console.log(t),e.error="Что-то не так."})}}},v=p,h=(r("a13d"),r("2877")),f=Object(h["a"])(v,s,u,!1,null,"52372710",null),d=f.exports,m={name:"App",components:{Auth:d},data:function(){return{}},created:function(){c.a.interceptors.response.use(void 0,function(t){return new Promise(function(e,r){throw 401===t.status&&t.config&&!t.config.__isRetryRequest&&this.$store.dispatch(AUTH_LOGOUT),t})})}},b=m,g=(r("5c0b"),Object(h["a"])(b,a,o,!1,null,null,null)),_=g.exports,j=r("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},k=[],y=r("d225"),O=r("308d"),C=r("6bb5"),x=r("4e2b"),$=r("9ab4"),E=r("60a3"),P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))]),t._m(0),r("h3",[t._v("Installed CLI Plugins")]),t._m(1),r("h3",[t._v("Essential Links")]),t._m(2),r("h3",[t._v("Ecosystem")]),t._m(3)])},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),t._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha",target:"_blank",rel:"noopener"}},[t._v("unit-mocha")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],A=function(t){function e(){return Object(y["a"])(this,e),Object(O["a"])(this,Object(C["a"])(e).apply(this,arguments))}return Object(x["a"])(e,t),e}(E["c"]);Object($["a"])([Object(E["b"])()],A.prototype,"msg",void 0),A=Object($["a"])([E["a"]],A);var T=A,M=T,I=(r("db8b"),Object(h["a"])(M,P,S,!1,null,"d5ae8b90",null)),L=I.exports,z=function(t){function e(){return Object(y["a"])(this,e),Object(O["a"])(this,Object(C["a"])(e).apply(this,arguments))}return Object(x["a"])(e,t),e}(E["c"]);z=Object($["a"])([Object(E["a"])({components:{HelloWorld:L}})],z);var H=z,N=H,V=Object(h["a"])(N,w,k,!1,null,null,null),W=V.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("h1",[t._v("This is an about page")])])}],R={},U=Object(h["a"])(R,F,J,!1,null,null,null),q=U.exports,B=r("2f62");n["a"].use(B["a"]);var D=new B["a"].Store({state:{token:localStorage.getItem("user-token")||""},getters:{token:function(t){return t.token}},mutations:{},actions:{}});n["a"].use(j["a"]);var G=function(t,e,r){D.getters.isAuthenticated?r():r("/auth")},Y=new j["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:W},{path:"/auth",name:"auth",component:d},{path:"/about",name:"about",component:q,beforeEnter:G}]});n["a"].config.productionTip=!1,n["a"].prototype.$http=c.a;var K=localStorage.getItem("token");K&&(n["a"].prototype.$http.defaults.headers.common.Authorization=K),new n["a"]({router:Y,store:D,render:function(t){return t(_)}}).$mount("#app")},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},db8b:function(t,e,r){"use strict";var n=r("9a4b"),a=r.n(n);a.a},e332:function(t,e,r){}});
//# sourceMappingURL=app.20c7ff4e.js.map
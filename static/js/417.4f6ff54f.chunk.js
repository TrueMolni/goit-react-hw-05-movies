"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[417],{719:function(n,t,r){r.d(t,{Pg:function(){return p},zv:function(){return d},tx:function(){return h},Hg:function(){return f}});var e=r(861),a=r(687),c=r.n(a),i=r(912),u="623333e2eba93b003942355e59320afc",o="https://api.themoviedb.org/3/",s=("".concat(o,"/trending/movie/day?api_key=").concat(u),i.Z.create({baseURL:o,params:{key:u}}));i.Z.defaults.baseURL=o;var p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(t,"?api_key=").concat(u));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/all/week?api_key=".concat(u));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},417:function(n,t,r){r.r(t),r.d(t,{default:function(){return k}});var e,a,c,i,u=r(861),o=r(439),s=r(687),p=r.n(s),f=r(791),d=r(689),h=r(719),x=r(168),l=r(934),v=l.Z.img(e||(e=(0,x.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n  width: 140px;\n  height: 200px;\n  margin-bottom: 10px;\n  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;\n"]))),m=l.Z.ul(a||(a=(0,x.Z)(["\n  padding: 15px 35px;\n  display: flex;\n  flex-wrap: wrap;\n"]))),g=l.Z.li(c||(c=(0,x.Z)(["\n  margin-bottom: 32px;\n  margin-right: 15px;\n  border-radius: 5px;\n"]))),w=l.Z.p(i||(i=(0,x.Z)(["\n  font-weight: bold;\n  font-size: 10px;\n  max-width: 140px;\n  color: #25468e;\n"]))),b=r(184),k=function(){var n=(0,d.UO)().id,t=(0,f.useState)(null),r=(0,o.Z)(t,2),e=r[0],a=r[1];return(0,f.useEffect)((function(){function t(){return(t=(0,u.Z)(p().mark((function t(){var r;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,h.zv)(n);case 3:r=t.sent,a(r.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}n&&function(){t.apply(this,arguments)}()}),[n]),(0,b.jsx)(m,{children:e&&e.map((function(n){var t=n.profile_path,r=n.name,e=n.id,a=n.original_name,c=n.character,i="https://image.tmdb.org/t/p/w500/"+t;return(0,b.jsxs)(g,{children:[(0,b.jsx)(v,{src:i,alt:r}),(0,b.jsxs)(w,{children:[" ",r||a]}),(0,b.jsxs)(w,{children:["Character: ",c]})]},e)}))})}}}]);
//# sourceMappingURL=417.4f6ff54f.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[171],{6548:function(n,e,t){t.d(e,{$Y:function(){return a},Zn:function(){return i},nn:function(){return u},qd:function(){return f},rq:function(){return s}});var r=t(1044),c="126c98610b953996e384874a869a831e",o="https://api.themoviedb.org/3",i=function(){return r.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(c))},u=function(n){return r.ZP.get("".concat(o,"/movie/").concat(n,"?api_key=").concat(c))},a=function(n){return r.ZP.get("".concat(o,"/search/movie?api_key=").concat(c,"&query=").concat(n))},s=function(n){return r.ZP.get("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(c))},f=function(n){return r.ZP.get("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(c))}},2171:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,c,o,i,u,a=t(5861),s=t(885),f=t(7757),d=t.n(f),h=t(2791),l=t(9014),p=t(6548),m=t(168),g=t(1087),Z=t(6444),v=t(6505),k=(0,Z.ZP)(v.D7)(r||(r=(0,m.Z)([""]))),x=(0,Z.ZP)(v.Pp)(c||(c=(0,m.Z)([""]))),_=(0,Z.ZP)(g.rU)(o||(o=(0,m.Z)(["\n  font-size: ",";\n  color: ",";\n  text-decoration: underline;\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.accent})),b=t(184),P=function(){var n=(0,h.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1];return(0,h.useEffect)((function(){var n=function(){var n=(0,a.Z)(d().mark((function n(){var e,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Zn)();case 3:if(e=n.sent,0!==(t=e.data.results).length){n.next=8;break}return l.ZP.error("Oops, something went wrong, be kind, change your side"),n.abrupt("return");case 8:r(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),l.ZP.error("Oops, something went wrong, be kind, change your side");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(k,{children:t.map((function(n){return(0,b.jsx)(x,{children:(0,b.jsx)(_,{to:"movies/".concat(n.id),children:n.original_title})},n.id)}))})})},w=Z.ZP.main(i||(i=(0,m.Z)(["\n  padding: "," 0;\n"])),(function(n){return n.theme.spacing(8)})),y=Z.ZP.h1(u||(u=(0,m.Z)(["\n  color: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.spacing(5)})),j=function(){return(0,b.jsxs)(w,{children:[(0,b.jsx)(y,{children:"Trending today"}),(0,b.jsx)(h.Suspense,{fallback:(0,b.jsx)(v.aN,{}),children:(0,b.jsx)(P,{})})]})}}}]);
//# sourceMappingURL=171.140a83e5.chunk.js.map
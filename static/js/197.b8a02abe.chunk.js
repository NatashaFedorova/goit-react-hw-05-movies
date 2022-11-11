"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[197],{6548:function(n,e,t){t.d(e,{$Y:function(){return a},Zn:function(){return c},nn:function(){return u},qd:function(){return f},rq:function(){return s}});var r=t(1044),o="126c98610b953996e384874a869a831e",i="https://api.themoviedb.org/3",c=function(){return r.ZP.get("".concat(i,"/trending/movie/day?api_key=").concat(o))},u=function(n){return r.ZP.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o))},a=function(n){return r.ZP.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n))},s=function(n){return r.ZP.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o))},f=function(n){return r.ZP.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o))}},8197:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var r,o,i,c,u,a,s,f,l,h=t(5861),m=t(885),d=t(7757),p=t.n(d),v=t(2791),g=t(1087),b=t(6548),Z=t(5705),x=t(2797),j=t(168),k=t(6444),P=t(828),y=(0,k.ZP)(Z.l0)(r||(r=(0,j.Z)(["\n  margin: 0 auto;\n  padding: "," 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.spacing(8)})),_=(0,k.ZP)(Z.gN)(o||(o=(0,j.Z)(["\n  position: relative;\n  width: 500px;\n  padding: "," ",";\n  border: ",";\n  border-bottom: ",";\n  color: ",";\n  background-color: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.borders.none}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.fontWeight.normal})),w=k.ZP.button(i||(i=(0,j.Z)(["\n  position: absolute;\n  left: 64%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 45px;\n  border: ",";\n  background-color: ",";\n  margin: 0;\n  padding: 0;\n  &:hover svg,\n  &:focus svg {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.borders.none}),(function(n){return n.theme.colors.light}),(function(n){return n.theme.colors.accent})),S=(0,k.ZP)(P.Yfv)(c||(c=(0,j.Z)(["\n  width: 36px;\n  height: 36px;\n  fill: ",";\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"])),(function(n){return n.theme.colors.searchIcon})),q=k.ZP.p(u||(u=(0,j.Z)(["\n  position: absolute;\n  bottom: 83%;\n  left: 44%;\n  color: ",";\n"])),(function(n){return n.theme.colors.error})),z=t(184),N=x.Ry().shape({value:x.Z_().trim().required()}),C=function(n){var e=n.onSubmit,t=n.value;return(0,z.jsx)(Z.J9,{initialValues:{value:t},onSubmit:function(n,t){var r=n.value;t.resetForm;e(r.trim())},validationSchema:N,children:(0,z.jsxs)(y,{children:[(0,z.jsx)(_,{name:"value",type:"text",autoComplete:"off",placeholder:"Search for a movie by title"}),(0,z.jsx)(w,{type:"submit",children:(0,z.jsx)(S,{})}),(0,z.jsx)(Z.Bc,{name:"value",component:q})]})})},Y=t(7689),F=t(6505),$=(0,k.ZP)(F.D7)(a||(a=(0,j.Z)([""]))),B=(0,k.ZP)(F.Pp)(s||(s=(0,j.Z)([""]))),D=(0,k.ZP)(g.rU)(f||(f=(0,j.Z)(["\n  font-size: ",";\n  color: ",";\n  text-decoration: underline;\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.accent})),E=function(n){var e=n.movies,t=(0,Y.TH)();return(0,z.jsx)($,{children:e.map((function(n){return(0,z.jsx)(B,{children:(0,z.jsx)(D,{to:"".concat(n.id),state:{from:t},children:n.original_title})},n.id)}))})},H=t(9014),I=function(){var n,e=(0,v.useState)([]),t=(0,m.Z)(e,2),r=t[0],o=t[1],i=(0,g.lr)(),c=(0,m.Z)(i,2),u=c[0],a=c[1],s=null!==(n=u.get("value"))&&void 0!==n?n:"";(0,v.useEffect)((function(){if(o([]),s&&""!==s){var n=function(){var n=(0,h.Z)(p().mark((function n(){var e,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.$Y)(s);case 3:if(e=n.sent,0!==(t=e.data.results).length){n.next=8;break}return H.ZP.error("Nothing was found for this request"),n.abrupt("return");case 8:o(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),H.ZP.error("Nothing was found for this request");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}}),[s]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(C,{onSubmit:function(n){a({value:n})},value:s}),(0,z.jsx)(v.Suspense,{fallback:(0,z.jsx)(F.aN,{}),children:(0,z.jsx)(E,{movies:r})})]})},J=k.ZP.main(l||(l=(0,j.Z)(["\n  padding: "," 0;\n"])),(function(n){return n.theme.spacing(8)})),R=function(){return(0,z.jsx)(J,{children:(0,z.jsx)(I,{})})}}}]);
//# sourceMappingURL=197.b8a02abe.chunk.js.map
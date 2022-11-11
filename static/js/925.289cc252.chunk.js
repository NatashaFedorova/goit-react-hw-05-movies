"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[925],{6548:function(n,e,t){t.d(e,{$Y:function(){return s},Zn:function(){return c},nn:function(){return u},qd:function(){return f},rq:function(){return a}});var r=t(1044),o="126c98610b953996e384874a869a831e",i="https://api.themoviedb.org/3",c=function(){return r.ZP.get("".concat(i,"/trending/movie/day?api_key=").concat(o))},u=function(n){return r.ZP.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o))},s=function(n){return r.ZP.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n))},a=function(n){return r.ZP.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o))},f=function(n){return r.ZP.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o))}},7925:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,o,i,c,u,s,a,f,m,h,d,l,p,g,Z,v=t(5861),x=t(885),b=t(7757),j=t.n(b),P=t(2791),k=t(7689),w=t(9014),_=t(168),z=t(6444),y=t(6505),S=z.ZP.div(r||(r=(0,_.Z)(["\n  display: flex;\n  padding-bottom: ",";\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.accent})),O=z.ZP.img(o||(o=(0,_.Z)(["\n  width: 320px;\n"]))),q=z.ZP.div(i||(i=(0,_.Z)(["\n  padding-left: ",";\n"])),(function(n){return n.theme.spacing(8)})),C=z.ZP.h1(c||(c=(0,_.Z)(["\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontSizes.mediumPlus}),(function(n){return n.theme.spacing(8)})),U=z.ZP.h2(u||(u=(0,_.Z)(["\n  font-size: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.spacing(8)})),E=(0,z.ZP)(y.k$)(s||(s=(0,_.Z)(["\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(8)})),F=z.ZP.span(a||(a=(0,_.Z)(["\n  font-weight: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.fontWeight.normal}),(function(n){return n.theme.fontSizes.normal})),G=t(184),N=function(n){var e=n.film;if(e){var t=e.original_title,r=e.release_date,o=e.overview,i=e.vote_average,c=e.genres,u=e.poster_path,s=c.map((function(n){return n.name})).join(" "),a=(10*i).toFixed(),f="https://image.tmdb.org/t/p/w500/".concat(u),m=Number.parseFloat(r);return(0,G.jsxs)(S,{children:[(0,G.jsx)(O,{src:f,alt:t,width:"320"}),(0,G.jsxs)(q,{children:[(0,G.jsxs)(C,{children:[t," (",m,")"]}),(0,G.jsxs)(U,{children:["User score: ",(0,G.jsxs)(F,{children:[a," %"]})]}),(0,G.jsx)(U,{children:"Overview"}),(0,G.jsx)(E,{children:o}),(0,G.jsx)(U,{children:"Genres"}),(0,G.jsx)(E,{children:s})]})]})}},W=t(1087),$=z.ZP.div(f||(f=(0,_.Z)(["\n  padding-bottom: ",";\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.spacing(4)}),(function(n){return n.theme.colors.accent})),A=z.ZP.h2(m||(m=(0,_.Z)(["\n  font-size: ",";\n  margin-top: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.spacing(8)})),D=(0,z.ZP)(y.D7)(h||(h=(0,_.Z)([""]))),H=(0,z.ZP)(y.Pp)(d||(d=(0,_.Z)([""]))),I=(0,z.ZP)(W.OL)(l||(l=(0,_.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  color: ",";\n  text-decoration: underline;\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n  &:focus-visible:not(.active) {\n    color: ",";\n  }\n\n  &.active {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent})),L=function(){return(0,G.jsxs)($,{children:[(0,G.jsx)(A,{children:"Additional information"}),(0,G.jsxs)(D,{children:[(0,G.jsx)(H,{children:(0,G.jsx)(I,{to:"cast",children:"Cast"})}),(0,G.jsx)(H,{children:(0,G.jsx)(I,{to:"reviews",children:"Reviews"})})]})]})},R=t(6548),T=t(8820),Y=z.ZP.main(p||(p=(0,_.Z)(["\n  padding: "," 0;\n"])),(function(n){return n.theme.spacing(8)})),B=(0,z.ZP)(W.rU)(g||(g=(0,_.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: ",";\n  font-size: ",";\n  color: ",";\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),(function(n){return n.theme.spacing(8)}),(function(n){return n.theme.fontSizes.medium}),(function(n){return n.theme.colors.dark}),(function(n){return n.theme.colors.accent})),J=(0,z.ZP)(T.kyg)(Z||(Z=(0,_.Z)(["\n  color: inherit;\n  margin-right: ",";\n"])),(function(n){return n.theme.spacing(2)})),K=function(){var n,e=(0,k.UO)().movieId,t=(0,P.useState)(null),r=(0,x.Z)(t,2),o=r[0],i=r[1],c=(0,k.TH)(),u=(0,P.useState)(null===(n=c.state)||void 0===n?void 0:n.from),s=(0,x.Z)(u,2),a=s[0],f=s[1];return(0,P.useEffect)((function(){a||f((function(n){return n}))}),[a]),(0,P.useEffect)((function(){var n=function(){var n=(0,v.Z)(j().mark((function n(){var t;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,R.nn)(e);case 3:if((t=n.sent).data){n.next=7;break}return w.ZP.error("Oops, something went wrong, be kind, change your side"),n.abrupt("return");case 7:i(t.data),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),w.ZP.error("Oops, something went wrong, be kind, change your side");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,G.jsxs)(Y,{children:[(0,G.jsxs)(B,{to:null!==a&&void 0!==a?a:"/",children:[(0,G.jsx)(J,{}),"Go back"]}),(0,G.jsx)(N,{film:o}),(0,G.jsx)(L,{}),(0,G.jsx)(P.Suspense,{fallback:(0,G.jsx)(y.aN,{}),children:(0,G.jsx)(k.j3,{})})]})}}}]);
//# sourceMappingURL=925.289cc252.chunk.js.map
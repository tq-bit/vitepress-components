import{B as t,u as e,C as a,b as s,o as i,c as l,a as o,D as c,j as n,t as r,E as v,G as f,p as d,h as u,F as m,v as p,A as k,g as h,l as g}from"./app.bc8bcc5c.js";d("data-v-0cb9fda2");const y={key:0,class:"home-hero"},x={key:0,class:"figure"},_=["src","alt"],b={key:1,id:"main-title",class:"title"},I={key:2,class:"description"};u();var T=t({setup(t){const{site:d,frontmatter:u}=e(),m=a((()=>{const{heroImage:t,heroText:e,tagline:a,actionLink:s,actionText:i}=u.value;return t||e||a||s&&i})),p=a((()=>u.value.heroText||d.value.title));return(t,e)=>s(m)?(i(),l("header",y,[s(u).heroImage?(i(),l("figure",x,[o("img",{class:"image",src:s(c)(s(u).heroImage),alt:s(u).heroAlt},null,8,_)])):n("v-if",!0),s(p)?(i(),l("h1",b,r(s(p)),1)):n("v-if",!0),s(u).tagline?(i(),l("p",I,r(s(u).tagline),1)):n("v-if",!0),s(u).actionLink&&s(u).actionText?(i(),v(f,{key:3,item:{link:s(u).actionLink,text:s(u).actionText},class:"action"},null,8,["item"])):n("v-if",!0),s(u).altActionLink&&s(u).altActionText?(i(),v(f,{key:4,item:{link:s(u).altActionLink,text:s(u).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});T.__scopeId="data-v-0cb9fda2",d("data-v-e39c13e0");const A={key:0,class:"home-features"},L={class:"wrapper"},$={class:"container"},j={class:"features"},C={key:0,class:"title"},w={key:1,class:"details"};u();var B=t({setup(t){const{frontmatter:c}=e(),v=a((()=>c.value.features&&c.value.features.length>0)),f=a((()=>c.value.features?c.value.features:[]));return(t,e)=>s(v)?(i(),l("div",A,[o("div",L,[o("div",$,[o("div",j,[(i(!0),l(m,null,p(s(f),((t,e)=>(i(),l("section",{key:e,class:"feature"},[t.title?(i(),l("h2",C,r(t.title),1)):n("v-if",!0),t.details?(i(),l("p",w,r(t.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)}});B.__scopeId="data-v-e39c13e0",d("data-v-30918238");const D={key:0,class:"footer"},E={class:"container"},F={class:"text"};u();var G=t({setup(t){const{frontmatter:a}=e();return(t,e)=>s(a).footer?(i(),l("footer",D,[o("div",E,[o("p",F,r(s(a).footer),1)])])):n("v-if",!0)}});G.__scopeId="data-v-30918238",d("data-v-32eddf2f");const q={class:"home","aria-labelledby":"main-title"},z={class:"home-content"};u();var H=t({setup:t=>(t,e)=>{const a=k("Content");return i(),l("main",q,[h(T),g(t.$slots,"hero",{},void 0,!0),h(B),o("div",z,[h(a)]),g(t.$slots,"features",{},void 0,!0),h(G),g(t.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-32eddf2f";export{H as default};

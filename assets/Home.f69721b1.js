import{y as t,u as e,z as a,b as s,o as i,c as o,a as l,A as n,h as c,t as r,B as f,C as v,p as d,f as u,F as m,D as p,x as k,j as h,r as y}from"./app.f4653219.js";d("data-v-0cb9fda2");const x={key:0,class:"home-hero"},g={key:0,class:"figure"},_=["src","alt"],I={key:1,id:"main-title",class:"title"},T={key:2,class:"description"};u();var A=t({setup(t){const{site:d,frontmatter:u}=e(),m=a((()=>{const{heroImage:t,heroText:e,tagline:a,actionLink:s,actionText:i}=u.value;return t||e||a||s&&i})),p=a((()=>u.value.heroText||d.value.title));return(t,e)=>s(m)?(i(),o("header",x,[s(u).heroImage?(i(),o("figure",g,[l("img",{class:"image",src:s(n)(s(u).heroImage),alt:s(u).heroAlt},null,8,_)])):c("v-if",!0),s(p)?(i(),o("h1",I,r(s(p)),1)):c("v-if",!0),s(u).tagline?(i(),o("p",T,r(s(u).tagline),1)):c("v-if",!0),s(u).actionLink&&s(u).actionText?(i(),f(v,{key:3,item:{link:s(u).actionLink,text:s(u).actionText},class:"action"},null,8,["item"])):c("v-if",!0),s(u).altActionLink&&s(u).altActionText?(i(),f(v,{key:4,item:{link:s(u).altActionLink,text:s(u).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}});A.__scopeId="data-v-0cb9fda2",d("data-v-e39c13e0");const b={key:0,class:"home-features"},L={class:"wrapper"},$={class:"container"},j={class:"features"},C={key:0,class:"title"},w={key:1,class:"details"};u();var z=t({setup(t){const{frontmatter:n}=e(),f=a((()=>n.value.features&&n.value.features.length>0)),v=a((()=>n.value.features?n.value.features:[]));return(t,e)=>s(f)?(i(),o("div",b,[l("div",L,[l("div",$,[l("div",j,[(i(!0),o(m,null,p(s(v),((t,e)=>(i(),o("section",{key:e,class:"feature"},[t.title?(i(),o("h2",C,r(t.title),1)):c("v-if",!0),t.details?(i(),o("p",w,r(t.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}});z.__scopeId="data-v-e39c13e0",d("data-v-30918238");const B={key:0,class:"footer"},D={class:"container"},F={class:"text"};u();var q=t({setup(t){const{frontmatter:a}=e();return(t,e)=>s(a).footer?(i(),o("footer",B,[l("div",D,[l("p",F,r(s(a).footer),1)])])):c("v-if",!0)}});q.__scopeId="data-v-30918238",d("data-v-32eddf2f");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};u();var H=t({setup:t=>(t,e)=>{const a=k("Content");return i(),o("main",E,[h(A),y(t.$slots,"hero",{},void 0,!0),h(z),l("div",G,[h(a)]),y(t.$slots,"features",{},void 0,!0),h(q),y(t.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-32eddf2f";export{H as default};

import{_ as e,C as t,u as a,D as s,b as i,o as l,c as o,a as n,E as r,g as c,t as v,G as f,N as u,F as d,l as m,A as k,h as p,q as h}from"./app.9e9dbd61.js";const g={key:0,class:"home-hero"},y={key:0,class:"figure"},x=["src","alt"],_={key:1,id:"main-title",class:"title"},I={key:2,class:"description"};var T=e(t({setup(e){const{site:t,frontmatter:d}=a(),m=s((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),k=s((()=>d.value.heroText||t.value.title));return(e,t)=>i(m)?(l(),o("header",g,[i(d).heroImage?(l(),o("figure",y,[n("img",{class:"image",src:i(r)(i(d).heroImage),alt:i(d).heroAlt},null,8,x)])):c("v-if",!0),i(k)?(l(),o("h1",_,v(i(k)),1)):c("v-if",!0),i(d).tagline?(l(),o("p",I,v(i(d).tagline),1)):c("v-if",!0),i(d).actionLink&&i(d).actionText?(l(),f(u,{key:3,item:{link:i(d).actionLink,text:i(d).actionText},class:"action"},null,8,["item"])):c("v-if",!0),i(d).altActionLink&&i(d).altActionText?(l(),f(u,{key:4,item:{link:i(d).altActionLink,text:i(d).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}}),[["__scopeId","data-v-0cb9fda2"]]);const A={key:0,class:"home-features"},b={class:"wrapper"},L={class:"container"},$={class:"features"},C={key:0,class:"title"},j={key:1,class:"details"};var q=e(t({setup(e){const{frontmatter:t}=a(),r=s((()=>t.value.features&&t.value.features.length>0)),f=s((()=>t.value.features?t.value.features:[]));return(e,t)=>i(r)?(l(),o("div",A,[n("div",b,[n("div",L,[n("div",$,[(l(!0),o(d,null,m(i(f),((e,t)=>(l(),o("section",{key:t,class:"feature"},[e.title?(l(),o("h2",C,v(e.title),1)):c("v-if",!0),e.details?(l(),o("p",j,v(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}}),[["__scopeId","data-v-e39c13e0"]]);const w={key:0,class:"footer"},D={class:"container"},E={class:"text"};var F=e(t({setup(e){const{frontmatter:t}=a();return(e,a)=>i(t).footer?(l(),o("footer",w,[n("div",D,[n("p",E,v(i(t).footer),1)])])):c("v-if",!0)}}),[["__scopeId","data-v-30918238"]]);const G={class:"home","aria-labelledby":"main-title"},N={class:"home-content"};var z=e(t({setup:e=>(e,t)=>{const a=k("Content");return l(),o("main",G,[p(T),h(e.$slots,"hero",{},void 0,!0),p(q),n("div",N,[p(a)]),h(e.$slots,"features",{},void 0,!0),p(F),h(e.$slots,"footer",{},void 0,!0)])}}),[["__scopeId","data-v-32eddf2f"]]);export{z as default};
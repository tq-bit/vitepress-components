import{_ as n,o as a,c as s,a as t,t as p,q as o,h as e,r as c,y as u,z as l,n as i,g as k,v as r,e as d}from"./app.a7584f2e.js";const g={class:"q-accordion-wrapper"},m={class:"q-accordion-header"},q={class:"q-accordion-footer"};var h=n({props:{header:{type:String,required:!1}}},[["render",function(n,e,c,u,l,i){return a(),s("div",g,[t("header",m,p(c.header),1),o(n.$slots,"default"),t("footer",q,[o(n.$slots,"accordion-footer")])])}]]);const v={setup({expanded:n,targetRotation:a,baseRotation:s}){const t=`panel-${e()}`,p=`icon-${e()}`;let o=c(n);const i=()=>{const n=document.getElementById(t),e=document.getElementById(p);!0===o.value?(n.style.maxHeight=n.scrollHeight+"px",e.style.transform=`rotate(${a}deg)`):(n.style.maxHeight=null,e.style.transform=`rotate(${s}deg)`)};return u(o,(()=>i())),l((()=>i())),{isExpanded:o,panelId:t,iconId:p}},props:{title:{type:String,required:!0},icon:{type:String,required:!1,default:"+"},targetRotation:{type:Number,required:!1,default:45},baseRotation:{type:Number,required:!1,default:0},reversed:{type:Boolean,required:!1,default:!1},roundedTop:{type:Boolean,required:!1,default:!1},roundedBottom:{type:Boolean,required:!1,default:!1},expanded:{type:Boolean,required:!1,default:!1}}},f={class:"q-accordion-header-title"},y=["id"],b=["id","aria-expanded"];var _=n(v,[["render",function(n,e,c,u,l,k){return a(),s("div",{class:i({reverse:c.reversed,topside:!c.reversed})},[t("button",{type:"button",class:i([{expanded:u.isExpanded,collapsed:!u.isExpanded,"q-rounded-top":c.roundedTop,"q-rounded-bottom":c.roundedBottom&&!u.isExpanded},"q-accordion-header-wrapper"]),onClick:e[0]||(e[0]=n=>u.isExpanded=!u.isExpanded)},[t("h3",f,p(c.title),1),t("span",{class:"q-accordion-header-icon",id:u.iconId},p(c.icon),9,y)],2),t("section",{id:u.panelId,class:i([{"q-rounded-bottom":c.roundedBottom&&u.isExpanded},"q-accordion-body"]),"aria-expanded":u.isExpanded},[o(n.$slots,"default",{},void 0,!0)],10,b)],2)}],["__scopeId","data-v-5a23f5e8"]]);const I=d('',9),x=t("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est asperiores repellat. ",-1),A=d('',4),w=t("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est asperiores repellat. ",-1),T=d('',6),E=t("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui ...",-1),Q=t("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui ...",-1),S=t("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui ...",-1),R=d('',4),B=d('',4),P=t("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est asperiores repellat. ",-1),C=d('',7),V='{"title":"QAccordion component","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Single element usage","slug":"single-element-usage"},{"level":3,"title":"Rounded borders","slug":"rounded-borders"},{"level":3,"title":"Multiple element usage","slug":"multiple-element-usage"},{"level":3,"title":"Wrapping multiple elements","slug":"wrapping-multiple-elements"},{"level":3,"title":"Custom icon","slug":"custom-icon"},{"level":2,"title":"Full component\'s code","slug":"full-component-s-code"},{"level":3,"title":"QAccordion","slug":"qaccordion"},{"level":3,"title":"QAccordionItem","slug":"qaccordionitem"}],"relativePath":"showcase/UI/accordion.md","lastUpdated":1629913463421}',N={};const $=Object.assign(N,{setup:function(n){return(n,t)=>(a(),s("div",null,[I,k(_,{title:"Item one"},{default:r((()=>[x])),_:1}),A,k(_,{title:"Item one",roundedTop:!0,roundedBottom:!0},{default:r((()=>[w])),_:1}),T,k(_,{title:"Item one",roundedTop:!0},{default:r((()=>[E])),_:1}),k(_,{title:"Item two"},{default:r((()=>[Q])),_:1}),k(_,{title:"Item three",roundedBottom:!0},{default:r((()=>[S])),_:1}),R,k(h,{header:"Accordion wrapper title"},{default:r((()=>[k(_,{title:"Item one"}),k(_,{title:"Item two"}),k(_,{title:"Item three"})])),_:1}),B,k(_,{title:"Item one",icon:"❯",baseRotation:0,targetRotation:90},{default:r((()=>[P])),_:1}),C]))}});export{V as __pageData,$ as default};
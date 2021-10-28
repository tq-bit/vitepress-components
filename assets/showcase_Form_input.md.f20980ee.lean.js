import{r as n,o as a,c as s,a as t,h as p,t as o,k as e,e as c,d as u}from"./app.9e9dbd61.js";import{Q as l}from"./QInput.2a131c67.js";import"./QInput.vue_vue&type=style&index=0&scoped=true&lang.d2ebd653.js";const i=c('',10),r=["onSubmit"],k=c('',4),d=["onSubmit"],g=c('',5),m=["onSubmit"],q=t("h4",{id:"custom-sign-required"},[t("a",{class:"header-anchor",href:"#custom-sign-required","aria-hidden":"true"},"#"),u(" Custom sign ( required )")],-1),v=["onSubmit"],f=c('',3),h=["onSubmit"],b=c('',4),y=["onSubmit"],_=c('',8),S='{"title":"QInput component","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic use case","slug":"basic-use-case"},{"level":3,"title":"Placeholder prefix","slug":"placeholder-prefix"},{"level":3,"title":"Required fields","slug":"required-fields"},{"level":3,"title":"Suggestions (datalist)","slug":"suggestions-datalist"},{"level":3,"title":"Error handling","slug":"error-handling"},{"level":2,"title":"Full component\'s code","slug":"full-component-s-code"},{"level":3,"title":"QInput","slug":"qinput"},{"level":2,"title":"List of input types","slug":"list-of-input-types"}],"relativePath":"showcase/Form/input.md","lastUpdated":1631636960844}',x={};const T=Object.assign(x,{setup:function(c){const u=n(""),S=n(""),x=["John Doe","Erich Sutherland","Jane Doenym"],T=()=>S.value=""===S.value?"An error has occured":"",V=()=>alert(`Your input: ${u.value}`);return(n,c)=>(a(),s("div",null,[i,t("form",{onSubmit:e(V,["prevent"]),style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},[p(l,{label:"Name",modelValue:u.value,"onUpdate:modelValue":c[0]||(c[0]=n=>u.value=n)},null,8,["modelValue"]),t("p",null,"Output: "+o(u.value),1)],40,r),k,t("form",{onSubmit:e(V,["prevent"]),style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},[p(l,{labelPrefix:"Type in your ",label:"Name",modelValue:u.value,"onUpdate:modelValue":c[1]||(c[1]=n=>u.value=n)},null,8,["modelValue"]),t("p",null,"Output: "+o(u.value),1)],40,d),g,t("form",{onSubmit:e(V,["prevent"]),style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},[p(l,{labelPrefix:"Type in your ",required:"",label:"Name",modelValue:u.value,"onUpdate:modelValue":c[2]||(c[2]=n=>u.value=n)},null,8,["modelValue"]),t("p",null,"Output: "+o(u.value),1)],40,m),q,t("form",{onSubmit:e(V,["prevent"]),style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},[p(l,{labelPrefix:"Type in your ",required:"",requiredSign:"(required)",label:"Name",modelValue:u.value,"onUpdate:modelValue":c[3]||(c[3]=n=>u.value=n)},null,8,["modelValue"]),t("p",null,"Output: "+o(u.value),1)],40,v),f,t("form",{onSubmit:e(V,["prevent"]),style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},[p(l,{labelPrefix:"Type in your ",options:x,required:"",requiredSign:"(required)",label:"Name",modelValue:u.value,"onUpdate:modelValue":c[4]||(c[4]=n=>u.value=n)},null,8,["modelValue"]),t("p",null,"Output: "+o(u.value),1)],40,h),b,t("form",{onSubmit:e(T,["prevent"]),style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},[p(l,{error:S.value,labelPrefix:"Type in your ",label:"Name",modelValue:u.value,"onUpdate:modelValue":c[5]||(c[5]=n=>u.value=n)},null,8,["error","modelValue"]),t("p",null,"Error: "+o(S.value),1)],40,y),_]))}});export{S as __pageData,T as default};
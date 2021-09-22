import{p as n,h as s,i as a,r as t,o as p,c as o,a as e,t as c,n as u,F as l,l as i,g as k,e as r}from"./app.ced48f6f.js";const d={setup(){const n=a(),s=`dropdown-${n}`,p=t(!1);return{id:n,dropdownId:s,isExpanded:p,toggleDropdown:()=>{const n=document.getElementById(s);!0===p.value?n.style.maxHeight=n.scrollHeight+"px":n.style.maxHeight=0}}},props:{label:{type:String,required:!0,default:""},align:{type:String,default:"left",validator:n=>"left"===n||"right"===n},variant:{type:String,required:!1,default:"primary",validator:n=>"primary"===n||"secondary"===n||"info"===n||"success"===n||"warning"===n||"error"===n||"link"===n},size:{type:String,default:"medium",validator:n=>"small"===n||"medium"===n||"large"===n||"xlarge"===n},options:{type:Array,required:!0}}};n("data-v-7aeee8ea");const g={class:"q-dropdown-wrapper"},v=["id"],q=["id"],m=["onClick"];s(),d.render=function(n,s,a,t,k,r){return p(),o("div",g,[e("button",{onClick:s[0]||(s[0]=()=>{t.isExpanded=!t.isExpanded,t.toggleDropdown()}),class:u(["q-button-base",{"q-button-v-primary":"primary"===a.variant,"q-button-v-secondary":"secondary"===a.variant,"q-button-v-info":"info"===a.variant,"q-button-v-success":"success"===a.variant,"q-button-v-warning":"warning"===a.variant,"q-button-v-error":"error"===a.variant,"q-button-v-link":"link"===a.variant,"q-button-s-small":"small"===a.size,"q-button-s-medium":"medium"===a.size,"q-button-s-large":"large"===a.size,"q-button-s-xlarge":"xlarge"===a.size}]),id:t.id},[e("span",null,c(a.label),1)],10,v),e("ul",{id:t.dropdownId,class:u(["q-dropdown-base",{".q-dropdown-align-right":"right"===a.align}])},[(p(!0),o(l,null,i(a.options,(s=>(p(),o("li",{class:"q-dropdown-item",onClick:()=>{t.isExpanded=!t.isExpanded,t.toggleDropdown(),n.$emit("change",s.value?s.value:s.text?s.text:s)},key:s},c(s.text?s.text:s.value?s.value:s),9,m)))),128))],10,q)])},d.__scopeId="data-v-7aeee8ea";const y=r('',10),f={style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},w=r('',5),h={style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},b=r('',5),x='{"title":"QDropdown component","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":3,"title":"Bind objects","slug":"bind-objects"},{"level":2,"title":"Full component\'s code","slug":"full-component-s-code"},{"level":3,"title":"QDropdown","slug":"qdropdown"}],"relativePath":"showcase/Form/dropdown.md","lastUpdated":1632339234524}',z={};const _=Object.assign(z,{setup:function(n){const s=t(null),a=["One Visitor","Two Visitors","Three Visitors"],u=[{text:"One Visitor",value:1},{text:"Two Visitors",value:2},{text:"Three visitors",value:3}];return(n,t)=>(p(),o("div",null,[y,e("div",f,[k(d,{label:"Dropdown",onChange:t[0]||(t[0]=n=>s.value=n),options:a}),k(d,{label:"Dropdown info",variant:"info",onChange:t[1]||(t[1]=n=>s.value=n),options:a}),e("p",null,"Number of attendees: "+c(s.value),1)]),w,e("div",h,[k(d,{label:"Dropdown",onChange:t[2]||(t[2]=n=>s.value=n),options:u}),k(d,{label:"Dropdown info",variant:"info",onChange:t[3]||(t[3]=n=>s.value=n),options:u}),e("p",null,"Number of attendees: "+c(s.value),1)]),b]))}});export{x as __pageData,_ as default};

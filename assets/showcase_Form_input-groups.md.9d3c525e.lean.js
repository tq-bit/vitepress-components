import{p as n,f as s,o as a,c as t,t as e,h as p,j as o,n as l,k as c,a as u,i as r,l as i,b as d,d as k,w as m,e as g}from"./app.25e782a6.js";import{_ as f}from"./QInput.d033d536.js";import{_ as y}from"./QSelect.ff213f7d.js";import{_ as h}from"./QButton.7ee19232.js";import{_ as b,a as v}from"./QFlexColumn.2ea9e430.js";const x={props:{title:{type:String},border:{type:Boolean,default:!1}}};n("data-v-851bc5de");const q={key:0,class:"q-input-group-legend"};s(),x.render=function(n,s,c,u,r,i){return a(),t("fieldset",{class:l(["q-input-group",{"q-input-group-border":c.border}])},[c.title?(a(),t("legend",q,e(c.title),1)):p("v-if",!0),o(n.$slots,"default",{},void 0,!0)],2)},x.__scopeId="data-v-851bc5de";const _=g('',11),C=["onSubmit"],V={key:0},w=u("h3",null,"Please review your input:",-1),F=g('',3),Q='{"title":"QInput component","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Full component\'s code","slug":"full-component-s-code"},{"level":3,"title":"QInputGroup","slug":"qinputgroup"}],"relativePath":"showcase/Form/input-groups.md","lastUpdated":1631453820545}',N={};const T=Object.assign(N,{setup:function(n){const s=c({firstName:"",lastName:"",cityName:"",postcalCode:"",cityName:"",email:"",phone:"",reservanceDate:"",visitors:"",review:!1}),o=["One Visitor","Two Visitors","Three Visitors"],l=()=>s.review=!0,g=()=>{alert("Submitted form successfully"),q()},q=()=>{s.firstName="",s.lastName="",s.cityName="",s.postcalCode="",s.cityName="",s.email="",s.phone="",s.reservanceDate="",s.visitors=null,s.review=!1};return(n,c)=>(a(),t("div",null,[_,u("form",{onSubmit:m(g,["prevent"]),style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},[r(x,{border:!0,title:"Personal information"},{default:i((()=>[r(b,{fluid:""},{default:i((()=>[r(v,{cols:6,smCols:12},{default:i((()=>[r(f,{required:"",type:"text",labelPrefix:"Type in your ",label:"First Name",modelValue:d(s).firstName,"onUpdate:modelValue":c[0]||(c[0]=n=>d(s).firstName=n)},null,8,["modelValue"])])),_:1}),r(v,{cols:6,smCols:12},{default:i((()=>[r(f,{type:"text",labelPrefix:"Type in your ",label:"Last Name",modelValue:d(s).lastName,"onUpdate:modelValue":c[1]||(c[1]=n=>d(s).lastName=n)},null,8,["modelValue"])])),_:1}),r(v,{cols:6,smCols:12},{default:i((()=>[r(f,{type:"text",labelPrefix:"Type in your ",label:"City",modelValue:d(s).cityName,"onUpdate:modelValue":c[2]||(c[2]=n=>d(s).cityName=n)},null,8,["modelValue"])])),_:1}),r(v,{cols:6,smCols:12},{default:i((()=>[r(f,{type:"text",labelPrefix:"Type in your ",label:"Postal code",modelValue:d(s).postalCode,"onUpdate:modelValue":c[3]||(c[3]=n=>d(s).postalCode=n)},null,8,["modelValue"])])),_:1}),r(v,{cols:6,smCols:12},{default:i((()=>[r(f,{required:"",type:"email",labelPrefix:"Type in your ",label:"Email adress",modelValue:d(s).email,"onUpdate:modelValue":c[4]||(c[4]=n=>d(s).email=n)},null,8,["modelValue"])])),_:1}),r(v,{cols:6,smCols:12},{default:i((()=>[r(f,{type:"tel",labelPrefix:"Type in your ",label:"Phone number",modelValue:d(s).phone,"onUpdate:modelValue":c[5]||(c[5]=n=>d(s).phone=n)},null,8,["modelValue"])])),_:1}),r(v,{cols:6,smCols:12},{default:i((()=>[r(f,{required:"",type:"date",labelPrefix:"Select your ",label:"Date of reservation",modelValue:d(s).reservanceDate,"onUpdate:modelValue":c[6]||(c[6]=n=>d(s).reservanceDate=n)},null,8,["modelValue"])])),_:1}),r(v,{cols:6,smCols:12},{default:i((()=>[r(y,{required:"",labelPrefix:"Please select the ",label:"Number of attendees",options:o,modelValue:d(s).visitors,"onUpdate:modelValue":c[7]||(c[7]=n=>d(s).visitors=n)},null,8,["modelValue"])])),_:1}),r(v,{cols:12},{default:i((()=>[r(h,{label:"Check options",type:"Button",onClick:l})])),_:1})])),_:1})])),_:1}),d(s).review?(a(),t("section",V,[w,u("p",null,"Name: "+e(d(s).firstName)+" "+e(d(s).lastName),1),u("p",null,"Adress: "+e(d(s).postalCode)+" "+e(d(s).cityName),1),u("p",null,"Reserving for: "+e(d(s).reservanceDate)+" | "+e(d(s).visitors),1),k(" "+e(d(s))+" ",1),r(h,{label:"Submit form",type:"Submit"}),r(h,{variant:"link",label:"Reset form",type:"Reset",onClick:q})])):p("v-if",!0)],40,C),F]))}});export{Q as __pageData,T as default};
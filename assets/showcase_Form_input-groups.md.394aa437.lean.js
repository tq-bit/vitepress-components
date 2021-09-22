import{p as n,h as s,o as a,c as t,t as e,j as p,q as o,n as l,s as c,a as u,g as r,v as i,b as d,k,e as m}from"./app.ced48f6f.js";import{_ as g}from"./QInput.81b07995.js";import{_ as f}from"./QSelect.616396a1.js";import{_ as y}from"./QButton.c7389bbe.js";import{_ as h,a as b}from"./QFlexColumn.057d2cc7.js";const v={props:{title:{type:String},border:{type:Boolean,default:!1}}};n("data-v-851bc5de");const q={key:0,class:"q-input-group-legend"};s(),v.render=function(n,s,c,u,r,i){return a(),t("fieldset",{class:l(["q-input-group",{"q-input-group-border":c.border}])},[c.title?(a(),t("legend",q,e(c.title),1)):p("v-if",!0),o(n.$slots,"default",{},void 0,!0)],2)},v.__scopeId="data-v-851bc5de";const x=m('',11),_=["onSubmit"],C={key:0},V=u("h3",null,"Please review your input:",-1),w=m('',3),F='{"title":"QInput component","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Full component\'s code","slug":"full-component-s-code"},{"level":3,"title":"QInputGroup","slug":"qinputgroup"}],"relativePath":"showcase/Form/input-groups.md","lastUpdated":1632066631334}',Q={};const N=Object.assign(Q,{setup:function(n){const s=c({firstName:"",lastName:"",cityName:"",postcalCode:"",cityName:"",email:"",phone:"",reservanceDate:"",visitors:"",review:!1}),o=["One Visitor","Two Visitors","Three Visitors"],l=()=>s.review=!0,m=()=>{alert("Submitted form successfully"),q()},q=()=>{s.firstName="",s.lastName="",s.cityName="",s.postcalCode="",s.cityName="",s.email="",s.phone="",s.reservanceDate="",s.visitors=null,s.review=!1};return(n,c)=>(a(),t("div",null,[x,u("form",{onSubmit:k(m,["prevent"]),style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},[r(v,{border:!0,title:"Personal information"},{default:i((()=>[r(h,{fluid:""},{default:i((()=>[r(b,{cols:6,smCols:12},{default:i((()=>[r(g,{required:"",type:"text",labelPrefix:"Type in your ",label:"First Name",modelValue:d(s).firstName,"onUpdate:modelValue":c[0]||(c[0]=n=>d(s).firstName=n)},null,8,["modelValue"])])),_:1}),r(b,{cols:6,smCols:12},{default:i((()=>[r(g,{type:"text",labelPrefix:"Type in your ",label:"Last Name",modelValue:d(s).lastName,"onUpdate:modelValue":c[1]||(c[1]=n=>d(s).lastName=n)},null,8,["modelValue"])])),_:1}),r(b,{cols:6,smCols:12},{default:i((()=>[r(g,{type:"text",labelPrefix:"Type in your ",label:"City",modelValue:d(s).cityName,"onUpdate:modelValue":c[2]||(c[2]=n=>d(s).cityName=n)},null,8,["modelValue"])])),_:1}),r(b,{cols:6,smCols:12},{default:i((()=>[r(g,{type:"text",labelPrefix:"Type in your ",label:"Postal code",modelValue:d(s).postalCode,"onUpdate:modelValue":c[3]||(c[3]=n=>d(s).postalCode=n)},null,8,["modelValue"])])),_:1}),r(b,{cols:6,smCols:12},{default:i((()=>[r(g,{required:"",type:"email",labelPrefix:"Type in your ",label:"Email adress",modelValue:d(s).email,"onUpdate:modelValue":c[4]||(c[4]=n=>d(s).email=n)},null,8,["modelValue"])])),_:1}),r(b,{cols:6,smCols:12},{default:i((()=>[r(g,{type:"tel",labelPrefix:"Type in your ",label:"Phone number",modelValue:d(s).phone,"onUpdate:modelValue":c[5]||(c[5]=n=>d(s).phone=n)},null,8,["modelValue"])])),_:1}),r(b,{cols:6,smCols:12},{default:i((()=>[r(g,{required:"",type:"date",labelPrefix:"Select your ",label:"Date of reservation",modelValue:d(s).reservanceDate,"onUpdate:modelValue":c[6]||(c[6]=n=>d(s).reservanceDate=n)},null,8,["modelValue"])])),_:1}),r(b,{cols:6,smCols:12},{default:i((()=>[r(f,{required:"",labelPrefix:"Please select the ",label:"Number of attendees",options:o,modelValue:d(s).visitors,"onUpdate:modelValue":c[7]||(c[7]=n=>d(s).visitors=n)},null,8,["modelValue"])])),_:1}),r(b,{cols:12},{default:i((()=>[r(y,{label:"Check options",type:"Button",onClick:l})])),_:1})])),_:1})])),_:1}),d(s).review?(a(),t("section",C,[V,u("p",null,"Name: "+e(d(s).firstName)+" "+e(d(s).lastName),1),u("p",null,"Adress: "+e(d(s).postalCode)+" "+e(d(s).cityName),1),u("p",null,"Reserving for: "+e(d(s).reservanceDate)+" | "+e(d(s).visitors),1),r(y,{label:"Submit form",type:"Submit"}),r(y,{variant:"link",label:"Reset form",type:"Reset",onClick:q})])):p("v-if",!0)],40,_),w]))}});export{F as __pageData,N as default};
import{_ as e,h as r,o as a,c as l,d as i,t,j as d,a as u,m as s,F as o,l as n}from"./app.a7584f2e.js";import"./QInput.vue_vue&type=style&index=0&scoped=true&lang.843d40ba.js";const p={setup:()=>({id:r()}),props:{labelPrefix:{type:String,default:null},label:{type:String,default:""},options:{type:Array},modelValue:{type:[String,Number],default:""},error:{type:String,default:""},required:{type:Boolean,default:!1},requiredSign:{type:String,default:"*"}}},b=["for"],v={key:0,class:"q-input-required-sign"},f=["list","value","id","required","placeholder","aria-label","aria-required","aria-describedby","aria-invalid"],q=["id"],y=["value"],c=["id"];var g=e(p,[["render",function(e,r,p,g,m,S){return a(),l(o,null,[p.label?(a(),l("label",{key:0,for:g.id,class:"q-input-label"},[i(t(p.label)+" ",1),p.required?(a(),l("span",v,t(p.requiredSign),1)):d("v-if",!0)],8,b)):d("v-if",!0),u("input",s({list:p.options?`${g.id}-options`:null,class:["q-input-base",{"q-error":!!p.error}]},e.$attrs,{onInput:r[0]||(r[0]=r=>e.$emit("update:modelValue",r.target.value)),value:p.modelValue,id:g.id,required:p.required,placeholder:p.labelPrefix?p.labelPrefix+p.label.toLowerCase():p.label,"aria-label":p.label,"aria-required":p.required,"aria-describedby":p.error?`${g.id}-error`:null,"aria-invalid":!!p.error||null}),null,16,f),u("datalist",{id:`${g.id}-options`},[(a(!0),l(o,null,n(p.options,(e=>(a(),l("option",{value:e.value?e.value:e,key:e},null,8,y)))),128))],8,q),p.error?(a(),l("small",{key:1,class:"q-input-error-msg",id:`${g.id}-error`,"aria-live":"assertive"},t(p.error),9,c)):d("v-if",!0)],64)}],["__scopeId","data-v-ad6439e4"]]);export{g as Q};
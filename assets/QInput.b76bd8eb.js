import{p as e,h as r,i as a,o as l,c as i,d as t,t as d,j as s,a as u,m as o,F as n,v as p}from"./app.bc8bcc5c.js";const b={setup:()=>({id:a()}),props:{labelPrefix:{type:String,default:null},label:{type:String,default:""},options:{type:Array},modelValue:{type:[String,Number],default:""},error:{type:String,default:""},required:{type:Boolean,default:!1},requiredSign:{type:String,default:"*"}}};e("data-v-ad6439e4");const c=["for"],v={key:0,class:"q-input-required-sign"},f=["list","value","id","required","placeholder","aria-label","aria-required","aria-describedby","aria-invalid"],q=["id"],y=["value"],g=["id"];r(),b.render=function(e,r,a,b,m,S){return l(),i(n,null,[a.label?(l(),i("label",{key:0,for:b.id,class:"q-input-label"},[t(d(a.label)+" ",1),a.required?(l(),i("span",v,d(a.requiredSign),1)):s("v-if",!0)],8,c)):s("v-if",!0),u("input",o({list:a.options?`${b.id}-options`:null,class:["q-input-base",{"q-error":!!a.error}]},e.$attrs,{onInput:r[0]||(r[0]=r=>e.$emit("update:modelValue",r.target.value)),value:a.modelValue,id:b.id,required:a.required,placeholder:a.labelPrefix?a.labelPrefix+a.label.toLowerCase():a.label,"aria-label":a.label,"aria-required":a.required,"aria-describedby":a.error?`${b.id}-error`:null,"aria-invalid":!!a.error||null}),null,16,f),u("datalist",{id:`${b.id}-options`},[(l(!0),i(n,null,p(a.options,(e=>(l(),i("option",{value:e.value?e.value:e,key:e},null,8,y)))),128))],8,q),a.error?(l(),i("small",{key:1,class:"q-input-error-msg",id:`${b.id}-error`,"aria-live":"assertive"},d(a.error),9,g)):s("v-if",!0)],64)},b.__scopeId="data-v-ad6439e4";export{b as _};

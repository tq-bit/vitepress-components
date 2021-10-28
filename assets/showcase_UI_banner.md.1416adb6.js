import{_ as n,A as a,o as s,c as t,h as p,v as e,q as o,n as l,x as c,e as u,a as r}from"./app.9e9dbd61.js";import{Q as i,a as k}from"./QFlexColumn.28dc1275.js";var g=n({components:{QFlexContainer:i,QFlexColumn:k},props:{smReverseCols:{type:Boolean,default:!1},prallax:{type:Boolean,default:!1},backgroundImage:{type:String}}},[["render",function(n,u,r,i,k,g){const d=a("q-flex-column"),m=a("q-flex-container");return s(),t("section",{class:l(["q-banner-wrapper",{"q-banner-prallax":r.prallax,"q-banner-reverse-sm":r.smReverseCols}]),style:c(`background-image: url('${r.backgroundImage}');`)},[p(m,{fluid:!0},{default:e((()=>[p(d,{cols:6,smCols:12},{default:e((()=>[o(n.$slots,"column-left",{},void 0,!0)])),_:3}),p(d,{cols:6,smCols:12},{default:e((()=>[o(n.$slots,"column-right",{},void 0,!0)])),_:3})])),_:3})],6)}],["__scopeId","data-v-62dd4f97"]]);const d=u('<h1 id="qbanner-component"><a class="header-anchor" href="#qbanner-component" aria-hidden="true">#</a> QBanner Component</h1><h2 id="requirements"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><table><thead><tr><th>Type</th><th>Path / Version</th><th>Purpose</th><th>Optional</th></tr></thead><tbody><tr><td><strong>Vue version</strong></td><td>Vue 3</td><td>Composition API</td><td>No</td></tr><tr><td><strong>Styles</strong></td><td>../../assets/main.css</td><td>CSS Variables</td><td>Yes</td></tr><tr><td><strong>Functions</strong></td><td>../../use/uuid</td><td>Assign ids to items</td><td>No</td></tr><tr><td><strong>Components</strong></td><td>../../components/Layout/Flex/QFlexContainer/</td><td>Layouting</td><td>No</td></tr><tr><td><strong>Components</strong></td><td>../../components/Layout/Flex/QFlexColumn/</td><td>Layouting</td><td>No</td></tr></tbody></table><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Import the following component/s:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> QBanner <span class="token keyword">from</span> <span class="token string">&#39;../../components/UI/Sections/QBanner.vue&#39;</span>\n</code></pre></div><h3 id="basic-usage"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h3><p>A banner is meant to be used on top of the page to highlight important content. It can be used for Call to Action or just informative purposes.</p><div class="warning custom-block"><p class="custom-block-title">Responsiveness</p><p>This component is responsive by default (media query sm | &lt; 800px). This behavior cannot be overwritten from outside of the component.</p></div><p>The banner is composed of:</p><ul><li>A background image assigned with <code>background-image</code></li><li>Two columns which can be populated with <code>slots</code></li></ul>',11),m=r("p",{style:{color:"red",display:"flex","align-items":"center","justify-content":"center","text-shadow":"0 0 2px #000","font-weight":"600","text-align":"center",border:"1px solid red",height:"200px"}},"Template Slot: 'column-left'",-1),h=r("p",{style:{color:"red",display:"flex","align-items":"center","justify-content":"center","text-shadow":"0 0 2px #000","font-weight":"600","text-align":"center",border:"1px solid red",height:"200px"}},"Template Slot: 'column-right'",-1),f=u('<p><strong>Example</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-banner</span> <span class="token attr-name">background-image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../public/forest.jpg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>column-left</span> <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Template Slot: &#39;column-left&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>column-right</span> <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Template Slot: &#39;column-right&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-banner</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="image-prallax"><a class="header-anchor" href="#image-prallax" aria-hidden="true">#</a> Image prallax</h3><p>Create a prallax scrolling effect by adding <code>prallax</code> to the component. Note that the image is not rescaled automatically.</p>',4),b=r("p",{style:{color:"red",display:"flex","align-items":"center","justify-content":"center","text-shadow":"0 0 2px #000","font-weight":"600","text-align":"center",border:"1px solid red",height:"200px"}},"Template Slot: 'column-left'",-1),q=r("p",{style:{color:"red",display:"flex","align-items":"center","justify-content":"center","text-shadow":"0 0 2px #000","font-weight":"600","text-align":"center",border:"1px solid red",height:"200px"}},"Template Slot: 'column-right'",-1),x=u('<p><strong>Example</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-banner</span> <span class="token attr-name">:prallax</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">background-image</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../../public/forest.jpg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>column-left</span> <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Template Slot: &#39;column-left&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>column-right</span> <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Template Slot: &#39;column-right&#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-banner</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="reverse-on-mobile-tbd"><a class="header-anchor" href="#reverse-on-mobile-tbd" aria-hidden="true">#</a> Reverse on mobile (TBD)</h3><p>Must be implemented inside of the flex container</p><h2 id="full-component-s-code"><a class="header-anchor" href="#full-component-s-code" aria-hidden="true">#</a> Full component&#39;s code</h2><h3 id="qbanner"><a class="header-anchor" href="#qbanner" aria-hidden="true">#</a> QBanner</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span>\n    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-banner-wrapper<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n      <span class="token punctuation">&#39;</span>q-banner-prallax<span class="token punctuation">&#39;</span>: prallax,\n      <span class="token punctuation">&#39;</span>q-banner-reverse-sm<span class="token punctuation">&#39;</span>: smReverseCols,\n    }<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>`background-image: url(<span class="token punctuation">&#39;</span>${backgroundImage}<span class="token punctuation">&#39;</span>);`<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-flex-container</span> <span class="token attr-name">:fluid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-flex-column</span> <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:smCols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>column-left<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-flex-column</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-flex-column</span> <span class="token attr-name">:cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>6<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:smCols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>column-right<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-flex-column</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-flex-container</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> QFlexContainer <span class="token keyword">from</span> <span class="token string">&quot;../../Layout/Flex/QFlexContainer.vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> QFlexColumn <span class="token keyword">from</span> <span class="token string">&quot;../../Layout/Flex/QFlexColumn.vue&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    QFlexContainer<span class="token punctuation">,</span>\n    QFlexColumn<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  props<span class="token operator">:</span> <span class="token punctuation">{</span>\n    smReverseCols<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    prallax<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    backgroundImage<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> String<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.q-banner-wrapper</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--background-color-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">background-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>\n  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>\n  <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.q-banner-prallax</span> <span class="token punctuation">{</span>\n  <span class="token property">background-attachment</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></code></pre></div>',7),v='{"title":"QBanner Component","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":3,"title":"Image prallax","slug":"image-prallax"},{"level":3,"title":"Reverse on mobile (TBD)","slug":"reverse-on-mobile-tbd"},{"level":2,"title":"Full component\'s code","slug":"full-component-s-code"},{"level":3,"title":"QBanner","slug":"qbanner"}],"relativePath":"showcase/UI/banner.md","lastUpdated":1631034378873}',y={};const _=Object.assign(y,{setup:function(n){return(n,a)=>(s(),t("div",null,[d,p(g,{"background-image":"../../public/forest.jpg"},{"column-left":e((()=>[m])),"column-right":e((()=>[h])),_:1}),f,p(g,{prallax:!0,"background-image":"../../public/forest.jpg"},{"column-left":e((()=>[b])),"column-right":e((()=>[q])),_:1}),x]))}});export{v as __pageData,_ as default};
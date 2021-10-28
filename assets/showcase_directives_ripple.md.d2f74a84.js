import{o as n,c as a,a as s,w as t,b as p,B as e,h as o,e as c}from"./app.9e9dbd61.js";import{Q as l}from"./QButton.4347a89e.js";const u=c('<h1 id="vripple-directive"><a class="header-anchor" href="#vripple-directive" aria-hidden="true">#</a> vRipple directive</h1><p>Use a smooth wave animation whereever the user of your applications clicks.</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Register the following directive/s:</p><div class="language-js"><pre><code><span class="token keyword">import</span> vRipple <span class="token keyword">from</span> <span class="token string">&#39;../../directives/vRipple.js&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// ...</span>\n\napp<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;ripple&#39;</span><span class="token punctuation">,</span> vRipple<span class="token punctuation">)</span>\n</code></pre></div><h3 id="basic-usage"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h3><p>While waves can be added to any element, the most common use case is still with buttons:</p>',7),i={style:{padding:"0.5rem",border:"1px solid red","border-radius":"4px"}},k=c('<p><strong>Example</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-ripple</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Click me<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>medium<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-ripple</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Click me<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-ripple</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Click me<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-ripple</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Click me<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> QButton <span class="token keyword">from</span> <span class="token string">&#39;../../Form/QButton.vue&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="full-directive-s-code"><a class="header-anchor" href="#full-directive-s-code" aria-hidden="true">#</a> Full directive&#39;s code</h2><h3 id="vripple-js"><a class="header-anchor" href="#vripple-js" aria-hidden="true">#</a> vRipple.js</h3><div class="language-js"><pre><code><span class="token keyword">const</span> vRipple <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">&#39;relative&#39;</span><span class="token punctuation">;</span>\n    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">&#39;hidden&#39;</span><span class="token punctuation">;</span>\n    el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ev</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> rippleTarget <span class="token operator">=</span> el<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> rippleEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> rippleMax <span class="token operator">=</span> <span class="token operator">+</span>binding<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token number">50</span><span class="token punctuation">;</span>\n      <span class="token keyword">const</span> offsetY <span class="token operator">=</span> ev<span class="token punctuation">.</span>clientY <span class="token operator">-</span> rippleTarget<span class="token punctuation">.</span>y<span class="token punctuation">;</span>\n      <span class="token keyword">const</span> offsetX <span class="token operator">=</span> ev<span class="token punctuation">.</span>clientX <span class="token operator">-</span> rippleTarget<span class="token punctuation">.</span>x<span class="token punctuation">;</span>\n      <span class="token keyword">let</span> handler <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n      <span class="token keyword">let</span> diameter <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n      <span class="token keyword">let</span> opacity <span class="token operator">=</span> <span class="token number">0.65</span><span class="token punctuation">;</span>\n\n      handler <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span>animate<span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      ev<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>rippleEl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      rippleEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">&#39;absolute&#39;</span><span class="token punctuation">;</span>\n      rippleEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">;</span>\n      rippleEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">;</span>\n      rippleEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>borderRadius <span class="token operator">=</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">;</span>\n      rippleEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;#f2f2f2&#39;</span><span class="token punctuation">;</span>\n      rippleEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>offsetX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n      rippleEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>offsetY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n      <span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>diameter <span class="token operator">&lt;</span> rippleMax<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          diameter<span class="token operator">++</span><span class="token punctuation">;</span>\n          opacity <span class="token operator">-=</span> <span class="token number">0.65</span> <span class="token operator">/</span> rippleMax<span class="token punctuation">;</span>\n          rippleEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">scale(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>diameter<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n          rippleEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>opacity<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n          rippleEl<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token function">clearInterval</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> vRipple<span class="token punctuation">;</span>\n</code></pre></div>',5),r='{"title":"vRipple directive","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Full directive\'s code","slug":"full-directive-s-code"},{"level":3,"title":"vRipple.js","slug":"vripple-js"}],"relativePath":"showcase/directives/ripple.md","lastUpdated":1632167564545}',d={};const g=Object.assign(d,{setup:function(c){return(c,r)=>(n(),a("div",null,[u,s("div",i,[t(o(l,{size:"large",variant:"info",label:"Click me"},null,512),[[p(e)]]),t(o(l,{size:"medium",variant:"error",label:"Click me"},null,512),[[p(e)]]),t(o(l,{size:"small",variant:"secondary",label:"Click me"},null,512),[[p(e)]]),t(o(l,{size:"small",variant:"link",label:"Click me"},null,512),[[p(e)]])]),k]))}});export{r as __pageData,g as default};
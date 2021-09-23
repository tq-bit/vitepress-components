import{_ as a,f as n,w as s,o as t,c as p,g as e,e as o}from"./app.a7584f2e.js";const c=["data-url","alt"];var l=a({props:{src:{type:String,required:!0},alt:{type:String}}},[["render",function(a,e,o,l,u,i){const r=n("lazy");return s((t(),p("img",{class:"q-image","data-url":o.src,alt:o.alt},null,8,c)),[[r]])}],["__scopeId","data-v-1254f654"]]);const u=o('<h1 id="qimage-component"><a class="header-anchor" href="#qimage-component" aria-hidden="true">#</a> QImage component</h1><p>Dead simple img component with lazy loading</p><h2 id="requirements"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><table><thead><tr><th>Type</th><th>Path / Version</th><th>Purpose</th><th>Optional</th></tr></thead><tbody><tr><td><strong>Styles</strong></td><td>../../assets/main.css</td><td>CSS Variables</td><td>No</td></tr><tr><td><strong>Directives</strong></td><td><a href="./../directives/lazy.html">../../directives/vLazy</a></td><td>Lazy load this image</td><td>No</td></tr></tbody></table><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>QImage can be used instead of any common image. It lazy loads the image by default using the browser&#39;s <code>IntersectionObserver</code>. It will be loaded once 25% of the image placeholder&#39;s content are visible within the screen area.</p><blockquote><p>This behavior can be overwritten inside the directive</p></blockquote><h3 id="basic-usage"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h3><p>Place an image source into the <code>src</code> binding.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Make sure to have the <code>vLazy</code> directive imported and globally enabled</p></div>',10),i=o('<p><strong>Example</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1171&amp;q=80<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="full-component-s-code"><a class="header-anchor" href="#full-component-s-code" aria-hidden="true">#</a> Full component&#39;s code</h2><h3 id="qimage"><a class="header-anchor" href="#qimage" aria-hidden="true">#</a> QImage</h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-lazy</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>src<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alt<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  props<span class="token operator">:</span> <span class="token punctuation">{</span>\n    src<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> String<span class="token punctuation">,</span>\n      required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    alt<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> String<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.q-image</span> <span class="token punctuation">{</span>\n  <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--el-size-lg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">min-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n  <span class="token property">animation</span><span class="token punctuation">:</span> blink <span class="token function">var</span><span class="token punctuation">(</span>--duration-slow<span class="token punctuation">)</span> infinite <span class="token function">cubic-bezier</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@keyframes</span> blink</span> <span class="token punctuation">{</span>\n  <span class="token selector">0%</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--background-color-tartiary<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">50%</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--background-color-secondary<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">100%</span> <span class="token punctuation">{</span>\n    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--background-color-tartiary<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></code></pre></div>',5),r='{"title":"QImage component","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Full component\'s code","slug":"full-component-s-code"},{"level":3,"title":"QImage","slug":"qimage"}],"relativePath":"showcase/Media/image.md","lastUpdated":1632421905756}',k={};const d=Object.assign(k,{setup:function(a){return ref(""),(a,o)=>{const c=n("lazy");return t(),p("div",null,[u,e(l,{src:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"}),e(l,{src:"https://images.unsplash.com/photo-1611923186986-9351177d3816?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80"}),s(e(l,{src:"https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"},null,512),[[c]]),s(e(l,{src:"https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"},null,512),[[c]]),i])}}});export{r as __pageData,d as default};

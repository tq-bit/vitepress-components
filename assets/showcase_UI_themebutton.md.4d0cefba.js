import{o as n,c as s,g as a,_ as t,e as p}from"./app.bc8bcc5c.js";const o=p('<h1 id="qthemebutton-components"><a class="header-anchor" href="#qthemebutton-components" aria-hidden="true">#</a> QThemeButton components</h1><p>Styled as a switch by default, this component is used to toggle between light- and darkmode. It recognizes the user&#39;s preferred color scheme using <code>&quot;(prefers-color-scheme: dark)&quot;</code> and saves this configuration in the browser&#39;s <code>localstorage</code>.</p><p>The size of this component is based on the CSS variable <code>--el-size-xs</code>, which describes its width. <code>calc</code> is used to determine all other dimensions, such as height and the size of the toggle ball.</p><h2 id="requirements"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><table><thead><tr><th>Type</th><th>Path / Version</th><th>Purpose</th><th>Optional</th></tr></thead><tbody><tr><td><strong>Vue version</strong></td><td>Vue 3</td><td>Composition API</td><td>No</td></tr><tr><td><strong>Styles</strong></td><td>../../assets/main.css</td><td>CSS Variables</td><td>Yes</td></tr><tr><td><strong>Functions</strong></td><td>../../use/uuid</td><td>Assign ids to items</td><td>No</td></tr></tbody></table><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Import the following component/s:</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> QThemeButton <span class="token keyword">from</span> <span class="token string">&#39;../../components/UI/Theme/QThemeButton.vue&#39;</span>\n</code></pre></div><h3 id="basic-usage"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h3><p>Just import and include the component into a single file.</p>',10),e=p('<p><strong>Example</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-theme-button</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h3 id="prefer-localstorage-settings"><a class="header-anchor" href="#prefer-localstorage-settings" aria-hidden="true">#</a> Prefer localstorage settings</h3><p>By default, the user&#39;s browser settings are preferred over those in localstorage. You can use <code>:initWithPreference=&quot;false&quot;</code> to overwrite this behavior.</p>',4),c=p('<p><strong>Example</strong></p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-theme-button</span> <span class="token attr-name">:initWithPreference</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h2 id="full-component-s-code"><a class="header-anchor" href="#full-component-s-code" aria-hidden="true">#</a> Full component&#39;s code</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n      <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleTheme<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themeButtonId<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-switch-checkbox<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-switch-label<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themeButtonId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>🌙<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>☀️<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-toggle<span class="token punctuation">&quot;</span></span>\n        <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ <span class="token punctuation">&#39;</span>q-toggle-checked<span class="token punctuation">&#39;</span>: userTheme === <span class="token punctuation">&#39;</span>dark-theme<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span>\n      <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> uuid <span class="token keyword">from</span> <span class="token string">&quot;../../../use/uuid.js&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> initWithPreference <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> themeButtonId <span class="token operator">=</span> <span class="token function">uuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> userTheme <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">toggleTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> activeTheme <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;user-theme&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>activeTheme <span class="token operator">===</span> <span class="token string">&quot;light-theme&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token string">&quot;dark-theme&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token string">&quot;light-theme&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> <span class="token function-variable function">setTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">theme</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&quot;user-theme&quot;</span><span class="token punctuation">,</span> theme<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      userTheme<span class="token punctuation">.</span>value <span class="token operator">=</span> theme<span class="token punctuation">;</span>\n      document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>className <span class="token operator">=</span> theme<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">const</span> <span class="token function-variable function">getMediaPreference</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> hasDarkPreference <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span>\n        <span class="token string">&quot;(prefers-color-scheme: dark)&quot;</span>\n      <span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">;</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>hasDarkPreference<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token string">&quot;dark-theme&quot;</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>initWithPreference<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token function">getMediaPreference</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">setTheme</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&quot;user-theme&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> themeButtonId<span class="token punctuation">,</span> userTheme<span class="token punctuation">,</span> toggleTheme <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  props<span class="token operator">:</span> <span class="token punctuation">{</span>\n    initWithPreference<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>\n      required<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n<span class="token selector">.q-switch-checkbox</span> <span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.q-switch-label</span> <span class="token punctuation">{</span>\n  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--text-color-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span> * 0.025<span class="token punctuation">)</span> solid <span class="token function">var</span><span class="token punctuation">(</span>--black-color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span> * 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span> * 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span> * 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> background 0.5s ease<span class="token punctuation">;</span>\n  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.q-switch-label .q-toggle</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--accent-color-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">top</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span> * 0.05<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span> * 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span> * 0.35<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span> * 0.35<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> transform 0.3s ease<span class="token punctuation">,</span> background-color 0.5s ease<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.q-toggle-checked</span> <span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--el-size-xs<span class="token punctuation">)</span> * 0.4<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></code></pre></div>',4),u='{"title":"QThemeButton components","description":"","frontmatter":{},"headers":[{"level":2,"title":"Requirements","slug":"requirements"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":3,"title":"Prefer localstorage settings","slug":"prefer-localstorage-settings"},{"level":2,"title":"Full component\'s code","slug":"full-component-s-code"}],"relativePath":"showcase/UI/themebutton.md","lastUpdated":1629746352700}',l={};const i=Object.assign(l,{setup:function(p){return(p,u)=>(n(),s("div",null,[o,a(t,{initWithPreference:!1}),e,a(t,{initWithPreference:!1}),c]))}});export{u as __pageData,i as default};

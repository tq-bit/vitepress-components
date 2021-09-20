import{u as n,o as a,c as s,a as t,t as p,b as o,d as e,e as c}from"./app.bc8bcc5c.js";const r=t("h1",{id:"radunia-components"},[t("a",{class:"header-anchor",href:"#radunia-components","aria-hidden":"true"},"#"),e(" Radunia Components")],-1),l=c('<h2 id="component-collection"><a class="header-anchor" href="#component-collection" aria-hidden="true">#</a> Component collection</h2><p>Components are grouped by purpose. Each resides in its own directory and has an equivalent inside the Components - directory of the main Radunia project.</p><h3 id="layout-library"><a class="header-anchor" href="#layout-library" aria-hidden="true">#</a> Layout Library</h3><blockquote><p>Components that provide structure to a website, using grids or flexboxes.</p><p><a href="./showcase/Layout/">Link to Layout Components</a>;</p></blockquote><h3 id="ui-library"><a class="header-anchor" href="#ui-library" aria-hidden="true">#</a> UI Library</h3><blockquote><p>Anything that requires user interaction without meaningful feedback.</p><p><a href="./showcase/UI/">Link to UI Components</a></p></blockquote><h3 id="form-library"><a class="header-anchor" href="#form-library" aria-hidden="true">#</a> Form Library</h3><blockquote><p>Anything that is part of a web formular. Form components range from smaller text-inputs over selections up till a bigger and more complex upload section items.</p><p><a href="./showcase/Form/">Link to Form Components</a></p></blockquote><h2 id="custom-directives"><a class="header-anchor" href="#custom-directives" aria-hidden="true">#</a> Custom directives</h2><blockquote><p>Within the showcase, there are some ungrouped, simple custom directives.</p><p><a href="./showcase/directives/">Check out the custom directives</a></p></blockquote><h2 id="dependencies"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h2><p>Some components depend upon other components or imported functions. Each of them are outlined in the respective component document.</p><ul><li>The styles for this documentation are located under <code>/docs/assets/main.css</code></li><li>Composition functions for this documentation are located under <code>/docs/use/*.js</code></li></ul><h2 id="global-styles"><a class="header-anchor" href="#global-styles" aria-hidden="true">#</a> Global styles</h2><p>A majority of components in this project depend on global CSS variables. They have to be declared in a separate file or in the <code>App.vue</code> component or a dedicated file.</p><h3 id="template-for-css-variables"><a class="header-anchor" href="#template-for-css-variables" aria-hidden="true">#</a> Template for css variables</h3><p>Add the following code to your <code>App.vue</code> file:</p><div class="language-css"><pre><code><span class="token selector">:root.dark-theme</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* Background colors */</span>\n  <span class="token property">--background-color-primary</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">;</span>\n  <span class="token property">--background-color-tartiary</span><span class="token punctuation">:</span> #2d2d30<span class="token punctuation">;</span>\n  <span class="token property">--background-color-secondary</span><span class="token punctuation">:</span> #252526<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Text colors */</span>\n  <span class="token property">--text-color-primary</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>\n  <span class="token property">--text-color-secondary</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Accent colors */</span>\n  <span class="token property">--color-info</span><span class="token punctuation">:</span> #34568b<span class="token punctuation">;</span>\n  <span class="token property">--color-success</span><span class="token punctuation">:</span> #00a300<span class="token punctuation">;</span>\n  <span class="token property">--color-warning</span><span class="token punctuation">:</span> #ffa500<span class="token punctuation">;</span>\n  <span class="token property">--color-error</span><span class="token punctuation">:</span> #cd212a<span class="token punctuation">;</span>\n  <span class="token property">--grey-color</span><span class="token punctuation">:</span> #3f3f3f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* Background colors */</span>\n  <span class="token property">--background-color-primary</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>\n  <span class="token property">--background-color-secondary</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>\n  <span class="token property">--background-color-tartiary</span><span class="token punctuation">:</span> #fefefe<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Accent colors */</span>\n  <span class="token property">--accent-color-primary</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>104<span class="token punctuation">,</span> 182<span class="token punctuation">,</span> 118<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--accent-color-secondary</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>77<span class="token punctuation">,</span> 158<span class="token punctuation">,</span> 91<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--accent-color-blur-primary</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>104<span class="token punctuation">,</span> 182<span class="token punctuation">,</span> 118<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--accent-color-blur-secondary</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>77<span class="token punctuation">,</span> 158<span class="token punctuation">,</span> 91<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* Text colors */</span>\n  <span class="token property">--text-color-primary</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>\n  <span class="token property">--text-color-secondary</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>\n\n  <span class="token property">--black-color</span><span class="token punctuation">:</span> #29201a<span class="token punctuation">;</span>\n  <span class="token property">--grey-color</span><span class="token punctuation">:</span> #cacaca<span class="token punctuation">;</span>\n  <span class="token property">--white-color</span><span class="token punctuation">:</span> #f2f2f2<span class="token punctuation">;</span>\n  <span class="token property">--color-info</span><span class="token punctuation">:</span> #34568b<span class="token punctuation">;</span>\n  <span class="token property">--color-success</span><span class="token punctuation">:</span> #00a300<span class="token punctuation">;</span>\n  <span class="token property">--color-warning</span><span class="token punctuation">:</span> #ffa500<span class="token punctuation">;</span>\n  <span class="token property">--color-error</span><span class="token punctuation">:</span> #cd212a<span class="token punctuation">;</span>\n  <span class="token property">--duration-quickest</span><span class="token punctuation">:</span> 0.25s<span class="token punctuation">;</span>\n  <span class="token property">--duration-quick</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span>\n  <span class="token property">--duration-semi</span><span class="token punctuation">:</span> 0.75s<span class="token punctuation">;</span>\n  <span class="token property">--duration-slow</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>\n  <span class="token property">--el-size-xxs</span><span class="token punctuation">:</span> 2.5rem<span class="token punctuation">;</span>\n  <span class="token property">--el-size-xs</span><span class="token punctuation">:</span> 4rem<span class="token punctuation">;</span>\n  <span class="token property">--el-size-sm</span><span class="token punctuation">:</span> 7.5rem<span class="token punctuation">;</span>\n  <span class="token property">--el-size-md</span><span class="token punctuation">:</span> 10rem<span class="token punctuation">;</span>\n  <span class="token property">--el-size-l</span><span class="token punctuation">:</span> 15rem<span class="token punctuation">;</span>\n  <span class="token property">--el-size-xl</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span>\n  <span class="token property">--gap-tiny</span><span class="token punctuation">:</span> 0.1rem<span class="token punctuation">;</span>\n  <span class="token property">--gap-xxs</span><span class="token punctuation">:</span> 0.125rem<span class="token punctuation">;</span>\n  <span class="token property">--gap-xs</span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>\n  <span class="token property">--gap-sm</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>\n  <span class="token property">--gap-md</span><span class="token punctuation">:</span> 0.75rem<span class="token punctuation">;</span>\n  <span class="token property">--gap-lg</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>\n  <span class="token property">--gap-xl</span><span class="token punctuation">:</span> 1.25rem<span class="token punctuation">;</span>\n  <span class="token property">--gap-xxl</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>\n  <span class="token property">--gap-max</span><span class="token punctuation">:</span> 1.75rem<span class="token punctuation">;</span>\n  <span class="token property">--text-size-sm</span><span class="token punctuation">:</span> 0.9rem<span class="token punctuation">;</span>\n  <span class="token property">--text-size-md</span><span class="token punctuation">:</span> 1.05rem<span class="token punctuation">;</span>\n  <span class="token property">--text-size-lg</span><span class="token punctuation">:</span> 1.15rem<span class="token punctuation">;</span>\n  <span class="token property">--text-size-xl</span><span class="token punctuation">:</span> 1.35rem<span class="token punctuation">;</span>\n  <span class="token property">--text-size-xxl</span><span class="token punctuation">:</span> 1.65rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="darkmode"><a class="header-anchor" href="#darkmode" aria-hidden="true">#</a> Darkmode</h3><p>Radunia has a class-based darkmode which can be toggled by <code>QThemeButton</code>. <code>.dark-mode</code> is dynamically applied to the root - pseudoelement, based on whether or not the user has dark mode enabled. <a href="./showcase/UI/themebutton.html">Read more</a></p>',20),u='{"title":"Radunia Components","description":"","frontmatter":{},"headers":[{"level":2,"title":"Component collection","slug":"component-collection"},{"level":3,"title":"Layout Library","slug":"layout-library"},{"level":3,"title":"UI Library","slug":"ui-library"},{"level":3,"title":"Form Library","slug":"form-library"},{"level":2,"title":"Custom directives","slug":"custom-directives"},{"level":2,"title":"Dependencies","slug":"dependencies"},{"level":2,"title":"Global styles","slug":"global-styles"},{"level":3,"title":"Template for css variables","slug":"template-for-css-variables"},{"level":3,"title":"Darkmode","slug":"darkmode"}],"relativePath":"index.md","lastUpdated":1631466254710}',i={};const k=Object.assign(i,{setup:function(e){const{site:c}=n();return(n,e)=>(a(),s("div",null,[r,t("p",null,p(o(c).description),1),l]))}});export{u as __pageData,k as default};

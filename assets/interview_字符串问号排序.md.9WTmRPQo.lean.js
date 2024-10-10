import{_ as s,c as a,b as n,o as l}from"./chunks/framework.CUf7xJpa.js";const p=JSON.parse('{"title":"字符串问号排序","description":"","frontmatter":{},"headers":[{"level":3,"title":"题目","slug":"题目","link":"#题目","children":[]},{"level":2,"title":"样例","slug":"样例","link":"#样例","children":[{"level":3,"title":"输入：","slug":"输入","link":"#输入","children":[]},{"level":3,"title":"输出：","slug":"输出","link":"#输出","children":[]},{"level":3,"title":"输入：","slug":"输入-1","link":"#输入-1","children":[]},{"level":3,"title":"输出：","slug":"输出-1","link":"#输出-1","children":[]},{"level":3,"title":"输入：","slug":"输入-2","link":"#输入-2","children":[]},{"level":3,"title":"输出：","slug":"输出-2","link":"#输出-2","children":[]}]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]}],"relativePath":"interview/字符串问号排序.md","filePath":"interview/字符串问号排序.md"}');const o=s({name:"interview/字符串问号排序.md"},[["render",function(s,p,o,e,t,c){return l(),a("div",null,p[0]||(p[0]=[n('<h1 id="字符串问号排序" tabindex="-1">字符串问号排序 <a class="header-anchor" href="#字符串问号排序" aria-label="Permalink to &quot;字符串问号排序&quot;">​</a></h1><h3 id="题目" tabindex="-1">题目 <a class="header-anchor" href="#题目" aria-label="Permalink to &quot;题目&quot;">​</a></h3><p>给定一个字符串，其中仅包含，大小写字母，数字和问号。要求对该字符串内部字符排序，满足以下要求：</p><ol><li>问号的占用的位置不变</li><li>数字占用的位置不变，数字之间由大到小排序</li><li>字母占用的位置不变，字母之间按字典序排序</li></ol><p>具体请配合样例理解</p><h2 id="样例" tabindex="-1">样例 <a class="header-anchor" href="#样例" aria-label="Permalink to &quot;样例&quot;">​</a></h2><h3 id="输入" tabindex="-1">输入： <a class="header-anchor" href="#输入" aria-label="Permalink to &quot;输入：&quot;">​</a></h3><p>12A?zc</p><h3 id="输出" tabindex="-1">输出： <a class="header-anchor" href="#输出" aria-label="Permalink to &quot;输出：&quot;">​</a></h3><p>21A?cz</p><h3 id="输入-1" tabindex="-1">输入： <a class="header-anchor" href="#输入-1" aria-label="Permalink to &quot;输入：&quot;">​</a></h3><p>1Ad?z?t24</p><h3 id="输出-1" tabindex="-1">输出： <a class="header-anchor" href="#输出-1" aria-label="Permalink to &quot;输出：&quot;">​</a></h3><p>4Ad?t?z21</p><h3 id="输入-2" tabindex="-1">输入： <a class="header-anchor" href="#输入-2" aria-label="Permalink to &quot;输入：&quot;">​</a></h3><p>???123??zxy?</p><h3 id="输出-2" tabindex="-1">输出： <a class="header-anchor" href="#输出-2" aria-label="Permalink to &quot;输出：&quot;">​</a></h3><p>???321??xyz?</p><h2 id="代码实现" tabindex="-1">代码实现 <a class="header-anchor" href="#代码实现" aria-label="Permalink to &quot;代码实现&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> solution</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">inp</span><span style="color:#E1E4E8;">) {</span></span>\n<span class="line"><span style="color:#6A737D;">  // Edit your code here</span></span>\n<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> cArr</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>\n<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> dataArr</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> []</span></span>\n<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> c </span><span style="color:#F97583;">of</span><span style="color:#E1E4E8;"> inp){</span></span>\n<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;">(c</span><span style="color:#F97583;">&lt;=</span><span style="color:#9ECBFF;">&#39;9&#39;</span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;">c</span><span style="color:#F97583;">&gt;=</span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">){</span></span>\n<span class="line"><span style="color:#E1E4E8;">      cArr.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(c)</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;">(c</span><span style="color:#F97583;">&gt;=</span><span style="color:#9ECBFF;">&#39;A&#39;</span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;">c</span><span style="color:#F97583;">&lt;=</span><span style="color:#9ECBFF;">&#39;z&#39;</span><span style="color:#E1E4E8;">){</span></span>\n<span class="line"><span style="color:#E1E4E8;">      dataArr.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">(c)</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"><span style="color:#E1E4E8;">  }</span></span>\n<span class="line"><span style="color:#E1E4E8;">  cArr.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">)</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">a)</span></span>\n<span class="line"><span style="color:#E1E4E8;">  dataArr.</span><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">()</span></span>\n<span class="line"><span style="color:#F97583;">  const</span><span style="color:#79B8FF;"> input</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> inp.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>\n<span class="line"><span style="color:#F97583;">  for</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;i</span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">input.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">;i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">){</span></span>\n<span class="line"><span style="color:#F97583;">    const</span><span style="color:#79B8FF;"> c</span><span style="color:#F97583;"> =</span><span style="color:#E1E4E8;"> input[i]</span></span>\n<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;">(c</span><span style="color:#F97583;">&lt;=</span><span style="color:#9ECBFF;">&#39;9&#39;</span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;">c</span><span style="color:#F97583;">&gt;=</span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">){</span></span>\n<span class="line"><span style="color:#E1E4E8;">      input[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> cArr.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">()</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"><span style="color:#F97583;">    if</span><span style="color:#E1E4E8;">(c</span><span style="color:#F97583;">&gt;=</span><span style="color:#9ECBFF;">&#39;A&#39;</span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;">c</span><span style="color:#F97583;">&lt;=</span><span style="color:#9ECBFF;">&#39;z&#39;</span><span style="color:#E1E4E8;">){</span></span>\n<span class="line"><span style="color:#E1E4E8;">      input[i] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> dataArr.</span><span style="color:#B392F0;">shift</span><span style="color:#E1E4E8;">()</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"><span style="color:#E1E4E8;">  }</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">  return</span><span style="color:#E1E4E8;"> input.</span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">);</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">function</span><span style="color:#B392F0;"> main</span><span style="color:#E1E4E8;">() {</span></span>\n<span class="line"><span style="color:#6A737D;">  // Add your test cases here</span></span>\n<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">solution</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;12A?zc&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &quot;21A?cz&quot;</span><span style="color:#E1E4E8;">);</span></span>\n<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">solution</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;1Ad?z?t24&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &quot;4Ad?t?z21&quot;</span><span style="color:#E1E4E8;">);</span></span>\n<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">solution</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;???123??zxy?&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">===</span><span style="color:#9ECBFF;"> &quot;???321??xyz?&quot;</span><span style="color:#E1E4E8;">);</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">();</span></span></code></pre></div>',20)]))}]]);export{p as __pageData,o as default};

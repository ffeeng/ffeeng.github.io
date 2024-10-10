import{_ as s,c as a,b as n,o as l}from"./chunks/framework.CUf7xJpa.js";const o=JSON.parse('{"title":"fetch","description":"","frontmatter":{},"headers":[{"level":2,"title":"请求库","slug":"请求库","link":"#请求库","children":[{"level":3,"title":"浏览器端使用","slug":"浏览器端使用","link":"#浏览器端使用","children":[]},{"level":3,"title":"node中使用","slug":"node中使用","link":"#node中使用","children":[]}]},{"level":2,"title":"fetch vs XMLHttpRequest","slug":"fetch-vs-xmlhttprequest","link":"#fetch-vs-xmlhttprequest","children":[{"level":3,"title":"get请求","slug":"get请求","link":"#get请求","children":[]},{"level":3,"title":"Post、Put请求","slug":"post、put请求","link":"#post、put请求","children":[]},{"level":3,"title":"Post formData","slug":"post-formdata","link":"#post-formdata","children":[]}]},{"level":2,"title":"关于formData","slug":"关于formdata","link":"#关于formdata","children":[]},{"level":2,"title":"参考文件","slug":"参考文件","link":"#参考文件","children":[]}],"relativePath":"frontend/fetch.md","filePath":"frontend/fetch.md"}');const e=s({name:"frontend/fetch.md"},[["render",function(s,o,e,p,t,r){return l(),a("div",null,o[0]||(o[0]=[n('<h1 id="fetch" tabindex="-1">fetch <a class="header-anchor" href="#fetch" aria-label="Permalink to &quot;fetch&quot;">​</a></h1><h2 id="请求库" tabindex="-1">请求库 <a class="header-anchor" href="#请求库" aria-label="Permalink to &quot;请求库&quot;">​</a></h2><h3 id="浏览器端使用" tabindex="-1">浏览器端使用 <a class="header-anchor" href="#浏览器端使用" aria-label="Permalink to &quot;浏览器端使用&quot;">​</a></h3><ul><li>XMLHttpRequest</li><li>axios</li><li>fetch</li></ul><h3 id="node中使用" tabindex="-1">node中使用 <a class="header-anchor" href="#node中使用" aria-label="Permalink to &quot;node中使用&quot;">​</a></h3><ul><li><a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">axios</a></li><li><a href="https://github.com/node-fetch/node-fetch" target="_blank" rel="noreferrer">node-fetch</a></li><li><a href="https://github.com/request/request" target="_blank" rel="noreferrer">request</a></li></ul><ol><li>浏览器自带fetch，浏览器上使用有跨域问题</li><li>node需安装node-fetch,没有跨域问题</li></ol><h2 id="fetch-vs-xmlhttprequest" tabindex="-1">fetch vs XMLHttpRequest <a class="header-anchor" href="#fetch-vs-xmlhttprequest" aria-label="Permalink to &quot;fetch vs XMLHttpRequest&quot;">​</a></h2><ul><li>fetch使用 Promise,不适用回调、写代码简洁</li><li>fetch采用模块化设计,API分散在Response对象、Request对象、Headers对象,设计更合理</li><li>fetch通过数据流处理数据，分块读取，有利于提高网站性能表现，减少内存占用,对于请求大文件或者网速慢的场景相当有用)</li></ul><h3 id="get请求" tabindex="-1">get请求 <a class="header-anchor" href="#get请求" aria-label="Permalink to &quot;get请求&quot;">​</a></h3><ul><li>fetch</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> param </span><span style="color:#F97583;">=</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> URLSearchParams</span><span style="color:#E1E4E8;">({</span></span>\n<span class="line"><span style="color:#E1E4E8;">  roomId:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">  uid:</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">})</span></span>\n<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;http://localhost:3000/v3/checkin&#39;</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&#39;?&#39;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">param.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">();</span></span>\n<span class="line"><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(url).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>\n<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data));</span></span></code></pre></div><ul><li>axios</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;http://localhost:3000/v3/checkin&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#E1E4E8;">axios.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">( {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    url,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">, </span></span>\n<span class="line"><span style="color:#E1E4E8;">    params:{</span></span>\n<span class="line"><span style="color:#E1E4E8;">       roomId:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">       uid:</span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> response.data)</span></span></code></pre></div><h3 id="post、put请求" tabindex="-1">Post、Put请求 <a class="header-anchor" href="#post、put请求" aria-label="Permalink to &quot;Post、Put请求&quot;">​</a></h3><ul><li>fetch</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;http://localhost:3000/v3/checkin&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(url, {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    headers: {</span></span>\n<span class="line"><span style="color:#9ECBFF;">      &#39;Content-Type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;PUT&#39;</span><span style="color:#E1E4E8;">, body:</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">({</span></span>\n<span class="line"><span style="color:#9ECBFF;">           &#39;roomId&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#9ECBFF;">           &#39;uid&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#9ECBFF;">           &#39;info&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;{name:&quot;xx&quot;,age:2}&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }),</span></span>\n<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>\n<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data));</span></span></code></pre></div><p>注意Body类型 <code>Body = Blob | BufferSource | FormData | URLSearchParams | ReadableStream&lt;Uint8Array&gt; | string;</code> Body不能为对象,需用 JSON.stringify(data)</p><ul><li>axios</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;http://localhost:3000/v3/checkin&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#E1E4E8;">axios.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">( {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    url,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">, </span></span>\n<span class="line"><span style="color:#E1E4E8;">    data:{</span></span>\n<span class="line"><span style="color:#9ECBFF;">        &#39;roomId&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#9ECBFF;">        &#39;uid&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;1&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#9ECBFF;">        &#39;info&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;{name:&quot;xx&quot;,age:2}&#39;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    },</span></span>\n<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> response.data)</span></span></code></pre></div><h3 id="post-formdata" tabindex="-1">Post formData <a class="header-anchor" href="#post-formdata" aria-label="Permalink to &quot;Post formData&quot;">​</a></h3><ul><li>fetch</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;http://localhost:3000/v3/checkin&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> formData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> FormData</span><span style="color:#E1E4E8;">();</span></span>\n<span class="line"><span style="color:#E1E4E8;">form.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleName&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;">);</span></span>\n<span class="line"><span style="color:#E1E4E8;">form.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;img&#39;</span><span style="color:#E1E4E8;">, fs.</span><span style="color:#B392F0;">createReadStream</span><span style="color:#E1E4E8;">(__dirname </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;/1.jpg&#39;</span><span style="color:#E1E4E8;">));</span></span>\n<span class="line"><span style="color:#B392F0;">fetch</span><span style="color:#E1E4E8;">(url, {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">, body:formData</span></span>\n<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> response.</span><span style="color:#B392F0;">json</span><span style="color:#E1E4E8;">())</span></span>\n<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">data</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(data));</span></span></code></pre></div><ul><li>axios</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;"> &#39;http://localhost:3000/v3/checkin&#39;</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#F97583;">const</span><span style="color:#79B8FF;"> formData</span><span style="color:#F97583;"> =</span><span style="color:#F97583;"> new</span><span style="color:#B392F0;"> FormData</span><span style="color:#E1E4E8;">();</span></span>\n<span class="line"><span style="color:#E1E4E8;">form.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;moduleName&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;test&#39;</span><span style="color:#E1E4E8;">);</span></span>\n<span class="line"><span style="color:#E1E4E8;">form.</span><span style="color:#B392F0;">append</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;img&#39;</span><span style="color:#E1E4E8;">, fs.</span><span style="color:#B392F0;">createReadStream</span><span style="color:#E1E4E8;">(__dirname </span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;"> &#39;/1.jpg&#39;</span><span style="color:#E1E4E8;">));</span></span>\n<span class="line"><span style="color:#E1E4E8;">axios.</span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">( {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    url,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    method: </span><span style="color:#9ECBFF;">&#39;POST&#39;</span><span style="color:#E1E4E8;">, data:formData,</span></span>\n<span class="line"><span style="color:#E1E4E8;">    headers:formData.</span><span style="color:#B392F0;">getHeaders</span><span style="color:#E1E4E8;">()</span></span>\n<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">response</span><span style="color:#F97583;"> =&gt;</span><span style="color:#E1E4E8;"> response.data)</span></span></code></pre></div><ul><li>有formData时不需要设置content-type</li></ul><h2 id="关于formdata" tabindex="-1">关于formData <a class="header-anchor" href="#关于formdata" aria-label="Permalink to &quot;关于formData&quot;">​</a></h2><ul><li>formData流处理注意 流只能读一次，重置读要做处理</li><li>formData.append(&#39;img&#39;, fs.createReadStream(__dirname + &#39;/1.jpg&#39;));</li></ul><h2 id="参考文件" tabindex="-1">参考文件 <a class="header-anchor" href="#参考文件" aria-label="Permalink to &quot;参考文件&quot;">​</a></h2><ul><li><a href="http://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html" target="_blank" rel="noreferrer">Fetch API 教程</a></li><li><a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">axios</a></li><li><a href="https://github.com/node-fetch/node-fetch" target="_blank" rel="noreferrer">node-fetch</a></li><li><a href="https://github.com/request/request" target="_blank" rel="noreferrer">request</a></li><li><a href="https://github.com/form-data/form-data#buffer-getbuffer" target="_blank" rel="noreferrer">FormData</a></li></ul>',30)]))}]]);export{o as __pageData,e as default};

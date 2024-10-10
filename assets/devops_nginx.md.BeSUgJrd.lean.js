import{_ as s,c as n,b as a,o as l}from"./chunks/framework.CUf7xJpa.js";const p=JSON.parse('{"title":"nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"mac nginx常见命令","slug":"mac-nginx常见命令","link":"#mac-nginx常见命令","children":[]},{"level":2,"title":"linux nginx常用命令","slug":"linux-nginx常用命令","link":"#linux-nginx常用命令","children":[]},{"level":2,"title":"常见业务示例","slug":"常见业务示例","link":"#常见业务示例","children":[{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"relativePath":"devops/nginx.md","filePath":"devops/nginx.md"}');const e=s({name:"devops/nginx.md"},[["render",function(s,p,e,o,c,t){return l(),n("div",null,p[0]||(p[0]=[a('<h1 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;nginx&quot;">​</a></h1><h2 id="mac-nginx常见命令" tabindex="-1">mac nginx常见命令 <a class="header-anchor" href="#mac-nginx常见命令" aria-label="Permalink to &quot;mac nginx常见命令&quot;">​</a></h2><ul><li><p>安装卸载 <code>brew install nginx</code><code>brew uninstall nginx</code></p></li><li><p>常用指令</p></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#9ECBFF;"> nginx</span><span style="color:#E1E4E8;">  </span></span>\n<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#79B8FF;"> -t</span></span>\n<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#79B8FF;"> -help</span></span>\n<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#79B8FF;"> -s</span><span style="color:#9ECBFF;"> reload</span></span>\n<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#79B8FF;"> -s</span><span style="color:#9ECBFF;"> stop</span></span></code></pre></div><h2 id="linux-nginx常用命令" tabindex="-1">linux nginx常用命令 <a class="header-anchor" href="#linux-nginx常用命令" aria-label="Permalink to &quot;linux nginx常用命令&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#79B8FF;"> -t</span></span>\n<span class="line"><span style="color:#B392F0;">nginx</span><span style="color:#79B8FF;"> -s</span><span style="color:#9ECBFF;"> reload</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#9ECBFF;"> stop</span><span style="color:#9ECBFF;"> nginx</span></span>\n<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#9ECBFF;"> restart</span><span style="color:#9ECBFF;"> nginx</span></span>\n<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#9ECBFF;"> status</span><span style="color:#9ECBFF;"> nginx</span></span></code></pre></div><h2 id="常见业务示例" tabindex="-1">常见业务示例 <a class="header-anchor" href="#常见业务示例" aria-label="Permalink to &quot;常见业务示例&quot;">​</a></h2><div class="language-nginx"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#F97583;">server</span><span style="color:#E1E4E8;"> {</span></span>\n<span class="line"><span style="color:#F97583;">    listen </span><span style="color:#79B8FF;">      8080</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"><span style="color:#F97583;">    server_name </span><span style="color:#E1E4E8;"> localhost;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">    #charset koi8-r;</span></span>\n<span class="line"><span style="color:#6A737D;">    #access_log  /var/log/nginx/host.access.log  main;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">    location</span><span style="color:#B392F0;"> /app/ </span><span style="color:#E1E4E8;">{</span></span>\n<span class="line"><span style="color:#F97583;">        proxy_pass </span><span style="color:#E1E4E8;"> http://ip:port/app/;</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">    location</span><span style="color:#B392F0;"> /console/ </span><span style="color:#E1E4E8;">{</span></span>\n<span class="line"><span style="color:#F97583;">        proxy_pass </span><span style="color:#E1E4E8;"> http://ip:port/console/;</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">    location</span><span style="color:#B392F0;"> /v2/ </span><span style="color:#E1E4E8;">{</span></span>\n<span class="line"><span style="color:#F97583;">        proxy_set_header </span><span style="color:#E1E4E8;"> Host  $host;</span></span>\n<span class="line"><span style="color:#F97583;">        proxy_set_header </span><span style="color:#E1E4E8;">  X-Real-IP $remote_addr;  </span></span>\n<span class="line"><span style="color:#F97583;">        proxy_set_header </span><span style="color:#E1E4E8;">  x-forwarded-for $proxy_add_x_forwarded_for;</span></span>\n<span class="line"><span style="color:#F97583;">        proxy_pass </span><span style="color:#E1E4E8;"> http://127.0.0.1:3000/v2/;</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">    location</span><span style="color:#B392F0;"> / </span><span style="color:#E1E4E8;">{</span></span>\n<span class="line"><span style="color:#F97583;">        proxy_pass </span><span style="color:#E1E4E8;"> http://ip:port/;</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"><span style="color:#6A737D;">        # 开启_ 下划线头</span></span>\n<span class="line"><span style="color:#F97583;">    underscores_in_headers </span><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">    #error_page  404              /404.html;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">    # redirect server error pages to the static page /50x.html</span></span>\n<span class="line"><span style="color:#6A737D;">    #</span></span>\n<span class="line"><span style="color:#F97583;">    error_page </span><span style="color:#79B8FF;">  500</span><span style="color:#79B8FF;"> 502</span><span style="color:#79B8FF;"> 503</span><span style="color:#79B8FF;"> 504</span><span style="color:#E1E4E8;">  /50x.html;</span></span>\n<span class="line"><span style="color:#F97583;">    location</span><span style="color:#F97583;"> =</span><span style="color:#DBEDFF;"> /50x.html </span><span style="color:#E1E4E8;">{</span></span>\n<span class="line"><span style="color:#F97583;">        root </span><span style="color:#E1E4E8;">  /usr/share/nginx/html;</span></span>\n<span class="line"><span style="color:#E1E4E8;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">    # proxy the PHP scripts to Apache listening on 127.0.0.1:80</span></span>\n<span class="line"><span style="color:#6A737D;">    #</span></span>\n<span class="line"><span style="color:#6A737D;">    #location ~ \\.php$ {</span></span>\n<span class="line"><span style="color:#6A737D;">    #    proxy_pass   http://127.0.0.1;</span></span>\n<span class="line"><span style="color:#6A737D;">    #}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>\n<span class="line"><span style="color:#6A737D;">    #</span></span>\n<span class="line"><span style="color:#6A737D;">    #location ~ \\.php$ {</span></span>\n<span class="line"><span style="color:#6A737D;">    #    root           html;</span></span>\n<span class="line"><span style="color:#6A737D;">    #    fastcgi_pass   127.0.0.1:9000;</span></span>\n<span class="line"><span style="color:#6A737D;">    #    fastcgi_index  index.php;</span></span>\n<span class="line"><span style="color:#6A737D;">    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;</span></span>\n<span class="line"><span style="color:#6A737D;">    #    include        fastcgi_params;</span></span>\n<span class="line"><span style="color:#6A737D;">    #}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D;">    # deny access to .htaccess files, if Apache&#39;s document root</span></span>\n<span class="line"><span style="color:#6A737D;">    # concurs with nginx&#39;s one</span></span>\n<span class="line"><span style="color:#6A737D;">    #</span></span>\n<span class="line"><span style="color:#6A737D;">    #location ~ /\\.ht {</span></span>\n<span class="line"><span style="color:#6A737D;">    #    deny  all;</span></span>\n<span class="line"><span style="color:#6A737D;">    #}</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><ul><li><a href="https://nginx.org/en/docs/dirindex.html" target="_blank" rel="noreferrer">nginx指令</a></li><li><a href="https://nginx.org/en/docs/varindex.html" target="_blank" rel="noreferrer">nginx内置变量</a></li></ul>',10)]))}]]);export{p as __pageData,e as default};

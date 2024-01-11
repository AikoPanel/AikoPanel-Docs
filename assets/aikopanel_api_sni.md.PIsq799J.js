import{_ as a,c as e,o as i,U as n}from"./chunks/framework.Vp8l0THH.js";const _=JSON.parse('{"title":"Public api AikoPanel","description":"","frontmatter":{},"headers":[],"relativePath":"aikopanel/api/sni.md","filePath":"aikopanel/api/sni.md"}'),o={name:"aikopanel/api/sni.md"},t=n('<h1 id="public-api-aikopanel" tabindex="-1">Public api AikoPanel <a class="header-anchor" href="#public-api-aikopanel" aria-label="Permalink to &quot;Public api AikoPanel&quot;">​</a></h1><h2 id="_1-change-sni-server-name-indication" tabindex="-1">1. Change SNI (Server Name Indication) <a class="header-anchor" href="#_1-change-sni-server-name-indication" aria-label="Permalink to &quot;1. Change SNI (Server Name Indication)&quot;">​</a></h2><h3 id="prepare" tabindex="-1">Prepare <a class="header-anchor" href="#prepare" aria-label="Permalink to &quot;Prepare&quot;">​</a></h3><ul><li>Sni you want to change</li></ul><h3 id="perform" tabindex="-1">Perform <a class="header-anchor" href="#perform" aria-label="Permalink to &quot;Perform&quot;">​</a></h3><p>Link your current registration and add <code>&amp;sni=domain.com</code> to the end of the link.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://aikopanel.com/api/v1/client/subscribe?token={token}&amp;sni=domain.com</span></span></code></pre></div><p>or</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>https://aikopanel.com/api/v1/client/subscribe?token={token}&amp;flag=sing-box&amp;sni=domain.com</span></span></code></pre></div>',9),s=[t];function r(p,c,l,d,h,m){return i(),e("div",null,s)}const k=a(o,[["render",r]]);export{_ as __pageData,k as default};

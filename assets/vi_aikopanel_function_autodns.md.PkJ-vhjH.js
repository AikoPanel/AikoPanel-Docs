import{_ as n,a}from"./chunks/Token.1nvuMoq1.js";import{_ as e,o as t,c as o,R as l}from"./chunks/framework.tzssv0c6.js";const i="/assets/AutoDNS.sHb8IMpo.png",k=JSON.parse('{"title":"Hướng dẫn sử dụng Auto DNS","description":"","frontmatter":{},"headers":[],"relativePath":"vi/aikopanel/function/autodns.md","filePath":"vi/aikopanel/function/autodns.md"}'),u={name:"vi/aikopanel/function/autodns.md"},r=l('<h1 id="huong-dan-su-dung-auto-dns" tabindex="-1">Hướng dẫn sử dụng Auto DNS <a class="header-anchor" href="#huong-dan-su-dung-auto-dns" aria-label="Permalink to &quot;Hướng dẫn sử dụng Auto DNS&quot;">​</a></h1><h2 id="mo-ta-chuc-nang" tabindex="-1">Mô tả chức năng <a class="header-anchor" href="#mo-ta-chuc-nang" aria-label="Permalink to &quot;Mô tả chức năng&quot;">​</a></h2><ul><li>Auto DNS dùng để tự động cập nhật DNS Của node sau khi bạn Save Lưu trữ trên Clouflare hay là Node của bạn</li><li>Nếu bạn save trên node Ip mới thì Ip mới sẽ được cập nhật vào cloudflare Sau 1 Phút và ngược lại nếu bạn cập nhật ip trên cloudflare thì cloudflare sẽ đẩy IP mới về node của bạn trong 1 phút</li></ul><h2 id="chuan-bi" tabindex="-1">Chuẩn bị <a class="header-anchor" href="#chuan-bi" aria-label="Permalink to &quot;Chuẩn bị&quot;">​</a></h2><ul><li>ZoneID -&gt; Lấy từ Cloudflare</li><li>Token -&gt; Lấy từ cloudflare</li></ul><h2 id="cach-setup" tabindex="-1">Cách setup <a class="header-anchor" href="#cach-setup" aria-label="Permalink to &quot;Cách setup&quot;">​</a></h2><h3 id="step-1-lay-zoneid" tabindex="-1">Step 1 : Lấy ZoneID <a class="header-anchor" href="#step-1-lay-zoneid" aria-label="Permalink to &quot;Step 1 : Lấy ZoneID&quot;">​</a></h3><p><img src="'+i+'" alt="AutoDNS"></p><ul><li>Dòng 1 ZoneID bạn lấy ở Cloudflare nó sẽ dạng như thế này</li></ul><p><img src="'+n+'" alt="ZoneID"></p><ul><li>Coppy dán vào Line 1 Của config</li></ul><h3 id="step-2-lay-token" tabindex="-1">Step 2 : Lấy Token <a class="header-anchor" href="#step-2-lay-token" aria-label="Permalink to &quot;Step 2 : Lấy Token&quot;">​</a></h3><ul><li>1: Bạn vào CF bấm vào Get your API Token</li><li>2: Create Token -&gt; chọn Edit zone DNS template</li><li>3: Lấy DNS theo miền bạn đang sử dụng</li></ul><p><img src="'+a+'" alt="ZoneID"></p><p><em>mục Zone Resources bạn chọn ô cuối là domain của bạn xong bấm Continute to Summary</em></p><ul><li>4: Sua khi lưu nó sẽ hiện ra token và dán token vào admin web như ZoneID là xong nhé</li></ul>',16),s=[r];function c(h,d,p,m,_,g){return t(),o("div",null,s)}const S=e(u,[["render",c]]);export{k as __pageData,S as default};

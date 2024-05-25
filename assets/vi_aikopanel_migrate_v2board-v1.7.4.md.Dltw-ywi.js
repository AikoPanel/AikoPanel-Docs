import{_ as a,c as i,o as e,a3 as n}from"./chunks/framework.BYhES31N.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"vi/aikopanel/migrate/v2board-v1.7.4.md","filePath":"vi/aikopanel/migrate/v2board-v1.7.4.md"}'),o={name:"vi/aikopanel/migrate/v2board-v1.7.4.md"},t=n('<h2 id="huong-dan-di-chuyen-phien-ban-v2borad-1-7-4" tabindex="-1">Hướng dẫn Di chuyển phiên bản V2borad 1.7.4 <a class="header-anchor" href="#huong-dan-di-chuyen-phien-ban-v2borad-1-7-4" aria-label="Permalink to &quot;Hướng dẫn Di chuyển phiên bản V2borad 1.7.4&quot;">​</a></h2><h3 id="kich-ban-di-chuyen-se-thuc-hien-cac-thay-đoi-sau-đay-đoi-voi-co-so-du-lieu-cua-ban" tabindex="-1">Kịch bản di chuyển sẽ thực hiện các thay đổi sau đây đối với cơ sở dữ liệu của bạn <a class="header-anchor" href="#kich-ban-di-chuyen-se-thuc-hien-cac-thay-đoi-sau-đay-đoi-voi-co-so-du-lieu-cua-ban" aria-label="Permalink to &quot;Kịch bản di chuyển sẽ thực hiện các thay đổi sau đây đối với cơ sở dữ liệu của bạn&quot;">​</a></h3><ul><li>Thêm bảng dữ liệu v2_server_vless</li></ul><h2 id="moi-truong-aapanel" tabindex="-1">Môi trường aapanel <a class="header-anchor" href="#moi-truong-aapanel" aria-label="Permalink to &quot;Môi trường aapanel&quot;">​</a></h2><ol><li>Xóa sạch cơ sở dữ liệu</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>php artisan db:wipe</span></span></code></pre></div><ol start="2"><li>Nhập cơ sở dữ liệu cũ <span style="color:red;">(Quan trọng)</span></li></ol><blockquote><p>Nhập cơ sở dữ liệu của V2board 1.7.4 vào dự án hiện tại của Aiko</p></blockquote><ol start="3"><li>Thực hiện lệnh di chuyển</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>php artisan migratetoaikopanel v2b1.7.4</span></span></code></pre></div><ol start="4"><li>Thay đổi file cấu hình (v2board.php)</li></ol><blockquote><p>Bạn cần đổi file <code>config/v2board.php</code> thành <code>config/aikopanel.php</code> là đổi tên file v2board.php sang aikopanel.php và vào trong admin user nhập key là done</p></blockquote>',12),c=[t];function s(l,h,d,p,r,u){return e(),i("div",null,c)}const g=a(o,[["render",s]]);export{v as __pageData,g as default};
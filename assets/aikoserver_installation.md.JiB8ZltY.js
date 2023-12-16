import{_ as a,o as s,c as n,R as e}from"./chunks/framework.3LEfkZv-.js";const m=JSON.parse('{"title":"Aiko-Server Installation","description":"","frontmatter":{},"headers":[],"relativePath":"aikoserver/installation.md","filePath":"aikoserver/installation.md"}'),o={name:"aikoserver/installation.md"},t=e(`<h1 id="aiko-server-installation" tabindex="-1">Aiko-Server Installation <a class="header-anchor" href="#aiko-server-installation" aria-label="Permalink to &quot;Aiko-Server Installation&quot;">​</a></h1><h2 id="software-installation-release" tabindex="-1">Software installation - release <a class="header-anchor" href="#software-installation-release" aria-label="Permalink to &quot;Software installation - release&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>wget --no-check-certificate -O Aiko-Server.sh https://raw.githubusercontent.com/AikoPanel/Aiko-Server-Script/master/install.sh &amp;&amp; bash Aiko-Server.sh</span></span></code></pre></div><h2 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-label="Permalink to &quot;Docker&quot;">​</a></h2><h3 id="install-environment" tabindex="-1">install Environment <a class="header-anchor" href="#install-environment" aria-label="Permalink to &quot;install Environment&quot;">​</a></h3><p>Centos</p><div class="language-centos vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">centos</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yum install -y yum-utils</span></span>
<span class="line"><span>yum-config-manager \\</span></span>
<span class="line"><span>    --add-repo \\</span></span>
<span class="line"><span>    https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span>yum install docker-ce docker-ce-cli containerd.io -y</span></span>
<span class="line"><span>systemctl start docker</span></span>
<span class="line"><span>systemctl enable docker</span></span></code></pre></div><p>Ubuntu</p><div class="language-ubuntu vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ubuntu</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo apt-get update</span></span>
<span class="line"><span>sudo apt-get install \\</span></span>
<span class="line"><span>    apt-transport-https \\</span></span>
<span class="line"><span>    ca-certificates \\</span></span>
<span class="line"><span>    curl \\</span></span>
<span class="line"><span>    gnupg-agent \\</span></span>
<span class="line"><span>    software-properties-common -y</span></span>
<span class="line"><span>curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -</span></span>
<span class="line"><span>sudo add-apt-repository \\</span></span>
<span class="line"><span>   &quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu \\</span></span>
<span class="line"><span>   $(lsb_release -cs) \\</span></span>
<span class="line"><span>   stable&quot;</span></span>
<span class="line"><span>sudo apt-get install docker-ce docker-ce-cli containerd.io -y</span></span>
<span class="line"><span>systemctl start docker</span></span>
<span class="line"><span>systemctl enable docker</span></span></code></pre></div><p>Docker-compose ( if you have using it )</p><div class="language-docker-compose vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">docker-compose</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>curl -fsSL https://get.docker.com | bash -s docker</span></span>
<span class="line"><span>curl -L &quot;https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose</span></span>
<span class="line"><span>chmod +x /usr/local/bin/docker-compose</span></span></code></pre></div><h3 id="docker-installation" tabindex="-1">Docker installation <a class="header-anchor" href="#docker-installation" aria-label="Permalink to &quot;Docker installation&quot;">​</a></h3><ul><li>Edit your configuration file <code>aiko.yml</code></li><li>Choose FORMAT config <code>yml</code> or <code>json</code></li><li>Run docker command</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>docker pull aikocute/aikocutehotme:latest &amp;&amp; docker run --restart=always --name Aiko-Server -d \\</span></span>
<span class="line"><span>  -e DOMAIN=&lt;your_domain_value&gt; \\</span></span>
<span class="line"><span>  -e EXPIRE=90 \\</span></span>
<span class="line"><span>  -e CONFIGPATH=/etc/Aiko-Server/aiko.yml \\</span></span>
<span class="line"><span>  -v \${PATH_TO_CONFIG}/aiko.yml:/etc/Aiko-Server/aiko.yml \\</span></span>
<span class="line"><span>  --network=host \\</span></span>
<span class="line"><span>  aikocute/aikocutehotme:latest</span></span></code></pre></div><h2 id="docker-compose-installation" tabindex="-1">Docker-compose installation <a class="header-anchor" href="#docker-compose-installation" aria-label="Permalink to &quot;Docker-compose installation&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone https://github.com/AikoPanel/Aiko-Server-Script.git</span></span>
<span class="line"><span>cd Aiko-Server-Script</span></span></code></pre></div><ul><li>Edit your configuration file <code>aiko.yml</code></li><li>Edit your docker-compose.yml file</li><li>Run <code>docker-compose up -d</code></li></ul>`,17),l=[t];function i(p,c,r,d,u,h){return s(),n("div",null,l)}const g=a(o,[["render",i]]);export{m as __pageData,g as default};

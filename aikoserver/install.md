# install AikoServer

## Docker

### install Environment

Centos

```centos
yum install -y yum-utils
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
yum install docker-ce docker-ce-cli containerd.io -y
systemctl start docker
systemctl enable docker
```

Ubuntu

```ubuntu
sudo apt-get update
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common -y
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
systemctl start docker
systemctl enable docker
```

Docker-compose ( if you have using it )

```docker-compose
curl -fsSL https://get.docker.com | bash -s docker
curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### Config and cert file

- Edit your configuration file `aiko.yml`
- Choose FORMAT config `yml` or `yaml`
- Run docker command

#### Config File 
```yaml
Nodes:
  - PanelType: "AikoPanel"
    ApiConfig:
      ApiHost: "http://127.0.0.1:667"
      ApiKey: "123"
      NodeID: 41
      NodeType: V2ray # Node type: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Timeout for the api request
      EnableVless: false # Enable Vless for V2ray Type
      RuleListPath: # /etc/Aiko-Server/rulelist Path to local rulelist file
    ControllerConfig:
      EnableProxyProtocol: false
      DisableLocalREALITYConfig: false
      EnableREALITY: false
      REALITYConfigs:
        Show: true
      CertConfig:
        CertMode: none # Option about how to get certificate: none, file
        CertFile: /etc/Aiko-Server/cert/aiko_server.cert # Provided if the CertMode is file
        KeyFile: /etc/Aiko-Server/cert/aiko_server.key
```

#### Docker installation
```
docker pull aikocute/aikocutehotme:latest && docker run --restart=always --name Aiko-Server -d \
  -v ${PATH_TO_CONFIG}/:/etc/Aiko-Server/\
  --network=host \
  aikocute/aikocutehotme:latest
```

## Docker-compose installation

```
git clone https://github.com/AikoPanel/AikoServer.git
cd AikoServer
```

- Edit your configuration file `aiko.yml` and `docker-compose.yml`
- Edit your docker-compose.yml file
- Run `docker-compose up -d`
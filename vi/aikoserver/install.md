# Install AikoServer

## Docker

### Cài đặt Môi trường

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

Docker-compose

(nếu bạn đã sử dụng nó)

```docker-compose
curl -fsSL https://get.docker.com | bash -s docker
curl -L "https://github.com/docker/compose/releases/download/1.26.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

### Tệp cấu hình và chứng chỉ

- Chỉnh sửa tệp cấu hình của bạn `aiko.yml`
- Chọn định dạng cấu hình `yml` hoặc `yaml`
- Chạy lệnh Docker

#### Tệp cấu hình

```yaml
Nodes:
  - PanelType: "AikoPanel"
    ApiConfig:
      ApiHost: "http://127.0.0.1:667"
      ApiKey: "123"
      NodeID: 41
      NodeType: V2ray # Loại nút: V2ray, Shadowsocks, Trojan
      Timeout: 30 # Thời gian chờ cho yêu cầu api
      EnableVless: false # Bật Vless cho Loại V2ray
      RuleListPath: # /etc/Aiko-Server/rulelist Đường dẫn đến tệp rulelist cục bộ
    ControllerConfig:
      EnableProxyProtocol: false
      DisableLocalREALITYConfig: false
      EnableREALITY: false
      REALITYConfigs:
        Show: true
      CertConfig:
        CertMode: none # Tùy chọn về cách lấy chứng chỉ: none, file
        CertFile: /etc/Aiko-Server/cert/aiko_server.cert # Cung cấp nếu CertMode là file
        KeyFile: /etc/Aiko-Server/cert/aiko_server.key
```

#### Cài đặt Docker

```
docker pull aikocute/aikocutehotme:latest && docker run --restart=always --name Aiko-Server -d \
  -v ${PATH_TO_CONFIG}/:/etc/Aiko-Server/\
  --network=host \
  aikocute/aikocutehotme:latest
```

## Cài đặt Docker-compose

```
git clone https://github.com/AikoPanel/AikoServer.git
cd AikoServer
```

- Chỉnh sửa tệp cấu hình của bạn `aiko.yml` và `docker-compose.yml`
- Chỉnh sửa tệp docker-compose.yml của bạn
- Chạy `docker-compose up -d`
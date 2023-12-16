<p align="center"><img src="https://avatars.githubusercontent.com/u/91626055?v=4" width="128" /></p>

<div align="center">

# Aiko-Server

Dự án Aiko-Server

</div>

# Mô tả về Aiko-Server

Aiko-Server chỉ hỗ trợ AikoPanel

Một khung sau dựa trên Xray, hỗ trợ các giao thức V2ay, Trojan, Shadowsocks, dễ mở rộng và hỗ trợ kết nối đa trang rất dễ dàng.

Nếu bạn thích dự án này, bạn có thể nhấp vào nút sao + xem ở góc trên bên phải để theo dõi tiến trình của dự án này.

## Miễn trách nhiệm

Dự án này chỉ dành cho mục đích học tập, phát triển và bảo trì cá nhân của tôi, tôi không đảm bảo tính khả dụng và tôi không chịu trách nhiệm về bất kỳ hậu quả nào sau khi sử dụng phần mềm này.

## Tính năng

- Hỗ trợ nhiều giao thức V2ray, Trojan, Shadowsocks.
- Hỗ trợ các tính năng mới như Vless và XTLS.
- Hỗ trợ kết nối đến nhiều bảng và nút mà không cần khởi động lại.
- Hỗ trợ giới hạn tốc độ IP trực tuyến
- Hỗ trợ cấp cổng nút, giới hạn tốc độ cấp người dùng.
- Cấu hình đơn giản và rõ ràng.
- Sửa đổi cấu hình để tự động khởi động lại phiên bản.
- Dễ biên dịch và nâng cấp, có thể nhanh chóng cập nhật phiên bản core, hỗ trợ các tính năng mới của Xray-core.
- Hỗ trợ UDP và nhiều chức năng khác

## Tính năng

| Tính năng                      | VMess | Trojan | Shadowsocks | VLESS |
| ------------------------------ | ----- | ------ | ----------- | ----- |
| Lấy thông tin nút              | √     | √      | √           | √     |
| Lấy thông tin người dùng       | √     | √      | √           | √     |
| Thống kê lưu lượng người dùng  | √     | √      | √           | √     |
| Báo cáo thông tin máy chủ      | √     | √      | √           | √     |
| Đăng ký tự động chứng chỉ TLS  | √     | √      | √           | √     |
| Tự động gia hạn chứng chỉ TLS  | √     | √      | √           | √     |
| Số lượng người trực tuyến      | √     | √      | √           | √     |
| Giới hạn người dùng trực tuyến | √     | √      | √           | √     |
| Quy tắc kiểm tra               | √     | √      | √           | √     |
| Giới hạn tốc độ cổng nút       | √     | √      | √           | √     |
| Giới hạn tốc độ người dùng     | √     | √      | √           | √     |
| Tùy chỉnh DNS                  | √     | √      | √           | √     |

## Hỗ trợ giao diện người dùng

| Bảng điều khiển | VMess | Trojan | Shadowsocks | VLESS |
| --------------- | ----- | ------ | ----------- | ----- |
| AikoPanel       | √     | √      | √           | √     |

## Hỗ trợ lệnh

- [x] `aiko-server` - Lệnh Aiko-Server
- [x] `aiko-server x25519` - Quản lý chứng chỉ X25519 (Vless-Reality)
- [x] `aiko-server cert` - Tạo quản lý chứng chỉ TLS

**Lưu ý: Lệnh không được hỗ trợ trong phiên bản Docker và nếu bạn có Lệnh Mới cho nó, vui lòng commit nó**

## Cài đặt phần mềm - phiên bản phát hành

```
wget --no-check-certificate -O Aiko-Server.sh https://raw.githubusercontent.com/AikoPanel/AikoServer/master/install.sh && bash Aiko-Server.sh
```

## Hỗ trợ Cộng đồng Aiko-Server

[Telegram](https://t.me/AikoPanel)

**Lưu ý: Vì tôi lười viết tài liệu, nếu có ai đó tình nguyện viết tài liệu cho aiko-server, vui lòng liên hệ với tôi (sử dụng tiếng Anh).**

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
git clone https://github.com/AikoPanel/Aiko-Server-Script.git
cd Aiko-Server-Script
```

- Chỉnh sửa tệp cấu hình của bạn `aiko.yml` và `docker-compose.yml`
- Chỉnh sửa tệp docker-compose.yml của bạn
- Chạy `docker-compose up -d`

## Người ủng hộ theo thời gian

[![Stargazers over time](https://starchart.cc/AikoPanel/AikoServer.svg)](https://starchart.cc/AikoPanel/AikoServer)

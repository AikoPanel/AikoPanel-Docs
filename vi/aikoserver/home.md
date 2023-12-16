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

## Người ủng hộ theo thời gian

[![Stargazers over time](https://starchart.cc/AikoPanel/AikoServer.svg)](https://starchart.cc/AikoPanel/AikoServer)

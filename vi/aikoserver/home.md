<p align="center"><img src="https://avatars.githubusercontent.com/u/91626055?v=4" width="128" /></p>

<div align="center">

# Aiko-Server
Dự án Aiko-Server

[![](https://img.shields.io/badge/Telegram-group-green?style=flat-square)](https://t.me/aikoaikoaikoaiko)
[![](https://img.shields.io/badge/Telegram-blue?style=flat-square)](https://t.me/Tele_Aiko)
[![](https://img.shields.io/github/downloads/AikoPanel/Aiko-Server/total.svg?style=flat-square)](https://github.com/AikoPanel/Aiko-Server/releases)
[![](https://img.shields.io/github/v/release/AikoPanel/Aiko-Server?style=flat-square)](https://github.com/AikoPanel/Aiko-Server/releases)
[![docker](https://img.shields.io/docker/v/aikocute/aikocutehotme?label=Hình%20Docker&sort=semver)](https://hub.docker.com/r/aikocute/aikocutehotme)
[![Go-Report](https://goreportcard.com/badge/github.com/AikoPanel/Aiko-Server?style=flat-square)](https://goreportcard.com/report/github.com/AikoPanel/Aiko-Server)
</div>


# Mô tả về Aiko-Server
Aiko-Server Hỗ trợ Nhiều Bảng điều khiển (AikoPanel, V2board, ProxyPanel, sspanel, Pmpanel...)

Một khung công cụ phía sau dựa trên Xray, hỗ trợ các giao thức V2ay, Trojan, Shadowsocks, mở rộng rất dễ dàng và hỗ trợ kết nối đa bảng điều khiển.

Nếu bạn thích dự án này, bạn có thể nhấp vào ngôi sao + xem ở góc trên bên phải để theo dõi tiến trình của dự án này.

## Phủ nhận

Dự án này chỉ dành cho mục đích học hỏi, phát triển và bảo trì cá nhân của tôi, tôi không đảm bảo tính sẵn có và tôi không chịu trách nhiệm về bất kỳ hậu quả nào do việc sử dụng phần mềm này.

## Điểm nổi bật
* Mã nguồn mở `Phiên bản này phụ thuộc vào tâm trạng vui vẻ`
* Hỗ trợ nhiều giao thức V2ray, Trojan, Shadowsocks.
* Hỗ trợ các tính năng mới như Vless và XTLS.
* Hỗ trợ kết nối đơn với nhiều bảng điều khiển và nút mà không cần khởi động lại.
* Hỗ trợ hạn chế tốc độ IP trực tuyến
* Hỗ trợ cấp độ cổng nút, giới hạn tốc độ người dùng.
* Cấu hình đơn giản và rõ ràng.
* Sửa đổi cấu hình để tự động khởi động lại phiên bản.
* Dễ biên dịch và nâng cấp, có thể nhanh chóng cập nhật phiên bản core, hỗ trợ các tính năng mới của Xray-core.
* Hỗ trợ UDP và nhiều tính năng khác

## Điểm nổi bật

| Điểm nổi bật                              | v2ray | trojan | shadowsocks |
| ----------------------------------------  | ----- | ------ | ----------- |
| Lấy thông tin nút                         | √     | √      | √           |
| Lấy thông tin người dùng                  | √     | √      | √           |
| Thống kê lưu lượng người dùng             | √     | √      | √           |
| Báo cáo thông tin máy chủ                 | √     | √      | √           |
| Tự động đăng ký chứng chỉ TLS            | √     | √      | √           |
| Tự động gia hạn chứng chỉ tls            | √     | √      | √           |
| Số người đang trực tuyến                  | √     | √      | √           |
| Hạn chế Người dùng Trực tuyến             | √     | √      | √           |
| Quy tắc Kiểm toán                        | √     | √      | √           |
| Giới hạn tốc độ cổng nút                 | √     | √      | √           |
| Giới hạn tốc độ người dùng              | √     | √      | √           |
| DNS Tùy chỉnh                             | √     | √      | √           |
## Hỗ trợ giao diện người dùng

| Bảng điều khiển                                  | v2ray | trojan | shadowsocks                                 |
| ------------------------------------------------- | ----- | ------ | ------------------------------------------- |
|  AikoPanel                                       | √     | √      | √                                           |
| [v2board](https://github.com/v2board/v2board)    | √     | √      | √                                           |
| [sspanel](https://github.com/Anankke/SSPanel-Uim)| √     | √      | √                                           |
| [ProxyPanel](https://github.com/ProxyPanel/ProxyPanel) | √     | √      | √                                           |
| [pmpanel](https://github.com/Project-PMPanel/PMPanel)  | √     | √      | √                                           |
| [ZeroPanel](https://github.com/zeropanel/zeropanel)    | √     | √      | √                                           |

## Hỗ trợ lệnh
- [x] `aiko-server` - Lệnh Aiko-Server
- [x] `aiko-server certificate` - Quản lý Chứng chỉ
- [x] `aiko-server certChainHash` - Quản lý chứng chỉ TLS
- [x] `aiko-server x25519` - Quản lý chứng chỉ X25519 ( Vless-Reality)
- [ ] `aiko-server vpsinfo` - Thông tin VPS


**Ghi chú: Lệnh không được hỗ trợ trong phiên bản Docker và nếu bạn có lệnh Mới cho nó, vui lòng đóng góp nó**

## Người theo dõi theo thời gian

[![Người theo dõi theo thời gian](https://starchart.cc/AikoPanel/Aiko-Server.svg)](https://starchart.cc/AikoPanel/Aiko-Server)

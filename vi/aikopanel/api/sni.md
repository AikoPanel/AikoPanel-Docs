# API thay đổi SNI

## 1. Thay đổi SNI (Server Name Indication)

### Chuẩn bị

- Sni muốn thay đổi

### Một số Custom SNI nhanh chóng

| SNI    | Mô tả          | Sử dụng       |
| ------ | -------------- | ------------- |
| ff     | Free Fire      | `&sni=ff`     |
| lq     | Liên Quân      | `&sni=lq`     |
| tiktok | Tiktok         | `&sni=tiktok` |
| jp     | Japan Sorfbank | `&sni=jp`     |

### Thực hiện

Liên kết đăng kí hiện tại của bạn và thêm `&sni=domain.com` vào cuối liên kết.

```
https://aikopanel.com/api/v1/client/subscribe?token={token}&sni=domain.com
```

hoặc

```
https://aikopanel.com/api/v1/client/subscribe?token={token}&flag=sing-box&sni=domain.com
```

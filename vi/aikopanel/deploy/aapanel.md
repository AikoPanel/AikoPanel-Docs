# Triển khai AikoPanel

## Môi trường

Tối thiểu cho AikoPanel V3 ( v3.1.0+ )
- Lõi: 1 lõi (AMD 7763 hoặc tương tự)
- Ram: 2GB (Với Mysql 8+) hoặc 4GB (Với MariaDB 10.7+)
- SSD: 20GB+

| Môi trường | Phiên bản |
| :--------: | :-------: |
|   System   |   Linux   |
|    PHP     |    7.4    |
|  MariaDB   |   10.7+   |
|   MySQL    |   8.0+    |
|   Redis    |   7.0+    |
|   Nginx    |   1.21+   |

Có các môi trường thay thế cho các yêu cầu trên, ví dụ, thay vì sử dụng nginx, bạn có thể sử dụng caddy.

Các số phiên bản môi trường trên chỉ là yêu cầu tối thiểu và có thể cao hơn so với yêu cầu thực tế.

## Cài đặt

1. Cấu hình aaPanel

- Bạn cần chọn cách cài đặt hệ điều hành của bạn trong [aaPanel](https://www.aapanel.com/new/download.html#install). Ở đây, Ubuntu 20+ hoặc Centos 7+ được cài đặt làm môi trường hệ điều hành.

- Hãy chắc chắn rằng bạn cài đặt aaPanel bằng Ubuntu 20+ hoặc Centos 7+, các hệ điều hành khác có thể gặp phải vấn đề không xác định.

2. Cài đặt Redis và fileinfo

- Bật aaPanel > App Store > PHP 7.4 và nhấp vào Setting > Install extensions > chọn redis, fileinfo,ioncube để cài đặt.

3. Loại bỏ các hàm bị cấm

- Bật aaPanel > App Store > PHP 7.4 > nhấp vào Setting > Các hàm bị vô hiệu hóa sẽ được loại bỏ khỏi danh sách.
  - `putenv`
  - `proc_open`
  - `pcntl_alarm`
  - `pcntl_signal`
  - `exec`

4. Thêm một trang web

- Bật aaPanel > Website > Thêm trang web.
  - Nhập tên miền, chọn phiên bản PHP và chọn loại cơ sở dữ liệu là MySQL.
  - Ở phần Database, chọn PHP-74 ở phần PHP Version, và chọn MySQL ở Database Type.

5. Cài đặt AikoPanel

- Sau khi đăng nhập vào máy chủ qua SSH, truy cập đường dẫn trang web, ví dụ: /www/wwwroot/Tên miền trang web của bạn.

- Những lệnh sau cần phải được thực thi trong thư mục trang web.

```
chattr -i .user.ini
rm -rf .htaccess 404.html index.html .user.ini .well-known

```

- Thực thi lệnh để sao chép từ Github vào thư mục hiện tại.

```
git clone https://github.com/AikoPanel/AikoPanel.git ./
```

- Thực thi các lệnh để cài đặt các gói phụ thuộc và AikoPanel

```
sh init.sh

```

- Theo hướng dẫn để hoàn tất cài đặt.

6. Cấu hình thư mục trang web và tĩnh giả

- Sau khi thêm, chỉnh sửa trang web đã thêm > Thư mục trang web > Chọn thư mục chạy là /public.

- Sau khi thêm, chỉnh sửa URL của trang web đã thêm > rewrite và điền thông tin tĩnh giả.

```
location /downloads {
}

location / {
    try_files $uri $uri/ /index.php$is_args$query_string;
}

location ~ .*\.(js|css)?$
{
    expires      1h;
    error_log off;
    access_log /dev/null;
}
```

7. Cấu hình tác vụ theo lịch

- Bật aaPanel > Cron.
  - Ở Type of Task, chọn Shell Script, điền AikoPanel ở Name of Task, chọn N Minutes ở Period, chọn N Minutes ở Minute, điền PHP `/www/wwwroot/path/artisan schedule:run` trong nội dung Script.
- Dựa trên thông tin trên, thêm một tác vụ theo lịch được thực thi mỗi 1 phút.

8. Khởi động dịch vụ hàng đợi

- Hệ thống của AikoPanel phụ thuộc nhiều vào dịch vụ hàng đợi, và dịch vụ hàng đợi phải được khởi động để sử dụng AikoPanel bình thường. Dưới đây là một ví dụ về dịch vụ giám sát trong aaPanel để giám sát dịch vụ hàng đợi.

- Bật aaPanel > App Store > Công cụ

- Tìm Supervisor để cài đặt, và sau khi cài đặt hoàn thành, nhấp vào để điền như sau: `Setting > Add Daemon`
  - Ở phần Name, điền AikoPanel, chọn www ở phần Run User, chọn Site Directory ở Start Command, điền php artisan horizon, điền 1 ở phần Processes
- Sau khi điền, nhấp vào Confirm để thêm và chạy.

# Câu hỏi thường gặp

- Q: Lỗi 500
- A: Kiểm tra quyền truy cập thư mục gốc của trang web, đặt đệ quy là 755, đảm bảo thư mục có quyền ghi các tệp tin, lỗi này cũng có thể do phần mở rộng Redis chưa được cài đặt hoặc Redis chưa được kích hoạt. Bạn có thể kiểm tra các nhật ký trong storage/logs để khắc phục lỗi, bật chế độ gỡ lỗi và vô hiệu hóa chống vượt ngang trang web trong cài đặt trang web.

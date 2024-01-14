# Chuyển AikoPanel sang máy chủ mới

## Bước 1: Sao lưu dữ liệu và cấu hình

### Đầu tiên, bạn cần sao lưu dữ liệu và cấu hình của AikoPanel.

- Sao chép file config ở thư mục sau: 

```
{Source Path}/config/aikopanel.php
```

- Sao chép file .env ở thư mục sau:

```
{Source Path}/.env
```

## Bước 2: Cài lại AikoPanel theo hướng dẫn cũ 

### Bạn cần cài lại AikoPanel theo hướng dẫn cũ, nhưng không cần tạo cơ sở dữ liệu mới và chạy script init.sh.

- Sau khi git clone, bạn cần chuyển đến nhánh master thì bạn coppy file config và file .env đã sao lưu ở bước 1 vào thư mục mới.

- Sau đó bạn chạy script update.sh để cập nhật AikoPanel.


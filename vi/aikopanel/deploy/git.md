# Hướng dẫn chuyển đổi nguồn Git và làm mới cấu hình

## Bước 1: Chuyển đổi nguồn Git
1. Chuyển URL nguồn Git sang địa chỉ mới:
   ```
   git remote set-url origin https://github.com/AikoPanel/AikoPanel
   ```
2. Chuyển sang nhánh master:
   ```
   git checkout master
   ```
3. Chạy script cập nhật:
   ```
   ./update.sh
   ```

## Bước 2: Làm mới cấu hình và khởi động lại hàng đợi
1. Xóa bộ nhớ đệm cấu hình:
   ```
   php artisan config:clear
   ```
2. Tạo bộ nhớ đệm cấu hình:
   ```
   php artisan config:cache
   ```
3. Kết thúc và khởi động lại dịch vụ hàng đợi:
   ```
   php artisan horizon:terminate
   ``` 

Hãy thực hiện từng bước một cẩn thận để đảm bảo quá trình chuyển đổi diễn ra mượt mà.
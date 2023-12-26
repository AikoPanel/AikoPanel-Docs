# AikoPanel

- Bảng điều khiển Aiko là bảng điều khiển riêng tư dành cho nhân viên của Aiko.
- Bảng điều khiển Aiko được tạo bởi [Aiko](https://aikocute.tech) 
- Địa chỉ cài đặt Panel [AikoPanelv3](https://github.com/AikoPanel/AikoPanel)
- Sử dụng backend Aiko-Server [Aiko-Server](https://github.com/AikoPanel/AikoServer) với loại AikoPanel
- Và lưu ý AikoPanel không Free

## Nhật kí thay đổi của AikoPanel Verison 3

### v3.1.0 - DEV
- **Tái cấu trúc Hệ thống Thông báo Node Trực tuyến**: Chỉnh sửa hệ thống để thông báo cho cả ID quản trị viên và nhóm quản trị với các cài đặt tùy chỉnh, đồng thời cảnh báo cho các nhóm người dùng.
- **Thêm Bot Thông báo Node Trực tuyến Hàng Ngày**: Triển khai bot gửi cập nhật hàng ngày về các node trực tuyến, với tùy chọn cho quản trị viên chỉnh sửa thời gian.
- **Thêm Bot Thông báo Lượng GB Sử dụng Hàng Ngày**: Tạo bot báo cáo lượng GB sử dụng mỗi ngày, với cài đặt thời gian có thể chỉnh sửa bởi quản trị viên.
- **Nâng cao Thông báo Sử dụng GB Hàng Ngày**: Bao gồm bot chi tiết hơn để báo cáo lượng GB sử dụng hàng ngày, một lần nữa với thời gian có thể chỉnh sửa bởi quản trị viên.
- **Triển khai Kiểm tra Hàng Giờ Great Firewall của Trung Quốc (GFW)**: Thiết lập hệ thống kiểm tra trạng thái GFW ở Trung Quốc mỗi giờ.
- **Hỗ trợ HTML trong Thông điệp Thông báo**: Nâng cấp hệ thống thông báo để hỗ trợ nội dung HTML trong các thông báo.
- **Thêm Các Lệnh 'Start' và 'Help' vào Bot Telegram**: Giới thiệu các lệnh này để cải thiện tương tác người dùng với bot Telegram.
- **Giải quyết Vấn đề Hiển thị Dữ liệu trong Shadowrocket**: Sửa lỗi ảnh hưởng đến hiển thị dữ liệu trong ứng dụng Shadowrocket.
- **Sửa Lỗi trong ClashPC và V2rayN**: Xử lý và giải quyết các vấn đề hiện có trong ClashPC và V2rayN.
- **Tái cấu trúc Chức năng AppleID**: Tổng tu chỉnh tính năng AppleID hiện tại để cải thiện hiệu suất và khả năng sử dụng.
- **Thêm Tuyến đường cho Ứng dụng Sing-box**: Triển khai tính năng định tuyến mới cho ứng dụng Sing-box.

### v3.0.9
- Sửa lỗi bot (Tự động tắt Node sắp có - Hiện đang thử nghiệm)
- Tái cấu trúc sao lưu cơ sở dữ liệu
- Tái cấu trúc GetAppleID
- Thêm đăng ký IP
- Hiển thị thông tin Coupon
- Sửa lỗi di cư từ v2board v1.7.4
- Thêm thời gian phiên cho quản trị viên
- Cập nhật giao diện người dùng
- Cập nhật chế độ bảo trì
- Sửa lỗi chính tả SNI
- Sửa lỗi đếm Appleid khi rỗng

### v3.0.8
- Thêm bộ lọc cho số lượng người dùng được mời
- Cập nhật URL Quantumut X cho IDAPPLE
- Thêm chức năng tự động xóa người dùng không hoạt động quá 30 ngày (Thiết lập thời gian xóa trong trang quản trị)
- Tối ưu hóa sao lưu cơ sở dữ liệu Logic lệnh
- Thêm bot Thống kê máy chủ online
- Thêm nút Kiểm tra trực tuyến ( Online , Offline và Tắt khi không hoạt động )
- Cập nhật lại User page và Admin Page

### v3.0.7
- hotfix bug

### v3.0.6
- Bỏ giới hạn Min 1 Khi setup Node Speedlimit
- Thống kê số lượng người được mời trên mỗi tài khoản và tìm kiếm người nào đã được Tk này mời
- thêm mã giảm giá ở Admin page mục order
- Fix lỗi khi dùng Trojan ( WS và GRPC )

### v3.0.5
- Cập nhật tự động thay đổi RecordID và IP trên AutoDNS
- Thêm tính năng Đếm Kế hoạch (Hiện tại đã sử dụng / Tổng số kế hoạch đã mua)
- Tái cấu trúc Lấy số lượng trong Kế hoạch Người dùng và Kế hoạch Quản trị (Lỗi chính tả)
- Thông tin khách hàng dành cho quản trị viên (người dùng khách hàng sẽ nhìn thấy nó)
- Thêm option gói 1 ngày
- Hỗ trợ Mysql ^8 và Mariadb ^10.7
- Thêm bộ lọc theo mã đơn hàng
- Thêm Node SpeedLimit

### v3.0.4
- Sửa lỗi Trojan With transport ( WS, GRPC )
- Tối ưu lại về Rule xác thực AutoDNS với Cloudflare
- Thêm Flag cho Quantumult X
- Thêm Custom URL cho AppleID
- Fix lỗi Vless không add được flag
- Fix lỗi trùng tên trên các app khi admin đặt trùng tên node
- Sửa thông hiển thị trên APP Shadowrocket
- Fix lại sắp xếp Node
- Thêm danh sách IP ưu tiên khi lấy liên kết đăng kí

### v3.0.3
- Cập nhật thêm về giao diện người dùng
- Fix lỗi các app đang hỗ trợ ( nhất là singbox ) - Đã support beta version
- Cập nhật flag Quantumult với (&flag=qxping)

### v3.0.2
- Tối ưu lại giao diện
- cập nhật Report thông tin hàng ngày qua telegram
- Support Plan 2 Month
- Thêm mã hoá đơn trên Quản lý đơn hàng 
- Update quản lý trạng thái dịch vụ thống kê trực tiếp lên panel
- Cập nhật Rule cho Subscribe
- Thêm custom thời gian kết thúc đơn hàng
- Hiển thị thông tin trong đơn đặt hàng, Hết hạn khi người dùng lấy liên kết dăng kí 
- Sắp xếp thứ tự các Server
- Add Thêm số tài khoản khi người dùng yêu cầu rút hoa hồng 
- Thêm custom Khoảng thời gian xóa dữ liệu trực tuyến của nút đã hết hạn
- Thêm Report Payments Success 
- Thêm Auto backup database
- Thêm Auto DNS
- Thêm Thời gian kết thúc phiên đăng nhập của người dùng
- Support Vless Reality + XTLS 
- Thêm Node SpeedLimit ( Mbps )
- Thêm Phương thức đặt lại lưu lượng ( hằng ngày )
- Thêm trình quản lý , giới hạn user khi lấy appleid
- Tối ưu hoá API khi user init node

### AikoPanel v3 - v3.0.1
- Thêm đăng ký đường dẫn tùy chỉnh khác

### v3.0.1-beta.3
- sửa lỗi bảng quản trị (Đặt Plan_Id của người dùng là Null rồi đăng ký Error Api)

### v3.0.1-beta
- Fix lỗi cơ bản ban đầu

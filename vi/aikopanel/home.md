# AikoPanel

- Bảng điều khiển Aiko là bảng điều khiển riêng tư dành cho nhân viên của Aiko.
- Bảng điều khiển Aiko được tạo bởi [Aiko](https://aikocute.tech) 
- Địa chỉ cài đặt Panel [AikoPanelv3](https://github.com/AikoPanel/AikoPanel)
- Sử dụng backend Aiko-Server [Aiko-Server](https://github.com/AikoPanel/AikoServer) với loại AikoPanel
- Và lưu ý AikoPanel không Free

## Nhật kí thay đổi của AikoPanel Verison 3

### v3.0.7 - DEV

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

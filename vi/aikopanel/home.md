# AikoPanel

- Bảng điều khiển Aiko là bảng điều khiển riêng tư dành cho nhân viên của Aiko.
- Bảng điều khiển Aiko được tạo bởi [Aiko](https://aikocute.tech) 
- Địa chỉ cài đặt Panel [AikoPanelv3](https://github.com/AikoPanel/AikoPanel)
- Sử dụng backend Aiko-Server [Aiko-Server](https://github.com/AikoPanel/AikoServer) với loại AikoPanel
- Và lưu ý AikoPanel không Free

## Demo AikoPanel ( Phiên bản thử nghiệm )
- [AikoPanel - Nguời dùng](https://aikopanel.com) - Tài khoản: `admin@aikopanel.com` - Mật khẩu: `12345678`
- [AikoPanel - Nhân Viên ( Cộng Tác Viên )](https://aikopanel.com/ctvaikopanel) - Tài khoản: `admin@aikopanel.com` - Mật khẩu: `12345678`
- [AikoPanel - Admin](https://aikopanel.com/aikopanel) - Tài khoản: `admin@aikopanel.com` - Mật khẩu: `12345678`

**Lưu ý:** Đây là phiên bản thử nghiệm, có thể có nhiều lỗi, nếu bạn gặp lỗi, vui lòng tạo một vấn đề trên Github.

## Nhật kí thay đổi của AikoPanel Verison 3

### v3.2.1 ( Đang phát triển )

### v3.2.0
- **Fix: email payments success**: Fix lỗi email khi người dùng thanh toán thành công.
- **Fix: Lỗi Unblock TàiML**: Fix lỗi không unblock được TàiML.
- **Feat: Hiển thị Ip**: Hiển thị Ip của người dùng khi đăng nhập vào web lần cuối cùng.
- **To: Add payment callback error logging**: Thêm lỗi ghi nhận lỗi gọi lại thanh toán.
- **feat: Added Command (php artisan log:export) export log command**: Thêm lệnh xuất log.
- **fix: Fix multiple possible transaction security issues**: Sửa nhiều vấn đề bảo mật giao dịch có thể xảy ra.
- **feat: Add subscription address to support [*-*] expression**: Thêm địa chỉ đăng ký để hỗ trợ biểu thức [*-*].
- **Refactor: ClientController**: Tối ưu hóa ClientController.
- **Refactor Sing-box config and Clash config**: Tối ưu hóa cấu hình Sing-box và Clash.
- **Refactor ServerInfoHandler**: Tối ưu hóa ServerInfoHandler.
- **Fix: Overdue on Singbox**: Fix lỗi hết hạn trên Singbox.
- **New: Support Change Config Sing-box**: Hỗ trợ thay đổi cấu hình Sing-box.

### v3.1.6
- **Tái cấu trúc phương thức đặt lại băng thông**: Cho phép admin có thể đặt lại băng thông của từng người dùng.
- **Fix lỗi URL ứng dụng sing-box**: Fix lỗi URL ứng dụng sing-box.
- **Chỉ cho phép install với git**: Chỉ cho phép install với git để tránh lỗi khi cài đặt (aaPanel).
- **Sửa lỗi Version Hysteria 1.0.0**: Sửa lỗi Version Hysteria v1
- **Fix lỗi truy cập vào trang nhân viên**: Fix lỗi truy cập vào trang nhân viên.
- **Cập nhật thêm xoá người dùng tự động**: Có thể tự động xoá người có gói hết hạn trên 60 ngày không hoạt động và không login vào web.
- **Thay đổi phương thức báo cáo doanh thu tới quản trị viên**: Thay đổi phương thức báo cáo doanh thu tới quản trị viên.
- **Thêm phương thức đặt giá trị SNI mới**: Thêm phương thức đặt giá trị SNI mới và đã cập nhật trong hướng dẫn.
- **Thêm một số phương thức tuỳ chỉnh SNI nhanh hơn**: Thêm một số phương thức tuỳ chỉnh SNI nhanh hơn.
- **Hiển thị phương thức khi có update về Database**: Hiển thị phương thức khi có update về Database.
- **Thay đổi thứ tự ưu tiên về việc sắp xếp máy chủ**: Thay đổi thứ tự ưu tiên về việc sắp xếp máy chủ ưu tiên TLS trước.
- **Fix lỗi thông tin hiển thị khi người dùng cập nhật liên kết đăng kí**: Fix lỗi thông tin hiển thị khi người dùng cập nhật liên kết đăng kí ( cụ thể là SNI ).
- **Hỗ trợ giá trị SNI sẵn khi set SNI theo gói**: Hỗ trợ giá trị SNI sẵn khi set SNI theo gói.
- **Fix lỗi host trên V2rayN**: Fix lỗi host trên V2rayN.
- **Thêm thông báo tới Telegram**: Thêm thông báo tới Telegram khi có người dùng hết hạn gói hoặc có mức lưu lượng vượt quá 80%.
- **Fix lỗi lưu trữ Ipv6**: Fix lỗi lưu trữ Ipv6.
- **Gỡ ban `TàiML`**: TàiML đã ăn năn và xin lỗi rất nhiều về việc đã làm, nên mình đã gỡ ban cho anh ấy.

### v3.1.5
- **Hỗ trợ app V2Box**: Hỗ trợ app V2Box.
- **Fix lỗi update khi đổi SNI**: Fix lỗi update khi đổi SNI.
- **Fix lỗi tính toán giá trị băng thông**: Fix lỗi tính toán giá trị băng thông.
- **Fix trojan WS và GRPC**: Fix trojan WS và GRPC trên Qx, Loon và Surge.
- **Hiển thị số lần lấy APPLEID**: Hiển thị số lần lấy APPLEID.
- **Tái cấu trúc config Admin Page** Tái cấu trúc config Admin Page để cải thiện hiệu suất và khả năng sử dụng.
- **Thêm Application Page cho người dùng**: Thêm Application Page cho người dùng giúp người dùng có thể tải xuống ứng dụng của mình nhanh hơn và dễ dàng hơn.


### v3.1.4
- **Hỗ trợ Trojan (WS) cho Loon, QuantumultX và Surge**: Hỗ trợ Trojan (WS) cho Loon, QuantumultX và Surge.
- **Tối ưu giao diện người dùng**: Tối ưu hóa giao diện người dùng.
- **Tái cấu trúc config Admin Page**: Tái cấu trúc config Admin Page để cải thiện hiệu suất và khả năng sử dụng.
- **Sửa lỗi thống kê khi xoá người dùng ở Admin**: Sửa lỗi thống kê khi xoá người dùng ở Admin.
- **Cập nhật hỗ trợ app V2rayNG tốt hơn**: Cập nhật hỗ trợ app V2rayNG tốt hơn.
- **Hỗ trợ app Streisand**: Hỗ trợ app Streisand.

### v3.1.3
- **Sửa lỗi**: Sửa lỗi trong phiên bản trước.
- **Tái cấu trúc SNI Plan**: Tái cấu trúc SNI Plan để cải thiện hiệu suất và khả năng sử dụng.
- **Thay đổi cấu trúc Traffic**: Tối ưu hóa cấu trúc traffic để cải thiện hiệu suất và khả năng sử dụng.
- **Thêm tìm kiếm Nhân viên**: Thêm tìm kiếm Nhân viên để quản trị viên có thể tìm kiếm nhân viên của mình.

### v3.1.2
- **Sửa lỗi**: Sửa lỗi trong phiên bản trước.
- **Tái cấu trúc AutoDNS**: Tái cấu trúc AutoDNS để cải thiện hiệu suất và khả năng sử dụng.
- **Tái cấu trúc Backup Database**: Tái cấu trúc lệnh sao lưu cơ sở dữ liệu để cải thiện hiệu suất và khả năng sử dụng.

### v3.1.1
- **Quản lý IP kết nối của người dùng**: Thêm tính năng quản lý IP kết nối của người dùng, cho phép quản trị viên xem và quản lý IP kết nối của người dùng.
- **Thêm trang Nhân viên**: Thêm trang Nhân viên để quản trị viên có thể quản lý nhân viên của mình.
- **Fix lỗi**: Sửa lỗi trong phiên bản trước. 

### v3.1.0
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
- **Trang người dùng**: Tối ưu hóa giao diện người dùng

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

# Node (Nút)

Bài viết này sẽ giải đáp một số câu hỏi bạn cần biết để sử dụng AikoPanel để cấu hình các nút.

## Giao thức được hỗ trợ bởi AikoPanel

AikoPanel hiện hỗ trợ các giao thức sau:

- Shadowsocks
- Vmess
- VLESS
- Trojan
- Hysteria

## Các ứng dụng hỗ trợ đăng ký

Đăng ký tự động ☑️: UA được mang theo bởi máy khách khi yêu cầu cho phép AikoPanel biết loại máy khách để xử lý.
Đăng ký tự động: Máy khách yêu cầu mà AikoPanel không thể nhận diện yêu cầu đó cần mang mã xác định được chỉ định, ví dụ như shadowrocket, vui lòng thêm sau khi đăng ký ❌`&flag=shadowrocket` , mã xác định cụ thể có thể xem trong danh sách máy khách.

|  Máy khách   | Shadowsocks | Vmess | VLESS | Trojan | Hysteria | Đăng ký tự động |      Mã xác định       |
| :----------: | :---------: | :---: | :---: | :----: | :------: | :-------------: | :--------------------: |
| Shadowrocket |     ✅      |  ✅   |  ✅   |   ✅   |    ✅    |       ✅        |      shadowrocket      |
| Quantumult X |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |       ✅        | quantumult%20x, qxping |
|    Stash     |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |       ✅        |         stash          |
|    Clash     |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |       ✅        |         clash          |
|  Surfboard   |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |       ✅        |       surfboard        |
|  Kitsunebi   |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |       ❌        |       kitsunebi        |
|    Surge     |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |       ✅        |         surge          |
|    Stash     |     ✅      |  ✅   |  ❌   |   ✅   |    ❌    |       ✅        |         stash          |
|   Sing-box   |     ✅      |  ✅   |  ✅   |   ✅   |    ✅    |       ✅        |        sing-box        |

## Sự khác biệt giữa cổng kết nối và cổng dịch vụ là gì?

Cổng kết nối là cổng mà người dùng sử dụng để kết nối, và cổng dịch vụ là cổng được sử dụng để cung cấp dịch vụ cho nút. Giả sử bạn có một máy chủ trung gian chuyển tiếp dữ liệu từ cổng 1234 của máy chủ A đến cổng 4567 của máy chủ B, sau đó người dùng kết nối với máy chủ A và dịch vụ được triển khai trên máy chủ B.

## Mối quan hệ giữa nút cha và nút con

Thường, nó chỉ được sử dụng trong trường hợp đa vào đơn ra (nhiều vào đơn ra).

Nút cha
nút cha được sử dụng bởi máy chủ để có được cấu hình nút và kết nối của máy khách, giả sử rằng máy chủ chính thức được sử dụng, chỉ cần thực hiện cấu hình nút trên AikoPanel, và không cần phải cấu hình thêm trên phía máy chủ, và cấu hình sẽ tự động nhận được triển khai bằng một cú nhấp chuột từ AikoPanel.

Nút con
nút con kế thừa trạng thái của nút cha để hiển thị trạng thái nút chính xác cho người dùng, và cấu hình tham số chỉ được sử dụng cho kết nối máy khách và sẽ không tương tác với máy chủ. Bộ nhân nút đồng bộ với nút cha.

Ví dụ về chuyển tiếp Giả sử tôi cấu hình cổng 443 cho đầu đất, sau đó tôi trước tiên cấu hình máy chủ đầu đất trên nút cha và đảm bảo rằng nó có thể kết nối đến đầu đất, sau đó chúng tôi chuyển tiếp cổng trung gian 10443 đến cổng đất 443, sau đó tôi chỉ cần sao chép một nút con để thay đổi địa chỉ thành địa chỉ trung gian, và cổng thành 10443 cho phép người dùng kết nối đến trung gian.

## Nhóm quyền

Nhóm quyền giống như một cầu nối giữa người dùng và các nút, và khi triển khai máy chủ, máy chủ sẽ lấy người dùng từ nhóm quyền được cấu hình bởi nút. Người dùng cũng chỉ hiển thị các nút có quyền khi đăng ký.

## Ý nghĩa của chỉ số trạng thái nút

Màu xanh: Mọi thứ đều ổn với nút
Màu vàng: Nút có sẵn, nhưng không sử dụng hoặc đã sử dụng nhưng không báo cáo dữ liệu cho AikoPanel Màu đỏ: Nút không khả dụng và nút không nhận dữ liệu từ AikoPanel

## Định tuyến

Trong phiên bản 1.7.0, chúng tôi đã thêm định tuyến để thay thế kiểm tra. Khi luật cụ thể được phù hợp, nó thực hiện hành động cụ thể.

Ví dụ, nếu tôi muốn chặn truy cập vào example.com hoặc `access` chứa tên miền `example.com`, sau đó khi tạo một đường dẫn, điền tên miền và hành động là Forbidden.example.com

Sau khi đường dẫn được tạo, bạn cần cấu hình nút để áp dụng nó.

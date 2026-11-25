# Website Công ty TNHH Nguyên Thanh Đạt

Website tĩnh responsive (HTML/CSS/JavaScript), có thể đưa lên GitHub Pages hoặc hosting thông thường. Không cần cài đặt framework hay cơ sở dữ liệu.

## Cấu trúc

- `index.html`: nội dung website một trang.
- `styles.css`: hệ màu, typography và giao diện nền.
- `layout-refinement.css`: căn chỉnh lưới, khoảng cách, thanh điều hướng và bố cục responsive cho desktop/tablet/mobile.
- `script.js`: bảng giá có chức năng tìm kiếm/lọc, menu mobile, form yêu cầu tư vấn.
- `assets/logo-td.png`: logo được trích từ hình ảnh trong bảng báo giá công ty cung cấp.
- `assets/favicon.svg`: biểu tượng tab trình duyệt.

## Đưa website lên GitHub Pages

1. Tạo một repository mới trên GitHub, ví dụ `nguyen-thanh-dat`.
2. Giải nén gói website và tải toàn bộ nội dung bên trong thư mục `nguyen-thanh-dat-website` lên thư mục gốc của repository. File `index.html` phải nằm ngay tại thư mục gốc.
3. Mở **Settings → Pages**.
4. Tại **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn branch `main`, folder `/(root)`, bấm **Save**.
6. Chờ GitHub Pages tạo địa chỉ website; sau đó mở đường dẫn được hiển thị tại Settings → Pages.

## Cách cập nhật thông tin

- Số điện thoại, địa chỉ, MST, email và nội dung giới thiệu: tìm trong `index.html` rồi sửa trực tiếp.
- Đơn giá/hạng mục: cập nhật mảng `priceItems` trong `script.js`.
- Màu sắc, font và kiểu thành phần: chỉnh trong `styles.css`.
- Bề rộng nội dung, căn lề, lưới các cột, khoảng cách và breakpoint responsive: chỉnh trong `layout-refinement.css`.
- Logo: thay file `assets/logo-td.png` bằng logo chính thức khác và giữ nguyên tên file, hoặc sửa đường dẫn trong `index.html`.

## Lưu ý trước khi công khai

1. Đối chiếu lại địa chỉ pháp lý/địa chỉ giao dịch, MST, hotline, email và tài khoản Zalo. File báo giá có hai cách ghi số Zalo khác nhau; website hiện dùng số `0358 294 648` theo dòng số điện thoại/Zalo đầu tiên.
2. Báo giá gốc có phần tiêu đề cột thể hiện “đã bao gồm thuế” nhưng ghi chú cuối trang lại ghi giá chưa bao gồm VAT. Website vì vậy không khẳng định đơn giá đã gồm VAT; phần thuế và tổng tiền cần được xác nhận trên báo giá chính thức.
3. Kiểm tra lại quy cách một số dòng vật tư (đặc biệt ống đồng mục 37 và kích thước Cooling pad mục 66) trước khi công bố bảng giá.
4. Website chưa kết nối hệ thống quản trị hay lưu dữ liệu khách hàng. Form liên hệ hiện tạo email `mailto:` trên thiết bị khách; để nhận thông tin trực tiếp trên website cần kết nối dịch vụ form/backend riêng.
5. Chưa đưa hình ảnh dự án, danh sách khách hàng/đối tác, chứng nhận hay nhận xét khách hàng vì chưa có tài liệu xác thực được cung cấp.

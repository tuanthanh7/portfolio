# Tổng quan dự án Portfolio Tuan Thanh

## Giới thiệu

Website portfolio cá nhân một trang, xây dựng bằng React và Vite. Trang giới thiệu hồ sơ, dự án, kỹ năng, hành trình cá nhân, chứng chỉ và liên hệ; giao diện có hiệu ứng chuyển động và bố cục thích ứng nhiều kích thước màn hình.

## Công nghệ

- React 18 và Vite 6
- GSAP/ScrollTrigger cho hiệu ứng và chuyển động theo cuộn
- Lenis cho cuộn mượt
- Lucide React cho biểu tượng
- CSS thuần trong `src/styles/global.css`

## Cấu trúc dự án

| Đường dẫn | Vai trò |
| --- | --- |
| `src/main.jsx` | Khởi chạy ứng dụng React và nạp CSS. |
| `src/App.jsx` | Ghép các phần trang, khởi tạo hoạt ảnh và quản lý dự án đang chọn. |
| `src/data/content.js` | Dữ liệu dự án, hành trình và chứng chỉ. |
| `src/sections/` | Các khu vực nội dung portfolio. |
| `src/components/` | Thanh điều hướng, con trỏ, mockup điện thoại. |
| `src/styles/global.css` | Giao diện và bố cục đáp ứng. |
| `public/assets/` | Ảnh được website sử dụng. |
| `.github/workflows/deploy.yml` | Build và triển khai lên GitHub Pages. |

## Nội dung hiện có

Portfolio đang giới thiệu hai dự án có tư liệu trong thư mục `tailieu`:

1. **JOB NETWORK**: ứng dụng di động mạng xã hội hỗ trợ tìm việc làm, theo đồ án tốt nghiệp năm 2024. Stack gồm Flutter/Dart, Lumen/PHP, MySQL, Firebase (FCM/Realtime Database/Storage), Ably, Redis và Cloudinary. Chức năng gồm bài đăng, kết nối, tìm việc, hồ sơ/CV, ứng tuyển, nhắn tin và thông báo.
2. **TECH STORE**: đồ án nhóm năm 2023 về ứng dụng di động kinh doanh sản phẩm công nghệ bằng Flutter/Dart và Lumen/PHP. Báo cáo cũng mô tả MySQL, Firebase, API Postman, chức năng mua hàng và website quản trị.

Phần hành trình dùng ảnh tốt nghiệp, nhận khen thưởng học lực xuất sắc và hội thảo an ninh mạng. Carousel chứng chỉ có bốn chứng nhận: VNNIC về tên miền .vn và ba khóa học thuộc chương trình Bệ phóng Việt Nam Digital 4.0.

## Chạy tại máy

Cài Node.js và npm, sau đó chạy:

```bash
npm install
npm run dev
```

Lệnh hữu ích:

- `npm run build`: tạo bản triển khai trong `dist`.
- `npm run preview`: xem thử bản build.

## Thay đổi nội dung và ảnh

- Sửa dữ liệu dự án, hành trình và chứng chỉ tại `src/data/content.js`.
- Sửa từng khu vực tại `src/sections/`.
- Cập nhật email và mạng xã hội trong `src/sections/Contact.jsx`.
- Ảnh dự án đã chọn được lưu tại `public/assets/projects/featured/`; ảnh hành trình và chứng chỉ nằm trong các thư mục tương ứng dưới `public/assets/`.
- Tài liệu và ảnh nguồn trong `tailieu/` được giữ nguyên.

## Lưu ý

- Các liên kết GitHub/demo dự án chưa có địa chỉ thật nên hiện không dẫn tới trang ngoài.
- Email và liên kết mạng xã hội ở phần liên hệ vẫn là giá trị mẫu, cần thay trước khi công bố.
- Vite hiện dùng `base: "/portfolio/"` trong `vite.config.js`. Nếu tên repository GitHub Pages khác, cập nhật `base` và rà soát đường dẫn tài nguyên.

## Triển khai

Workflow `.github/workflows/deploy.yml` chạy khi có thay đổi trên nhánh `main` hoặc khi được kích hoạt thủ công. Quy trình build thư mục `dist` rồi triển khai GitHub Pages.

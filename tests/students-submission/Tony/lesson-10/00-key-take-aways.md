# PAGE OBJECT MODEL (POM)

## 1. So sánh TypeScript với JavaScript

* **Định nghĩa:** TypeScript là **superset** (tập hợp mẹ / bản mở rộng) của JavaScript.
* **Lý do ra đời:** JavaScript có tính chất "dễ dãi" (loosely typed) dẫn đến việc dễ phát sinh nhiều lỗi trong quá trình viết code. TypeScript được tạo ra "khó tính" hơn (strict typing) nhằm kiểm soát và giảm thiểu tối đa các lỗi này.
* **Cơ chế hoạt động:** Code viết bằng TypeScript không thể chạy trực tiếp mà **cần được biên dịch (compile) sang JavaScript** trước khi thực thi.
* **Cú pháp lệnh cơ bản:**
  * Cài đặt TypeScript: `npm install -d typescript`
  * Biên dịch file: `npx tsc <file_path>`

**Các tính năng vượt trội:**

* Có hệ thống kiểu dữ liệu rõ ràng (Static Typing).
* Phát hiện lỗi sớm ngay trong quá trình viết code (Compile-time errors) thay vì đợi đến lúc chạy (Runtime).
* Hỗ trợ Interface & Type alias để định nghĩa cấu trúc dữ liệu.
* Hỗ trợ đầy đủ các tính năng của lập trình hướng đối tượng (OOP features), Generic, v.v.

**Định nghĩa kiểu dữ liệu (Define type):** * Trong TypeScript, người dùng định nghĩa kiểu dữ liệu thông qua từ khóa `type` hoặc `interface`. Việc này giúp mã nguồn trở nên rõ ràng, tường minh và dễ đọc hơn.

* *Ví dụ so sánh:*
  * JavaScript: `const jsName = "Phong"` (không khai báo kiểu).
  * TypeScript: `const tsName: string = "Phong"` (bắt buộc hoặc khuyến khích định nghĩa rõ kiểu `string`).

## 2. Class & Tính kế thừa (Inheritance) trong TypeScript

* **Khái niệm Class:** Là một bản thiết kế (blueprint) để tạo ra các đối tượng (object). Class định nghĩa sẵn các thuộc tính (properties) và phương thức (methods).
* **Tính kế thừa (`extends`):** * Cho phép một **Class con (Child class)** thừa hưởng lại tất cả các thuộc tính và phương thức từ **Class cha (Parent class)** mà không cần viết lại mã nguồn.
  * Giúp tối ưu hóa code, tăng khả năng tái sử dụng (reusability) và dễ dàng bảo trì.
* **Từ khóa `super`:** * Khi Class con có hàm khởi tạo (`constructor`), bắt buộc phải gọi `super()` đầu tiên để kích hoạt hàm khởi tạo của Class cha.
  * `super` cũng được dùng để gọi các phương thức của Class cha từ Class con.

## 3. Mô hình Page Object Model - POM

* **Vấn đề khi viết Code thông thường (Trang 26 - Trang 28):** * Định vị phần tử (selectors) và kịch bản kiểm thử (test steps) bị trộn lẫn trong một file test.
  * Khi giao diện (UI) thay đổi, người viết phải tìm và sửa thủ công ở rất nhiều nơi, dễ dẫn đến sai sót và tốn thời gian.
* **Giải pháp POM (Page Object Model):**
  * Là một mô hình thiết kế (Design Pattern) phổ biến trong Automation Test.
  * **Cơ chế:** Mỗi trang web (hoặc một thành phần lớn trên trang) sẽ được đại diện bởi một **Class** riêng biệt (gọi là Page Object).
  * **Tách biệt rõ ràng:**
    * File Page Object: Nơi lưu trữ các bộ chọn (selectors/locators) và các hàm hành động trên trang đó (như `clickLogin()`, `inputUsername()`).
    * File Test: Chỉ tập trung gọi các hàm hành động và thực hiện kiểm tra kết quả (Assertions), tuyệt đối không chứa selector trực tiếp.

## 4. Thực hành áp dụng POM vào Playwright TypeScript

* **Quy trình triển khai:**
  1. Tạo thư mục `pages/` để chứa các file Class đại diện cho các trang (ví dụ: `LoginPage.ts`, `DashboardPage.ts`).
  2. Trong file Test (`.spec.ts`), tiến hành khởi tạo đối tượng từ các Class này bằng từ khóa `new`.
  3. Truyền biến `page` của Playwright vào hàm khởi tạo (`constructor`) của Class để các hàm bên trong Class có thể điều khiển trình duyệt.
* **Lợi ích cốt lõi:** Code ngắn gọn, sạch sẽ, đọc giống như ngôn ngữ tự nhiên và khi UI thay đổi chỉ cần cập nhật duy nhất tại file Page tương ứng.

# PLAYWRIGHT TESTS

## 1. Test Group / Suite (`test.describe`)

* **Khái niệm:** Test suite là một tập hợp các test cases (bài kiểm thử) có liên quan đến nhau.
* **Mục đích:** Giúp gom nhóm các bài test lại để dễ dàng quản lý, cấu trúc mã nguồn gọn gàng và dễ bảo trì.
* **Cú pháp:** Sử dụng `test.describe('<tên suite>', async () => { ... })` để bọc các hàm `test` nhỏ hơn bên trong.

**Ví dụ:**

**TypeScript**

```
import { test, expect } from '@playwright/test';

test.describe('Chức năng Đăng Nhập', async () => {
  test('Đăng nhập thành công với tài khoản đúng', async ({ page }) => {
    // code xử lý test 1...
  });

  test('Đăng nhập thất bại khi sai mật khẩu', async ({ page }) => {
    // code xử lý test 2...
  });
});
```

## 2. Test Hooks trong Playwright

Hooks là các hàm đặc biệt được kích hoạt tự động tại các thời điểm khác nhau xung quanh vòng đời chạy của các bài test nhằm chuẩn bị môi trường (ví dụ: đăng nhập, khởi tạo dữ liệu) hoặc dọn dẹp sau khi test xong.

Playwright cung cấp 4 loại hooks chính:

* **`beforeAll`:** Chạy **1 lần duy nhất** trước khi tất cả các bài test trong suite bắt đầu.
* **`beforeEach`:** Tự động chạy lại **trước mỗi bài test** (Test 1 chạy -> beforeEach chạy; Test 2 chạy -> beforeEach lại chạy).
* **`afterEach`:** Tự động chạy lại **sau mỗi bài test** để dọn dẹp dữ liệu hoặc đóng trạng thái.
* **`afterAll`:** Chạy **1 lần duy nhất** sau khi toàn bộ các bài test trong suite đã hoàn thành.

## 3. Playwright Assertion (Khẳng định / Xác nhận)

### Khái niệm & Vai trò

* **Định nghĩa:** Assertion là câu lệnh dùng để kiểm tra xem kết quả thực tế trên ứng dụng có đúng với mong đợi (expected) của bạn hay không.
* **Tầm quan trọng:** Nếu không có assertion, bạn chỉ đang thực hiện hành động (click, điền text) chứ không thể biết bài test đó thành công hay thất bại.
* **Cú pháp chung:** Sử dụng hàm `expect` được import từ `@playwright/test`.

### Phân loại Assertion

Playwright chia assertion làm hai nhóm lớn:

#### A. Generic Assertions (Khẳng định chung)

Dùng để so sánh các giá trị logic thông thường (biến, mảng, chuỗi), không tác động trực tiếp vào giao diện web.

* `expect(value).toBe(expected);` — Kiểm tra giá trị bằng nhau.
* `expect(array).toHaveLength(3);` — Kiểm tra độ dài của mảng.
* `expect(string).toContain('text');` — Kiểm tra chuỗi chứa ký tự mong muốn.

#### B. Web-first Assertions (Khẳng định giao diện - Có Auto-waiting)

Đây là tính năng cực kỳ mạnh mẽ của Playwright. Nó tự động đợi (chờ đợi linh hoạt, tối đa 5 giây) cho đến khi phần tử trên trang web đạt được trạng thái mong muốn mới đưa ra kết quả (thay vì bắt ứng dụng phải `sleep` cứng một khoảng thời gian).

Dưới đây là các Web-first assertion phổ biến được chia theo mục đích:

| **Phân loại**                                        | **Câu lệnh ví dụ**                                                                                                                                                                                                                                              | **Ý nghĩa**                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Trạng thái phần tử**``*(Element State)* | `await expect(locator).toBeVisible();``await expect(locator).toBeHidden();``await expect(locator).toBeEnabled();``await expect(locator).toBeDisabled();``await expect(locator).toBeChecked();``await expect(locator).toBeFocused();` | Kiểm tra phần tử hiển thị``Kiểm tra phần tử bị ẩn``Kiểm tra phần tử có thể tương tác``Kiểm tra phần tử bị vô hiệu hóa``Kiểm tra xem checkbox/radio đã chọn chưa``Kiểm tra phần tử có đang được focus không |
| **Văn bản & Nội dung**``*(Text & Content)* | `await expect(locator).toContainText('Hello');``await expect(locator).toHaveText('Welcome');``await expect(locator).toHaveText(/welcome/i);``await expect(locator).toHaveText(['Item 1', 'Item 2']);`                                              | Phần tử có chứa chữ 'Hello'``Phần tử có chữ chính xác là 'Welcome'``So sánh chữ bằng Regex (không phân biệt hoa thường)``Kiểm tra danh sách nhiều phần tử có text tương ứng                                                        |
| **Thuộc tính**``*(Attributes & Properties)* | `await expect(locator).toHaveAttribute('href', '/about');``await expect(locator).toHaveClass('active');``await expect(locator).toHaveValue('john@example.com');``await expect(locator).toHaveCount(5);`                                            | Kiểm tra thuộc tính href có giá trị chỉ định``Kiểm tra phần tử có class là 'active' không``Kiểm tra giá trị trong ô Input``Kiểm tra số lượng phần tử tìm được bằng 5                                                              |
| **Trang web**``*(Page Assertions)*            | `await expect(page).toHaveURL('https://example.com/');``await expect(page).toHaveTitle('My App');`                                                                                                                                                               | Kiểm tra đường dẫn URL hiện tại của trang``Kiểm tra tiêu đề (Title) của trang web                                                                                                                                                                                |

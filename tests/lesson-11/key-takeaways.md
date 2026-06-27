# API Testing - Kiểm thử API bằng Playwright (Playwright API Testing)

Playwright hỗ trợ kiểm thử API trực tiếp trong mã nguồn thông qua request fixture mà không cần giả lập hay thao tác trên trình duyệt.

test("name", async ({ request }) => {
  const response = await request.get('URL');
});

* **Xử lý dữ liệu trả về:** Có thể lấy kết quả dưới dạng văn bản thuần bằng `response.text()` hoặc dạng đối tượng bằng `response.json()` để thuận tiện cho việc kiểm tra (assert).
* **Các câu lệnh kiểm tra (Assertions):**
  * Kiểm tra mã trạng thái thành công: `expect(response.status()).toBe(200);`
  * Kiểm tra số lượng phần tử dữ liệu trả về: `expect(responseJSON.todos.length).toBe(7);`

**Luồng xác thực (Authentication Flow) trong API**
Đối với các API yêu cầu bảo mật, luồng xử lý bằng Playwright sẽ gồm 2 bước:

Đăng nhập (Login): Gửi username và password tới API đăng nhập để nhận về một chuỗi mã xác thực (token).

Gửi Request tiếp theo: Đính kèm chuỗi token vừa nhận được vào phần Header của các API phía sau. Nếu không truyền header này, hệ thống sẽ báo lỗi (ví dụ: lỗi 401 Unauthorized).

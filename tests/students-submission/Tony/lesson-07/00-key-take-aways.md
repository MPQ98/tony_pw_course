# SELECTOR ADVANCE

## 1. Mối quan hệ trong cây DOM (Document Object Model)

Các thuật ngữ mô tả mối quan hệ giữa các nút (nodes) trên cây cấu trúc DOM dựa trên một nút hiện tại (self):

* **Self:** Nút hiện tại được chọn làm mốc.
* **Parent (Cha):** Nút nằm ngay phía trên trực tiếp của nút hiện tại.
* **Children (Con):** Các nút nằm ngay phía dưới trực tiếp của nút hiện tại.
* **Ancestor (Tổ tiên):** Bao gồm cha, cha của cha (ông),... ngược lên trên.
* **Descendant (Hậu duệ):** Bao gồm tất cả các nút con, cháu, chắt,... ở cấp dưới.
* **Sibling (Anh em):** Các nút có cùng cấp độ và có chung một nút cha.
* **Following (Theo sau):** Gồm tất cả các nút ở phía bên tay phải (phía sau) của nút hiện tại trên tài liệu, ngoại trừ các nút con của nó.
* **Preceding (Phía trước):** Gồm các nút ở phía bên tay trái (phía trước) của nút hiện tại, ngoại trừ các nút tổ tiên (ancestor).
* **Following-sibling (Anh em phía sau):** Là các nút vừa là anh em (cùng cha), vừa nằm ở phía sau nút hiện tại.
* **Preceding-sibling (Anh em phía trước):** Là các nút vừa là anh em (cùng cha), vừa nằm ở phía trước nút hiện tại.

## 2. Phương thức Trục XPath (XPath Axes Methods)

**Định nghĩa & Công dụng:** Là các phương pháp điều hướng và chọn các nút trong cây DOM dựa trên vị trí tương đối giữa chúng. Phương pháp này giúp tìm kiếm phần tử linh hoạt hơn nhiều so với việc chỉ dùng đường dẫn tuyệt đối hoặc tương đối thông thường.

**Cú pháp chung:** `//tag/relationship::tagname[@attr=’value’]`

### Các loại trục XPath nâng cao & Ví dụ chi tiết:

* **Wildcard (`*`):** Khớp với tất cả các loại thẻ (Ví dụ: `//*` khớp toàn bộ thẻ trên trang).
* **child:** Tìm các con trực tiếp của nút hiện tại.
  * *Ví dụ:* `//form[@id='test-form']/child::button` (Tìm các button là con trực tiếp của form).
* **descendant:** Tìm tất cả con cháu (mọi cấp dưới) của nút hiện tại^^.
  * *Ví dụ:* `//form[@id='test-form']/descendant::input` (Tìm tất cả các ô input nằm bên trong form).
* **parent:** Tìm nút cha trực tiếp.
  * *Ví dụ:* `//button[text()='Create Test Case']/parent::form` (Tìm thẻ form cha của nút button tương ứng).
* **ancestor:** Tìm các nút tổ tiên ở cấp trên.
  * *Ví dụ:* `//button[@class='btn-edit']/ancestor::table` (Từ nút Edit tìm ngược lên thẻ table chứa nó).
* **following-sibling:** Tìm các nút anh em cùng cha nằm phía sau.
  * *Ví dụ:* `//label[@for='testName']/following-sibling::input` (Tìm ô input cùng cấp đứng ngay sau nhãn label).
* **preceding-sibling:** Tìm các nút anh em cùng cha nằm phía trước.
  * *Ví dụ:* `//button[@class='btn-reset']/preceding-sibling::button` (Tìm nút button đứng ngay trước nút reset).
* **following:** Tìm tất cả các nút nằm phía sau nút hiện tại trong toàn bộ document (không tính con cháu).
  * *Ví dụ:* `//h2[text()='Test Cases List']/following::button[@class='btn-run']`
* **preceding:** Tìm tất cả các nút nằm phía trước nút hiện tại trong toàn bộ document (không tính tổ tiên).
  * *Ví dụ:* `//h2[text()='Test Execution Results']/preceding::td[@class='priority-high']`
* **ancestor-or-self:** Tìm các nút tổ tiên hoặc chính bản thân nút đó.
* **descendant-or-self:** Tìm các nút con cháu hoặc chính bản thân nút đó.

## 3. Các phương thức bổ trợ nâng cao trong XPath (XPath Advance Methods)

* **Truy cập thuộc tính (`@attribute`):** Sử dụng ký tự `@` để định vị qua thuộc tính. Cú pháp: `//tagname[@attribute='value']`.
* **Toán tử điều kiện (AND & OR):** * `AND`: Tất cả các điều kiện đưa ra phải đúng (`//element[@condition1 and @condition2]`).
  * `OR`: Chỉ cần một trong các điều kiện đúng (`//element[@condition1 or @condition2]`).
* **Hàm định vị theo Text (`text()`):** Lấy chính xác chuỗi văn bản trực tiếp bên trong phần tử. Cú pháp: `//element[text()='exact text']`.
* **Hàm chuẩn hóa khoảng trắng (`normalize-space()`):** Tự động loại bỏ các khoảng trắng thừa ở đầu, cuối và giữa đoạn văn bản^^. Cú pháp: `normalize-space(string)`.
* **Hàm tìm kiếm chuỗi con (`contains()`):** Tìm phần tử có chứa một phần văn bản hoặc thuộc tính mà không cần phải khớp chính xác hoàn toàn. Cú pháp:
  * `//element[contains(@attribute, 'substring')]`
  * `//element[contains(text(), 'substring')]`

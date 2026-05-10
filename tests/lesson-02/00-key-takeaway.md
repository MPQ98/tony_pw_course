# Các cú pháp git đã học
## Bảng tổng hợp các câu lệnh Git cơ bản

| Bước | Câu lệnh | Ý nghĩa | Cách dùng |
| :--- | :--- | :--- | :--- |
| **1** | `git init` | Khởi tạo repo local cho thư mục đang đứng. <br>Đưa file từ local vào vùng Working Directory. | Chỉ cần chạy lệnh 1 lần để khởi tạo. <br>Trường hợp báo đã tồn tại -> Không ảnh hưởng. |
| **1.1** | `git config --global user.name "[Họ tên]"` | Cấu hình định danh tên user. | `--global`: Setup cho tất cả thư mục. <br>Không có `--global`: Chỉ setup cho thư mục đang đứng.<br>*Chỉ chạy khi cần cấu hình* |
| **1.2** | `git config --global user.email "[Email]"` | Cấu hình định danh email user. | `--global`: Setup cho tất cả thư mục. <br>Không có `--global`: Chỉ setup cho thư mục đang đứng.<br>*Chỉ chạy khi cần cấu hình* |
| **2** | `git add` | Đưa file vào vùng Staging. | `git add [tên file viết liền không dấu]`: Add file chỉ định. <br>`git add "[tên file viết có dấu]"`: Add file chỉ định.<br>`git add .`: Add toàn bộ file trong thư mục. |
| **3** | `git commit -m "[Message]"` | Đưa file vào vùng Repository. | `[Message]` = `<type>: <short_description>` <br>Type: chore (xóa), feat (thêm), fix (sửa).<br>Short_description: Mô tả. <br>*Ghi tất cả bằng chữ thường*|
| **4** | `git push origin [branch]` | Push code lên Github/Server. | `[branch]`: Nhánh đang đứng (Ví dụ: main, master...). |
| **\*** | `git status` | Kiểm tra trạng thái của các file (Working Directory - Màu đỏ / Staging - Màu xanh). | Chạy lệnh: `git status` |
| **\*** | `git log` | Kiểm tra nhật ký commit từ mới đến cũ. | Chạy lệnh: `git log` |
# To be continued
import { test, expect } from '@playwright/test';
/*------------------------------------------------------------------------*/
test.describe('API Testing', async () => {
    const baseURL = 'https://material.playwrightvn.com/api/user-management/v1';
    /*------------------------------------------------------------------------*/
    test('TC01 - Login successfully', async ({ request }) => {
        await test.step('Step 1: Đăng nhập vào tài khoản admin thành công', async () => {
            const response = await request.post(`${baseURL}/login.php`, {
                data: {
                    email: 'admin@example.com',
                    password: 'password'
                }
            });
            // Khẳng định status code = 200
            expect(response.status()).toBe(200);
            // Kiểm tra có access token trả về trong body
            const responseBody = await response.json();
            expect(responseBody).toHaveProperty('data.token');
            expect(responseBody.data.token).not.toBeNull();
        });

        await test.step('Step 2: Đăng nhập vào tài khoản user thành công', async () => {
            const response = await request.post(`${baseURL}/login.php`, {
                data: {
                    email: 'tony98@example.com',
                    password: 'password'
                }
            });
            expect(response.status()).toBe(200);
            const responseBody = await response.json();
            expect(responseBody).toHaveProperty('data.token');
            expect(responseBody.data.token).not.toBeNull();
        });
    });
    /*------------------------------------------------------------------------*/
    test('TC02 - Create user successfully', async ({ request }) => {
        // 1. Khai báo biến ở đầu test case để các bước (Step) dùng chung được dữ liệu
        let adminToken: string = '';
        let userEmail: string = '';
        let userID: number | undefined;

        await test.step('Step 1: Đăng nhập vào tài khoản admin để lấy token', async () => {
            const response = await request.post(`${baseURL}/login.php`, {
                data: {
                    email: 'admin@example.com',
                    password: 'password'
                }
            });
            expect(response.status()).toBe(200);

            const loginBody = await response.json();
            adminToken = loginBody.data.token;
        });

        await test.step('Step 2: Tạo user mới', async () => {
            userEmail = `tony1_${Date.now()}@example.com`;

            const response = await request.post(`${baseURL}/users.php`, {
                headers: {
                    'Authorization': `Bearer ${adminToken}`
                },
                data: {
                    name: 'Tony1',
                    email: userEmail,
                    password: 'password',
                    facebook: 'https://facebook.com/newuser',
                    avatar: 'https://i.pravatar.cc/150?img=20',
                    hobbies: 'Reading, Coding',
                    role: "user"
                }
            });
            expect(response.status()).toBe(201);

            const responseBody = await response.json();
            // Lưu lại ID để phục vụ bước xoá ở sau
            userID = responseBody.user.id;
        });

        await test.step('Step 3: Kiểm tra user mới tạo', async () => {
            const response = await request.get(`${baseURL}/users.php`, {
                headers: {
                    'Authorization': `Bearer ${adminToken}`
                },
            });
            expect(response.status()).toBe(200);

            const listBody = await response.json();
            const userList = listBody.users;

            // Kiểm tra email tồn tại trong danh sách
            const isUserInList = userList.some((user: any) => user.email === userEmail);
            expect(isUserInList).toBe(true);
        });

        if (userID) {
            await test.step('Post-condition: Xoá user vừa tạo', async () => {
                const deleteResponse = await request.delete(`${baseURL}/users.php`, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`
                    },
                    data: {
                        id: userID // Truyền đúng định dạng số/chuỗi của ID
                    }
                });
                expect(deleteResponse.status()).toBe(200);
            });
        }
    });
});


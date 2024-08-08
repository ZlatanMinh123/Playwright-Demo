import { test, expect } from "@playwright/test";

// test.describe():
// Một khối mô tả các bài kiểm thử, giúp bạn nhóm các bài kiểm thử lại với nhau.
test.describe("All my tests", () => {
    // { page } là một fixture được Playwright cung cấp tự động
    // cho mỗi bài kiểm thử và hook trong test.describe.
    // Phải trả về một Promise.
    // Nó sẽ chờ cho tất cả các bài kiểm thử trong khối này hoàn thành
    // và chuyển tiếp đến bài kiểm thử tiếp theo.
    // Nếu một bài kiểm thử nào đó bị lỗi, Playwright sẽ báo lỗi và thoát khỏi test.
    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");
        await page.locator('[data-test="username"]').fill("standard_user");
        await page.locator('[data-test="password"]').fill("secret_sauce");
        await page.locator('[data-test="login-button"]').click();
        // waitForURL ?
        await page.waitForURL("https://www.saucedemo.com/inventory.html");
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });

    // "homepage":  định nghĩa một bài kiểm thử cụ thể với tên "homepage"
    test("homepage", async ({ page }) => {
        await page
            .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click();
        await page
            .locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
            .click();
        await page
            .locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
            .click();
    });

    test("logout", async ({ page }) => {
        await page.getByRole("button", { name: "Open Menu" }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
    });
});

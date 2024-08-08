import { test, expect } from "@playwright/test";

test("record demo test", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("Tuấn Minh");
    await page.locator('[data-test="username"]').press("Enter");
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill("123456");
    await page.locator('[data-test="login-button123"]').click();  // Cố tình điền sai ở đây
    await page.locator('[data-test="login-credentials"]').click();
    await page.locator('[data-test="login-credentials"]').dblclick();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="username"]').press("Tab");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();
    await page.getByRole("button", { name: "Open Menu" }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
});

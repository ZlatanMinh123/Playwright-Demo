import { test, expect } from "@playwright/test";
test("Selectors Demo", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.pause();
    // using any object property
    await page.click("id=user-name");
    await page.locator("id=user-name").fill("Edison");
    await page.locator('[id="user-name"]').fill("Einstein");

    // using CSS Selector
    // #login-button
    await page.locator("#login-button").click();

    // using XPath
    await page.locator('xpath=//input[@name="password"]').fill("minhnt1999th");
    await page.locator('//input[@name="password"]').fill("123456");

    // using Text
    await page.locator("text=LOGIN").click();
    // Sử dụng :has-text pseudo-class selector:
    // Tìm phần tử input có chứa văn bản 'LOGIN' vào click vào phần tử đó.
    await page.locator('input:has-text("LOGIN")').click();
});

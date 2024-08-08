import { test, expect } from "@playwright/test";

test("Demo Login Test 1", async ({ page }) => {
    await page.goto("https://demo.applitools.com/");
    await page.pause();
    await page.locator('[placeholder="Enter your username"]').fill("Tuấn Minh");
    await page.locator('[placeholder="Enter your password"]').fill("123456");
    await page.locator("id=log-in").click();
});

test("Demo Login 2", async ({ page }) => {
    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    await page.pause();
    await page.getByPlaceholder("Username").click();
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").click();
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { name: "Login" }).click();
    await page
        .locator("span")
        .filter({ hasText: "OCciO khaVr" })
        .locator("i")
        .click();
    await page.getByRole("menuitem", { name: "Logout" }).click();
});

test.only("Demo Login 3", async ({ page }) => {
    await page.goto("https://admin-demo.nopcommerce.com/login");
    // await page.pause();
    await page.getByLabel("Email:").click();
    await page.getByLabel("Email:").fill("admin@yourstore.com");
    await page.getByLabel("Email:").press("Tab");
    await page.getByLabel("Password:").fill("admin");
    await page.getByRole("button", { name: "Log in" }).click();
    await page.getByRole("link", { name: "Logout" }).click();

    await page.close();
});

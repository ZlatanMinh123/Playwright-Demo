import { test, expect, chromium } from "@playwright/test";

test("Slow motion and video recording demo", async () => {
    const browser = await chromium.launch({
        slowMo: 1000,
        headless: false,
    });

    const context = await browser.newContext({
        recordVideo: {
            dir: "videos/",
            size: { width: 800, height: 600 },
        },
    });

    const page = await context.newPage();

    await page.goto("https://admin-demo.nopcommerce.com/login");
    // await page.pause();
    await page.getByLabel("Email:").click();
    await page.getByLabel("Email:").fill("admin@yourstore.com");
    await page.getByLabel("Email:").press("Tab");
    await page.getByLabel("Password:").fill("admin");
    await page.getByRole("button", { name: "Log in" }).click();
    await page.getByRole("link", { name: "Logout" }).click();

    await context.close(); // Tại sao k phải page.close()?
    // context.close() đóng toàn bộ bối cảnh và tất cả các trang bên trong nó.
    // page.close() chỉ đóng một trang cụ thể.
});

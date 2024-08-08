// @ts-check
// import các hàm test và expect từ thư viện @playwright/test.
// + Hàm expect được sử dụng để tạo các khẳng định (assertions) trong kiểm thử. Nó giúp
//   bạn xác minh rằng giá trị thực tế của một biểu thức giống như giá trị mong đợi.
const { test, expect } = require("@playwright/test");

let context;
let page;

// + test.beforeAll() Hàm được cung cấp bởi Playwright để định nghĩa một khối mã
// sẽ được thực thi một lần trước khi tất cả các bài kiểm thử trong tệp hiện tại chạy.
// + {browser} lấy ra thuộc tính browser từ đối tượng được truyền vào hàm.
// browser đại diện cho phiên bản trình duyệt đã được khởi tạo bởi Playwright.
test.beforeAll(async ({ browser }) => {
  // newContext(): Đây là một hàm có sẵn trong đối tượng browser của Playwright.
  // Hàm này tạo ra một BrowserContext mới. Mỗi BrowserContext có thể chứa
  // nhiều trang (tab) và hoạt động như một phiên duyệt độc lập.
    context = await browser.newContext();
    await context.tracing.start({
        snapshots: true,
        screenshots: true,
    });
    // Tạo một trang (tab) mới khác trong cùng BrowserContext
    page = await context.newPage();
});

test.afterAll(async () => {
    await context.tracing.stop({ path: "test2_trace.zip" });
});

test("homepage has Playwright", async ({}) => {
    await page.goto("https://playwright.dev/");

    // Click the get started link.
    await page.getByRole("link", { name: "Get started" }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
        page.getByRole("heading", { name: "Installation" })
    ).toBeVisible();
});

test("Demo Test", async () => {
    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    // Create a locator
    const getStarted = page.locator("text=Get Started");

    // Expect an attribute "to be strictly equal" to the value.
    await expect(getStarted).toHaveAttribute("href", "/docs/intro");

    // Click the get started link.
    await getStarted.click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*intro/);
});

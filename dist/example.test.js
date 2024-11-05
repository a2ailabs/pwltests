"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('basic test with Aerokube Moon', async ({ page }) => {
    await page.goto('https://google.com');
    const title = await page.title();
    (0, test_1.expect)(title).toBe('google');
});

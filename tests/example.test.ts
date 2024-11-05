import { test, expect } from '@playwright/test';

test('basic test with Aerokube Moon', async ({ page }) => {
    // const sessionId = uuidv4(); // Generate a unique session ID
    // console.log(`Session ID: ${sessionId}`);

    await page.goto('https://google.com');
    const title = await page.title();
    expect(title).toBe('Google');

});

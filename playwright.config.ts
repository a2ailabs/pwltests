import { defineConfig } from '@playwright/test';

// Replace with your actual Moon endpoint
const moonURL = 'ws://ec2-107-20-63-212.compute-1.amazonaws.com:4444/playwright/';

const reportPortalConfig = {
  apiKey: 'fittest_ZUhTTR_RStmmkJ4CWCK0iH6w50BRcESyoUcVivDwf-Gqcc6SKyS7UtaoUE_pWJVQ', // Replace with your ReportPortal API key
  endpoint: 'http://20.244.5.65:8080/api/v1', // Replace with your ReportPortal server URL
  project: 'fittest', // Replace with your ReportPortal project name
  launch: 'Playwright Test Launch', // Name of the launch
  attributes: [
    { key: 'key', value: 'value' },
    { value: 'value' },
  ],
  description: 'Description of the launch',
  rerun: false,
  mode: 'DEFAULT',
  skippedIssue: true,
  debug: false,
  rejectUnauthorized: false // Add this line
};

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  reporter: [['@reportportal/agent-js-playwright', reportPortalConfig]], // Add ReportPortal reporter here
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        connectOptions: {
          wsEndpoint: `${moonURL}chromium/playwright-1.48.2`,
        },
      },
    },
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'on',
  },
});

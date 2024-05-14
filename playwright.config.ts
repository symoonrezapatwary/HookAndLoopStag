import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
// import  defineConfig  from '@playwright/test';
let date = new Date();
let ReportDate = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);

const config: PlaywrightTestConfig = {
  // testDir: './tests',
  testMatch: [

    "AutomationEx.test.ts",
    // "Navigation.test.mobile.ts",
    


  ],
  timeout: 1 * 40 * 10000,
  expect: {
    timeout: 25000

  },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1, 

  reporter: process.env.CI ? [["junit", {
    outputFile: "results.xml"
  }]] : [["json", {
    outputFile: "report.json"
  }], ["html", {
    open: "never"
  }]],

  // reporter: [ ['html', { outputFolder: './playwright-report/'+ ReportDate}]],



  // reporter: [["html", {
  //   open: "never"
  // }], ["allure-playwright"], ['./My-Reporter.js']],

  //  globalTeardown: require.resolve("./mailer.js"),



  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    baseURL: "https://automationexercise.com/",
    launchOptions: {
      args: [
        '--use-fake-device-for-media-stream',
        '--use-fake-ui-for-media-stream',
        '--no-sandbox',
        '--disable-features=UseOzonePlatform',
        `--use-file-for-fake-video-capture=${__dirname}/mobile.y4m`
      ],
      slowMo: 300

    },
    // export default defineConfig({
    //   use: {
    //     video: 'on-first-retry',
    //   },
    // })
    // permissions: ["microphone", "camera", "clipboard-read", "clipboard-write"],
    // headless: process.env.CI ? true : false,
    //headless: true ,
    // browserName: 'chromium',
    // channel: 'chromium',
    // viewport: { width: 1200, height: 720 },
    // ignoreHTTPSErrors: true,
    // permissions: ["camera"],


    //actionTimeout: 2 * 60 * 1000,
    trace: process.env.CI ? "off" : "off",
    video: process.env.CI ? "off" : "on",
    screenshot: process.env.CI ? "off" : "on",
  },




  projects: [
    {
      
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],launchOptions: {headless:false}
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],launchOptions: {headless:false}
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Webkit'],launchOptions: {headless:false}
    //   },

    // },
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] ,launchOptions: {headless:false}}
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 13'] ,launchOptions: {headless:false}}
    // },
  ]
};

export default config;
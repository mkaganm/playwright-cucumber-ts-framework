import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from '@playwright/test';

setDefaultTimeout(60 * 1000);


let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async function () {
    browser = await chromium.launch({ headless: false }); // Set to true for headless mode
});

Before(async function () {
    context = await browser.newContext();
    page = await context.newPage();
    // Attach page to the world instance if needed, or export it
    // For simplicity in this example, we'll export it or manage it via a singleton/world
    (this as any).page = page;
});

After(async function (scenario) {
    if (scenario.result?.status === Status.FAILED) {
        // Screenshot on failure
        const screenshotPath = `test-results/screenshots/${scenario.pickle.name.replace(/ /g, '_')}.png`;
        await page.screenshot({ path: screenshotPath });
    }
    await page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});

export { page };

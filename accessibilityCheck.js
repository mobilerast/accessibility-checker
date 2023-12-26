const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('axe-puppeteer');

async function runAccessibilityCheck(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setBypassCSP(true);

    await page.goto(url);

    const results = await new AxePuppeteer(page).analyze();

    console.log('Accessibility Violations:');
    if (results.violations.length === 0) {
        console.log('No violations found!');
    } else {
        results.violations.forEach(violation => {
            console.log(`${violation.id}: ${violation.description}`);
            violation.nodes.forEach(node => {
                console.log(`  ${node.html}`);
            });
        });
    }

    await browser.close();
}

// Replace with the URL you want to test
runAccessibilityCheck('https://borusancat.com');

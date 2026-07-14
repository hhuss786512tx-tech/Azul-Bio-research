const puppeteer = require('puppeteer-core');

async function run() {
    console.log('Launching Chrome...');
    const browser = await puppeteer.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true
    });
    
    const page = await browser.newPage();
    
    // Listen to console events
    page.on('console', msg => {
        console.log(`[BROWSER CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
    });
    
    // Listen to page errors
    page.on('pageerror', err => {
        console.error(`[BROWSER CRASH] ${err.toString()}`);
    });
    
    console.log('Loading website...');
    try {
        await page.goto('https://azulbioresearch.com/', { waitUntil: 'networkidle0', timeout: 15000 });
        console.log('Page loaded successfully!');
        
        const title = await page.title();
        console.log(`Rendered Title: ${title}`);
        
        const rootContent = await page.evaluate(() => {
            const root = document.getElementById('root');
            return root ? root.innerHTML.slice(0, 300) : 'Root element not found!';
        });
        console.log(`Root InnerHTML: ${rootContent}`);
        
    } catch (e) {
        console.error('Error loading page:', e);
    } finally {
        await browser.close();
        console.log('Browser closed.');
    }
}

run();

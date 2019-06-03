const puppeteer = require('puppeteer');
const chai = require('chai');

const test1 = async () =>{
    let browser = await puppeteer.launch({ headless : false,  args: ['--start-maximized', 'window-size:=1920,1080'] });
    const page = await browser.newPage();
    await page.setViewport({ height: 1080, width: 1920})
    await page.setDefaultTimeout(120000);
    await page.goto('https://forums.tomshardware.com');
    await page.click('#uix_sidebarNav--trigger');
    let bool, home;
    await page.waitForSelector('nav .uix_logo--text', {visible:true}).then((vis)=>{
        bool = true;
    }).catch((e)=>{bool = false});
    await page.waitForSelector('a[data-nav-id=home]', {hidden:true}).then((vis)=>{
        home = true;
    }).catch((e)=>{home = false});
    console.log(`visible: ${bool}`)
    console.log(`home visible: ${home}`)
    await page.close();
    await browser.close();
}

test1();
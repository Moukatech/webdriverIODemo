const Welcomepage = require('../pageobjects/welcome.page');
const Page = require ('../pageobjects/page');


describe('One Million Campaign', () => {
    it('should validate we are on the landing page', async () => {
        await Page.open();
        
        await (Welcomepage.acceptcookie).click();

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // await expect(SecurePage.flashAlert).toBeExisting();
        await expect(browser).toHaveTitle(
            'A million more | Volvo Cars - International');
        
    });
    it('Save screenshot', async () => {
        await browser.saveScreen('welcomepage', { /* some options */ });
    // Save an element
  	    await browser.saveElement((await Welcomepage.pageheader), 'logo', { /* some options */ });

  	// Save a full page screenshot
  	    await browser.saveFullPageScreen('fullPage', { fullPageScrollTimeout: 3000, });

    });
    // it('should compare successful with a baseline', () => {
    //     // Check a screen
    //     expect(browser.checkScreen('welcomepage', { })).toEqual(0);
  
    //     // Check an element
    //     expect(browser.checkElement(( Welcomepage.pageheader), 'logo', { /* some options */ })).toEqual(0);
  
    //     // Check a full page screenshot
    //     expect(browser.checkFullPageScreen('fullPage', { })).toEqual(0);
        
       
    // });
});



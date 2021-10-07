const safetypage = require('../pageobjects/carSafety.page');
const Page = require ('../pageobjects/page');


describe('Learn About Our car safety campaign', () => {
    it('should go to car safety page ', async () => {
        
        await (safetypage.link_safetyPage).click();

        await expect(browser).toHaveTitle(
            'Car safety | Volvo Cars - International');
        
    });
    it('Car Safety screenshots', async () => {
        await browser.saveScreen('Safety_page', { /* some options */ });
   
  	// Save a full page screenshot
  	    await browser.saveFullPageScreen('safetyPage_description', { fullPageScrollTimeout: 6000, });

    })
    it('should go to Safety Innovation Page', async () => {
        const elem = await (safetypage.link_innovationPage);
            // scroll to specific element
        await elem.scrollIntoView(false);
    
        await elem.click();

        await expect(browser).toHaveTitle(
          'Safety innovations | Volvo Cars');
      
    });
    
});



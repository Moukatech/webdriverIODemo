const Welcomepage = require('../pageobjects/welcome.page');
const Page = require ('../pageobjects/page');


describe('Validate safety specs', () => {
    it('should validate safety is well explained', async () => {
        await Page.open();
        
        await (Welcomepage.acceptcookie).click();
        await (Welcomepage.carMenu).click();
        await (Welcomepage.select_model).click();

        await expect(browser).toHaveTitle(
            'Volvo XC90 Recharge plug-in hybrid | Volvo Cars');
        
    });
    it('Save screenshot', async () => {
        await browser.saveScreen('car_model', { /* some options */ });
    // Save an element
  	    await browser.saveElement((await Welcomepage.pageheader), 'logo', { /* some options */ });

  	// Save a full page screenshot
  	    await browser.saveFullPageScreen('car_description', { fullPageScrollTimeout: 6000, });

   })
    it('should go to Full Features Page', async () => {
        const elem = await (Welcomepage.link_features);
            // scroll to specific element
        await elem.scrollIntoView(false); 

        await elem.click();

        await expect(browser).toHaveTitle(
          'Features | XC90 | Volvo Cars');
      
    });
    it('should go to safety Belt page', async () => {
        
      await (Welcomepage.link_belt).click();

      await expect(Welcomepage.link_belt).toHaveText(
          'Safety belts');
      
      await browser.saveScreen('safety_belt_campaign', { /* some options */ });
    });
    
});



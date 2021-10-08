class carsafety {
   
    get link_safetyPage() {return $('//*[contains(text(),"Learn more about car safety")]')}
    get page_title() {return $('//*[contains(text(),"Car safety")]')}
    get link_innovationPage() {return $('//a[contains(text(),"learn more")]')}

}

module.exports = new carsafety();

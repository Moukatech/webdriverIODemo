// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class welcomepage {
    /**
     * define selectors using getter methods
     */
    get pageheader() {return $('[alt="Volvo"]')}
    get acceptcookie() {return $('[title="Accept"]')}
    get carMenu() {return $('[id="nav:topNavCarMenu"]')}
    get select_model() {return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[1]')}
    get link_features() {return $('//*[contains(text(),"Full features")]')}
    get link_belt() {return $('//*[contains(text(),"Safety belts")]')}
    

}

module.exports = new welcomepage();

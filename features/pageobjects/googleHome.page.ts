import { ChainablePromiseElement } from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoogleHomePage {
    /**
     * define selectors using getter methods
     */
    public get searchInput () {
        return $('.gLFyf');
    }

    public get searchButtonInput () {
        return $('.CqAVzb.lJ9FBc').$$('input')[0];
    }

    public get acceptedCookieButton () {
        return $('#L2AGLb');
    }

    public get searchSelectFirstItem () {
        return $('.mkHrUc').$$('li')[0];
    }

    public async fillSearchInput (searchSentence: string,) {
        await this.searchInput.waitForDisplayed();
        await this.searchInput.click()
        await this.searchInput.setValue(searchSentence);
    }

    public async acceptedCookie () {
        await this.acceptedCookieButton.click()
    }

    public async searchButton () {
        await this.customWaitingElement(this.searchButtonInput);
        await this.searchButtonInput.click()
    }

    public async selectFirstItem () {
        await this.customWaitingElement(this.searchButtonInput);
        await this.searchSelectFirstItem.click()
    }

    public async pushEnterKey () {
        await browser.keys('Enter')
    }

    public async customWaitingElement (element) {
        while (!await element.isDisplayed()){
            await browser.pause(200);
        }
    }
}

export default new GoogleHomePage();

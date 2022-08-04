import { ChainablePromiseElement } from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GoogleResultsPage {
    /**
     * define selectors using getter methods
     */
    public get statsInput () {
        return $('#result-stats');
    }

    public get urlInput () {
        return $('.TbwUpd');
    }

}

export default new GoogleResultsPage();

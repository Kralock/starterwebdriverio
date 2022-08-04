import { Given, When, Then } from '@wdio/cucumber-framework';

import GoogleHomePage from '../pageobjects/googleHome.page';
import GoogleResultsPage from '../pageobjects/googleResults.page';

Given(/^I am on the "([^"]*)" page$/, async (url) => {
    await browser.url(url)
});

When(/^I fill the search with "([^"]*)"$/, async (message) => {
    await GoogleHomePage.fillSearchInput(message);
});
When(/^I select the method to search: "([^"]*)"$/, async (message) => {
        switch(message) {
            case 'key': {
                await GoogleHomePage.pushEnterKey();
                break;
            }
            case 'select': {
                await GoogleHomePage.selectFirstItem();
                break;
            }
            case 'button': {
                await GoogleHomePage.searchButton();
                break;
            }
        }
});

When(/^I click on the accepted cookie button$/, async function () {
    if(await GoogleHomePage.acceptedCookieButton.isDisplayed()){
        await GoogleHomePage.acceptedCookie();
    }
});

Then(/^I should see the word "([^"]*)"$/, async (message) => {
    await expect(GoogleResultsPage.statsInput).toHaveTextContaining(message);
});

Then(/^The url should be "([^"]*)"$/, async (message) => {
    await expect(GoogleResultsPage.urlInput).toHaveTextContaining(message);
});

Then(/^I should see the word$/, async (message) => {
    await expect(GoogleResultsPage.statsInput.getText()).toHaveTextContaining(message);
});


import { expect } from 'chai';

describe('Test homepage', function () {
    beforeEach(() => {
        browser.url('https://webdriver.io');
    });

    it('get website test', function () {
        const title = $('.projectTitle').getText();
        // assert.equal(title, 'WEBDRIVER I/O');
        expect(title).to.equal('WEBDRIVER I/O');
        expect(title).to.not.equal('WEBDRIVER');
        expect($('.projectTitle').isDisplayed(), 'project title is not displayed').to.equal(true);
        expect([1,2,5]).to.include(5);
    });
});
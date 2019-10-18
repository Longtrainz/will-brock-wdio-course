import { expect } from 'chai';

describe('Fetch elements', function () {
    beforeEach(() => {
        browser.url('http://the-internet.herokuapp.com/');
    });

    it('should find element with help of $ and $$', function () {
        const heading = $('.heading').getText();
        expect(heading).to.equal('Welcome to the-internet');

        const links = $$('a');
        links.forEach(link => console.log(link.getText()));
        console.log('Links number: ' + links.length);
    });
});
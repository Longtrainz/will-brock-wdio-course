import { expect } from 'chai';

describe('Fetch elements', function () {
    beforeEach(() => {
        browser.url('http://the-internet.herokuapp.com/');
    });

    it('should find element by selector', function () {
        // const text = $('ul').$('..').getText();

        // const checkboxesText = $('ul').$('li=Checkboxes').click();

        $('ul').$('a=Checkboxes').click();

        browser.pause(5000);
        
        // console.log('Text is: ' + checkboxesText);

        // expect(heading).to.equal('Available Examples');
    });
});
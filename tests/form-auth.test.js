import { expect } from 'chai';

describe('Login Form',  () => {
    beforeEach(() => {
        browser.url('http://the-internet.herokuapp.com/');
    });

    it('should not allow to login with invalid username ', () => {
        $('[href="/login"]').click();

        $('#username').setValue('random');
        $('#password').setValue('random');

        $('[type="submit"]').click();

        $('#flash').waitForDisplayed();
        const error = $('#flash').getText();
        expect(error).to.equal('Your username is invalid!\n×');
    });

    it(`should send forgot password link`, () => {
        $(`a=Forgot Password`).click();

        $(`[name="email"]`).addValue(`foobar`);

        $(`#form_submit`).click();

        const message = $(`#content`).getText();

        expect(message).to.equal(`Your e-mail's been sent!`);

        browser.pause(3000);
    });
});
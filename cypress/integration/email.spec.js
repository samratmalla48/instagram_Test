//Create Emails
//Did a small modification so that you can decied the email length you need

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.instagram.com/')
    })
    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ')
            .type('fake@email.com').should('have.value', 'fake@email.com')


    })

    const emails = (val) => {
        var email = "";
        var possible = "abcd@.gh";
        for (var i = 0; i < val; i++) {
            email += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return email;
    }


    //validate emails
    //I have used a general Regex here, use the regex you have used in your website insted

    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());

    }

    //Test Cases (I have added 10 loops so it will create 10 test cases)
    //Change the test case count as much as you need
    for (let index = 0; index < 10; index++) {
        const TestEmail = emails(10)
        const EmailState = validateEmail(TestEmail)
        it("EmailTest -" + TestEmail + " - " + EmailState, () => {
            cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type(TestEmail)
            cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type("abcd123")
            cy.get('.sqdOP > .Igw0E').click();
            if (!EmailState) {
                cy.get('[data-testid=login-error-message]').should('be.visible');
            } else {
                cy.get('[data-testid=login-error-message]').should('not.be.visible');
            }
        })
    }
})
describe('Profile Form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/register');
    })

    const email = () => cy.get("input[name=email]");
    const password = () => cy.get("input[name=password]");
    const phone = () => cy.get("input[name=phone]");
    const fooBar= () => cy.get("input[name=foobar]");
    const submitBtn = () => cy.get("button[type=submit]");

    it('Initiation Check', () => {
        email().should('exist');
        password().should('exist');
        phone().should('exist');
        fooBar().should('not.exist');
        submitBtn().should('exist');
    })

    describe('Text inputs', () => {
        it('Should be able to put text in the input boxes', () => {
            email().type('misteremail@email.com');
            email().should('have.value', 'misteremail@email.com');
        })

        it('password box should work', () => {
            password().type('password123');
            password().should('have.value', 'password123');
        })

        it('phone number box should work', () => {
            phone().type('9895551234');
            phone().should('have.value', '9895551234');
        })
        it('Should be able to submit form', () => {
            email().type('misteremail@email.com');
            password().type('password123');
            phone().type('9895551234');
            submitBtn().click();
        })
    })



})
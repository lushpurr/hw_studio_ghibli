describe('App', () => {
    beforeEach(() => {
        cy.visit('/', ()=> {

        });
    })

    it('should have a populated select', () => {
        const characterSelectOptions = cy.get('#character_select option');
        characterSelectOptions.should('have.length', 44);

    })
})
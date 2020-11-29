describe('App', () => {
    beforeEach(() => {
        cy.visit('/', ()=> {

        });
    })

    it('should have a populated select', () => {
        const characterSelectOptions = cy.get('#character_select option');
        characterSelectOptions.should('have.length', 44);
    })

    it('should show selected character on select change', () => {
        cy.get('#character_select').select('Totoro');
        cy.get('#selected_character > h3').contains('Totoro');
    })

    })

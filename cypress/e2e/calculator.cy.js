describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update running-total when number buttons are clicked', () => {
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2022')
  })

})
describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('should update running-total when number buttons are clicked', () => {
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2022');
  });

  it('should update the display with the arithmatic result', () => {
    cy.get('#number5').click();
    cy.get('#number0').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number3').click();
    cy.get('#operator-subtract').click();
    cy.get('.display').should('contain', '42');
  });

  it('should be able to chain multiple operators together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-add').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals');
    cy.get('.display').should('contain', '1');
  });

  it('should be able to display negative numbers ', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '-1');
  });

  it('should be able to display positive numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '25');
  });

  it('should be able to display decimal numbers', () => {
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0.25');
  });

  it('should be able to display large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '1000000000000');
  });


  it('should be able to display message with unsuitable calculation', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error');
  });
})
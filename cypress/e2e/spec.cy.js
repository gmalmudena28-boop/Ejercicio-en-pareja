describe('template spec', () => {
  it('Login', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(21) > a') .click()
    cy.get('[name="username"]') .type("tomsmith")
    cy.get('[name="password"]') .type("SuperSecretPassword!")
    cy.get('.fa') .click()
    cy.get('#flash') .contains("You logged into a secure area!")

  })

it('Comprobar que hay 5 elementos', () => {
    cy.visit('https://the-internet.herokuapp.com')
    cy.get(':nth-child(39) > a') .click()
    cy.get('[href="/shifting_content/menu"]') .click()
    cy.get('ul li a') .should('have.length', 5)
  
   
  })





})
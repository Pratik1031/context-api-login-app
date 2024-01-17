/// <reference types="cypress" />

describe('App Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the login form by default', () => {
    cy.get('.Login-card').should('exist');
    cy.get('.Profile-card').should('not.exist');
  });

  it('should switch to profile view after successful login', () => {
    const user = {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john.doe@example.com',
      password: 'Strong@123',
      city: 'New York',
    };

    cy.get('[name=firstname]').type(user.firstname);
    cy.get('[name=lastname]').type(user.lastname);
    cy.get('[name=email]').type(user.email);
    cy.get('[name=password]').type(user.password);
    cy.get('[name=city]').type(user.city);

    cy.get('form').submit();

    // assert that the profile is displayed after successful login
    cy.get('.text-xl').should('have.text', 'Profile');
    cy.get('.Profile-card').should(
      'contain.text',
      `UserName:${user.firstname}${user.lastname}`
    );
    cy.get('.Profile-card').should('contain.text', `Email:${user.email}`);
    cy.get('.Profile-card').should('contain.text', `City:${user.city}`);
  });
});

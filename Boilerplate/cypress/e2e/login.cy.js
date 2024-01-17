/// <reference types="cypress" />

describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the login form', () => {
    cy.get('form').should('exist');
    cy.get('.Login-card').should('exist');
  });

  it('should show error messages for empty form submission', () => {
    cy.get('form').submit();
    cy.get('.text-red-500').should('have.length', 5);
  });

  it('should show error messages for invalid email and password', () => {
    cy.get('[name=email]').type('invalid-email');
    cy.get('[name=password]').type('weak');
    cy.get('form').submit();
    cy.get('.text-red-500').should('have.length', 5);
  });

  it('should successfully submit the form with valid data', () => {
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

Cypress.Commands.add("login", (email, password) => {
  if (email) {
    cy.get("#mail").type(email);
  }
  if (password) {
    cy.get("#pass").type(password);
  }
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBook", (bookTitle, bookDescription, bookAuthor) => {
  if (bookTitle) {
    cy.get("#title").type(bookTitle);
  }
  if (bookDescription) {
    cy.get("#description").type(bookDescription);
  }
  if (bookAuthor) {
    cy.get("#authors").type(bookAuthor);
  }
  cy.contains("Submit").click();
});

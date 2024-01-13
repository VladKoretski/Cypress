beforeEach(() => {
  cy.visit("/");
  cy.contains("Log in").click();
});

describe("login test", () => {
  it("test 0. Page rendering", () => {
    cy.contains("Books list").should("be.visible");
  });

  it("test 1. Right name and password", () => {
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("test 2. Wrong login and password", () => {
    cy.login("haha@mail.com", "password");
    cy.contains("Неправильая почта или пароль").should("be.visible");
  });

  it("test 3. Empty password", () => {
    cy.login("test@test.com", null);
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("test 4. Add a new book all forms are filled", () => {
    cy.login("test@test.com", "test");
    cy.contains("Add new").click();
    cy.addBook(
      "Robinson Crusoe",
      "Defoe’s first long work of fiction, it introduced two of the most-enduring characters in English literature: Robinson Crusoe and Friday.",
      "Defoe Daniel"
    );
    cy.contains("Add to favorite").should("be.visible");
  });

  it("test 5. Add a new book with the title empty", () => {
    cy.login("test@test.com", "test");
    cy.contains("Add new").click();
    cy.addBook("", "", "");
    cy.contains("Add to favorite").should("be.visible");
    cy.get("#title").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("test 6. Remove a book from favorites", () => {
    cy.login("test@test.com", "test");
    cy.contains("Add to favorite").click();
    cy.contains("Delete from favorite").should("be.visible");
  });
});

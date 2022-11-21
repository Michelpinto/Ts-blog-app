describe('empty spec', () => {
  it('Creates a blog', () => {
    cy.visit('http://localhost:3000/newBlog');

    cy.get('[name="title"]').type('My first blog using cypress');
    cy.get('.ql-editor').type('This is my first blog using cypress');
    cy.get('[type="submit"]').click();
    cy.hasVisibleText('Blogs').click();
    cy.hasVisibleText('My first blog using cypress');
  });

  it('Gives an error', () => {
    cy.visit('http://localhost:3000/newBlog');

    cy.get('[type="submit"]').click();
    cy.hasVisibleText('Please write something');
  });
});

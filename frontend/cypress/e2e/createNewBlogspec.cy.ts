describe('empty spec', () => {
  it('Creates a blog', () => {
    cy.visit('http://localhost:3000/newBlog');

    cy.get('#title').type('My first blog using cypress');
  });
});

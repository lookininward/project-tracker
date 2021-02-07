describe('Route: Home', () => {

  it('adds document to firestore collection', () => {
    cy.callFirestore('add', 'this is a test', { some: 'value' });
  });

  // beforeEach(() => {
  //   cy.visit('http://localhost:3000');
  // });

  // it('Redirects to Workflow route', () => {  
  //   cy.url().should('include', '/workflow');
  // });

  // it('can navigate to Projects route', () => {
  //   cy.get('[data-testid="SVGSideBar"]').click();
  //   cy.get('[data-testid="projects"]').click();
  //   cy.url().should('include', '/projects');
  // });

  // it('can navigate to Users route', () => {
  //   cy.get('[data-testid="SVGSideBar"]').click();
  //   cy.get('[data-testid="users"]').click();
  //   cy.url().should('include', '/users');
  // });

  // it('can navigate to Account route', () => {
  //   // cy.get('[data-testid="SVGSideBar"]').click();
  //   cy.get('[data-testid="account"]').click();
  //   cy.url().should('include', '/account');
  // });

})
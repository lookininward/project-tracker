describe('Route: Home', () => {

  describe('Unauthenticated', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('Redirects to Sign-In route when unauthenticated', () => {
      cy.url().should('include', '/sign-in');
      cy.contains('Sign In with Google');
    });

    // it('Redirects to Workflow route on sign-in', () => {
    //   cy.login();
    //   cy.url().should('include', '/workflow');
    // });

    // afterEach(() => {
    //   cy.logout();
    // });
  });

  // describe('Authenticated', () => {
  //   beforeEach(() => {
  //     cy.visit('http://localhost:3000');
  //     cy.login();
  //   });

  //   afterEach(() => {
  //     cy.logout();
  //   });

  //   it('Redirects to Workflow route on sign-in', () => {
  //     cy.visit('http://localhost:3000');
  //     cy.login();
  //     cy.url().should('include', '/workflow');
  //   });

  //   it('can navigate to Projects route', () => {
  //     cy.get('[data-testid="SVGSideBar"]').click();
  //     cy.get('[data-testid="projects"]').click();
  //     cy.url().should('include', '/projects');
  //   });

  //   it('can navigate to Users route', () => {
  //     cy.get('[data-testid="SVGSideBar"]').click();
  //     cy.get('[data-testid="users"]').click();
  //     cy.url().should('include', '/users');
  //   });

  //   it('can navigate to Account route', () => {
  //     cy.get('[data-testid="account"]').click();
  //     cy.url().should('include', '/account');
  //   });
  // });
});

// Firestore Tests
// it('adds document to firestore collection', () => {
//   cy.callFirestore('add', 'this is a test', { some: 'value' });
// });
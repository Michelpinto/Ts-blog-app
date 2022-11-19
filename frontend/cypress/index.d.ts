declare namespace Cypress {
  interface Chainable {
    hasVisibleText(text: string): Chainable<void>;
    clickLink(label: string): Chainable<void>;
  }
}

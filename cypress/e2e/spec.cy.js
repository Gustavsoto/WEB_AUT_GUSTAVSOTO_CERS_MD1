import selectedPage from "../pageObjects/selectedPage";

describe('template spec', () => {
  context("selectable", () => {
    beforeEach(() => {
      selectedPage.visit();
    });
    it('selectable - positive cases', () => {
      //Click “Grid”
      selectedPage.demoTabGrid.click();
      //Click - “Two”, “Four”, “Six”, “Eight”
      selectedPage.listGroupItem.contains("Two").click();
      selectedPage.listGroupItem.contains("Four").click();
      selectedPage.listGroupItem.contains("Six").click();
      selectedPage.listGroupItem.contains("Eight").click();
      //Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      selectedPage.listGroupItem.contains("Two").should('have.class', 'active');
      selectedPage.listGroupItem.contains("Four").should('have.class', 'active');
      selectedPage.listGroupItem.contains("Six").should('have.class', 'active');
      selectedPage.listGroupItem.contains("Eight").should('have.class', 'active');
      //Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      selectedPage.listGroupItem.contains("One").should('not.have.class', 'active');
      selectedPage.listGroupItem.contains("Three").should('not.have.class', 'active');
      selectedPage.listGroupItem.contains("Five").should('not.have.class', 'active');
      selectedPage.listGroupItem.contains("Seven").should('not.have.class', 'active');
      selectedPage.listGroupItem.contains("Nine").should('not.have.class', 'active');
    });
  });
});
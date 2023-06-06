export default class selectedPage {
    static get url(){
        return '/selectable';
    }

    static visit(){
        cy.visit(this.url);
    }

    static get demoTabGrid(){
        return cy.get('a#demo-tab-grid');
    }
    
    static get listGroupItem(){
        return cy.get('li.list-group-item.list-group-item-action');
    }
}
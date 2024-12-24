class InventoryPage {
    visit() {
      cy.visit('https://techglobal-training.com/frontend/project-4');
    }
  
    validateHeading(heading) {
      cy.contains('h1', heading).should('be.visible');
    }
  
    validateTableHeaders(headers) {
      headers.hashes().forEach((header) => {
        cy.get('th').contains(header.Quantity).should('exist');
      });
    }
  
    validateTableRows(rows) {
      rows.hashes().forEach((row, index) => {
        cy.get('tr').eq(index + 1).within(() => {
          cy.contains(row.Quantity);
          cy.contains(row.Product);
          cy.contains(row['Price $']);
          cy.contains(row['Total $']);
        });
      });
    }
  
    validateButtonEnabled(buttonText) {
      cy.contains('button', buttonText).should('be.enabled');
    }
  
    validateDisplayedText(text) {
      cy.contains(text).should('be.visible');
    }
  
    clickButton(buttonText) {
      cy.contains('button', buttonText).click();
    }
  
    validateLabelsAndInputs(dataTable) {
      dataTable.hashes().forEach((row) => {
        cy.contains('label', row.Label).should('be.visible');
        cy.get(`input[placeholder='${row.Input}']`).should('be.enabled');
      });
    }
  
    validateModalNotVisible(modal) {
      cy.contains(modal).should('not.exist');
    }
  
    enterValue(field, value) {
      cy.get(`input[placeholder='${field}']`).type(value);
    }
  }
  
  export const inventoryPage = new InventoryPage();
  
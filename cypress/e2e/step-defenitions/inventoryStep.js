Given('the user is on the {string}', (page) => {
    if (page === 'Inventory Page') {
      cy.visit('https://techglobal-training.com/frontend/project-4');
    }
  });
  
  Then('the user should see the {string} heading', (heading) => {
    cy.contains('h1', heading).should('be.visible');
  });
  
  Then('the user should see the table with the headers below', (dataTable) => {
    dataTable.rawTable.forEach((header, index) => {
      cy.get('th').eq(index).should('have.text', header[0]);
    });
  });
  
  Then('the user should see the table with the rows below', (dataTable) => {
    dataTable.hashes().forEach((row, index) => {
      cy.get('tbody tr').eq(index).within(() => {
        cy.get('td').eq(0).should('have.text', row.Quantity);
        cy.get('td').eq(1).should('have.text', row.Product);
        cy.get('td').eq(2).should('have.text', row['Price $']);
        cy.get('td').eq(3).should('have.text', row['Total $']);
      });
    });
  });
  
  Then('the user should see the {string} button is enabled', (buttonText) => {
    cy.contains('button', buttonText).should('be.enabled');
  });
  
  Then('the user should see the {string} text displayed', (text) => {
    cy.contains(text).should('be.visible');
  });
  
  When('the user clicks on the {string} button', (buttonText) => {
    cy.contains('button', buttonText).click();
  });
  
  Then('the user should see the labels and input boxes below', (dataTable) => {
    dataTable.hashes().forEach((row) => {
      cy.contains('label', row.Label).should('be.visible');
      cy.get(`input[placeholder='${row.Input}']`).should('be.enabled');
    });
  });
  
  Then('the user should not see the {string} modal', (modal) => {
    cy.contains(modal).should('not.exist');
  });
  
  When('the user enters {string} into {string}', (value, field) => {
    cy.get(`input[placeholder='${field}']`).type(value);
  });
  
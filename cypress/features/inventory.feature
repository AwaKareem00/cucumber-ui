Feature: Inventory Table Automation
  This feature automates tests for the inventory table functionality.

  Scenario: Validate the default content of the inventory table
    Given the user is on the "Inventory Page"
    Then the user should see the "Inventory" heading
    And the user should see the table with the headers below
      | Quantity | Product | Price $ | Total $ |
    And the user should see the table with the rows below
      | 1 | iPhone  | 1,000 | 1,000 |
      | 3 | Airpods | 100   | 300   |
      | 2 | iPad    | 500   | 1,000 |
    And the user should see the "ADD PRODUCT" button is enabled
    And the user should see the "Total = $2,300" text displayed

  Scenario: Validate the Add New Product modal
    Given the user is on the "Inventory Page"
    When the user clicks on the "ADD PRODUCT" button
    Then the user should see the "Add New Product" modal with its heading
    And the user should see the "X" button is enabled
    And the user should see the labels and input boxes below
      | Label                          | Input   |
      | Please select the quantity     | Quantity|
      | Please enter the name of the product | Product |
      | Please enter the price of the product | Price   |
    And the user should see the "SUBMIT" button is enabled

  Scenario: Validate the Add New Product modal X button
    Given the user is on the "Inventory Page"
    When the user clicks on the "ADD PRODUCT" button
    Then the user should see the "Add New Product" modal with its heading
    When the user clicks on the "X" button
    Then the user should not see the "Add New Product" modal

  Scenario: Validate the new product added
    Given the user is on the "Inventory Page"
    When the user clicks on the "ADD PRODUCT" button
    And the user enters "2" into "Quantity"
    And the user enters "Mouse" into "Product"
    And the user enters "100" into "Price"
    And the user clicks on the "SUBMIT" button
    Then the user should see the table with the new row below
      | 2 | Mouse | 100 | 200 |
    And the user should see the "Total = $2,500" text displayed

Feature: checkAttribute
  In order write BDD tests
  As a developer
  I want to check if a page has accessibility errors

  Scenario: Check a page without accessibility errors
    When  I open the url "https://www.google.com"
    Then  I expect the "a11y-pass" page has no accessibility errors

  # Scenario: Check a page with accessibility errors given
  #   Given  the "a11y-pass" page has no accessibility errors           

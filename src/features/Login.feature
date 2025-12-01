Feature: Login Functionality

  As a user
  I want to login to the Swag Labs application
  So that I can access the products page

  Scenario Outline: Login with various credentials
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    Then I should see the products page

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |

  Scenario: Login with invalid credentials
    Given I am on the login page
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should see an error message "Epic sadface: Sorry, this user has been locked out."

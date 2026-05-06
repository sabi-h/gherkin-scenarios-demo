Feature: Todo Management
  As a user
  I want to manage my todos
  So that I can keep track of things I need to do

  Background:
    Given I open the Todo app
    And the todo list is empty

  Scenario: Create a todo
    When I enter "Buy groceries" in the todo input
    And I click the "Add" button
    Then I should see "Buy groceries" in the todo list

  Scenario: Complete a todo
    Given I have a todo "Write report"
    When I check the checkbox for "Write report"
    Then "Write report" should be marked as completed

  Scenario: Delete a todo
    Given I have a todo "Clean house"
    When I click the delete button for "Clean house"
    Then I should not see "Clean house" in the todo list

  Scenario: View empty state
    Then I should see the message "No todos yet. Add one above!"

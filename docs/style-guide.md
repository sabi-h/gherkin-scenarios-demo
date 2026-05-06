# Gherkin Style Guide

## Scenario Structure

```gherkin
Feature: Feature Name
  As a <role>
  I want to <action>
  So that <benefit>

  Background:
    Given <shared precondition>

  Scenario: Short descriptive name
    Given <precondition>
    When <action>
    Then <expected result>
```

## Rules

- Use **third person** for scenarios ("the user", not "I")
- Use **present tense** for When steps ("I click", not "I clicked")
- Keep scenarios **independent** — each must work in isolation
- Use **Scenario Outline** with Examples tables for data-driven scenarios
- Use **Background** for shared preconditions across all scenarios in a feature
- Prefer **specific, concrete values** over vague descriptions ("Buy groceries" not "a task")

## Project Structure

```
gherkin/
├── features/
│   ├── *.feature                    # Gherkin scenario files
│   └── step_definitions/
│       └── *.steps.js               # Playwright step implementations
├── cucumber.js                      # Cucumber config
├── package.json
└── Makefile
```

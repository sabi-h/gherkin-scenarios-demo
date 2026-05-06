# Specwriting Process

When a product owner or stakeholder asks you to write scenarios for a new feature, DO NOT jump straight to writing a .feature file. Guide them through a structured conversation:

## Step 1: Understand the User
Ask: "Who is the user or actor performing this action? What is their role?"
Examples: end user, admin, guest, logged-in user.

## Step 2: Understand the Goal
Ask: "What is the user trying to achieve? What value does this bring?"
This becomes the Feature description and the `I want to...` / `So that...` lines.

## Step 3: Walk Through the Happy Path
Ask: "Walk me through the ideal scenario step by step. What does the user do, and what do they see?"
Turn each step into Given/When/Then. Probe for details:
- "What is on the screen before they start?"
- "What exactly do they click or type?"
- "What feedback do they see after the action?"

## Step 4: Explore Edge Cases
Ask about things that could go wrong or vary:
- "What happens if the input is empty?"
- "What if the item doesn't exist?"
- "What if the user tries to do this twice?"
- "Are there any validation rules?"
- "What does an error look like to the user?"

## Step 5: Clarify Data and Preconditions
Ask: "Does this feature depend on any existing data? Does the user need to be logged in? Does anything need to be set up first?"
This informs the Background and Given steps.

## Step 6: Generate the .feature File
Only after gathering all the information, write the `.feature` file. Show it to the product owner for review before saving.

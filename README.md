# Form Validation Project

This project is a simple **form validation system** built using **HTML, CSS, and JavaScript**. It validates user inputs and provides real-time feedback on errors or successful entries.

## Features

- Collects user input for:
  - Full Name
  - Phone Number
  - Email
  - Message
- Real-time validation for each input field.
- Displays error messages **in front of the respective input field** if a required field is missing.
- Error messages automatically **disappear after 3 seconds**.
- Shows a **check icon** next to each input field when the field is correctly filled.
- Provides visual feedback for:
  1. **All errors** (all fields are empty or invalid)
  2. **Some errors** (only some fields are invalid)
  3. **All correct** (all fields correctly filled)

## Screenshots

### 1. All errors shown
<img width="954" height="442" alt="1st" src="https://github.com/user-attachments/assets/28a91717-3767-43ba-b4ec-b90aca21eeb5" />

### 2. Some errors shown
<img width="955" height="426" alt="2nd" src="https://github.com/user-attachments/assets/dce15269-c4bc-41ad-b65c-5643e43a91ab" />

### 3. All checks shown
<img width="958" height="413" alt="3rd" src="https://github.com/user-attachments/assets/626508d5-4049-45fb-8ed0-0612703f3115" />

## Usage

1. Clone the repository:
2.Open index.html in your browser.
3. Fill in the form fields.
4. Click Submit.
5. Observe the error messages or success icons based on your inputs.

## How it Works

JavaScript checks each input field when the user clicks Submit.
If a field is empty or invalid:
An error message appears in front of that input.
The error automatically disappears after 3 seconds.
If the input is correct:
A check icon appears next to the field.
This ensures that users get immediate feedback without refreshing the page.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

# Form validation 2

1. All of the user names in our application consist of a single letter, followed by a dot, followed by three or more letters or numbers. All letters should be lowercase.
2. All of the email addresses for our users consist of one or more letters (lower or upper case) or numbers, followed by "@bigcorp.eu".
3. Remove the length validation from the phone number field if it is present, and set it so that it accepts 10 digits — either 10 digits in a row, or a pattern of three digits, three digits, then four digits, separated by either spaces, dashes, or dots.

# Form validation 3

1. Make the input mandatory to fill in, and give it a minimum length of 10 characters.
2. Add an event listener that checks whether the inputted value is an email address, and whether it is long enough. If it doesn't look like an email address or is too short, provide the user with appropriate custom error messages.

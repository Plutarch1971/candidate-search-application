# Candidate Search Application

## Table of Contents
[Description](#description)<br>
[Features](#features)<br>
[Technologies](#technologies)<br>
[Installation](#installation)<br>
[License](#license)<br>
[Contact](#contact)<br>
[Screenshots](#screenshots)

## Description
The Candidate Search application is a tool for employers to review and save potential candidates for job positions. The application fetches data from GitHub profiles using the GitHub API and displays candidate information. Users can review candidates, save potential ones, and view their saved candidates. This app offers an intuitive interface for employers to manage candidates they wish to consider for hiring.


## Features
Candidate Display: Each candidate's information (name, username, location, avatar, email, company, and GitHub URL) is shown.
Save or Reject Candidate: Employers can click the "+" button to save a candidate or the "-" button to move to the next candidate without saving.
Persistent Candidate List: The list of saved potential candidates is stored in local storage and remains available upon page reload.
No Candidates Available Message: Displays a message when there are no candidates left to review.
Saved Candidates View: A dedicated page to view the list of saved candidates, showing the same information as in the search page.
Remove Candidate: Employers can reject candidates from the saved list and return to the candidate search.

## Installation
Copy code<br>
git clone https://github.com/your-username/candidate-search.git<br>
Navigate to the project folder:

bash<br>
Copy code<br>
cd candidate-search<br>
Install dependencies:

bash<br>
Copy code<br>
npm install<br>
Start the development server:

bash<br>
Copy code<br>
npm run dev<br>
Visit the application at http://localhost:3000 (or the URL displayed in your terminal).


## Technologies
React: JavaScript library for building the user interface.
GitHub API: Used to fetch candidate profiles from GitHub.
Vite: A modern build tool for fast development.
Local Storage: To store the list of saved candidates persistently.
CSS/SCSS: Styling the app's layout and components.

## Screenshots

Here are some screenshots of the Candidate Search application:

![Candidate Search](./public/screenshots/Candidate%20Search.png)
![Potential Candidate](./public/screenshots/Potential%20Candidate.png)


## License
This project is licensed under the MIT License.

## Contact
If you have any questions or suggestions, feel free to reach out to me:<br>
GitHub: Plutarch1971<br>
Email: matthewpmendez@gmail.com










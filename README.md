🎬 Movie Website
A simple HTML, CSS, and JavaScript movie website that stores and renders user interest data from a JSON file.
Users can browse posts (movies), click to view details, and all content is dynamically loaded from JSON — no backend required.

🚀 Features
Static Frontend built with HTML, CSS, and JavaScript
JSON-based data storage for movies and user interest
Auto-render movie list from JSON
Dynamic detail page when a user clicks on a movie
No database needed — all data in a local JSON file

🔧 How It Works
Load Data – script.js fetches data.json and renders movie cards on index.html
Click Movie – Clicking a movie sends the id in the URL query string
Render Detail Page – movie.html fetches the same JSON and loads that specific movie’s details
User Interest – Optional: Store liked movies in localStorage or a separate JSON

📦 Installation
Clone this repository:
bash
Copy
Edit
git clone https://github.com/your-username/movie-website.git
Open the folder and start a local server (e.g., with VS Code Live Server)
Visit index.html in your browser

💡 Future Improvements
Add search & filter functionality
Implement user ratings
Store favorites in localStorage
Make it responsive for mobile

📜 License
This project is licensed under the   Ahmeddev-bit.

📜 License
This project is licensed under the MIT License.

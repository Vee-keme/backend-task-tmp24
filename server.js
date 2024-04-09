const express = require("express");
const app = express();
const path = require("path");

// Set up middleware to serve static files from my app directory
app.use(express.static(path.join(__dirname, "app")));

// Route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "app", "index.html"));
});

// Route for the about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "app", "about.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

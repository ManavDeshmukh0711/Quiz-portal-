const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Frontend (public folder) ko load karna
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/quizportal")
    .then(() => console.log("Database Connected Successfully!"))
    .catch(err => console.log("Database connection error: ", err));

// Routes ko link karna
const quizRoutes = require("./routes/quizRoutes");
app.use("/api", quizRoutes);

// Server Start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

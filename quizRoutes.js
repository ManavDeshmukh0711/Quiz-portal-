const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Database Schema
const scoreSchema = new mongoose.Schema({
    studentName: String,
    score: Number,
    total: Number,
    date: { type: Date, default: Date.now }
});

const Score = mongoose.model("Score", scoreSchema);

// POST ROUTE: Quiz submit karne par score save karna
router.post("/submit-score", async (req, res) => {
    try {
        const newScore = new Score({
            studentName: req.body.studentName,
            score: req.body.score,
            total: req.body.total
        });

        await newScore.save();
        res.json({ message: "Quiz submitted successfully! Score saved." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error saving score!" });
    }
});

// GET ROUTE: Leaderboard dekhne ke liye
router.get("/leaderboard", async (req, res) => {
    try {
        const scores = await Score.find().sort({ score: -1 }).limit(10);
        res.json(scores);
    } catch (error) {
        res.status(500).json({ message: "Error fetching leaderboard!" });
    }
});

module.exports = router;

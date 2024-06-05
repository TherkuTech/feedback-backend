const Feeds = require('../models/feedModel');

const addFeedbacks = async (req, res) => {
    try {
        const { feedbacks } = req.body;

        // Ensure feedbacks is an array
        if (!Array.isArray(feedbacks)) {
            return res.status(400).json({ error: true, message: "Feedbacks should be an array of objects" });
        }

        // Construct an array of feedback objects
        const feedbackObjects = feedbacks.map(({ feedback, category, action }) => ({ feedback, category, action }));

        // Create a new feed document
        const newFeed = new Feeds({ feedbacks: feedbackObjects });
        await newFeed.save();

        res.status(201).json({ error: false, message: "Feedbacks added successfully", feedbacks: newFeed.feedbacks });
    } catch (err) {
        console.error("Error saving feedbacks:", err);
        res.status(500).json({ error: true, message: "Internal server error" });
    }
};

module.exports = { addFeedbacks };

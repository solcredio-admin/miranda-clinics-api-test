const queue = require("../data/queue");

// GET /api/queue
const getQueue = (req, res) => {
    res.json(queue);
};

module.exports = {
    getQueue
};
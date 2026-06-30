const queue = require("../data/queue");

const getQueue = (req, res) => {
  res.json(queue);
};

const updateQueue = (req, res) => {
  const { room } = req.params;
  const { number } = req.body;

  if (!queue[room]) {
    return res.status(404).json({
      success: false,
      message: "Room not found"
    });
  }

  queue[room].number = number;

  res.json({
    success: true,
    room: queue[room]
  });
};

module.exports = {
  getQueue,
  updateQueue
};
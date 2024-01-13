const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 5000;



app.post("/api/v1/prediction/49a1fa06-e4df-4218-9911-008da1eb5620", (req, res) => {

  res.json({"text":"Based on the given context, The Art of Goal Setting: Achieving Success through Personal Development is an essay or article that discusses the importance of goal setting in personal development and achieving success. It emphasizes the need for clear and compelling goals to ignite personal growth and outlines the benefits of visualization and self-awareness in the goal-setting process."})
  res.end();
})
app.listen(port, () => console.log("server running"));

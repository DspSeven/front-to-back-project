const express = require("express");
const cors = require("cors");
const collection = require("./mango");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//app.get("/", cors(), (req, res) => {});

app.post("/", async (req, res) => {
  const { msg } = req.body;

  const newData = new collection({msg})

  try {
    await newData.save();
    res.status(201).json({ message: "Data stored successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while storing the data" });
  }
});

app.listen(3000, () => {
  console.log("port connected on 3000");
});

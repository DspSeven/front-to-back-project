const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/ftb_project")
.then(() => {
    console.log("connected");
})
.catch(() => {
    console.log("failed!");
});

const newSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;

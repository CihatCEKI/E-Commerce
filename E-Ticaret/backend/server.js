const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
app.use(express.json());
const logger = require("morgan");
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connnect to mogngo");
  } catch (error) {
    throw error;
  }
};

//middlewares postmandaki verinin undefined çıkmaması için ara katman kullandık json a çevirdik veriyi.
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use("/api", mainRoute);

app.listen(5000, () => {
  connect();
  console.log(`sunucu${port} portunda çalıyor`);
});

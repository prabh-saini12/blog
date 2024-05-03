const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGOURI;

const ConnectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database Connected");
  } catch (error) {
    console.log(`Error in connection ${error}`);
  }
};

module.exports = ConnectToMongo;

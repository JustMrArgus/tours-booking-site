const mongoose = require("mongoose");

exports.connectDB = async (db) => {
  try {
    await mongoose.connect(db);
    console.log("DB connected...");
  } catch (err) {
    console.log("DB connection error occured");
    console.log(err);
    process.exit(1);
  }
};

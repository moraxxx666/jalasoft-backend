const mongoose = require("mongoose");
const config = require("./config");
mongoose.connect(
  `${config.MONGO_URL}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) console.error(err);
    console.log("Base de datos conectada");
  }
);

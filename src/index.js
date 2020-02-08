const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const config = require("./config");
require("./database");
// Initialization
const app = express();

//midlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rutas

//Iniciando el server
app.listen(config.PORT, () => {
  console.log(`App runing on port ${config.PORT}`);
});

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import config from "./config";
import("./database");
import APIRoutes from "./routes/api.routes";
// Initialization
const app = express();

//midlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rutas
app.use("/api", APIRoutes);
//Iniciando el server
app.listen(config.PORT, () => {
  console.log(`App runing on port ${config.PORT}`);
});

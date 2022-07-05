import cors from "cors";
import express from "express";

import connection from "./database.js";

import handleErros from "./middlewares/handleErrors.js";

import router from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(handleErros);

export default app;

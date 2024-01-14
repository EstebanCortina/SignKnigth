import express from "express";
import morgan from "morgan";
import { PORT } from "#config/env.mjs";
import pool from "#config/mysql.mjs";

const app = express();
app.use(morgan("common"));

import router from "#routes/index.mjs";
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

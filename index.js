import express from "express";
import morgan from "morgan";
import { PORT } from "./config/env.js";

const app = express();
app.use(morgan("common"));

import router from "./router.js";
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

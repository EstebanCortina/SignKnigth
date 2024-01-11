import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("common"));

import router from "./router.js";
app.use("/", router);

app.listen(8080, () => {
  console.log(`Running on HOST:PORT`);
});


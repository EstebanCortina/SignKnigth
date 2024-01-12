import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("SignKnigth");
});

import signInRouter from "./signInRouter.mjs";
router.use("/sign-in", signInRouter);

export default router;


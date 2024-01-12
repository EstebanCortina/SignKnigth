import express from "express";

const router = express.Router();

import signInController from "#controllers/sign-in.mjs";
router.get("/", signInController);

export default router;

const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

const programsRouter = require("./programs/router");

router.use("/programs", programsRouter);
/* ************************************************************************* */
// Import And Use Routers Here

/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;

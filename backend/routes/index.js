const listController = require("../controller/list.controller");
const cardController = require("../controller/card.controller");

const authController = require("./authRoutes");

const boardController = require("./boardRoutes");
const verifyToken = require("../middleware/authMiddleware");

const inviteEmail = require("../controller/sendMail");

const router = (app) => {
  app.use("/", authController);
  app.use("/", verifyToken, listController);
  app.use("/", verifyToken, cardController);
  app.use("/", verifyToken, boardController);
  app.use("/", inviteEmail);

  app.all("*", (req, res, next) => {
    const err = new Error("Not found");
    err.status = "fail";
    err.statusCode = 404;
    throw err;
    next();
  });

  app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  });
};

module.exports = router;

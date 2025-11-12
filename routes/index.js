import express from "express";
//importing router from users.route
import userRouter from "./users.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

//using the imported router to handle all routes matching "/users"
router.use("/users", userRouter);

export default router;

import express from "express";
//importing router from users.route
import userRouter from "./users.routes.js";
//importing router from employees.route
import employeeRouter from "./employees.routes.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

//using the imported router to handle all routes matching "/users"
router.use("/users", userRouter);

//using the imported router to handle all routes matching "/employees"
router.use("/employees", employeeRouter);

export default router;

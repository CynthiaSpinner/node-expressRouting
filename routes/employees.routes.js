import express from "express";
import employees from "../controllers/employees.controller";

const router = express.Router();

//get route /api/employees or /api/employees/:id
router.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id) {
      data = await employees.findOne(id);
    } else {
      data = await employees.findAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

//post route /api/employees
router.post("/", async (req, res, next) => {
  try {
    let employeeDTO = req.body;
    let data = await employees.addOne(employeeDTO);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

//put route /api/employees/:id
router.put("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let employeeDTO = req.body;
    let data = await employees.updateOne(id, employeeDTO);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

//delete route /api/employees/:id
router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await employees.removeOne(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;


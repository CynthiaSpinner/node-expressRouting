import express from "express";
import db from "../mockdb/index.js";

const router = express.Router();

//get /api/users or /api/users/:id
router.get("/:id?", async (req, res) => {
 const { id } = req.params;
 let data;

 if (id) {
    data = await db.getOne(id);
 } else {
    data = await db.getAll();
 }

 res.json(data);
});

//post /api/users
router.post("/", async (req, res) => {
    const newUser = req.body;
    const data = await db.add(newUser);
    res.json(data);
});

//put /api/users/:id
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    const data = await db.update(id, updatedUser);
    res.json(data);
});

//delete /api/users/:id
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const data = await db.remove(id);
    res.json(data);
});

export default router;
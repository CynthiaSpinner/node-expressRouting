import express from "express";
import db from "../mockdb/index.js";

const router = express.Router();

//get route with optional id parameter
router.get("/:id?", async (req, res) => {

});

//post route
router.post("/", async (req, res) => {

});

//put route
router.put("/:id", async (req, res) => {
    
});

//delete route
router.delete("/:id", async (req, res) => {

});

export default router;
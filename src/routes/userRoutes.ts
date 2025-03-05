import express from "express"
// TODO: importera controller-funktioner
import { createUser, getUser, getUsers, updateUser, deleteUser } from "../controllers/userController";

const router = express.Router()

// CRUD för en resurs users
router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);



export default router;

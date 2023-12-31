import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import userController from "../controllers/userController";
const router = Router();
const prisma = new PrismaClient();

// Create new User
router.post('/', userController.createUser);

// Get User By Id
router.get('/:id',userController.getUserById);

// List All Users
router.get('/', userController.listAllUsers);

// Update User
router.put('/:id', userController.updateUser);

// Delete User
router.delete('/:id', userController.deleteUser);

export default router;
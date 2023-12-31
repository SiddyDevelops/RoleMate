import { Router } from "express";
import roleController from "../controllers/userRoleController";
const router = Router();

// Assign ROLE to USER
router.post('/',roleController.assignRoleToUser);
// Remove ROLE to USER
router.delete('/',roleController.removeRoleFromUser);

export default router;
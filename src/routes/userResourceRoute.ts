import { Router } from "express";
import roleController from "../controllers/userResourceController";
const router = Router();

// Assign RESOURCE to USER
router.post('/',roleController.assignResourceToUser);
// Remove RESOURCE to USER
router.delete('/',roleController.removeResourceToUser);

export default router;
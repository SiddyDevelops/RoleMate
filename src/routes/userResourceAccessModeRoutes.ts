import { Router } from "express";
import userResourceAccessModeController from "../controllers/userResourceAccessModeController";
const router = Router();

// Assign ACCESSMODE to {USER,RESOURCE}
router.post('/',userResourceAccessModeController.assignAccessModeToUserResource);
// Remove ACCESSMODE to {USER,RESOURCE}
router.delete('/',userResourceAccessModeController.removeAccessModeToUserResource);

export default router;
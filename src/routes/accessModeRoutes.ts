import { Router } from "express";
import accessModeController from "../controllers/accessModeController";
const router = Router();

// Create new AccessMode
router.post('/', accessModeController.createAccessMode);

// Get AccessMode By Id
router.get('/:id',accessModeController.getAccessModeById);

// List All AccessModes
router.get('/', accessModeController.listAllAccessModes);

// Update AccessMode
router.put('/:id', accessModeController.updateAccessMode);

// Delete AccessMode
router.delete('/:id', accessModeController.deleteAccessMode);

export default router;
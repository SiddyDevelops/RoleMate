import { Router } from "express";
import roleController from "../controllers/roleControllers";
const router = Router();

// Create new Role
router.post('/', roleController.createRole);

// Get Role By Id
router.get('/:id',roleController.getRoleById);

// List All Roles
router.get('/', roleController.listAllRoles);

// Update Role
router.put('/:id', roleController.updateRole);

// Delete Role
router.delete('/:id', roleController.deleteRole);

export default router;
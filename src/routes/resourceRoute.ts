import { Router } from "express";
import roleController from "../controllers/resourceControllers";
const router = Router();

// Create new Resource
router.post('/', roleController.createResource);

// Get Resource By Id
router.get('/:id',roleController.getResourceById);

// List All Resources
router.get('/', roleController.listAllResources);

// Update Resource
router.put('/:id', roleController.updateResource);

// Delete Resource
router.delete('/:id', roleController.deleteResource);

export default router;
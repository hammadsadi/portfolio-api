import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProjectControllers } from './project.controllers';
import { ProjectValidationSchemas } from './project.validation';

// Init Routes
const projectRouter = Router();

// Get All Project Route
projectRouter.get('/', ProjectControllers.getAllProject);

// Create Project Route
projectRouter.post(
  '/create-project',
  validateRequest(ProjectValidationSchemas.createProjectValidationSchema),
  ProjectControllers.projectCreate,
);

// Update Project Route
projectRouter.put(
  '/:projectId',
  validateRequest(ProjectValidationSchemas.updateProjectValidationSchema),
  ProjectControllers.updateSingleProject,
);

// Delete Project Route
projectRouter.delete('/:projectId', ProjectControllers.deleteSingleProject);

// Get Single Project Route
projectRouter.get('/:projectId', ProjectControllers.getSingleProject);

// Update Project Route
projectRouter.patch(
  '/:projectId',
  validateRequest(ProjectValidationSchemas.updateProjectValidationSchema),
  ProjectControllers.updateSingleProject,
);
export const ProjectRoutes = projectRouter;

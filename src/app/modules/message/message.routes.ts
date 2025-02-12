import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { MessageValidationSchemas } from './message.validation';
import { MessageControllers } from './message.controllers';

// Init Routes
const messageRouter = Router();

// Create Message Route
messageRouter.post(
  '/create-message',
  validateRequest(MessageValidationSchemas.createMessageValidationSchema),
  MessageControllers.messageCreate,
);

// Get All Message
messageRouter.get('/', MessageControllers.getAllMessage);
// Get Sinle Message
messageRouter.get('/:messageId', MessageControllers.getSinglMessage);
// Delete Sinle Message
messageRouter.delete('/:messageId', MessageControllers.deleteSinglMessage);

export const MessageRoutes = messageRouter;

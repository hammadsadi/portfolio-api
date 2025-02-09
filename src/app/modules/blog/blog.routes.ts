import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BlogValidationSchemas } from './blog.validation';
import { BlogControllers } from './blog.controllers';


// Init Routes
const blogRouter = Router();

// Create Blog Route
blogRouter.post(
  '/create-blog',
  validateRequest(BlogValidationSchemas.blogValidationSchema),
  BlogControllers.blogCreate,
);

// Get All Blogs
blogRouter.get(
  '/',
  BlogControllers.getAllBlog,
);

// Get Single Blog
blogRouter.get('/:blogId', BlogControllers.getSingleBlog);

// Delete Single Blog
blogRouter.delete('/:blogId', BlogControllers.deleteSingleBlog);

// Update Single Blog
blogRouter.put('/:blogId', BlogControllers.updateSingleBlog);
blogRouter.patch(
  '/:blogId',
  validateRequest(BlogValidationSchemas.updateBlogValidationSchema),
  BlogControllers.updateSingleBlog,
);

export const BlogRoutes = blogRouter;

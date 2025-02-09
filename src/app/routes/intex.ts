import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.routes';

const router = Router();

const modulesRoutes = [
  {
    path: '/blog',
    route: BlogRoutes,
  },
  
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

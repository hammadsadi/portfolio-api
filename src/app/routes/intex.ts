import { Router } from 'express';
import { BlogRoutes } from '../modules/blog/blog.routes';
import { ProjectRoutes } from '../modules/project/project.routes';
import { MessageRoutes } from '../modules/message/message.routes';

const router = Router();

const modulesRoutes = [
  {
    path: '/blog',
    route: BlogRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/message',
    route: MessageRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

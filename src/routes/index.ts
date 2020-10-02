import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

routes.get('/', (req, res) =>
  res.json({
    title: 'GoBarber 💈',
    technologies: ['TypeScript', 'Node', 'Express'],
    version: '1.0.0',
    author: {
      name: 'Gabriela Carvalho Camilo',
      gitHub: 'http://github.com/gabcamilo',
      linkedIn: 'https://www.linkedin.com/in/gabccamilo/',
    },
    licence: 'MIT',
  }),
);

export default routes;

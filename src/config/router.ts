import express, { Application, Request, Response } from 'express';
import { usersController } from '../controller/userController';
import { adminsController } from '../controller/adminController';
import { rootsController } from '../controller/rootsController';

export const app: Application = express();
app.use('/users', usersController);
app.use('/admins', adminsController);
app.use('/', rootsController);

import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export const UserRoute = Router();

UserRoute.post('/', UserController.saveUser);
UserRoute.get('/', UserController.getUser);
UserRoute.get('/:id', UserController.getUserById);
UserRoute.put('/:id', UserController.updateUser);
UserRoute.delete('/:id', UserController.deleteUser);

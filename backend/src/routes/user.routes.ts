import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/login').post((req, res)=>new UserController().login(req, res));
userRouter.route('/register').post((req, res)=> new UserController().register(req, res));
userRouter.route('/requests').get((req, res)=> new UserController().getPendingRequests(req, res));
userRouter.route('/requests').post((req, res)=> new UserController().approveRequest(req, res));
userRouter.route('/delete').post((req, res)=> new UserController().deleteUser(req, res));
userRouter.route('/create').post((req, res)=> new UserController().create(req, res));
userRouter.route('/update').post((req, res)=> new UserController().update(req, res));
userRouter.route('/get').post((req, res)=> new UserController().get(req, res));
userRouter.route('/getAll').get((req, res)=> new UserController().getAll(req, res));

userRouter.route('/getConfig').get((req, res)=> new UserController().getConfig(req, res));
userRouter.route('/updateConfig').post((req, res)=> new UserController().updateConfig(req, res));


export default userRouter;
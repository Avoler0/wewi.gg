
import express from 'express';
import { loginController } from '../controllers/account/login';
import { registerController } from '../controllers/account/register';

const accountRouter = express();

accountRouter.post('/login',loginController)
accountRouter.post('/register',registerController)

export default accountRouter;
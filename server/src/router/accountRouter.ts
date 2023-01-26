
import express from 'express';
import { loginController } from '../controllers/account/login';

const accountRouter = express();

accountRouter.post('/account/login',loginController)
accountRouter.post('/account/register',loginController)

export default accountRouter;
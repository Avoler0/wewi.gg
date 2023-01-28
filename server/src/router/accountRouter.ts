
import express from 'express';
import { loginController } from '../controllers/account/login';
import { naverOauth } from '../controllers/account/naverOauthApi';
import { registerController } from '../controllers/account/register';

const accountRouter = express();

accountRouter.get('/naver',naverOauth)

accountRouter.post('/login',loginController)
accountRouter.post('/register',registerController)

export default accountRouter;
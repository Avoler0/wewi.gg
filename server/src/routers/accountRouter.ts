
import express from 'express';
import { loginController } from '../controllers/account/login';
import { naverOauth } from '../controllers/account/naverOauthApi';
import { registerController } from '../controllers/account/register';

const accountRouter = express();
// paths:
//   /users:
//     post:
//       summary: Adds a new user
//       requestBody:
//         content:
//           application/json:
//             schema:      # Request body contents
//               type: object
//               properties:
//                 id:
//                   type: integer
//                 name:
//                   type: string
//               example:   # Sample object
//                 id: 10
//                 name: Jessica Smith
//       responses:
//         '200':
//           description: OK
accountRouter.get('/naver',naverOauth)
accountRouter.post('/login',loginController)
accountRouter.post('/register',registerController)

export default accountRouter;
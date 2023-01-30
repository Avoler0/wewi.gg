
import express from 'express';
import { getMatesList, postMatesList } from '../controllers/mates/mates';

const matesRouter = express();

matesRouter.get('/list',getMatesList)

matesRouter.post('/add',postMatesList)
// matesRouter.post('/register',registerController)

export default matesRouter;
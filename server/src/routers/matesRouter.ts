
import express from 'express';
import { deleteMates, getMatesList, postMatesList } from '../controllers/mates/mates';

const matesRouter = express();

matesRouter.get('/list',getMatesList)

matesRouter.post('/add',postMatesList)
// matesRouter.post('/register',registerController)
matesRouter.delete('/delete',deleteMates)
export default matesRouter;
import express from 'express';
import { visitantLog } from '../controllers/visitant';

const visitantRouter = express();

visitantRouter.post('/',visitantLog)



export default visitantRouter;
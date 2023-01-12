import express from 'express'
import apiRouter from './router/apiRouter';
import reactRouter from './router/reactRouter';
import cors from 'cors';

const app = express();

const corsOptions = {
  origin:'http://localhost:3000',
  credentials:true
}
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
app.use(cors(corsOptions));

app.use('/',reactRouter);
app.use('/api',apiRouter)

export default app;
import express from 'express'
import apiRouter from './router/apiRouter';
import cors from 'cors';
import multer from 'multer'

const upload = multer({ dest: 'images/' })
const app = express();

const corsOptions = {
  origin:'http://localhost:3000',
  credentials:true
}
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
app.use(cors(corsOptions));

app.use('/api',apiRouter)

export default app;
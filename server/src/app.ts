import express from 'express'
import postsRouter from './router/postsRouter';
import cors from 'cors';
import multer from 'multer'
import accountRouter from './router/accountRouter';

const upload = multer({ dest: 'images/' })
const app = express();

const corsOptions = {
  origin:'http://localhost:3000',
  credentials:true
}
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
app.use(cors(corsOptions));

app.use('/wewi-gg/posts',postsRouter)
app.use('/wewi-gg/account',accountRouter)

export default app;
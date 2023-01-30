import express from 'express'
import postsRouter from './router/postsRouter';
import cors from 'cors';
import accountRouter from './router/accountRouter';
import matesRouter from './router/matesRouter';

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
app.use('/wewi-gg/mates',matesRouter)
export default app;
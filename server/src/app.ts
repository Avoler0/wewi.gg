import express from 'express'
import postsRouter from './routers/postsRouter';
import cors from 'cors';
import accountRouter from './routers/accountRouter';
import matesRouter from './routers/matesRouter';
import riotRouter from './routers/riotRouter';
import { visitantLog } from './controllers/visitant';
import { specs, swaggerUi } from '../swagger/swagger';
import YAML from 'js-yaml'
import fs from 'fs'
// import swagger123 from './swagger.yaml'

const app = express();
const corsOptions = {
  origin:process.env.FRONT_ADRESS,
  credentials:true
}
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));
app.use(cors(corsOptions));

app.use('/wewi-gg/posts',postsRouter)
app.use('/wewi-gg/account',accountRouter)
app.use('/wewi-gg/mates',matesRouter)
app.use('/wewi-gg/lol',riotRouter)
app.use('/wewi-gg/visitant',visitantLog)

const swaggerSpec:any = YAML.load(fs.readFileSync('./src/swagger/swagger.yaml', 'utf8'));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
export default app;
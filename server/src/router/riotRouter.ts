
import express from 'express';
import { getlolInfo, getlolLeague } from '../controllers/riot/lol/summoner';


const riotRouter = express();

riotRouter.get('/summoner/info',getlolInfo)
riotRouter.get('/summoner/league',getlolLeague)


export default riotRouter;
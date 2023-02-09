
import express from 'express';
import { getProfileIcon, getSpellIcon, getRuneIcon, getChampionIcon, getItemIcon } from '../controllers/riot/lol/image';
import { getMatchDetail, getMatchList } from '../controllers/riot/lol/match';
import { getlolInfo, getlolLeague } from '../controllers/riot/lol/summoner';

const riotRouter = express();

riotRouter.get('/images/profile/:iconId',getProfileIcon)
riotRouter.get('/images/champion/:championId',getChampionIcon)
riotRouter.get('/images/spell/:iconId',getSpellIcon)
riotRouter.get('/images/rune/:runeId',getRuneIcon)
riotRouter.get('/images/item/:itemId',getItemIcon)

riotRouter.get('/match/list',getMatchList)
riotRouter.get('/match/detail',getMatchDetail)

riotRouter.get('/summoner/info',getlolInfo)
riotRouter.get('/summoner/league',getlolLeague)


export default riotRouter;
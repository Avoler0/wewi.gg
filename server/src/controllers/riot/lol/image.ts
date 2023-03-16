import { riotChampionIconImage, riotChampionIdImage, riotChampionImage, riotItemIconImage, riotProfileIconImage, riotRuneIconImage, riotSpellIconImage } from "../../../api/riotApi/imageApi";



export async function getProfileIcon(req:any,res:any){
  try{
    const result = await riotProfileIconImage(req.params.iconId);
    res.status(200).send(result)
  }catch(_err:any){
    console.log(_err)
    res.status(400)
    res.status(_err.response.status).send(_err.response.statusText)
  }
}

export async function getChampionNameByIcon(req:any,res:any){
  const {championName} = req.params;
  try{
    const result = await riotChampionIconImage(championName);
    res.status(200).send(result)
  }catch(_err:any){
    console.log(_err)
    res.status(400)
    res.status(_err.response.status).send(_err.response.statusText)
  }
}
export async function getChampionIdByIcon(req:any,res:any){
  const {championId} = req.params;
  try{
    const result = await riotChampionIdImage(championId);
    res.status(200).send(result)
  }catch(_err:any){
    console.log(_err)
    res.status(400)
    res.status(_err.response.status).send(_err.response.statusText)
  }
}
export async function getItemIcon(req:any,res:any){
  const {itemId} = req.params;
  try{
    const result = await riotItemIconImage(itemId);
    res.status(200).send(result)
  }catch(_err:any){
    console.log(_err)
    res.status(400)
    res.status(_err.response.status).send(_err.response.statusText)
  }
}

export async function getSpellIcon(req:any,res:any){
  const {iconId} = req.params;
  try{
    const result:any = await riotSpellIconImage(iconId);
    res.status(200).send(result)
  }catch(_err:any){
    res.status(_err.response.status).send(_err.response.statusText)
  }
}

export async function getRuneIcon(req:any,res:any){
  const {runeId} = req.params;
  try{
    const result:any = await riotRuneIconImage(runeId);
    res.status(200).send(result)
  }catch(_err:any){
    res.status(_err.response.status).send(_err.response.statusText)
  }
}
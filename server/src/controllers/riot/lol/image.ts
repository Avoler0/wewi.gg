import { riotChampionIconImage, riotItemIconImage, riotProfileIconImage, riotRuneIconImage, riotSpellIconImage } from "../../../api/riotApi/imageApi";



export async function getProfileIcon(req:any,res:any){
  const {iconId} = req.params;
  console.log('프로필 아이콘',iconId);
  try{
    const result = await riotProfileIconImage(iconId);
    res.status(200).send(result)
  }catch(_err:any){
    res.status(_err.response.status).send(_err.response.statusText)
  }
}

export async function getChampionIcon(req:any,res:any){
  const {championId} = req.params;
  try{
    const result = await riotChampionIconImage(championId);
    res.status(200).send(result)
  }catch(_err:any){
    res.status(_err.response.status).send(_err.response.statusText)
  }
}

export async function getItemIcon(req:any,res:any){
  const {itemId} = req.params;
  console.log('아이템 아이콘',itemId);
  try{
    const result = await riotItemIconImage(itemId);
    console.log('아이템 리설트',result)
    res.status(200).send(result)
  }catch(_err:any){
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
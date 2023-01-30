import axios from 'axios';


export async function riotDragonVersion(){
  const version = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json')

  return version.data[0];
  
}
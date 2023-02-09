import axios from 'axios';


export async function riotDragonVersion(){
  const version = await axios.get('https://ddragon.leagueoflegends.com/api/versions.json')
  return version.data[0];
}

export async function riotSpellJson() {
  const version = await riotDragonVersion();
  const spellJson = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/summoner.json`);

  return spellJson.data;
}

export async function riotRuneJson() {
  const version = await riotDragonVersion();
  const runeJson = await axios.get(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/runesReforged.json`);
  return runeJson.data;
}
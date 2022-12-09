import type { NextApiRequest, NextApiResponse } from 'next'
import { riotApi } from '../../../../hooks/axiosInstance';


type Data = {
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/
  const base_url = 'https://accounts.google.com/o/oauth2/v2/auth'
  const scope = 'https%3A//www.googleapis.com/auth/drive.metadata.readonly'
  const access_tpye = 'offline'
  const include_granted_scopes = true;
  const response_type = 'code';
  const state = 'state';
  const redirect_uri = 'http://localhost:3000/api/oauth/callback'
  const client_id = '625687004788-5pv5rsjeqkel0arqfclrmco227f4ven1.apps.googleusercontent.com'
  res.writeHead(302,{Location: `${base_url}?scope=${scope}&access_type=${access_tpye}&include_granted_scopes=${include_granted_scopes}&response_type=${response_type}&state=${state}&redirect_uri=${redirect_uri}&client_id=${client_id}`})
  res.end();

  // res.status(200).json({data:'ddds'})
}

import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  console.log("쿼리",req.query);
  res.status(200).json(req.query)
  
}

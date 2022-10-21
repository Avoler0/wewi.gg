import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
// 

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // const dispatch = useDispatch();
  // console.log("바디",req);
  // store.dispatch(searchSet());
  console.log("챔피언",req.query);
  
  
}
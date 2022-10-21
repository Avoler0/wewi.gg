import { apiInstance } from "./axiosInstance";
import router from 'next/router'
type searchType = "summoner" | "champion"

export async function search(type:searchType,value:string){
  // router.push(`/api/?type=${type}/value=${value}`)
  const searchData = await apiInstance({
    method:'post',
    url:`/search/${type}/${value}`,
  }).then((_res)=>{
    return _res.data;
  }).catch((_error)=>{
    const status = _error.response.status
    if(status === 404){
      return "not find"
    }
    return _error
  })

  return searchData;
}


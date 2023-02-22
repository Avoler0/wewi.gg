import { useRouter } from "next/router";
import Summoner from "../../component/summoner/index";
import NotFindSummoner from "../../component/summoner/summoner404";


export default function SummonerPage(){
  const router = useRouter();
  const searchString = router.query.summoner;

  return (
    <>
    {searchString === undefined ?
      <NotFindSummoner /> 
      : 
      <Summoner searchString={searchString} /> 
    }
    </>
  )
}

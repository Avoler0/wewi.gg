import { useRouter } from "next/router";
import Community from "../../component/community";
import Summoner from "../../component/summoner";
import NotFindSummoner from "../../component/summoner/summoner404";


export default function CommunityPage(){
  const router = useRouter();
  const categroy = router.query.category;
  return <Community type={'list'}/>
}

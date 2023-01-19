import { useRouter } from "next/router";
import Community from "../../../component/community";
import CommuniryWrite from "../../../component/community/write/communityWrite";


export default function CommunityWritePage(){
  const router = useRouter();
  const categroy = router.query.category;
   return <Community type={'write'}/>
}

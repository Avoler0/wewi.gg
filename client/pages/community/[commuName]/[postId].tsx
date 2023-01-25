import { useRouter } from "next/router";
import Community from "../../../component/community";


export default function CommunityPostPage(){
  const router = useRouter();

   return <Community type={'post'}/>
}

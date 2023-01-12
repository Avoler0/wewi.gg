import { useRouter } from "next/router";
import Login from "../component/account/login";


export default function LoginPage(){
  const router = useRouter();

  return <Login />
}

import { useRouter } from "next/router";
import Register from "../component/account/register";



export default function RegisterPage(){
  const router = useRouter();

  return <Register />
}

import router from "next/router"


export function searchMovePath(event:any){
  router.push(`/summoner/${event.target.search.value}`)
  event.preventDefault()
}
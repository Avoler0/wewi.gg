


export function getAccount(){
  const loginState = localStorage.getItem("wewi");
  
  return 
}
export function setLogin (state:any) {
  localStorage.setItem("wewi",state);
}
export function setLogout () {
  localStorage.removeItem("wewi");
}


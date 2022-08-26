


export function getAccount(){
  return localStorage.getItem("wewi")
}
export function setLogin (state:any) {
  localStorage.setItem("wewi",state);
}
export function setLogout () {
  localStorage.removeItem("wewi");
}


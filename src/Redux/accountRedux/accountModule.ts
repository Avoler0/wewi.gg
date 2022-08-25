

export function setLogin (login:any) {
  localStorage.setItem("wewi",login.email);
}
export function setLogout () {
  localStorage.removeItem("wewi");
}
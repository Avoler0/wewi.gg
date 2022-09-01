import { accountReduxT } from './../../Types/accountTypes';

export function getAccount(){
  const local = localStorage.getItem("wewi");
  const arrData = local === null ? " " : local.split("&");
  const result = {
    login:local === null ? false : true,
    email:arrData[0],
    nickName:arrData[1],
    type:arrData[2]
  }
  return result;
}
export function setLogin (data:accountReduxT) {
  const {email , nickName , type } = data
  localStorage.setItem("wewi",
  `${email}&${nickName}&${type}`
  );
}
export function setLogout () {
  localStorage.removeItem("wewi");
}


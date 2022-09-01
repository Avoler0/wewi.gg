import { useDispatch } from "react-redux";
import styled from "styled-components";
import { accountLogout } from "../../../Redux/accountRedux/accountSlice";
import { accountReduxT } from "../../../Types/accountTypes";

interface props {
  account : accountReduxT
}

export default function AccountMenu({account}:props){
  const dispatch = useDispatch();
  function onLogout() {
    dispatch(accountLogout());
  }
  return (
    <>
      <div>{account.email}</div>
      <LogOut onClick={onLogout}>로그아웃</LogOut>
    </>
  )
}

const LogOut = styled.button`
  margin: 0;
  margin-top: 5px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: white;
  cursor: pointer;
  :hover{
    color: #af8989;
  }
`
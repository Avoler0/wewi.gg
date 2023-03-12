import { useState } from "react";
import styled, { css, keyframes } from "styled-components"
import { searchMovePath } from "../../../hooks/searchMovePath";


export default function SearchToolBar({show,setShow}:any){

  return (
    <ToolBar show={show}>
      <Content>
        <Search onSubmit={searchMovePath}>
          <input type='text' name="search" placeholder="소환사 이름 검색" autoComplete="off" />
          <button onClick={setShow}>.GG</button>
        </Search>
      </Content>
      <Cancel onClick={setShow}>
        닫기
      </Cancel>
    </ToolBar>
  )
}


const ToolBar = styled.div<{show:boolean}>`
  display: ${props => props.show ? 'block' : 'none'};
  right: 13%;
  top: 72px;
  width: 25%;
  margin: 0 auto;
  
`;

const Content = styled.div`
  /* position: absolute; */
`;

const Search = styled.form`
  
  position: relative;
  input{
    width: 100%;
    padding: 1rem 1rem;
    border: 0;
    outline: none;
    font-size: 1rem;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    transition: all 0.2s ease;
    :hover{
      background-color: #ffffffeb;
    }
  }
  input::placeholder {
  }
  button{
    position: absolute;
    padding: 0 12px 0 12px;
    right: 0;
    height: 100%;
    font-size: 28px;
    font-weight: 700;
    border: none;
    background-color: transparent;
  }
`;

const Cancel = styled.div`
  cursor: pointer;
  float: right;
  margin-right: 0.5rem;
  color: #fff;
`;
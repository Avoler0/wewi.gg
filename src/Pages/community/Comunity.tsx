import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMenuName } from "../../commons/menuUtil";
import MainOutput from "./menu/MainOutput";

import CommunityMenu from "./menu/menu";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  padding-top: 13rem ;
  width: 1044px;
  height: 1900px;
  position: relative;
  display: block;
  margin: 0 auto;

`;
function Comunity() {
  const [menu,setMenu] = useState("All");
  const [menuName , setMenuName] = useState('All');

  useEffect(()=>{
    setMenuName(getMenuName(menu));
  },[menu])

  
  return (
    <Container>
      <Wrapper id="lay">
        <CommunityMenu select={setMenu}/>
        <MainOutput menu={menu}/>
      </Wrapper>
    </Container>
  );
}

export default Comunity;
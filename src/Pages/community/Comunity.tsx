import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMenuName } from "../../commons/menuUtil";
import MainOutput from "./menu/MainOutput";

import CommunityMenu from "./menu/menu";

const Container = styled.div`
  max-width: 1903px;
  min-width: 1200px ;

`;
const Layout = styled.div`
  padding-top: 13rem ;
  width: 1044px;
  height: 1900px;
  position: relative;
  display: flex;
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
      <Layout id="lay">
        <CommunityMenu select={setMenu}/>
        <MainOutput menu={menu}/>
      </Layout>
    </Container>
  );
}

export default Comunity;
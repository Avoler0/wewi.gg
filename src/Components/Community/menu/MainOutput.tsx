import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMenuName } from "../../../const/utils";
import PostingList from "../Boards/PostingList";
import All from "../Boards/PostingList";


function MainOutput({menu}:any) {
  const [menuName,setMenuName] = useState("All");
  const post = [1,2,3,4,5,6,7,8,9,10];
  console.log(menu);
  const menuSet = menu;
  useEffect(()=>{
    setMenuName(getMenuName(menu));
  },[menu])

  return (
    <Wrap>
      <SubHeader>
        <HeaderTitle>{menuName}</HeaderTitle>
      </SubHeader>
      <Posting>
        <PostingList />
        {/* {menu === "All" ? <All /> : null}
        {menu === "Notice" ? <Notice /> : null}
        {menu === "LoLInfo" ? <LoLInfo /> : null}
        {menu === "Free" ? <Free /> : null}
        {menu === "Fun" ? <Fun /> : null}
        {menu === "Video" ? <Video /> : null}
        {menu === "Event" ? <Event /> : null}
        {menu === "FanArt" ? <FanArt /> : null} */}
      </Posting>
    </Wrap>
  );
}
const Wrap = styled.div`
  float: right;
  width: 768px;
  @media (max-width: 1024px){
	  width: 100%;
  }
`;
const SubHeader = styled.div`
  width: 100%;
  height: 128px;
  background-color: #2c3e50;
  margin-bottom: 30px;
`;

const HeaderTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 10px;
`;
const HeaderButton = styled.button`

`;
const Posting = styled.div`
  background-color: #2c3e50;
`;

export default MainOutput;
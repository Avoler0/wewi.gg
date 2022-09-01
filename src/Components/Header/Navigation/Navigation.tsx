import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { PAGE } from "../../../const/PagePath";
import * as N from "../HeaderStyle/NavigationStyle"

export default function Navigation() {
  const urlPath = window.location.pathname;
  const [searchString,setSearchString] = React.useState<string>();
  const navigater = useNavigate();
  console.log(urlPath);
  const goSearch = (event:any) => {
    event.preventDefault();
    navigater(`${PAGE.INFO}/${searchString}`);
  }
  const onSearchChange = (event:any) => {
    setSearchString(event.target.value);
    console.log(searchString);
  }
  return (
    <N.Nav>
      <N.Content>
        <div>
          <N.NavItems>
            <N.NavItem>
              <Link to="/" style={{borderBottom: urlPath === "/" ? "2px solid white" : "none" }}>홈</Link>
            </N.NavItem>
            <N.NavItem>
              <Link to="/duo" style={{borderBottom: urlPath === `/${PAGE.DUO}` ? "2px solid white" : "none" }}>듀오서치</Link>
            </N.NavItem>
            <N.NavItem>
              <Link to="/clan" style={{borderBottom: urlPath === `/${PAGE.CLAN}` ? "2px solid white" : "none" }}>클랜</Link>
            </N.NavItem>
            <N.NavItem>
              <Link to="/comunity" style={{borderBottom: urlPath === `/${PAGE.COMMUNITY}` ? "2px solid white" : "none" }}>커뮤니티</Link>
            </N.NavItem>
          </N.NavItems>
        </div>
        <div>
          <N.Colum style={{ display:"flex" }}>
            <N.SearchWrap onSubmit={goSearch}>
              <N.SearchIco>GG</N.SearchIco>
              <N.SearchInput onChange={onSearchChange} value={searchString} type="text" name="search" />
              <N.SearchButton>검색</N.SearchButton>
            </N.SearchWrap>
          </N.Colum>
        </div>
    </N.Content>
  </N.Nav>
    )
}
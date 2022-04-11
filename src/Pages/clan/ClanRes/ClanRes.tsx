import styled from "styled-components";
// import pathIcon from "../images/path-icons/discord-logo.png"
// ../images/tier-icons/tier-icons/${soloRank.tier.toLowerCase().trim()}_${soloRank.rank.toLowerCase().trim()}.png
function ClanRes() {
  const clanName = "무지";
  const clanBanner = "https://cdn.discordapp.com/attachments/904390084491624479/934422541865451580/1f_stop.gif"; 
  const clanContent:any[] = ["성인","즐겜","친목"];
  clanContent.push("랭크")
  const urlDiscord = () => {
    window.open('https://discord.com/','_blank')
  }
  const urlKakao = () => {
    window.open('https://www.kakaocorp.com/page/service/service/KakaoTalk','_blank')
  }
  return (
    <ClanBoard banner={clanBanner}>
      <BoardTop>
        <ClanName>{clanName}</ClanName>
      </BoardTop>
      <BoardBottom>
        <Category>
          {clanContent.map((content:any,index:number) => <DptLi>{content}</DptLi>)}

        </Category>
        <PathIcoBox>
          <IconBt onClick={urlDiscord}><Icon src={`../images/path-icons/discord-logo.png`}/></IconBt>
          <IconBt onClick={urlKakao}><Icon src={`../images/path-icons/kakao-logo.png`}/></IconBt>
        </PathIcoBox>
      </BoardBottom>
    </ClanBoard>
  );
}

export default ClanRes;
// https://cdn.discordapp.com/attachments/904390084491624479/934422541865451580/1f_stop.gif)
const ClanBoard = styled.div<{banner:string}>`
  background-image: url(${(props) => props.banner});
  background-size: contain;
  width : 15vw;
  height: 7vw;
  border-radius: 15px;
  background-color: #2c3e50;
`;
const BoardTop= styled.div`
  /* background-color: blue; */
  position: relative;
  padding: 5px;
  height: 79%;
  
`;
const ClanName = styled.div`
  display: inline-block;
  z-index: 999;
  opacity: 0.7;
`;
const BoardBottom = styled.div`
  /* background-color: green; */
  /* position: relative; */
  display: flex;
  justify-content: space-between;
`;
const Category = styled.ul`
  display: flex;
  padding-left: 5px;
`;
const PathIcoBox = styled.div`
  display: flex;
  position: relative;
`;
const IconBt = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  padding: 0;
  margin-right: 3px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const DptLi = styled.li`
  margin-right: 5px;
  font-weight: 600;
  /* color: #2C3A47; */
  color: white;
`;
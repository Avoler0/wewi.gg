import styled from "styled-components";
import { lineList } from "../../const/utils";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function MainLineTierList(){
  const version = useSelector((state:any) => {
    return state.lolVersion.version
  })
  return(
    <LineTierWrap>
          <LineTierContainer>
            <LineListTitle>
              <span>v{version}</span> 소환사 협곡 티어</LineListTitle>
            <LineList>
                {lineList.kor.map((lineName:string) => {
                  return (
                  <ListItem key={lineName}>
                    <LineTitle>
                      <LineImage>
                        <Image src={`/images/line-icons/Line-${lineList.trans[lineName]}-Ico.png`} alt="line" layout="fill" objectFit="cover" />
                      </LineImage>
                      <span>{lineName}</span>
                    </LineTitle>
                    <TierInfo>
                      <li>하나</li>
                      <li>두울</li>
                      <li>세엣</li>
                      <li>네엣</li>
                      <li>다섯</li>
                      <li>여섯</li>
                    </TierInfo>
                  </ListItem>)
                })}
            </LineList>
          </LineTierContainer>
        </LineTierWrap>
  )
}

const LineTierWrap = styled.article`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;
const LineTierContainer = styled.div`
  width: 1120px;
  margin: 0 auto;
  @media (min-width: 992px) and (max-width: 1120px) {
   max-width: 792px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    max-width: 568px;
  }
  @media (max-width: 767px){
	  max-width: 567px;
  }
`;
const LineListTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: normal;
  span{
    font-weight: 700;
  }
`;
const LineList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
`;
const ListItem = styled.section`
  width: 100%;
  border: 1px solid #cecdca;
`;
const LineTitle = styled.h4`
  text-align: center;
  padding: 0.5rem 0;
  color: #645757;
  background-color: #e5e7eb;
`;
const LineImage = styled.span`
  display: inline-block;
  position: relative;
  width: 15px;
  height: 15px;
`;
const TierInfo = styled.ul`
  display: grid;
  grid-column: 3;
  grid-template-columns: 1fr 1fr 1fr;
`;
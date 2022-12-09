import styled from "styled-components";
import Image from "next/image";

export default function OauthCustomBtn({type,isRef}:any){
  function handleClick(){
    
    if(type === 'naver'){
      console.log("레프",isRef.current.children[0])
      if(isRef.current.children[0]) isRef.current.children[0].click();
    }else{
      console.log("레프",isRef.current.children[0].children[1])
      isRef.current.children[0].children[1].click()
    }
    
  }
  
  function isName(){
    switch(type){
      case 'naver':
        return '네이버'
      case 'google':
        return '구글'
    }
  }
  
  return(
    <Btn onClick={handleClick} bgColor={type}>
      <ImageWrap>
        <Image className="naverIcon" src={`/images/path-icons/${type}_Icon.png`} alt='naverIdLogin' layout="fill" objectFit="contain" />
      </ImageWrap>
      <Text>{isName()}로 시작하기</Text>
    </Btn>
  )
}

const Btn = styled.button<{bgColor:string}>`
  display: flex;
  width: 300px;
  height: 45px;
  align-items: center; 
  font-size: 17px;
  font-weight: 900;
  ${props => props.bgColor === 'google' &&{
    'background-color': '#ffffff',
    'color':'balck'
  }}
  ${props => props.bgColor === 'naver' &&{
    'background-color': '#03C75A',
    'color':'white'
  }}
  border: none;
  border-radius: 3px;
  margin-bottom: 0.5rem;
`;
const ImageWrap = styled.div`
  position: relative;
  flex-grow: 1.5;
  width: 40px;
  height: 40px;
  .naverIcon{
    text-align: left;
  }
  
`;
const Text = styled.div`
  flex-grow: 10;
  padding-left: 2rem;
  text-align: left;
`;
import type { NextPage } from 'next'
import styled from 'styled-components';
import MainLineTierList from '../component/main/mainLineTierList';
import MainSearch from '../component/main/mainSearch';

const Home: NextPage = () => {

  return (
      <Main>
        <MainSearch />
        <MainLineTierList/>
        <style jsx global>{` // 메인에서만 Body에 이미지 씌워줌
        body{
          /* background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt15d3facea57e5b7e/634613111338101198fce129/K_Sante-Base-Splash.jpg); */
          background-image: url('/images/public-icons/background.jpg');
          background-repeat: repeat;
        }
      `}</style>
      </Main>
  );
}

export default Home


const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
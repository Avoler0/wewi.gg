import type { NextPage } from 'next'
import styled from 'styled-components';
import MainLineTierList from '../component/main/mainLineTierList';
import MainSearch from '../component/main/mainSearch';

const Home: NextPage = () => {

  return (
      <Main>
        <MainSearch />
        <MainLineTierList/>
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
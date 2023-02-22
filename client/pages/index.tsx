import type { NextPage } from 'next'
import MainLineTierList from '../component/main/mainLineTierList';
import MainSearch from '../component/main/mainSearch';

const Home: NextPage = () => {

  return (
      <>
        <MainSearch />
        <MainLineTierList />
      </>
  );
}

export default Home

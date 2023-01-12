import axios from 'axios';
import type { NextPage } from 'next'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLineTierList from '../component/main/mainLineTierList';
import MainSearch from '../component/main/mainSearch';
import { riot } from '../hooks/riotApiHook';
import { setLoLVersion } from '../redux/riot/version';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
  (async function(){
    await riot.version().then((version)=>{
      dispatch(setLoLVersion({version}))
    })
  })()
  },[])
  return (
      <>
        <MainSearch />
        <MainLineTierList />
      </>
  );
}

export default Home

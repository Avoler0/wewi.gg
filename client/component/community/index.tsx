import { useRouter } from "next/router";
import styled from "styled-components";
import CommunityMain from "./main/communityMain";
import CommunityPost from "./main/communityPost";
import CommunityMenu from "./menu/communityMenu";
import CommuniryWrite from "./write/communityWrite";

type CommunityParams = {
  type:string
}

export default function Community({type}:CommunityParams){
  const router = useRouter();
  return (
    <Wrap>
      <Banner className="banner">
        <BannerBackground />
        <BannerContent>
          <Wewigg>
            <h1>Talk</h1>
          </Wewigg>
        </BannerContent>
      </Banner>
      <Content>
        <CommunityMenu />
        {type === 'post' && <CommunityPost />}
        {type === 'list' && <CommunityMain />}
        {type === 'write' && <CommuniryWrite />}
      </Content>
      <style jsx global>{` // 메인에서만 Body에 이미지 씌워줌
        body{
          /* background-image: url(https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt15d3facea57e5b7e/634613111338101198fce129/K_Sante-Base-Splash.jpg); */
          background-image: url('/images/public-icons/background.jpg')
          background-repeat: repeat;
        }
      `}</style>
    </Wrap>
  )
}


const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;
const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;
const BannerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltfe6820bc73fa8d1b/60ee0febeebf8245e1b490fb/noxus-bastion.jpg);
  background-position: 50% 50%;
  background-size: 100%;
`;
const BannerContent = styled.div`
  position: relative;
  width: 1044px;
  height: 100%;
  margin: 0 auto;
`;
const Wewigg = styled.div`
  display: inline-block;
  color: white;
  font-size: 32px;
  padding-top: 25px;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 1044px;
  height: 100%;
  margin: 0 auto;
  margin-top: -40px;
  z-index: 1000;
`;
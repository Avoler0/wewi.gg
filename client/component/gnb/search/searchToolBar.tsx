import styled from "styled-components"


export default function SearchToolBar({show}:any){
  return (
    <ToolBar>
      <Content>
        <Search>
          <input type='text' placeholder="소환사 이름 검색"/>
          <button>.GG</button>
        </Search>
      </Content>
      <Cancel onClick={show}>
        닫기
      </Cancel>
    </ToolBar>
  )
}


const ToolBar = styled.div`
  right: 13%;
  top: 72px;
  width: 25%;
  margin: 0 auto;
`;

const Content = styled.div`
  /* position: absolute; */
`;

const Search = styled.div`
  position: relative;
  input{
    width: 100%;
    padding: 1rem 1rem;
    border: 0;
    outline: none;
    font-size: 1rem;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
  }
  input::placeholder {
  }

  button{
    position: absolute;
    padding: 0 12px 0 12px;
    right: 0;
    height: 100%;
    font-size: 28px;
    font-weight: 700;
    border: none;
    background-color: transparent;
  }
`;

const Cancel = styled.div`
  cursor: pointer;
  float: right;
  margin-right: 0.5rem;
  color: #fff;
`;
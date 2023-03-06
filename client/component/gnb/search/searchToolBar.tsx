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
  position: fixed;
  right: 0;
  left: 0;
  top: 15%;
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
    color: #fff;
    padding: 1rem 1rem;
    border: 0;
    outline: none;
    font-size: 1rem;
    background-color: rgb(58, 71, 92);
    border-radius: 5px;
  }
  input::placeholder {
    color: #ffffffa9;
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
    color: #fff;
  }
`;

const Cancel = styled.div`
  float: right;
  color: #fff;
  margin-right: 0.5rem;
`;
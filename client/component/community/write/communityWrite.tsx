import styled from "styled-components"
import { CommunityQueryName } from "../../../const/utils";


export default function CommuniryWrite(){
  return (
    <Write>
      <Container>
        <Title>글쓰기</Title>
        <CategorySelect>
          <select>
            <option>카테고리1</option>
            <option>카테고리2</option>
            <option>카테고리3</option>
          </select>
        </CategorySelect>
        <WriteInput>
          <label>
            <span>제목</span>
            <input name="title" placeholder="제목" autoComplete="off" title="제목입력" />
          </label>
        </WriteInput>
        <WriteContent>
          <Content>
            <Edit contentEditable="true">
              <div><br/></div>
            </Edit>
          </Content>
        </WriteContent>
        
      </Container>
    </Write>
  )
}


const Write = styled.form`
  float: right;
  width: 728px;
  height: 700px;
  border: 1px solid #cecdca;
  background-color: white;
`;

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const CategorySelect = styled.div`
  margin-top: 24px;
  select{
    position: relative;
    border: 1px solid #dddfe4;
    border-radius: 4px;
    padding: 10px 38px 9px 15px;
    line-height: 19px;
    font-size: 16px;
    color: #1e2022;
    appearance: none;
    background: url(/images/public-icons/arrow-down.png);
    background-size: 17px;
    background-position: top 12px right 8px;
    background-repeat: no-repeat;
  }
`;

const WriteInput = styled.div`
  margin-top: 8px;
  label{
    display: block;
    position: relative;
    span{
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      height: 1px;
      visibility: hidden;
    }
    input{
      display: block;
      width: 100%;
      background-color: #fff;
      border: 1px solid #dddfe4;
      padding: 10px 16px 9px;
      line-height: 19px;
      font-size: 16px;
      color: #1e2022;
      box-sizing: border-box;
    }
  }
`;
const WriteContent = styled.div`
  font-size: 16px;
`;
const Content = styled.div`
  width: 100%;
  min-height: 500px;
  border: 1px solid #cecdca;
  margin-top: 16px;
`;

const Edit = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 25px 0;
  font-size: 14px;
  :focus{
    outline: 0px solid transparent;
  }
`;
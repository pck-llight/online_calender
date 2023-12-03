import styled from "styled-components";
import {MdDelete} from "react-icons/md";
import React from "react";

//메모 카드
const MemoCard = styled.div`
  width: 330px;
  height: 131px;
  border-radius: 16px;
  background-color: #F3F5F6;
  border: none;
  padding: 10px;
  margin: 0;
  //margin-left: 40px;
  //margin-bottom: 24px;
`
//메모 삭제 버튼
const MemoDelButton = styled.button`
  position: relative;
  background-color: #ccd0da;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  transform: translateX(300px) translateY(-28px);
  display: flex;
  align-items: center;
`
//메모 제목
const MemoTitle = styled.h3`
  color: #3654F4;
  margin: 0;
`
//메모 내용
const MemoContent = styled.h4`
  margin: 0;
`
//메모 날짜
const Memoday = styled.p`
  color: #BBC0C3;
  font-size: 14px;
  margin: 0;
`


function Memo(){

  //메뉴 html
  return(
    <>
        <MemoCard>
          <MemoTitle>제목</MemoTitle><br/>
          <MemoContent>내용</MemoContent><br/>
          <Memoday>2023.12.12</Memoday><br/>
          <MemoDelButton><MdDelete size={24}/></MemoDelButton>
        </MemoCard>
    </>
  )
}

export default Memo;
